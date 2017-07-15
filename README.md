# gm-http
[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/gm-http.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/axetroy/gm-http.svg?branch=master)](https://travis-ci.org/axetroy/gm-http)
[![Dependency](https://david-dm.org/axetroy/gm-http.svg)](https://david-dm.org/axetroy/gm-http)
![License](https://img.shields.io/badge/license-MIT-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/gm-http.svg)](https://badge.fury.io/js/gm-http)

Http module for Greasyfork Script

## Installation
```bash
npm install gm-http --save
```

### FeedBack

- https://github.com/axetroy/gm-http/issues
- https://github.com/axetroy/gm-http/issues
- https://github.com/axetroy/gm-http/issues

### 如果这能够帮助到你, 不妨点个start, 你的支持就是我更新的动力

### 使用

1. 安装扩展

安装前确保你的浏览器已安装如下扩展

浏览器 | 支持扩展
------------ | -------------
Chrome | **Tampermonkey** or **Violent monkey**
Firefox | **Greasemonkey** or **Tampermonkey**
Safari | **Tampermonkey**
Microsoft Edge | **Tampermonkey**
Opera | **Tampermonkey**
Maxthon | **Violentmonkey**
Dolphin | **Tampermonkey**
UC | **Tampermonkey**
Qupzilla | 不需要额外软件

2. 安装脚本

创建一个脚本，并且安装

3. 确保拥有http权限

在脚本头部的声明中，确保有http的权限申请

```javascript
// @grant             GM_xmlhttpRequest
```

4. 引入本库

```typescript
// es6
import http from 'gm-http';

// commonJs
const http = require('gm-http');

// or Global
const http = window.gmHttp;

http.get('https://example.com')
    .then(function() {
      
    })
```

## API

```typescript
interface Http$ {
  create(config: any): Http$;
  request(
    method: string,
    url: string,
    data: Object | string,
    header: HttpHeader$,
    config: RequestConfig$
  ): Promise<any>;
  get(
    url: string,
    data?: Object | string,
    header?: HttpHeader$,
    config?: RequestConfig$
  ): Promise<any>;
  post(
    url: string,
    data?: Object | string,
    header?: HttpHeader$,
    config?: RequestConfig$
  ): Promise<any>;
  put(
    url: string,
    data?: Object | string,
    header?: HttpHeader$,
    config?: RequestConfig$
  ): Promise<any>;
  ['delete'](
    url: string,
    data?: Object | string,
    header?: HttpHeader$,
    config?: RequestConfig$
  ): Promise<any>;
  head(
    url: string,
    data?: Object | string,
    header?: HttpHeader$,
    config?: RequestConfig$
  ): Promise<any>;
}

```

## Contributing

```bash
git clone https://github.com/axetroy/gm-http.git
cd ./gm-http
yarn
yarn run start
```

You can flow [Contribute Guide](https://github.com/axetroy/gm-http/blob/master/contributing.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/gpmer/gpm.js/commits?author=axetroy) 🔌 [⚠️](https://github.com/gpmer/gpm.js/commits?author=axetroy) [🐛](https://github.com/gpmer/gpm.js/issues?q=author%3Aaxetroy) 🎨 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The [MIT License](https://github.com/axetroy/gm-http/blob/master/LICENSE)
