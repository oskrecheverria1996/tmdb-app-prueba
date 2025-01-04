/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Deployment } from '../../models/deployment';

export interface ReposListDeployments$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The SHA recorded at creation time.
 */
  sha?: string;

/**
 * The name of the ref. This can be a branch, tag, or SHA.
 */
  ref?: string;

/**
 * The name of the task for the deployment (e.g., `deploy` or `deploy:migrations`).
 */
  task?: string;

/**
 * The name of the environment that was deployed to (e.g., `staging` or `production`).
 */
  environment?: string | null;

/**
 * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  per_page?: number;

/**
 * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  page?: number;
}

export function reposListDeployments(http: HttpClient, rootUrl: string, params: ReposListDeployments$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Deployment>>> {
  const rb = new RequestBuilder(rootUrl, reposListDeployments.PATH, 'get');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.query('sha', params.sha, {});
    rb.query('ref', params.ref, {});
    rb.query('task', params.task, {});
    rb.query('environment', params.environment, {});
    rb.query('per_page', params.per_page, {});
    rb.query('page', params.page, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Deployment>>;
    })
  );
}

reposListDeployments.PATH = '/repos/{owner}/{repo}/deployments';
