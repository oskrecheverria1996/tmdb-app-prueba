/* tslint:disable */
/* eslint-disable */

/**
 * Successful deletion of a code scanning analysis
 */
export interface CodeScanningAnalysisDeletion {

  /**
   * Next deletable analysis in chain, with last analysis deletion confirmation
   */
  confirm_delete_url: string | null;

  /**
   * Next deletable analysis in chain, without last analysis deletion confirmation
   */
  next_analysis_url: string | null;
}
