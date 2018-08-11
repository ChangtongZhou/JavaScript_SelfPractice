# Webpack 8-10 Lec

## Webpack Basics:

* React components are mostly written in Javascript ES6 with JSX syntax.
* Browsers can understand some parts of ES6, but not all.
* Broswers have no idea about what JSX is and how to run that.

In that case, in order to run our React code in the browser, you have to do some transformation work, to make the browser understand the code.

## Babel:

> Babel is a compiler for writing next generation JavaScript.

Babel is a tool that helps you write code in the latest version of JavaScript. When your supported environments don't support certain features natively, Babel will help you compile those features down to a supported version.

## [Webpack](https://webpack.js.org/)

> webpack is a static module bundler for modern JavaScript applications.

It enables module loaders and bundlers, i.e.

> Note: webpack-cli only created locally inside of your project, not globally

## Webpack and Loader {#webpack-and-loader}

* A Webpack loader takes something as the input and produces something else as the output.
* Loaders enable webpack to process more than just JavaScript files \(webpack itself only understands JavaScript\).
* babel-loader is the Webpack loader responsible for taking in the ES6 code and making it understandable by the browser of choice. i.e. transform ES6 to ES5
* Obsviusly babel-loader makes use of Babel. And Babel must be configured to use a bunch of presets
  * babel-preset-env for compiling Javascript ES6 code down to ES5
  * babel-preset-react for compiling JSX and other stuff down to Javascript

Install dependencies:

```text
npm install babel-loader babel-core babel-preset-env babel-preset-react --save-dev
```

Add `babel-loader` in webpack config file. At a high level, loaders have two properties in your webpack configuration:

* The test property identifies which file or files should be transformed.
* The use property indicates which loader should be used to do the transforming.

## Webpack HTML Plugin {#webpack-html-plugin}

To display our React code we must tell Webpack to produce an HTML page. The resulting compiled bundle will be placed inside a `<script></script>` tag.

Webpack needs on additional component for processing HTML: `html-webpack-plugin`.

Install the plugin first:

```text
npm install html-webpack-plugin --save-dev
```

Next we need to create a HTML template `index.html` in `./src` for `html-webpack-plugin` to use:

```markup
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

Then update the webpack configuration to use the plugin, use the `html-webpack-plugin` to add the compiled Javascript file to the HTML template, then move the final HTML to `./dist`:

```javascript
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: path.join(__dirname, 'dist', 'index.html'), // final html file goes here
    }),
  ],
};
module.exports = config;
```

## Webpack Dev Server {#webpack-dev-server}

A way to watch the change in you code, compile the JS files when you make any change, and then serve the latest HTML and Javascript to the browser. \(life loading/hop refreshing\)

## Style Loader:

Transfer css file into a plain text file

## CSS Loader:

Load plain file that has css styles into react

