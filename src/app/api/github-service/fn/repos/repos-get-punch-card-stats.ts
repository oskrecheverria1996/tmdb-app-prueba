/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CodeFrequencyStat } from '../../models/code-frequency-stat';

export interface ReposGetPunchCardStats$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;
}

export function reposGetPunchCardStats(http: HttpClient, rootUrl: string, params: ReposGetPunchCardStats$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CodeFrequencyStat>>> {
  const rb = new RequestBuilder(rootUrl, reposGetPunchCardStats.PATH, 'get');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CodeFrequencyStat>>;
    })
  );
}

reposGetPunchCardStats.PATH = '/repos/{owner}/{repo}/stats/punch_card';
