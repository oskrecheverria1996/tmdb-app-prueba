/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrganizationActionsVariable } from '../../models/organization-actions-variable';

export interface ActionsListOrgVariables$Params {

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The number of results per page (max 30). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  per_page?: number;

/**
 * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  page?: number;
}

export function actionsListOrgVariables(http: HttpClient, rootUrl: string, params: ActionsListOrgVariables$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'total_count': number;
'variables': Array<OrganizationActionsVariable>;
}>> {
  const rb = new RequestBuilder(rootUrl, actionsListOrgVariables.PATH, 'get');
  if (params) {
    rb.path('org', params.org, {});
    rb.query('per_page', params.per_page, {});
    rb.query('page', params.page, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      'total_count': number;
      'variables': Array<OrganizationActionsVariable>;
      }>;
    })
  );
}

actionsListOrgVariables.PATH = '/orgs/{org}/actions/variables';
