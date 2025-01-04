/* tslint:disable */
/* eslint-disable */
import { NullableIntegration } from '../models/nullable-integration';
import { SimpleUser } from '../models/simple-user';

/**
 * Unlabeled Issue Event
 */
export interface UnlabeledIssueEvent {
  actor: SimpleUser;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  event: string;
  id: number;
  label: {
'name': string;
'color': string;
};
  node_id: string;
  performed_via_github_app: NullableIntegration | null;
  url: string;
}
