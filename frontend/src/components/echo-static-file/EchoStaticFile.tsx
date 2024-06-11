import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { ECHO_STATIC_FILE_FEATURE } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { getFeatureBotResponse, getStaticFile } from '../../redux/selectors/bot'
import './EchoStaticFile.scss'
import classnames from 'classnames'
import { getAttachments } from '../../redux/selectors/client'
import { uploadFile } from '../../redux/actions/client'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import JsonViewer from '../ui/json-viewer/JsonViewer'
import { useState } from 'react'
import { echoStaticFile } from '../../redux/actions/bot'

export default function EchoStaticFile() {
  const dispatch = useDispatch()
  const staticFile = useSelector(getStaticFile) as any
  const attachments = useSelector(getAttachments)
  const botResponse = useSelector(getFeatureBotResponse)
  const [isJSONViewer, setIsJSONViewer] = useState(false)

  const handleFilesSubmit = async () => {
    if (attachments?.length) {
      dispatch(echoStaticFile(attachments[0]))
    }
  }

  return (
    <>
      <div className='feature-page'>
        <FeaturePageHeader name={ECHO_STATIC_FILE_FEATURE.name} />
        <div className='feature-page__echo-static-file'>
          <div className='feature-page__form'>
            <button
              className='btn--attach'
              onClick={() => dispatch(uploadFile())}
            >
              Attach files
            </button>
            <p>{attachments?.[0]?.fileName}</p>
            <div className='form-buttons'>
              <button
                className={classnames({
                  'btn--submit': true,
                  'btn--submit-disabled': !attachments?.length,
                })}
                onClick={handleFilesSubmit}
                disabled={!attachments?.length}
                type='button'
                id='submit'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <>
        <div className='response-markdown'>
          <ReactMarkdown>
            {botResponse?.payload?.result?.replaceAll?.('\n', '\n\r')}
          </ReactMarkdown>
        </div>
        {staticFile && (
          <JsonViewer
            isJSONViewer={isJSONViewer}
            botResponse={staticFile}
            toggleIsJSONViewer={() => setIsJSONViewer(!isJSONViewer)}
          />
        )}
      </>
      <img src={staticFile?.payload?.result} alt='' />
    </>
  )
}
