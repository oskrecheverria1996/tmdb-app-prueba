/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PackageVersion } from '../../models/package-version';

export interface PackagesGetAllPackageVersionsForPackageOwnedByOrg$Params {

/**
 * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
 */
  package_type: 'npm' | 'maven' | 'rubygems' | 'docker' | 'nuget' | 'container';

/**
 * The name of the package.
 */
  package_name: string;

/**
 * The organization name. The name is not case sensitive.
 */
  org: string;

/**
 * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  page?: number;

/**
 * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
 */
  per_page?: number;

/**
 * The state of the package, either active or deleted.
 */
  state?: 'active' | 'deleted';
}

export function packagesGetAllPackageVersionsForPackageOwnedByOrg(http: HttpClient, rootUrl: string, params: PackagesGetAllPackageVersionsForPackageOwnedByOrg$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PackageVersion>>> {
  const rb = new RequestBuilder(rootUrl, packagesGetAllPackageVersionsForPackageOwnedByOrg.PATH, 'get');
  if (params) {
    rb.path('package_type', params.package_type, {});
    rb.path('package_name', params.package_name, {});
    rb.path('org', params.org, {});
    rb.query('page', params.page, {});
    rb.query('per_page', params.per_page, {});
    rb.query('state', params.state, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PackageVersion>>;
    })
  );
}

packagesGetAllPackageVersionsForPackageOwnedByOrg.PATH = '/orgs/{org}/packages/{package_type}/{package_name}/versions';
