import 'material-icons/iconfont/material-icons.css'
import './ConnectionIcon.scss'

export function ConnectionIcon({ connectionStatus }) {
  switch (connectionStatus) {
    case null:
      return (
        <div className='connection-status'>
          <span className="material-icons">question_mark</span>
          Статус подключения не определен
        </div>
      )
    case 'connected':
      return (
        <div className='connection-status connection-status--connected'>
          <span className="material-icons">wifi</span>
          Связь с сервером есть
        </div>
      )
    case 'disconnected':
      return (
        <div className='connection-status connection-status--disconnected'>
          <span className="material-icons">wifi_off</span>
          Нет связи с сервером
        </div>
      )
    default:
      return (
        <div className='connection-status'>
          <span className="material-icons">question_mark</span>
          Что то пошло не так
        </div>
      )
  }
}
