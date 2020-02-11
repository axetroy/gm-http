/**
 * Created by axetroy on 2017/7/15.
 */
declare function GM_xmlhttpRequest(agm: GM_xmlhttpRequestConfig$): void;

interface HttpHeader$ {
  [s: string]: string;
}

interface Cookies$ {
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
  cookie?: Cookies$;
  responseType?: "arraybuffer" | "blob" | "json";
  anonymous?: boolean;
  fetch?: boolean;
  username?: string;
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

interface HttpConstructorConfig$ extends RequestConfig$ {
  debug?: boolean;
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

interface HttpConstructor$ {
  new (): Http$;
}

interface Http$ {
  setConfig(config: HttpConstructorConfig$);
  create(config: HttpConstructorConfig$): Http$;
  request(
    method: string,
    url: string,
    data: Object | string,
    header: HttpHeader$,
    config: RequestConfig$
  ): Promise<Response$>;
  get(
    url: string,
    data?: Object | string,
    header?: HttpHeader$,
    config?: RequestConfig$
  ): Promise<Response$>;
  post(
    url: string,
    data?: Object | string,
    header?: HttpHeader$,
    config?: RequestConfig$
  ): Promise<Response$>;
  put(
    url: string,
    data?: Object | string,
    header?: HttpHeader$,
    config?: RequestConfig$
  ): Promise<Response$>;
  ["delete"](
    url: string,
    data?: Object | string,
    header?: HttpHeader$,
    config?: RequestConfig$
  ): Promise<Response$>;
  head(
    url: string,
    data?: Object | string,
    header?: HttpHeader$,
    config?: RequestConfig$
  ): Promise<Response$>;
}

declare module "gm-http" {
  const http: Http$;
  const Http: HttpConstructor$;
  const timeout: number;
  export { http, timeout, Http };
  export default http;
}
