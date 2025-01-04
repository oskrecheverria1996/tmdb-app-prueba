/* tslint:disable */
/* eslint-disable */
import { NullableIntegration } from '../models/nullable-integration';
import { SimpleUser } from '../models/simple-user';
import { Team } from '../models/team';

/**
 * Review Requested Issue Event
 */
export interface ReviewRequestedIssueEvent {
  actor: SimpleUser;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  event: string;
  id: number;
  node_id: string;
  performed_via_github_app: NullableIntegration | null;
  requested_reviewer?: SimpleUser;
  requested_team?: Team;
  review_requester: SimpleUser;
  url: string;
}
