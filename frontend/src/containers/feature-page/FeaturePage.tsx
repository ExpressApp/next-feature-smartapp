import {
  BotFeature,
  BotFeatureMethod,
  ExpressFeature,
  ExpressFeatureMethod,
  Input,
  InputId,
  InputLabel,
  InputType,
} from '../../types'
import './FeaturePage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { GUARANTEED_DELIVERY_FEATURE, INPUT_TYPE } from '../../constants'
import { useFormik } from 'formik'
import { FormValues, getFormInitialValues } from '../../helpers'
import { getFeatureBotResponse } from '../../redux/selectors/bot'
import { resetFeatures, sendFeatureBotEvent, sendFeatureBotEventSuccess } from '../../redux/actions/bot'
import { useEffect, useMemo, useState } from 'react'
import { ReactComponent as PlusIcon } from '../../assets/plus.svg'
import { ReactComponent as RemoveIcon } from '../../assets/clear-input.svg'
import { ReactComponent as FileIcon } from '../../assets/file.svg'
import JsonViewer from '../../components/ui/json-editor/JsonViewer'
import classnames from 'classnames'
import {
  removeFileSuccess,
  resetAttachments,
  resetExpressResponse,
  sendExpressEvent,
  sendExpressEventSuccess,
  sendMessageExpressEvent,
  uploadFile,
  uploadFiles,
} from '../../redux/actions/client'
import { getAttachments, getExpressResponse } from '../../redux/selectors/client'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import FeaturePageHeader from '../../components/ui/feature-page-header/FeaturePageHeader'
import {
  getChats,
  openClientSettings,
  openContactCard,
  openGroupChat,
  sendBotCommand,
} from '@expressms/smartapp-sdk'

export default function FeaturePage({ name, method, uiElements = [] }: BotFeature | ExpressFeature) {
  const dispatch = useDispatch()
  const botResponse = useSelector(getFeatureBotResponse)
  const expressResponse = useSelector(getExpressResponse)
  const attachments = useSelector(getAttachments)

  const [inputs, setInputs] = useState<Input[]>([])
  const [inputError, setInputError] = useState('')
  const [isJSONViewer, setIsJSONViewer] = useState(false)

  const isAllowNewInputs = method === BotFeatureMethod.SEARCH_USERS
  const isFilesMethod = [BotFeatureMethod.ECHO_FILE, BotFeatureMethod.ECHO_FILES].includes(method as BotFeatureMethod)
  const isUsersMethod = BotFeatureMethod.SEARCH_USERS === method
  const isExpressMethod = Object.values(ExpressFeatureMethod).includes(method as ExpressFeatureMethod)

  const handleClickPlus = () => {
    const last = inputs[inputs.length - 1]
    const { id } = last
    const next: Input = {
      ...last,
      id: id.includes(InputId.HUIDS) ? `${id}${inputs.length}` : id,
    }

    setInputs(inputs => [...inputs, next])
  }

  const handleFilesSubmit = () => {
    if (attachments) {
      const botFeatureMethod = method as BotFeatureMethod

      dispatch(
        sendFeatureBotEvent({
          method: botFeatureMethod,
          params: {},
          files: attachments,
        }),
      )
    }
  }

  const handleOpenGroupChat = async (formValues: FormValues) => {
    if (!filterFormValues(formValues).length) return

    await openGroupChat({ groupChatId: formValues?.groupChatId })
  }

  const handleGetChats = async (formValues: FormValues) => {
    const chats = await getChats({ filter: formValues?.filter })
    dispatch(sendExpressEventSuccess(chats))
  }

  const handleSendBotCommand = async (formValues: FormValues) => {
    const result = await sendBotCommand(
      {
        userHuid: formValues?.userHuid,
        data: formValues?.data ? {
          command: formValues?.data,
        } : null,
        body: formValues?.body,
      },
    )
    dispatch(sendExpressEventSuccess(result))
  }

  const handleOpenContactCard = async (formValues: FormValues) => {
    const response = await openContactCard({ userHuid: formValues?.userHuid })
    if (response) dispatch(sendExpressEventSuccess(response))
  }

  const handleSendMessage = (formValues: FormValues) => {
    if (!filterFormValues(formValues).length) return

    const { userHuid, groupChatId, message } = formValues
    dispatch(
      sendMessageExpressEvent({
        userHuid,
        groupChatId,
        messageBody: message,
        messageMeta: {},
      }),
    )
  }

  const handleEchoWithGuaranteedDelivery = (formValues: FormValues) => {
    if (!filterFormValues(formValues).length) return

    const event = {
      method: BotFeatureMethod.ECHO,
      params: formValues,
      guaranteed_delivery_required: true
    }

    dispatch(sendFeatureBotEvent(event))
  }

  const handleDefault = (formValues: FormValues) => {
    if (!filterFormValues(formValues).length) return

    const event = {
      method: method as ExpressFeatureMethod,
      params: formValues,
    }

    dispatch(sendExpressEvent(event))
  }

  const handleFormSubmitForExpressMethod = async (formValues: FormValues) => {
    switch (method) {
      case ExpressFeatureMethod.SEND_MESSAGE:
        handleSendMessage(formValues)
        break
      case ExpressFeatureMethod.OPEN_CLIENT_SETTINGS:
        openClientSettings()
        break
      case ExpressFeatureMethod.GET_CHATS:
        await handleGetChats(formValues)
        break
      case ExpressFeatureMethod.OPEN_GROUP_CHAT: {
        await handleOpenGroupChat(formValues)
        break
      }
      case ExpressFeatureMethod.SEND_BOT_COMMAND: {
        await handleSendBotCommand(formValues)
        break
      }
      case ExpressFeatureMethod.OPEN_CONTACT_CARD: {
        await handleOpenContactCard(formValues)
        break
      }
      default:
        handleDefault(formValues)
    }
  }

  const filterFormValues = useMemo(() => (
    formValues: FormValues) => Object.values(formValues).filter(value => value),
    [],
  )

  const handleFormSubmitForBotMethod = (formValues: FormValues) => {
    const values = filterFormValues(formValues)
    if (!values.length) return

    if (name === GUARANTEED_DELIVERY_FEATURE.name) {
      handleEchoWithGuaranteedDelivery(formValues)
      return
    }

    const event = {
      method: method as BotFeatureMethod,
      params: isUsersMethod ? { huids: values } : formValues,
    }

    dispatch(sendFeatureBotEvent(event))
  }

  const handleFormSubmit = (formValues: FormValues) => {
    if (isExpressMethod) {
      handleFormSubmitForExpressMethod(formValues)
    } else {
      handleFormSubmitForBotMethod(formValues)
    }
  }

  const handleUploadFilesClick = () => {
    if (method === BotFeatureMethod.ECHO_FILE) {
      dispatch(uploadFile())
    } else if (method === BotFeatureMethod.ECHO_FILES) {
      dispatch(uploadFiles())
    }
  }

  const handleRemoveFile = (fileId: number) => {
    dispatch(removeFileSuccess(fileId))

    if (attachments?.length === 1) dispatch(sendFeatureBotEventSuccess(null))
  }

  const toggleIsJSONViewer = () => setIsJSONViewer(!isJSONViewer)

  const formik = useFormik({
    initialValues: getFormInitialValues(inputs),
    onSubmit: handleFormSubmit,
  })

  const getIsSubmitButtonDisabled = () => {
    if (method === ExpressFeatureMethod.GET_CHATS) return false
    return isFilesMethod ? !attachments?.length : !Object.values(formik.values).filter(value => value).length
  }

  useEffect(() => {
    const inputs: Input[] = uiElements.map((input, index) => ({
      ...input,
      id: input.id.includes(InputId.HUIDS) ? `${input.id}${index}` : input.id,
    }))

    setInputs(inputs)
    return () => {
      dispatch(resetFeatures())
      dispatch(resetAttachments())
      dispatch(resetExpressResponse())
    }
  }, [uiElements, dispatch])

  const renderFilesMethodComponent = () => (
    <div className='feature-page__form'>
      <span className='feature-page__title'>
        {method === BotFeatureMethod.ECHO_FILE ? InputLabel.FILE : InputLabel.FILES}
      </span>
      <button className='btn--attach' onClick={handleUploadFilesClick}>
        {method === BotFeatureMethod.ECHO_FILE ? 'Attach file' : 'Attach files'}
      </button>
      {!!attachments?.length && (
        <div className='attachments'>
          {attachments.map((attachment, idx) => (
            <span className='attachments__item' key={attachment.fileId}>
              <span>{attachment.fileName}</span>
              <RemoveIcon
                width={20}
                height={20}
                className='btn--remove-attachment'
                onClick={() => handleRemoveFile(attachment.fileId)}
                id={`remove-file-${idx + 1}`}
              />
            </span>
          ))}
        </div>
      )}
      <div className='form-buttons'>
        <button
          className={classnames({
            'btn--submit': true,
            'btn--submit-disabled': getIsSubmitButtonDisabled(),
          })}
          onClick={handleFilesSubmit}
          disabled={getIsSubmitButtonDisabled()}
          type='button'
          id='files-submit'
        >
          Submit
        </button>
      </div>
    </div>
  )

  const renderTextMethodComponent = () => {
    const getIsInputError = ({ id, type }) => {
      const isUuid = (uuid: string) => /[0-9a-fA-F-]{36}/.test(uuid)

      const isPhone = (phone: string) =>
        /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/.test(phone)

      const isNotEmpty = formik.values[id]

      if ((isUsersMethod || type === InputType.UUID) && isNotEmpty) {
        return !isUuid(formik.values[id])
      } else if (id === InputId.PHONE) {
        return !isPhone(formik.values[id])
      }
    }

    return (
      !!inputs?.length && (
        <form className='feature-page__form' onSubmit={formik.handleSubmit}>
          {inputs.map(({ id, type, label }, index) => {
            const inputType = INPUT_TYPE[type]

            const isShowLabel = isUsersMethod ? index === 0 : true

            return (
              <div key={id}>
                {isShowLabel && <span className='feature-page__title'>{label}</span>}
                <input
                  className={classnames({
                    input: true,
                    'input--error': getIsInputError({ id, type }),
                  })}
                  onChange={formik.handleChange}
                  value={formik.values[id] || ''}
                  type={inputType}
                  multiple={id === InputId.FILES}
                  pattern={inputType === 'number' ? '[0-9]*' : null}
                  id={id}
                  min={0}
                />
                {inputType === INPUT_TYPE.INPUT_TEXT && formik.values[id] && (
                  <RemoveIcon
                    className='btn--clear-input'
                    onClick={() => {
                      formik.setFieldValue(id, '')
                      inputError && setInputError('')
                    }}
                    height={20}
                    width={20}
                    id={`${id}.field-clear`}
                  />
                )}
              </div>
            )
          })}
          <div className='form-buttons'>
            <button
              className={classnames({
                'btn--submit': true,
                'btn--submit-disabled': getIsSubmitButtonDisabled(),
              })}
              disabled={getIsSubmitButtonDisabled()}
              type='submit'
              id='submit'
            >
              Submit
            </button>
            {isAllowNewInputs && (
              <PlusIcon
                title='Add new input'
                className='btn--plus'
                onClick={handleClickPlus}
                height={24}
                width={24}
              />
            )}
          </div>
        </form>
      )
    )
  }

  const renderBotResponse = () => {
    const response = botResponse?.payload?.result as any

    return (
      <>
        <div className='response-markdown'>
          <ReactMarkdown>
            {method === BotFeatureMethod.ECHO ?
              ('text: ' + response?.replaceAll?.('\n', '\n\r')) ||
              (response?.replaceAll?.('\n', '\n\r')) + '\n\r' +
              (response?.textLength &&
                'text length: ' + response?.textLength) :
              (response?.replaceAll?.('\n', '\n\r'))
            }
          </ReactMarkdown>
        </div>
        {method === BotFeatureMethod.ECHO_FILES && (
          <div className='response-files'>
            Files:
            {botResponse?.files?.map(() => (
              <FileIcon className='response-files__file' height={20} width={20} />
            ))}
          </div>
        )}
        {botResponse && (
          <JsonViewer
            isJSONViewer={isJSONViewer}
            botResponse={botResponse}
            toggleIsJSONViewer={toggleIsJSONViewer}
          />
        )}
      </>
    )
  }

  const renderExpressResponse = () => {
    return expressResponse && (
      <JsonViewer
        botResponse={expressResponse?.payload}
        id='response'
      />
    )
  }

  return (
    <>
      <div className="feature-page">
        <FeaturePageHeader name={name} />
        {isFilesMethod ? renderFilesMethodComponent() : renderTextMethodComponent()}
      </div>
      {botResponse && renderBotResponse()}
      {renderExpressResponse()}
    </>
  )
}
