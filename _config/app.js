'use strict';

const path = require('path'),
      rootPath = path.normalize(__dirname + '/..');

let config = {

  // NAME OF APPLICATION
  name: 'App',

  // CACHE
  cache: false,

  // CORS
  cors: false,

  // GZIP
  gzip: true,

  namespace: 'app',

  // PORT TO RUN ON
  port: 1981,

  // PRETTIFY OUTPUT
  prettify: true,

  // REDIS
  redis: {
    use: false,
    url: 'redis://127.0.0.1:6379'
  },

  // SECURITY
  security: {
    digest: 'sha512',
    length: 512,
    iterations: 10000,
    secret: 'weac8hixtrno2ch378rt2no3r78x354tro237r5hox37r3to27'
  },

  session: {
    use: true,
    name: 'my-app.sid',
    httpOnly: false,
    secure: false,
    resave: true,
    rolling: false,
    saveUninitialized: true
  },

  socket: true

};

config.auth = {
  htpasswd: {
    use: false, // APACHE STYLE HTPASSWD AUTH
    file: rootPath + '_config/users.htpasswd',
    realm: 'User'
  },
  passport: {
    use: false,
    strategy: 'local'
  }
};

// DIRECTORY MAP
config.dir = {
  public: rootPath + '/public/',
  server: {
    controllers: rootPath + '/app/controllers/',
    models: rootPath + '/app/models/',
    router: rootPath + '/lib/router.js',
    routes: rootPath + '/app/routes/',
    script: 'server.js',
    socket: rootPath + '/app/socket',
    views: {
      engine: 'jade',
      dir: rootPath + '/app/views/'
    }
  },
  root: rootPath
};

// GULP SETTINGS
config.gulp = {
  browserSync: {
    baseDir: 'public',
    files: [ 'public/**/*.*', 'app/**/*.*', 'server/**/*.*' ],
    open: false,
    port: 3000,
    reloadDelay: 2000
  },
  src: {
    assets: {
      jade: {
        templates: ['./app/views/**/*.jade']
      },
      js: ['./public/js/**/*.js', '!./public/js/main.min.js'],
      jsMain: './public/js/main.js',
      sass: ['./public/css/**/*.scss'],
      sassMain: ['./public/css/main.scss']
    },
    app: rootPath + 'app/**/*',
    lib: rootPath + 'lib/**/*'
  },
  dest: {
    app: './public',
    assets: {
      css: './public/css/',
      js: './public/js/',
      jsMain: './public/js/main.min.js',
      dir: './public/',
      jade: {
        templates: './public/'
      },
      sass: './public/css/'
    },
    dir: './public/',
    lib: './public/lib/'
  },
  npm: './node_modules/'
};

// PULL IN ENVIRONMENT SETTING & APPEND TO MAIN CONFIG
if (typeof process.env.NODE_ENV !== 'undefined') {
  config = require(rootPath + '/_config/environment/' + process.env.NODE_ENV + '.js')(config);
}

if (config.redis && typeof process.env.REDIS_URL === 'undefined') {
  process.env.REDIS_URL = config.redis;
}

module.exports = config;
