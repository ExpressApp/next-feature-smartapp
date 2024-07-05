import React, { FC } from 'react'
import styled from 'styled-components'

const Unknown = styled.div`
  display: block;
  color: #999;
  margin-top: 20px;
  & > span {
    position: relative;
    font-size: 16px;
    margin-right: 5px;
    bottom: -2px;
  }
`
const Connected = styled(Unknown)`
  color: #009700;
`
const Disconnected = styled(Unknown)`
  color: #ab0000;
`

const ConnectionStatusIcon: FC<{ connectionStatus: string | null }> = ({ connectionStatus }) => {
  switch (connectionStatus) {
    case null:
      return (
        <Unknown>
          <span className="material-icons">question_mark</span>
          Статус подключения не определен
        </Unknown>
      )
    case 'connected':
      return (
        <Connected>
          <span className="material-icons">wifi</span>
          Связь с сервером есть
        </Connected>
      )
    case 'disconnected':
      return (
        <Disconnected>
          <span className="material-icons">wifi_off</span>
          Нет связи с сервером
        </Disconnected>
      )
    default:
      return (
        <Unknown>
          <span className="material-icons">question_mark</span>
          Что то пошло не так
        </Unknown>
      )
  }
}

export default ConnectionStatusIcon
