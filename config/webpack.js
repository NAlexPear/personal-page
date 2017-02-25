var path = require( "path" );

process.noDeprecation = true;

module.exports = {
    "output": {
        "filename": "main.js",
        "path": path.resolve( __dirname, "../public/theme/js/main.js" )
    },
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "exclude": /(node_modules|bower_components)/,
                "loader": "babel-loader",
                "options": {
                    "presets": [ "es2015" ]
                }
            }
        ]
    },
    "resolve": {
        "alias": {
            "gsap": path.resolve( __dirname, "../node_modules/gsap" )
        }
    },
    "devServer": {
        "contentBase": path.resolve( __dirname, "../public" ),
        "port": 9000,
        "compress": true
    },
    "devtool": "source-map"
};
