This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run this project

- Clone this repo. `git clone git@github.com:CormacdeBarra/wavebreak-media.git`
- cd into directory where it was cloned to.
- run `yarn install` or `npm install` to install dependencies
- run `yarn start` or `npm run start` to start the app
- run `yarn test` or `npm run test` to run tests

## Libraries used in this project
- `create-react-app` was used to bootstrap this app
- `react-app-rewired` was used to rewire the app to use emotion (CSS in JS)
- `react-infinite-scroll-component` - for infinite scrolling
- `@emotion/core` for css-in-jss

## Comments
1. I chose to use CSS in JS for two reasons. SASS and other CSS pre-processors add extra complexity to building CSS. They require dependencies like ruby and others and can cause build errors on windows machines (I have found this in the past anyway)
2. SASS uses BEM selectors which can be a bit of a nightmare where nested classes are concerned. emotion solves thisby adding a hash to classNames e.g ("class="css-js6jah-header">Image Details") . This allows us to have shorter and easier to manage class names

There are some warnings when the tests are run. Didn't get time to fix them.

## Create-React-App Readme

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

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
