## Iot
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br />
It's based on the bootstrap UI library.<br />
Uses the [Redux](https://redux.js.org/) toolkit.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install **yarn**.

```bash
npm install -g yarn
```

## Structure
The project is organized with a folder per feature.<br />
The **devices** folder contains all the data objects, the services, and redux module.<br />
Each **redux** folder should contain 3 files.<br />
* **actions**   : contains the redux actions, the type definition and thunk actions. 
* **state**     : contains the state of the feature, could have a loading, error and the data.
* **reducer**   : contains the initial state of the feature, as well as the reducer function. Should never mutate state !

The **services** are responsible of calling the backend, every query, update, insert should go through a service.<br />

The project thrive on using small reuseable components, always think about reusability and how to write less code.<br />

## Configuration
The project can consume variables declared in the environment as if they were declared in a TS files.<br />
All the environment variables should start with **REACT_APP_**.<br />
These environment variables will be defined for you on process.env.<br />
For example, having an environment variable named **REACT_APP_DEVICES_API** will be exposed in the TS as **process.env.REACT_APP_DEVICES_API**.

What other .env files can be used?<br />

* .env: Default.
* .env.local: Local overrides. This file is loaded for all environments except test.
* .env.development, .env.test, .env.production: Environment-specific settings.
* .env.development.local, .env.test.local, .env.production.local: Local overrides of environment-specific settings.
Files on the left have more priority than files on the right:

* npm start: .env.development.local, .env.development, .env.local, .env
* npm run build: .env.production.local, .env.production, .env.local, .env
* npm test: .env.test.local, .env.test, .env (note .env.local is missing)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
