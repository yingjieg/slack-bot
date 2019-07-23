### Development environment deployment



#### 1. npm install

```shell
cd slack-bot
npm install
```



#### 2. add .env file in project root

```ini
SLACK_ACCESS_TOKEN='xxxxxx'                 // OAuth token for slack API access
SLACK_VERIFICATION_TOKEN='xxxxxxxx'         // slack verification token (to authorize slack app)
DB_FILE_PATH='/home/xxx/xxx/db.sqlite'      // path for sqlite path, please use absolute file path
ORIGIN='http://hostname:3001'               // for ws origin check

DEBUG=true                                  // for debug log
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

