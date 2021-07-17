# Getting Started with Fullerton Health Booking App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

## App structer
<pre>
src
├── assets
│   ├── images
│   │   └── ...
│   └── style
│       ├── App.css
│       └── variable.scss
├── core <!-- any function, component use in many place will be written in this folder -->
│   ├── components <!-- core componens, ex: Header, Footer -->
│   │   └── ...
│   ├── constants
│   │   └── ...
│   ├── helper
│   │   └── ...
│   ├── hooks <!-- common, reuseable hooks -->
│   │   └── ...
│   ├── layout <!-- page layouts (includes header, footer, main...) -->
│   │   └── ...
│   ├── router
│   │   ├── middlewares <!-- middlewares use to handle logic before redirect to routes -->
│   │   ├── index.js <!-- handle total logic of router including authen and redirect to routes -->
│   │   └── routes.js <!-- list of routes in app -->
│   └── services <!-- core service, ex: HTTPClient service for intergrate API -->
│       └── ...
├── modules <!-- we will devices module by features like authen, play room -->
│   ├── auth
│   │   ├── components
│   │   ├── pages
│   │   ├── router
│   │   └── services
│   └── ...
├── App.js
└── index.js
.env <!-- variables use in different enviroment (local, development, production...), read more in Reactjs document -->
</pre>

