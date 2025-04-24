import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable } from 'mobx'
import { WebCommandsPipeline } from '@expressms/smartapp-sdk/build/main/types/proxy'

export class WebCommandsPipelineStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
  }

  getDefaultPipeline(): WebCommandsPipeline {
    const smartappUrl = location.href.match(/^[^#]+/)?.[0]

    return [
      {
        commands: [
          {
            type: 'search_element',
            xpath: 'nav#user-menu',
          },
        ],
        interval: 100,
        retryCount: 50,
        onSuccess: [],
        onError: {
          command: {
            type: 'open_url',
            value: `${smartappUrl}&redirect_reason=general_error`,
          },
        },
      },
      {
        commands: [
          {
            type: 'set_input_value',
            xpath: 'input#user',
            value: '<<LOGIN>>',
          },
          {
            type: 'set_input_value',
            xpath: 'input#password',
            value: '<<PASSWORD>>',
          },
          {
            type: 'click_element',
            xpath: 'button[type=submit]',
          },
        ],
        interval: 100,
        retryCount: 40,
        onSuccess: [
          {
            commands: [
              {
                type: 'search_element',
                xpath: 'nav#user-menu',
              },
            ],
            interval: 100,
            retryCount: 50,
            onSuccess: [],
            onError: {
              command: {
                type: 'open_url',
                value: `${smartappUrl}&redirect_reason=general_error`,
              },
            },
          },
          {
            commands: [
              {
                type: 'search_element',
                xpath: '.input-field__helper-text-message--error',
              },
            ],
            interval: 100,
            retryCount: 40,
            onSuccess: [
              {
                commands: [
                  {
                    type: 'open_url',
                    value: `${smartappUrl}&redirect_reason=wrong_credentials`,
                  },
                ],
                interval: 1,
                retryCount: 1,
                onSuccess: [],
                onError: null,
              },
            ],
            onError: null,
          },
        ],
        onError: null,
      },
    ]
  }

  async runWebCommandsPipeline(url: string, pipeline: WebCommandsPipeline) {
    try {
      const domain = url.match(/https?:\/\/([^/]+)/)?.[1]

      if (!domain) {
        this.rootStore.toastStore.showToast(`Не найден домен в URL "${url}"`)
        return
      }

      if (this.rootStore.appStore.platform !== 'web') {
        const response = await SDK.setAllowedNavigationDomains([domain])

        if (response.payload.status === STATUS.ERROR) {
          this.rootStore.toastStore.showToast(`Ошибка при установке разрешенных доменов ${response.payload.errorCode}`)
          return
        }
      }

      const response = await SDK.runWebCommandsPipeline(pipeline)

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка при запуске pipeline ${response.payload.errorCode}`)
        return
      }

      location.href = url
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка при запуске pipeline ${e?.message}`)
    }
  }
}
