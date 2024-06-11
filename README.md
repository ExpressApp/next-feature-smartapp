# next-feature-smartapp

## Отладка Backend

#### Конфигурирование
Необходимо скопировать `./backend/example.env -> ./backend/.env`. Затем заполнить переменную BOT_CREDENTIALS в файле `./backend/.env` в формате `<host>@<secret_key>@<bot_id>`.

Для получения параметров `secret_key` и `bot_id` необходимо создать бота в панели администратора (см. *[Руководство администратора](https://express.ms/admin_guide.pdf) -> Эксплуатация корпоративного сервера -> Управление контактами -> Чат-боты*).

#### Запуск в режиме отладки
```bash
docker-compose up -d
```

## Отладка Frontend

#### Установка зависимостей
```
cd frontend
npm i
```

#### Запуск в режиме отладки
```
./scripts/run-front
```

## Деплой на сервер

#### Сборка контейнера
```
./scripts/build
```

#### Запуск
```
docker run -d \
-e BOT_CREDENTIALS="<creds>" \
-e DEBUG=True \
<tag>
```
гдe
`<tag>` - название тега, собранного на предыдущем шаге.
`<creds>` - учетные данные бота в формате `cts_host@secret_key@bot_id`
