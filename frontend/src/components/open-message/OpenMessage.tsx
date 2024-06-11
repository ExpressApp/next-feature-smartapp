import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { OPEN_CHAT_MESSAGE } from '../../constants'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { openChatMessage } from '../../redux/actions/client'
import { useState } from 'react'

function OpenMessage() {
  const dispatch = useDispatch()
  const [groupChatId, setGroupChatId] = useState('')
  const [syncId, setSyncId] = useState('')

  const handleSubmit = () => dispatch(openChatMessage({ groupChatId, syncId }))

  const handleGroupChatIdChange = e => setGroupChatId(e.target.value)

  const handleSyncIdChange = e => setSyncId(e.target.value)

  return (
    <div className="feature-page">
      <FeaturePageHeader name={OPEN_CHAT_MESSAGE.name} />
      <span className="feature-page__title">Group chat ID</span>
      <div className="form-buttons">
        <input className="input" onChange={handleGroupChatIdChange} value={groupChatId} type="text" id="group-chat-id-text" />
      </div>
      <span className="feature-page__title">Sync ID</span>
      <div className="form-buttons">
        <input className="input" onChange={handleSyncIdChange} value={syncId} type="text" id="sync-id-text" />
      </div>
      <div className="form-buttons">
        <button
          className={classNames({ 'btn--submit': true })}
          type="submit"
          onClick={handleSubmit}
          id="submit"
        >
          Показать сообщение
        </button>
      </div>
    </div>
  )
}

export default OpenMessage
