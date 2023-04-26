# webpack-typescript

Webpack starts at *.ts, locates all TypeScript and JavaScript files that are used, and compiles them into the single script file main.js using ts-loader.

ts-loader is the TypeScript loader for webpack. It’s a plugin that helps webpack work well with TypeScript.
ts-loader uses tsc, the TypeScript compiler, and relies on your tsconfig.json configuration.

You can compile typescript code to javascript with the help of ts-loader and typescript, then bundle the js code using webpack.

Webpack cannot compile or bundle non-JavaScript files, therefore, it uses a loader. Loaders tell webpack how to compile and bundle static assets. They are used for compiling TypeScript modules into JavaScript

