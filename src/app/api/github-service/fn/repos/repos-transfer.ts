/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MinimalRepository } from '../../models/minimal-repository';

export interface ReposTransfer$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;
      body: {

/**
 * The username or organization name the repository will be transferred to.
 */
'new_owner': string;

/**
 * The new name to be given to the repository.
 */
'new_name'?: string;

/**
 * ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.
 */
'team_ids'?: Array<number>;
}
}

export function reposTransfer(http: HttpClient, rootUrl: string, params: ReposTransfer$Params, context?: HttpContext): Observable<StrictHttpResponse<MinimalRepository>> {
  const rb = new RequestBuilder(rootUrl, reposTransfer.PATH, 'post');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MinimalRepository>;
    })
  );
}

reposTransfer.PATH = '/repos/{owner}/{repo}/transfer';
