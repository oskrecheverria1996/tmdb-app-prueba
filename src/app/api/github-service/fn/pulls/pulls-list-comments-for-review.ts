/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReviewComment } from '../../models/review-comment';

export interface PullsListCommentsForReview$Params {

/**
 * The account owner of the repository. The name is not case sensitive.
 */
  owner: string;

/**
 * The name of the repository without the `.git` extension. The name is not case sensitive.
 */
  repo: string;

/**
 * The number that identifies the pull request.
 */
  pull_number: number;

/**
 * The unique identifier of the review.
 */
  review_id: number;

/**
 * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  per_page?: number;

/**
 * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  page?: number;
}

export function pullsListCommentsForReview(http: HttpClient, rootUrl: string, params: PullsListCommentsForReview$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReviewComment>>> {
  const rb = new RequestBuilder(rootUrl, pullsListCommentsForReview.PATH, 'get');
  if (params) {
    rb.path('owner', params.owner, {});
    rb.path('repo', params.repo, {});
    rb.path('pull_number', params.pull_number, {});
    rb.path('review_id', params.review_id, {});
    rb.query('per_page', params.per_page, {});
    rb.query('page', params.page, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ReviewComment>>;
    })
  );
}

pullsListCommentsForReview.PATH = '/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments';
