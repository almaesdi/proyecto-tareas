const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/main.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

mix.webpackConfig({
    resolve: {
     // extensions: ['.js', '.vue', '.json'],
      alias: {
        //'@': __dirname + '/resources/js', //carpeta raiz

        'components' :  __dirname + '/resources/js/components',
        'services' :  __dirname + '/resources/js/services',
      },
    },
  })
