/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Authorization } from '../../models/authorization';

export interface AppsCheckToken$Params {

/**
 * The client ID of the GitHub app.
 */
  client_id: string;
      body: {

/**
 * The access_token of the OAuth or GitHub application.
 */
'access_token': string;
}
}

export function appsCheckToken(http: HttpClient, rootUrl: string, params: AppsCheckToken$Params, context?: HttpContext): Observable<StrictHttpResponse<Authorization>> {
  const rb = new RequestBuilder(rootUrl, appsCheckToken.PATH, 'post');
  if (params) {
    rb.path('client_id', params.client_id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Authorization>;
    })
  );
}

appsCheckToken.PATH = '/applications/{client_id}/token';
