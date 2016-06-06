# Node.js Seed

Built on top of Express. Includes a simple configuration file, to easily turn features & customize settings.

Out of the box you get:
- Socket.js
- Redis
- Authentication (with Passport.js or Apache style htpasswd)
- Jade
- Sass
- Gulp build process with:
  - Babel + Browserify
  - Browsersync + Livereload
  - Linting w/ ES Lint + Sass Lint

## Configure
Everything you need to configure lives in [_config/app.js](_config/app.js)

### Prerequisites
- [Install Node.js](https://docs.npmjs.com/getting-started/installing-node)

### To Use
Simple clone the repo and run `npm install` to install dependencies. Then run `gulp` to start the server and point your browser to [http://localhost:3000](http://localhost:3000)

## Angular 2
Checkout the `angular` branch to get Angular & Typescript support on top of the above.
