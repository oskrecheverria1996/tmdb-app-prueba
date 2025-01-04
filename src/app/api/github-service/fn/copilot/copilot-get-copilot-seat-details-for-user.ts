/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CopilotSeatDetails } from '../../models/copilot-seat-details';

export interface CopilotGetCopilotSeatDetailsForUser$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The handle for the GitHub user account.
 */
  username: string;
}

export function copilotGetCopilotSeatDetailsForUser(http: HttpClient, rootUrl: string, params: CopilotGetCopilotSeatDetailsForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<CopilotSeatDetails>> {
  const rb = new RequestBuilder(rootUrl, copilotGetCopilotSeatDetailsForUser.PATH, 'get');
  if (params) {
    rb.path('org', params.org, {});
    rb.path('username', params.username, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CopilotSeatDetails>;
    })
  );
}

copilotGetCopilotSeatDetailsForUser.PATH = '/orgs/{org}/members/{username}/copilot';
