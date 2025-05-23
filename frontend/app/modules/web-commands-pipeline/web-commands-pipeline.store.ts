import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { STATUS } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable } from 'mobx'
import { WebCommandsPipeline } from '@expressms/smartapp-sdk/build/main/types/proxy'

export class WebCommandsPipelineStore {
  KEY_LOGIN: string = '__nfs_l_value__'
  KEY_PASS: string = '__nfs_p_value__'
  rootStore: RootStore
  login: string
  password: string

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.login = this.getLogin()
    this.password = this.getPassword()
  }

  private getLogin(): string {
    return localStorage.getItem(this.KEY_LOGIN) || ''
  }

  private getPassword(): string {
    return localStorage.getItem(this.KEY_PASS) || ''
  }

  private getPipeline(): WebCommandsPipeline {
    const smartappUrl = location.href.match(/^[^#]+/)?.[0]

    return [
      {
        commands: [
          {
            type: 'set_input_value',
            xpath: 'input#user',
            value: this.login,
          },
          {
            type: 'set_input_value',
            xpath: 'input#password',
            value: this.password,
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
                onError: [],
              },
            ],
            onError: [],
          },
        ],
        onError: [],
      },
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
        onError: [],
      },
    ]
  }

  getPipelineText(): string {
    return JSON.stringify(this.getPipeline(), null, 2);
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

  setLogin(value: string) {
    this.login = value
    localStorage.setItem(this.KEY_LOGIN, value)
  }

  setPassword(value: string) {
    this.password = value
    localStorage.setItem(this.KEY_PASS, value)
  }
}
