# Form validation with Formik and folktale.

## Project setup

### Install all project dependencies.
```bash
npm install
```

### Setup the environment.
1. Create the file `.env.local` in the root of the project.
2. Add the key `APP_API_URL`
3. Let key point to a local or remote mock API server.

Example:
```dotenv
APP_API_URL=https://loremipsum.x.pipedream.net/api
```

Yor mock API server must provide an `/users` endpoint.

### Using Mockoon to setup the environment

You can use [Mockoon](https://mockoon.com) to provide such mock API, for example.

1. Download and install the app.
1. Select `Tools > Import all environments from file` in the Mockoon app.
1. Import the `mockoon.json` file from project's directory.
1. Start the server by clicking the play button.
1. Create the `.env.local` file in the root of the project.
1. Add `APP_API_URL=http://localhost:3001/api` to this file.

## Start the example app

Use `npm run start` to build and serve the example application.
