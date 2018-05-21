# react-myapp

### 環境安裝

```
npm i -g create-react-app
create-react-app react-myapp
cd react-myapp
```

### 安裝其他套件

１. sass
```
yarn add node-sass-chokidar
yarn add npm-run-all
```

package.json
```json
"scripts": {
    "build-css": "node-sass-chokidar src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build-js": "react-scripts build",
    "build": "npm-run-all build-css build-js",
    "test": "node scripts/test.js --env=jsdom"
  },
```
2. react-router-dom　路由
```
yarn add react-router-dom
```
```javascript
import { BrowserRouter, Route, Link } from 'react-router-dom'
```

3.PropTypes

  用來設定資料的型別
```
yarn add prop-types
```

---

### vscode　相關

1. Setting 設定

  File -> Preferences -> Setting

  設定在jsx中也可使用emmet

```json
"emmet.includeLanguages": {
    "vue-html": "html",
    "javascript": "javascriptreact"
},
```

2. 輔助套件

 - react 相關快捷鍵

   套件名稱：React-Native/React/Redux snippets for es6/es7

 - html 轉換成 jsx

   套件名稱：html to JSX

 - 程式碼整潔

   套件名稱：JavaScript Standard Format

   File -> Preferences -> Keyboard Shortcuts (快捷鍵設定)

   找到 format code with standard-format

   將快捷鍵修改為 shift + alt + s
