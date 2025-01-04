/* tslint:disable */
/* eslint-disable */
import { NullableSimpleUser } from '../models/nullable-simple-user';

/**
 * Gist Commit
 */
export interface GistCommit {
  change_status: {
'total'?: number;
'additions'?: number;
'deletions'?: number;
};
  committed_at: string;
  url: string;
  user: NullableSimpleUser | null;
  version: string;
}
