# auth-6

> Nuxt App with Firebase auth as a plugin and middleware added in

## Dependencies
- [x] create-nuxt-app
    * [x] vuetify
    * [ ] axios
    * [x] es-lint
- [x] pug
- [x] pug-plain-loader
- [x] firebase
- [x] dotenv

## Get Started
Create `.env` file in root folder with the following details from Firebase:

.env
```
API_KEY="<YOUR-PROJECT-API>"
AUTH_DOMAIN="<YOUR-PROJECT-ID>.firebaseapp.com"
DATABASE_URL="https://<YOUR-PROJECT-ID>.firebaseio.com"
PROJECT_ID="<YOUR-PROJECT-ID>"
STORAGE_BUCKET="<YOUR-PROJECT-ID>.appspot.com"
MESSAGING_SENDER_ID="<YOUR-PROJECT-SENDER-ID>"
```

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
