const { Elm } = require('./Main.elm');

require('../style/main.scss');

Elm.Main.init({ node: document.getElementById('root') });
