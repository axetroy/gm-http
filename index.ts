/**
 * Created by axetroy on 17-6-23.
 */
/// <reference path="./index.d.ts" />

function isFunction(func): boolean {
  return typeof func === "function";
}

class Http implements Http$ {
  constructor(private config: HttpConstructorConfig$ = {}) {}

  setConfig(config: HttpConstructorConfig$ = {}) {
    this.config = { ...this.config, ...config };
  }

  create(config: RequestConfig$): Http {
    return new Http(config);
  }

  request(config: HttpRequestConfig$): Promise<Response$> {
    return new Promise((resolve, reject) => {
      const commonRequestConfig: CommonRequestConfig$ = {
        method: config.method,
        url: config.url,
        data: config.body,
        header: config.headers
      };
      const GM_xmlhttpRequestConfig: GM_xmlhttpRequestConfig$ = <
        GM_xmlhttpRequestConfig$
      >{
        ...commonRequestConfig,
        ...config,
        ...this.config
      };
      const {
        onreadystatechange,
        onerror,
        onabort,
        ontimeout
      } = GM_xmlhttpRequestConfig;
      GM_xmlhttpRequestConfig.synchronous = true; // async
      GM_xmlhttpRequestConfig.onreadystatechange = function(
        response: Response$
      ) {
        try {
          isFunction(onreadystatechange) &&
            onreadystatechange.call(this, response);
        } catch (err) {
          reject(err);
        }
        if (response.readyState !== 4) return;
        response.status >= 200 && response.status < 400
          ? resolve(response)
          : reject(response);
      };

      GM_xmlhttpRequestConfig.onerror = function(response: Response$) {
        try {
          isFunction(onerror) && onerror.call(this, response);
          reject(response);
        } catch (err) {
          reject(err);
        }
      };

      GM_xmlhttpRequestConfig.onabort = function(response: Response$) {
        try {
          isFunction(onabort) && onabort.call(this, response);
          reject(response);
        } catch (err) {
          reject(err);
        }
      };

      GM_xmlhttpRequestConfig.ontimeout = function(response: Response$) {
        try {
          isFunction(ontimeout) && ontimeout.call(this, response);
          reject(response);
        } catch (err) {
          reject(err);
        }
      };

      if (this.config.debug) {
        console.log(
          `%c[${commonRequestConfig.method.toUpperCase()}]%c: ${
            commonRequestConfig.url
          }`,
          "color: green",
          "color: #000;text-style: under-line"
        );
      }

      GM_xmlhttpRequest(<GM_xmlhttpRequestConfig$>{
        ...GM_xmlhttpRequestConfig
      });
    });
  }

  get(
    url: string,
    data?: Object | string,
    headers: HttpHeader$ = {},
    config: RequestConfig$ = {}
  ): Promise<Response$> {
    return this.request({
      url,
      method: "GET",
      body: data,
      headers,
      ...config
    });
  }

  post(
    url: string,
    data?: Object | string,
    headers: HttpHeader$ = {},
    config: RequestConfig$ = {}
  ): Promise<Response$> {
    return this.request({
      url,
      method: "POST",
      body: data,
      headers,
      ...config
    });
  }

  put(
    url: string,
    data?: Object | string,
    headers: HttpHeader$ = {},
    config: RequestConfig$ = {}
  ): Promise<Response$> {
    return this.request({
      url,
      method: "POST",
      body: data,
      headers,
      ...config
    });
  }

  ["delete"](
    url: string,
    data?: Object | string,
    headers: HttpHeader$ = {},
    config: RequestConfig$ = {}
  ): Promise<Response$> {
    return this.request({
      url,
      method: "DELETE",
      body: data,
      headers,
      ...config
    });
  }

  head(
    url: string,
    data?: Object | string,
    headers: HttpHeader$ = {},
    config: RequestConfig$ = {}
  ): Promise<Response$> {
    return this.request({
      url,
      method: "HEAD",
      body: data,
      headers,
      ...config
    });
  }
}

const timeout = 5000;
let http = new Http({ timeout });

export { http, Http, timeout };
export default http;
