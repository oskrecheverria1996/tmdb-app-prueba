/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GitRef } from '../../models/git-ref';

export interface GitListMatchingRefs$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The Git reference. For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.
 */
  ref: string;
}

export function gitListMatchingRefs(http: HttpClient, rootUrl: string, params: GitListMatchingRefs$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GitRef>>> {
  const rb = new RequestBuilder(rootUrl, gitListMatchingRefs.PATH, 'get');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.path('ref', params.ref, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<GitRef>>;
    })
  );
}

gitListMatchingRefs.PATH = '/repos/{owner}/{repo}/git/matching-refs/{ref}';
