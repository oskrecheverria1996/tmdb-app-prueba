/* tslint:disable */
/* eslint-disable */
import { SecurityAdvisoryCreditTypes } from '../models/security-advisory-credit-types';
import { SecurityAdvisoryEcosystems } from '../models/security-advisory-ecosystems';
export interface RepositoryAdvisoryCreate {

  /**
   * A list of users receiving credit for their participation in the security advisory.
   */
  credits?: (Array<{

/**
 * The username of the user credited.
 */
'login': string;
'type': SecurityAdvisoryCreditTypes;
}>) | null;

  /**
   * The Common Vulnerabilities and Exposures (CVE) ID.
   */
  cve_id?: string | null;

  /**
   * The CVSS vector that calculates the severity of the advisory. You must choose between setting this field or `severity`.
   */
  cvss_vector_string?: string | null;

  /**
   * A list of Common Weakness Enumeration (CWE) IDs.
   */
  cwe_ids?: Array<string> | null;

  /**
   * A detailed description of what the advisory impacts.
   */
  description: string;

  /**
   * The severity of the advisory. You must choose between setting this field or `cvss_vector_string`.
   */
  severity?: ('critical' | 'high' | 'medium' | 'low') | null;

  /**
   * Whether to create a temporary private fork of the repository to collaborate on a fix.
   */
  start_private_fork?: boolean;

  /**
   * A short summary of the advisory.
   */
  summary: string;

  /**
   * A product affected by the vulnerability detailed in a repository security advisory.
   */
  vulnerabilities: Array<{

/**
 * The name of the package affected by the vulnerability.
 */
'package': {
'ecosystem': SecurityAdvisoryEcosystems;

/**
 * The unique package name within its ecosystem.
 */
'name'?: string | null;
};

/**
 * The range of the package versions affected by the vulnerability.
 */
'vulnerable_version_range'?: string | null;

/**
 * The package version(s) that resolve the vulnerability.
 */
'patched_versions'?: string | null;

/**
 * The functions in the package that are affected.
 */
'vulnerable_functions'?: Array<string> | null;
}>;
}
