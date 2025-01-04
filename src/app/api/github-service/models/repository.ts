/* tslint:disable */
/* eslint-disable */
import { NullableLicenseSimple } from '../models/nullable-license-simple';
import { SimpleUser } from '../models/simple-user';

/**
 * A repository on GitHub.
 */
export interface Repository {

  /**
   * Whether to allow Auto-merge to be used on pull requests.
   */
  allow_auto_merge?: boolean;

  /**
   * Whether to allow forking this repo
   */
  allow_forking?: boolean;

  /**
   * Whether to allow merge commits for pull requests.
   */
  allow_merge_commit?: boolean;

  /**
   * Whether to allow rebase merges for pull requests.
   */
  allow_rebase_merge?: boolean;

  /**
   * Whether to allow squash merges for pull requests.
   */
  allow_squash_merge?: boolean;

  /**
   * Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging.
   */
  allow_update_branch?: boolean;

  /**
   * Whether anonymous git access is enabled for this repository
   */
  anonymous_access_enabled?: boolean;
  archive_url: string;

  /**
   * Whether the repository is archived.
   */
  archived: boolean;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  clone_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  created_at: string | null;

  /**
   * The default branch of the repository.
   */
  default_branch: string;

  /**
   * Whether to delete head branches when pull requests are merged
   */
  delete_branch_on_merge?: boolean;
  deployments_url: string;
  description: string | null;

  /**
   * Returns whether or not this repository disabled.
   */
  disabled: boolean;
  downloads_url: string;
  events_url: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  forks_url: string;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;

  /**
   * Whether discussions are enabled.
   */
  has_discussions?: boolean;

  /**
   * Whether downloads are enabled.
   *
   * @deprecated
   */
  has_downloads: boolean;

  /**
   * Whether issues are enabled.
   */
  has_issues: boolean;
  has_pages: boolean;

  /**
   * Whether projects are enabled.
   */
  has_projects: boolean;

  /**
   * Whether the wiki is enabled.
   */
  has_wiki: boolean;
  homepage: string | null;
  hooks_url: string;
  html_url: string;

  /**
   * Unique identifier of the repository
   */
  id: number;

  /**
   * Whether this repository acts as a template that can be used to generate new repositories.
   */
  is_template?: boolean;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  language: string | null;
  languages_url: string;
  license: NullableLicenseSimple | null;
  master_branch?: string;

  /**
   * The default value for a merge commit message.
   *
   * - `PR_TITLE` - default to the pull request's title.
   * - `PR_BODY` - default to the pull request's body.
   * - `BLANK` - default to a blank commit message.
   */
  merge_commit_message?: 'PR_BODY' | 'PR_TITLE' | 'BLANK';

  /**
   * The default value for a merge commit title.
   *
   * - `PR_TITLE` - default to the pull request's title.
   * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
   */
  merge_commit_title?: 'PR_TITLE' | 'MERGE_MESSAGE';
  merges_url: string;
  milestones_url: string;
  mirror_url: string | null;

  /**
   * The name of the repository.
   */
  name: string;
  node_id: string;
  notifications_url: string;
  open_issues: number;
  open_issues_count: number;
  owner: SimpleUser;
  permissions?: {
'admin': boolean;
'pull': boolean;
'triage'?: boolean;
'push': boolean;
'maintain'?: boolean;
};

  /**
   * Whether the repository is private or public.
   */
  private: boolean;
  pulls_url: string;
  pushed_at: string | null;
  releases_url: string;

  /**
   * The size of the repository, in kilobytes. Size is calculated hourly. When a repository is initially created, the size is 0.
   */
  size: number;

  /**
   * The default value for a squash merge commit message:
   *
   * - `PR_BODY` - default to the pull request's body.
   * - `COMMIT_MESSAGES` - default to the branch's commit messages.
   * - `BLANK` - default to a blank commit message.
   */
  squash_merge_commit_message?: 'PR_BODY' | 'COMMIT_MESSAGES' | 'BLANK';

  /**
   * The default value for a squash merge commit title:
   *
   * - `PR_TITLE` - default to the pull request's title.
   * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
   */
  squash_merge_commit_title?: 'PR_TITLE' | 'COMMIT_OR_PR_TITLE';
  ssh_url: string;
  stargazers_count: number;
  stargazers_url: string;
  starred_at?: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  svn_url: string;
  tags_url: string;
  teams_url: string;
  temp_clone_token?: string;
  topics?: Array<string>;
  trees_url: string;
  updated_at: string | null;
  url: string;

  /**
   * Whether a squash merge commit can use the pull request title as default. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
   *
   * @deprecated
   */
  use_squash_pr_title_as_default?: boolean;

  /**
   * The repository visibility: public, private, or internal.
   */
  visibility?: string;
  watchers: number;
  watchers_count: number;

  /**
   * Whether to require contributors to sign off on web-based commits
   */
  web_commit_signoff_required?: boolean;
}
