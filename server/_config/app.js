'use strict';

const path = require('path'),
      rootPath = path.normalize(__dirname + '/../..');

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
    name: 'app.sid',
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
    file: rootPath + 'server/_config/users.htpasswd',
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
    controllers: rootPath + '/server/controllers/',
    models: rootPath + '/server/models/',
    router: rootPath + '/server/_lib/router.js',
    routes: rootPath + '/server/routes/',
    script: 'server.js',
    socket: rootPath + '/server/socket',
    views: {
      engine: 'jade',
      dir: [rootPath + '/app/', rootPath + '/server/views/']
    }
  },
  root: rootPath
};

// GULP SETTINGS
config.gulp = {
  browserSync: {
    baseDir: 'public',
    files: [ 'public/**/*.*', 'server/**/*.*', 'server/**/*.*' ],
    ignore: [ 'public/lib', 'public/app', 'public/js/**/*.min.js' ],
    open: false,
    port: 3000,
    reloadDelay: 2000
  },
  src: {
    assets: {
      jade: {
        templates: ['./app/**/*.jade', '!./app/templates']
      },
      js: ['./public/js/**/*.js', '!./public/js/main.min.js'],
      jsMain: './public/js/main.js',
      sass: ['./public/css/**/*.scss'],
      sassMain: ['./public/css/main.scss'],
      ts: ['./app/**/*.ts']
    },
    app: rootPath + 'server/**/*',
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
        templates: './public/app'
      },
      sass: './public/css/',
      ts: ['./public/app/']
    },
    build: './public/app',
    dir: './public/',
    lib: './public/lib/'
  },
  npm: './node_modules/'
};

// PULL IN ENVIRONMENT SETTING & APPEND TO MAIN CONFIG
if (typeof process.env.NODE_ENV !== 'undefined') {
  config = require(rootPath + '/server/_config/environment/' + process.env.NODE_ENV + '.js')(config);
}

if (config.redis && typeof process.env.REDIS_URL === 'undefined') {
  process.env.REDIS_URL = config.redis;
}

module.exports = config;
