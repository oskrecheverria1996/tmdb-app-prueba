/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Job } from '../../models/job';

export interface ActionsListJobsForWorkflowRun$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The unique identifier of the workflow run.
 */
  run_id: number;

/**
 * Filters jobs by their `completed_at` timestamp. `latest` returns jobs from the most recent execution of the workflow run. `all` returns all jobs for a workflow run, including from old executions of the workflow run.
 */
  filter?: 'latest' | 'all';

/**
 * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  per_page?: number;

/**
 * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  page?: number;
}

export function actionsListJobsForWorkflowRun(http: HttpClient, rootUrl: string, params: ActionsListJobsForWorkflowRun$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'total_count': number;
'jobs': Array<Job>;
}>> {
  const rb = new RequestBuilder(rootUrl, actionsListJobsForWorkflowRun.PATH, 'get');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.path('run_id', params.run_id, {});
    rb.query('filter', params.filter, {});
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
      'jobs': Array<Job>;
      }>;
    })
  );
}

actionsListJobsForWorkflowRun.PATH = '/repos/{owner}/{repo}/actions/runs/{run_id}/jobs';
