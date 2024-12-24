import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import 'material-icons/iconfont/material-icons.css'

const StyledLink = styled(Link).attrs({ className: 'feature-smartapp__menu-item' })`
  padding-left: 20px;
  font-size: 16px;
  line-height: 36px;
  text-decoration: none;
  color: var(--font-color);
  cursor: pointer;

  & .material-icons {
    position: relative;
    bottom: -3px;
    font-size: 18px;
    padding-right: 8px;
  }

  &:first-child {
    padding-top: 20px;
  }

  &:hover {
    color: var(--blue);
  }

  &:active {
    color: var(--light-blue);
  }
`

const Title = styled.div`
  padding: 20px 0 10px 20px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 0.8;
`

const ClientFeatures: FC = () => {
  return (
    <>
      <Title>Клиентские методы</Title>
      <StyledLink to="add-contact">
        <span className="material-icons">perm_contact_calendar</span>
        Добавление контакта в локальную книгу
      </StyledLink>
      <StyledLink to="get-contact">
        <span className="material-icons">perm_contact_calendar</span>
        Получение контакта из локальной книги
      </StyledLink>
      <StyledLink to="open-contact-card">
        <span className="material-icons">perm_contact_calendar</span>
        Открытие карточки контакта
      </StyledLink>
      <StyledLink to="create-personal-chat">
        <span className="material-icons">chat_bubble_outline</span>
        Создание персонального чата
      </StyledLink>
      <StyledLink to="open-group-chat">
        <span className="material-icons">mark_chat_unread</span>
        Открытие чата
      </StyledLink>
      <StyledLink to="open-smartapp">
        <span className="material-icons">open_in_browser</span>
        Открытие SmartApp
      </StyledLink>
      <StyledLink to="send-message">
        <span className="material-icons">send</span>
        Отправка сообщения в чат
      </StyledLink>
      <StyledLink to="send-bot-command">
        <span className="material-icons">send</span>
        Отправка команды боту
      </StyledLink>
      <StyledLink to="open-settings">
        <span className="material-icons">settings</span>
        Открытие экрана настроек
      </StyledLink>
      <StyledLink to="get-chats">
        <span className="material-icons">chat_bubble_outline</span>
        Поиск чатов
      </StyledLink>
      <StyledLink to="search-phonebook">
        <span className="material-icons">contacts</span>
        Поиск контактов
      </StyledLink>
      <StyledLink to="scan-qr">
        <span className="material-icons">qr_code</span>
        Сканирование QR
      </StyledLink>
      <StyledLink to="open-web-page">
        <span className="material-icons">open_in_new</span>
        Открытие ссылок
      </StyledLink>
      <StyledLink to="location">
        <span className="material-icons">my_location</span>
        Запрос местоположения
      </StyledLink>
      <StyledLink to="request-self-profile">
        <span className="material-icons">face</span>
        Получение своего профиля
      </StyledLink>
      <StyledLink to="close-smartapp">
        <span className="material-icons">close</span>
        Закрыть SmartApp
      </StyledLink>
      <StyledLink to="file-proxy">
        <span className="material-icons">drive_file_move</span>
        Файловый прокси
      </StyledLink>
      <StyledLink to="connection-status">
        <span className="material-icons">wifi_off</span>
        Статус подключения к серверу
      </StyledLink>
      <StyledLink to="create-deeplink">
        <span className="material-icons">link</span>
        Создание диплинка
      </StyledLink>
      <StyledLink to="ios-swipe">
        <span className="material-icons">swipe</span>
        Свайп на iOS
      </StyledLink>
      <StyledLink to="open-chat-message">
        <span className="material-icons">message</span>
        Открытие сообщения в чате
      </StyledLink>
      <StyledLink to="client-storage">
        <span className="material-icons">storage</span>
        Защищенное храниище
      </StyledLink>
      <StyledLink to="handle-deeplink">
        <span className="material-icons">add_link</span>
        Открытие диплинка
      </StyledLink>
      <StyledLink to="locale">
        <span className="material-icons">language</span>
        Текущая локаль
      </StyledLink>
      <StyledLink to="unread-counters">
        <span className="material-icons">1k_plus</span>
        Каунтер непрочитанных событий
      </StyledLink>
      <StyledLink to="sync-request">
        <span className="material-icons">timer</span>
        Синхронный запрос
      </StyledLink>
      <StyledLink to="layout-type">
        <span className="material-icons">settings_overscan</span>
        Размер окна Web
      </StyledLink>
      <StyledLink to="max-file-size">
        <span className="material-icons">file_present</span>
        Ограничение размера файла
      </StyledLink>
      <StyledLink to="hide-log-data">
        <span className="material-icons">text_snippet</span>
        Скрытие данных в логах
      </StyledLink>
      <StyledLink to="clean-cache">
        <span className="material-icons">folder_off</span>
        Очистка кеша статики
      </StyledLink>
      <StyledLink to="antimalware">
        <span className="material-icons">bug_report</span>
        Антивирусная проверка файлов
      </StyledLink>
      <StyledLink to="app-visibility">
        <span className="material-icons">visibility_off</span>
        Видимость окна SmartApp
      </StyledLink>
    </>
  )
}

export default ClientFeatures
