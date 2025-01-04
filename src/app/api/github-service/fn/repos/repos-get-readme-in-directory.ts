/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContentFile } from '../../models/content-file';

export interface ReposGetReadmeInDirectory$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The alternate path to look for a README file
 */
  dir: string;

/**
 * The name of the commit/branch/tag. Default: the repository’s default branch.
 */
  ref?: string;
}

export function reposGetReadmeInDirectory(http: HttpClient, rootUrl: string, params: ReposGetReadmeInDirectory$Params, context?: HttpContext): Observable<StrictHttpResponse<ContentFile>> {
  const rb = new RequestBuilder(rootUrl, reposGetReadmeInDirectory.PATH, 'get');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.path('dir', params.dir, {});
    rb.query('ref', params.ref, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ContentFile>;
    })
  );
}

reposGetReadmeInDirectory.PATH = '/repos/{owner}/{repo}/readme/{dir}';
