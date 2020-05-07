import { HttpHeaders } from '@angular/common/http';

export interface ApiParameters {
  [key: string]: string | number;
}

export interface ApiBody {
  [key: string]: any;
}

export interface ApiResponse {
  [key: string]: any;
}

export interface ApiErrorResponse {
  status: number | string;
  // tslint:disable-next-line: ban-types
  json?: Function;
}

export type LoadingIndicatorOption = boolean | 'onBeforeRequest' | 'offAfterResponse';

export interface ApiOptions {
  params?: any;
  body?: ApiBody;
  headers?: HttpHeaders;
  loadingIndicator?: LoadingIndicatorOption;
  headerType?: string;
}
