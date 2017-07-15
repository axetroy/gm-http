/**
 * Created by axetroy on 2017/7/15.
 */
declare function GM_xmlhttpRequest(agm: GM_xmlhttpRequestConfig$): void

interface HttpHeader$ {
  [s: string]: string;
}

interface Response$ {
  response: string;
  readyState: number;
  responseHeaders: any;
  responseText: string;
  status: number;
  statusText: string;
  context: any;
  finalUrl: string;
}

interface RequestConfig$ {
  binary?: boolean;
  context?: any;
  overrideMimeType?: string;
  user?: string;
  password?: string;
  synchronous?: boolean;
  timeout?: number;
  upload?: any;
  onabort?(response: Response$): void;
  onerror?(response: Response$): void;
  onload?(): void;
  onprogress?(): void;
  onreadystatechange?(response: Response$): void;
  ontimeout?(response: Response$): void;
}

interface CommonRequestConfig$ {
  method: string;
  url: string;
  data: Object | string;
  header: HttpHeader$;
}

interface GM_xmlhttpRequestConfig$
  extends CommonRequestConfig$,
    RequestConfig$ {}

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

declare module 'gm-http' {
  const http: Http$;
  const timeout: number;
  export { http, timeout };
  export default http;
}
