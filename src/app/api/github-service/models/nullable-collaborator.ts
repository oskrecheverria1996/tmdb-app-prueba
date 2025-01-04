/* tslint:disable */
/* eslint-disable */

/**
 * Collaborator
 */
export type NullableCollaborator = {
'login': string;
'id': number;
'email'?: string | null;
'name'?: string | null;
'node_id': string;
'avatar_url': string;
'gravatar_id': string | null;
'url': string;
'html_url': string;
'followers_url': string;
'following_url': string;
'gists_url': string;
'starred_url': string;
'subscriptions_url': string;
'organizations_url': string;
'repos_url': string;
'events_url': string;
'received_events_url': string;
'type': string;
'site_admin': boolean;
'permissions'?: {
'pull': boolean;
'triage'?: boolean;
'push': boolean;
'maintain'?: boolean;
'admin': boolean;
};
'role_name': string;
};
