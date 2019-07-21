### Development environment deployment



#### 1. npm install

```shell
cd slack-bot
npm install
```



#### 2. add .env file in project root

```ini
SLACK_ACCESS_TOKEN='xxxxxx'
SLACK_VERIFICATION_TOKEN='xxxxxxxx'
DB_FILE_PATH='/home/xxx/xxx/db.sqlite'
```



#### 3. init db

```shell
cd slack-bot/db
npx sequelize-cli db:migrate --config config.js
```



#### 4. npm start

```shell
npm start
```

by default it will listen 3000 port.





### Supported APIs

#### /api/messages

#### /api/user-profiles

