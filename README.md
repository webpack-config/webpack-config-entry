# webpack-config-entry

Setup simple configuration for your [webpack] entry points.

![build status](http://img.shields.io/travis/webpack-config/webpack-config-entry/master.svg?style=flat)
![coverage](http://img.shields.io/coveralls/webpack-config/webpack-config-entry/master.svg?style=flat)
![license](http://img.shields.io/npm/l/webpack-config-entry.svg?style=flat)
![version](http://img.shields.io/npm/v/webpack-config-entry.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/webpack-config-entry.svg?style=flat)

## Usage

Install:

```sh
npm install --save webpack-config-entry
```

Add to your `webpack.config.babel.js`:

```javascript
import entry from `webpack-config-entry`;

entry()({
  /* existing webpack configuration */
})
```

[webpack]: https://webpack.github.io
