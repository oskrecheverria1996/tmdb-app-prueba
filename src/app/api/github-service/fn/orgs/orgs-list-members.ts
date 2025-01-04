/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SimpleUser } from '../../models/simple-user';

export interface OrgsListMembers$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * Filter members returned in the list. `2fa_disabled` means that only members without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled will be returned. This options is only available for organization owners.
 */
  filter?: '2fa_disabled' | 'all';

/**
 * Filter members returned by their role.
 */
  role?: 'all' | 'admin' | 'member';

/**
 * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  per_page?: number;

/**
 * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  page?: number;
}

export function orgsListMembers(http: HttpClient, rootUrl: string, params: OrgsListMembers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SimpleUser>>> {
  const rb = new RequestBuilder(rootUrl, orgsListMembers.PATH, 'get');
  if (params) {
    rb.path('org', params.org, {});
    rb.query('filter', params.filter, {});
    rb.query('role', params.role, {});
    rb.query('per_page', params.per_page, {});
    rb.query('page', params.page, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SimpleUser>>;
    })
  );
}

orgsListMembers.PATH = '/orgs/{org}/members';
