var path = require( "path" );
// var webpack = require( "webpack" );

process.noDeprecation = true;

module.exports = {
    "output": {
        "filename": "main.js"
    },
    "module": {
        "rules": [
            { "parser": { "requireEnsure": false } },
            {
                "test": /\.js[x]$/,
                "exclude": /(node_modules|bower_components)/,
                "loader": "babel-loader",
                "options": {
                    "babelrc": false,
                    "presets": [ "es2015" ],
                    "plugins": [
                        "lodash",
                        [
                            require.resolve( "babel-plugin-inferno" ),
                            { "imports": true }
                        ]
                    ]
                }
            }
        ]
    },
    "resolve": {
        "alias": {
            "config": __dirname,
            "gsap": path.resolve( __dirname, "../node_modules/gsap" ),
            "router": path.resolve( __dirname, "../theme/js/router.js" ),
            "components": path.resolve( __dirname, "../theme/js/components" ),
            "pages": path.resolve( __dirname, "../theme/js/pages" )
        }
    },
    "plugins": [
        // new webpack.optimize.UglifyJsPlugin()
    ],
    "devServer": {
        "contentBase": path.resolve( __dirname, "../public" ),
        "publicPath": "/theme/js/",
        "port": 9000,
        "compress": true,
        "historyApiFallback": true,
        "overlay": false,
        "watchOptions": {
            "ignored": /node_modules/
        }
    },
    "devtool": "source-map"
};
