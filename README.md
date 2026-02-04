# next-feature-smartapp

## Отладка Backend

#### Конфигурирование
Необходимо скопировать `./backend/example.env -> ./backend/.env`. Затем заполнить переменную BOT_CREDENTIALS в файле `./backend/.env` в формате `<host>@<secret_key>@<bot_id>`.

Для получения параметров `secret_key` и `bot_id` необходимо создать бота в панели администратора (см. *[Руководство администратора](https://express.ms/admin_guide.pdf) -> Эксплуатация корпоративного сервера -> Управление контактами -> Чат-боты*).

#### Запуск в режиме отладки
```bash
cd backend
docker-compose up -d
```

## Отладка Frontend

#### Установка зависимостей
```
cd frontend
npm i
```

#### Локальное тестирование npm зависимостей
```
cd frontend
npm link

Register one or more workspaces for use in the current project.
Use `npm link` in package you want to link, and npm link [package name] to link another package that you’d like to test into your current project.
Read more [npm documentation](https://docs.npmjs.com/cli/v9/commands/npm-link)
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
* `<tag>` - название тега, собранного на предыдущем шаге.
* `<creds>` - учетные данные бота в формате `cts_host@secret_key@bot_id`
