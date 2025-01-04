/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RepoSearchResultItem } from '../../models/repo-search-result-item';

export interface SearchRepos$Params {

/**
 * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query). See "[Searching for repositories](https://docs.github.com/articles/searching-for-repositories/)" for a detailed list of qualifiers.
 */
  q: string;

/**
 * Sorts the results of your query by number of `stars`, `forks`, or `help-wanted-issues` or how recently the items were `updated`. Default: [best match](https://docs.github.com/rest/search/search#ranking-search-results)
 */
  sort?: 'stars' | 'forks' | 'help-wanted-issues' | 'updated';

/**
 * Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
 */
  order?: 'desc' | 'asc';

/**
 * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  per_page?: number;

/**
 * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  page?: number;
}

export function searchRepos(http: HttpClient, rootUrl: string, params: SearchRepos$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'total_count': number;
'incomplete_results': boolean;
'items': Array<RepoSearchResultItem>;
}>> {
  const rb = new RequestBuilder(rootUrl, searchRepos.PATH, 'get');
  if (params) {
    rb.query('q', params.q, {});
    rb.query('sort', params.sort, {});
    rb.query('order', params.order, {});
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
      'incomplete_results': boolean;
      'items': Array<RepoSearchResultItem>;
      }>;
    })
  );
}

searchRepos.PATH = '/search/repositories';
