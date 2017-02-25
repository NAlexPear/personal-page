/* eslint-disable new-cap */
var path = require( "path" );
var webpack = require( "webpack" );

process.noDeprecation = true;

module.exports = {
    "output": {
        "filename": "main.js"
    },
    "module": {
        "rules": [
            {
                "test": /\.js[x]$/,
                "exclude": /(node_modules|bower_components)/,
                "loader": "babel-loader",
                "options": {
                    "presets": [ "es2015" ],
                    "plugins": [
                        "syntax-jsx",
                        [ "inferno", { "imports": true } ],
                        "lodash"
                    ]
                }
            }
        ]
    },
    "resolve": {
        "alias": {
            "config": __dirname,
            "gsap": path.resolve( __dirname, "../node_modules/gsap" )
        }
    },
    "plugins": [
        new webpack.optimize.UglifyJsPlugin()
    ],
    "devServer": {
        "contentBase": path.resolve( __dirname, "../public" ),
        "publicPath": "/theme/js/",
        "port": 9000,
        "compress": true
    },
    "devtool": "source-map"
};
