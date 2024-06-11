import JsonViewerEditor from '../json-editor/JsonViewer'
import { BotMethodResponse } from '../../../types'

export default function JsonViewer(
  {
    isJSONViewer,
    toggleIsJSONViewer,
    botResponse,
  }: {
    isJSONViewer: boolean,
    toggleIsJSONViewer: () => void,
    botResponse: BotMethodResponse,
  },
) {
  return (
    <div>
      <div className='response-markdown-form'>
        <input
          checked={isJSONViewer}
          className='form-toggler__input'
          id='form-toggler'
          type='checkbox'
          onChange={toggleIsJSONViewer}
        />
        <span
          className='form-toggler'
          onClick={toggleIsJSONViewer}
        >
          Show JSON Viewer
        </span>
      </div>
      {isJSONViewer && (
        <div className='response-json'>
          <JsonViewerEditor height={24} json={botResponse} />
        </div>
      )}
    </div>
  )
}
