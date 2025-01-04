/* tslint:disable */
/* eslint-disable */

/**
 * Public User
 */
export interface PublicUser {
  avatar_url: string;
  bio: string | null;
  blog: string | null;
  collaborators?: number;
  company: string | null;
  created_at: string;
  disk_usage?: number;
  email: string | null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string | null;
  hireable: boolean | null;
  html_url: string;
  id: number;
  location: string | null;
  login: string;
  name: string | null;
  node_id: string;
  notification_email?: string | null;
  organizations_url: string;
  owned_private_repos?: number;
  plan?: {
'collaborators': number;
'name': string;
'space': number;
'private_repos': number;
};
  private_gists?: number;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  suspended_at?: string | null;
  total_private_repos?: number;
  twitter_username?: string | null;
  type: string;
  updated_at: string;
  url: string;
}
