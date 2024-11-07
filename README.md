# Webpack-JS
A webpack bundler template for HTML, CSS, JS with image loaders

# Step 1: 
Initialize a package.json file using
```bash
npm init -y
```

# Step 2:
Install `webpack` and `webpack-cli` package
```bash
npm install --save-dev webpack webpack-cli
```

# Step 3:
Create a `src` directory for your source code files and create your necessary files (here, index.html, style.css, index.js)
```bash
mkdir src && touch src/index.html src/style.css src/index.js
```

# Step 4:
Install `html-webpack` for handling html and `style-loader`, `css-loader`
```bash
npm install --save-dev html-webpack style-loader css-loader
```

# Step 5:
Create config file `webpack.config.js` 
```bash
touch webpack.config.js
```

# Step 6:
Add following configurations to it
```js
// for handling html file
const HtmlWebpackPlugin = require('html-webpack-plugin');

// default import
const path = require('path');

module.exports = {
    // default configuration object
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    // for handling html file
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],

     // for handling css, html images & js images
    module: {
        rules: [
            {
                // for loading css imported in js files
                test: /\.css/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
```

# Step 7:
For loading images in html install `html-loader` & also add rules in configuration file and for js just add the rules (append these rules to the existing ones)
```js
module: {
    rules: [
        {
            // for loading images in html files
            test: /\.html$/i,
            loader: "html-loader",
        },
        {
            // for loading images in js files
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
        },
    ],
},
```

# Step 8:
For auto-reload on save, ease-in-debugging, source-map, install `webpack-dev-server` and add the required rules in the configuration file
```bash
npm install --save-dev webpack-dev-server
```
```js
// for auto-reload, source-map, and watching for html file
devtool: "eval-source-map",
devServer: {
    watchFiles: ["./src/template.html"],
},
```

# Step 9:
Run the following command and go to [localhost:8080](http://localhost:8080/)
```bash
npx webpack-serve
```