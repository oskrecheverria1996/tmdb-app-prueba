/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InteractionLimit } from '../../models/interaction-limit';
import { InteractionLimitResponse } from '../../models/interaction-limit-response';

export interface InteractionsSetRestrictionsForAuthenticatedUser$Params {
      body: InteractionLimit
}

export function interactionsSetRestrictionsForAuthenticatedUser(http: HttpClient, rootUrl: string, params: InteractionsSetRestrictionsForAuthenticatedUser$Params, context?: HttpContext): Observable<StrictHttpResponse<InteractionLimitResponse>> {
  const rb = new RequestBuilder(rootUrl, interactionsSetRestrictionsForAuthenticatedUser.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<InteractionLimitResponse>;
    })
  );
}

interactionsSetRestrictionsForAuthenticatedUser.PATH = '/user/interaction-limits';
