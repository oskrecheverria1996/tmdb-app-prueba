/* tslint:disable */
/* eslint-disable */
import { Integration } from '../models/integration';
import { SimpleUser } from '../models/simple-user';

/**
 * Converted Note to Issue Issue Event
 */
export interface ConvertedNoteToIssueIssueEvent {
  actor: SimpleUser;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  event: string;
  id: number;
  node_id: string;
  performed_via_github_app: Integration | null;
  project_card?: {
'id': number;
'url': string;
'project_id': number;
'project_url': string;
'column_name': string;
'previous_column_name'?: string;
};
  url: string;
}
