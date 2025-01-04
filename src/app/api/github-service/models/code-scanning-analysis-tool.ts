/* tslint:disable */
/* eslint-disable */
import { CodeScanningAnalysisToolGuid } from '../models/code-scanning-analysis-tool-guid';
import { CodeScanningAnalysisToolName } from '../models/code-scanning-analysis-tool-name';
import { CodeScanningAnalysisToolVersion } from '../models/code-scanning-analysis-tool-version';
export interface CodeScanningAnalysisTool {
  guid?: CodeScanningAnalysisToolGuid | null;
  name?: CodeScanningAnalysisToolName;
  version?: CodeScanningAnalysisToolVersion | null;
}
