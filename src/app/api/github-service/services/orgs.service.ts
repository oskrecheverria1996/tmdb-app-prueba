/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { HookDelivery } from '../models/hook-delivery';
import { HookDeliveryItem } from '../models/hook-delivery-item';
import { Installation } from '../models/installation';
import { MinimalRepository } from '../models/minimal-repository';
import { OrgCustomProperty } from '../models/org-custom-property';
import { OrgHook } from '../models/org-hook';
import { OrgMembership } from '../models/org-membership';
import { OrgRepoCustomPropertyValues } from '../models/org-repo-custom-property-values';
import { OrganizationFineGrainedPermission } from '../models/organization-fine-grained-permission';
import { OrganizationFull } from '../models/organization-full';
import { OrganizationInvitation } from '../models/organization-invitation';
import { OrganizationProgrammaticAccessGrant } from '../models/organization-programmatic-access-grant';
import { OrganizationProgrammaticAccessGrantRequest } from '../models/organization-programmatic-access-grant-request';
import { OrganizationRole } from '../models/organization-role';
import { OrganizationSimple } from '../models/organization-simple';
import { orgsAddSecurityManagerTeam } from '../fn/orgs/orgs-add-security-manager-team';
import { OrgsAddSecurityManagerTeam$Params } from '../fn/orgs/orgs-add-security-manager-team';
import { orgsAssignTeamToOrgRole } from '../fn/orgs/orgs-assign-team-to-org-role';
import { OrgsAssignTeamToOrgRole$Params } from '../fn/orgs/orgs-assign-team-to-org-role';
import { orgsAssignUserToOrgRole } from '../fn/orgs/orgs-assign-user-to-org-role';
import { OrgsAssignUserToOrgRole$Params } from '../fn/orgs/orgs-assign-user-to-org-role';
import { orgsBlockUser } from '../fn/orgs/orgs-block-user';
import { OrgsBlockUser$Params } from '../fn/orgs/orgs-block-user';
import { orgsCancelInvitation } from '../fn/orgs/orgs-cancel-invitation';
import { OrgsCancelInvitation$Params } from '../fn/orgs/orgs-cancel-invitation';
import { orgsCheckBlockedUser } from '../fn/orgs/orgs-check-blocked-user';
import { OrgsCheckBlockedUser$Params } from '../fn/orgs/orgs-check-blocked-user';
import { orgsCheckMembershipForUser } from '../fn/orgs/orgs-check-membership-for-user';
import { OrgsCheckMembershipForUser$Params } from '../fn/orgs/orgs-check-membership-for-user';
import { orgsCheckPublicMembershipForUser } from '../fn/orgs/orgs-check-public-membership-for-user';
import { OrgsCheckPublicMembershipForUser$Params } from '../fn/orgs/orgs-check-public-membership-for-user';
import { orgsConvertMemberToOutsideCollaborator } from '../fn/orgs/orgs-convert-member-to-outside-collaborator';
import { OrgsConvertMemberToOutsideCollaborator$Params } from '../fn/orgs/orgs-convert-member-to-outside-collaborator';
import { orgsCreateCustomOrganizationRole } from '../fn/orgs/orgs-create-custom-organization-role';
import { OrgsCreateCustomOrganizationRole$Params } from '../fn/orgs/orgs-create-custom-organization-role';
import { orgsCreateInvitation } from '../fn/orgs/orgs-create-invitation';
import { OrgsCreateInvitation$Params } from '../fn/orgs/orgs-create-invitation';
import { orgsCreateOrUpdateCustomProperties } from '../fn/orgs/orgs-create-or-update-custom-properties';
import { OrgsCreateOrUpdateCustomProperties$Params } from '../fn/orgs/orgs-create-or-update-custom-properties';
import { orgsCreateOrUpdateCustomPropertiesValuesForRepos } from '../fn/orgs/orgs-create-or-update-custom-properties-values-for-repos';
import { OrgsCreateOrUpdateCustomPropertiesValuesForRepos$Params } from '../fn/orgs/orgs-create-or-update-custom-properties-values-for-repos';
import { orgsCreateOrUpdateCustomProperty } from '../fn/orgs/orgs-create-or-update-custom-property';
import { OrgsCreateOrUpdateCustomProperty$Params } from '../fn/orgs/orgs-create-or-update-custom-property';
import { orgsCreateWebhook } from '../fn/orgs/orgs-create-webhook';
import { OrgsCreateWebhook$Params } from '../fn/orgs/orgs-create-webhook';
import { orgsDelete } from '../fn/orgs/orgs-delete';
import { OrgsDelete$Params } from '../fn/orgs/orgs-delete';
import { orgsDeleteCustomOrganizationRole } from '../fn/orgs/orgs-delete-custom-organization-role';
import { OrgsDeleteCustomOrganizationRole$Params } from '../fn/orgs/orgs-delete-custom-organization-role';
import { orgsDeleteWebhook } from '../fn/orgs/orgs-delete-webhook';
import { OrgsDeleteWebhook$Params } from '../fn/orgs/orgs-delete-webhook';
import { orgsEnableOrDisableSecurityProductOnAllOrgRepos } from '../fn/orgs/orgs-enable-or-disable-security-product-on-all-org-repos';
import { OrgsEnableOrDisableSecurityProductOnAllOrgRepos$Params } from '../fn/orgs/orgs-enable-or-disable-security-product-on-all-org-repos';
import { orgsGet } from '../fn/orgs/orgs-get';
import { OrgsGet$Params } from '../fn/orgs/orgs-get';
import { orgsGetAllCustomProperties } from '../fn/orgs/orgs-get-all-custom-properties';
import { OrgsGetAllCustomProperties$Params } from '../fn/orgs/orgs-get-all-custom-properties';
import { orgsGetCustomProperty } from '../fn/orgs/orgs-get-custom-property';
import { OrgsGetCustomProperty$Params } from '../fn/orgs/orgs-get-custom-property';
import { orgsGetMembershipForAuthenticatedUser } from '../fn/orgs/orgs-get-membership-for-authenticated-user';
import { OrgsGetMembershipForAuthenticatedUser$Params } from '../fn/orgs/orgs-get-membership-for-authenticated-user';
import { orgsGetMembershipForUser } from '../fn/orgs/orgs-get-membership-for-user';
import { OrgsGetMembershipForUser$Params } from '../fn/orgs/orgs-get-membership-for-user';
import { orgsGetOrgRole } from '../fn/orgs/orgs-get-org-role';
import { OrgsGetOrgRole$Params } from '../fn/orgs/orgs-get-org-role';
import { orgsGetWebhook } from '../fn/orgs/orgs-get-webhook';
import { OrgsGetWebhook$Params } from '../fn/orgs/orgs-get-webhook';
import { orgsGetWebhookConfigForOrg } from '../fn/orgs/orgs-get-webhook-config-for-org';
import { OrgsGetWebhookConfigForOrg$Params } from '../fn/orgs/orgs-get-webhook-config-for-org';
import { orgsGetWebhookDelivery } from '../fn/orgs/orgs-get-webhook-delivery';
import { OrgsGetWebhookDelivery$Params } from '../fn/orgs/orgs-get-webhook-delivery';
import { orgsList } from '../fn/orgs/orgs-list';
import { OrgsList$Params } from '../fn/orgs/orgs-list';
import { orgsListAppInstallations } from '../fn/orgs/orgs-list-app-installations';
import { OrgsListAppInstallations$Params } from '../fn/orgs/orgs-list-app-installations';
import { orgsListAttestations } from '../fn/orgs/orgs-list-attestations';
import { OrgsListAttestations$Params } from '../fn/orgs/orgs-list-attestations';
import { orgsListBlockedUsers } from '../fn/orgs/orgs-list-blocked-users';
import { OrgsListBlockedUsers$Params } from '../fn/orgs/orgs-list-blocked-users';
import { orgsListCustomPropertiesValuesForRepos } from '../fn/orgs/orgs-list-custom-properties-values-for-repos';
import { OrgsListCustomPropertiesValuesForRepos$Params } from '../fn/orgs/orgs-list-custom-properties-values-for-repos';
import { orgsListFailedInvitations } from '../fn/orgs/orgs-list-failed-invitations';
import { OrgsListFailedInvitations$Params } from '../fn/orgs/orgs-list-failed-invitations';
import { orgsListForAuthenticatedUser } from '../fn/orgs/orgs-list-for-authenticated-user';
import { OrgsListForAuthenticatedUser$Params } from '../fn/orgs/orgs-list-for-authenticated-user';
import { orgsListForUser } from '../fn/orgs/orgs-list-for-user';
import { OrgsListForUser$Params } from '../fn/orgs/orgs-list-for-user';
import { orgsListInvitationTeams } from '../fn/orgs/orgs-list-invitation-teams';
import { OrgsListInvitationTeams$Params } from '../fn/orgs/orgs-list-invitation-teams';
import { orgsListMembers } from '../fn/orgs/orgs-list-members';
import { OrgsListMembers$Params } from '../fn/orgs/orgs-list-members';
import { orgsListMembershipsForAuthenticatedUser } from '../fn/orgs/orgs-list-memberships-for-authenticated-user';
import { OrgsListMembershipsForAuthenticatedUser$Params } from '../fn/orgs/orgs-list-memberships-for-authenticated-user';
import { orgsListOrganizationFineGrainedPermissions } from '../fn/orgs/orgs-list-organization-fine-grained-permissions';
import { OrgsListOrganizationFineGrainedPermissions$Params } from '../fn/orgs/orgs-list-organization-fine-grained-permissions';
import { orgsListOrgRoles } from '../fn/orgs/orgs-list-org-roles';
import { OrgsListOrgRoles$Params } from '../fn/orgs/orgs-list-org-roles';
import { orgsListOrgRoleTeams } from '../fn/orgs/orgs-list-org-role-teams';
import { OrgsListOrgRoleTeams$Params } from '../fn/orgs/orgs-list-org-role-teams';
import { orgsListOrgRoleUsers } from '../fn/orgs/orgs-list-org-role-users';
import { OrgsListOrgRoleUsers$Params } from '../fn/orgs/orgs-list-org-role-users';
import { orgsListOutsideCollaborators } from '../fn/orgs/orgs-list-outside-collaborators';
import { OrgsListOutsideCollaborators$Params } from '../fn/orgs/orgs-list-outside-collaborators';
import { orgsListPatGrantRepositories } from '../fn/orgs/orgs-list-pat-grant-repositories';
import { OrgsListPatGrantRepositories$Params } from '../fn/orgs/orgs-list-pat-grant-repositories';
import { orgsListPatGrantRequestRepositories } from '../fn/orgs/orgs-list-pat-grant-request-repositories';
import { OrgsListPatGrantRequestRepositories$Params } from '../fn/orgs/orgs-list-pat-grant-request-repositories';
import { orgsListPatGrantRequests } from '../fn/orgs/orgs-list-pat-grant-requests';
import { OrgsListPatGrantRequests$Params } from '../fn/orgs/orgs-list-pat-grant-requests';
import { orgsListPatGrants } from '../fn/orgs/orgs-list-pat-grants';
import { OrgsListPatGrants$Params } from '../fn/orgs/orgs-list-pat-grants';
import { orgsListPendingInvitations } from '../fn/orgs/orgs-list-pending-invitations';
import { OrgsListPendingInvitations$Params } from '../fn/orgs/orgs-list-pending-invitations';
import { orgsListPublicMembers } from '../fn/orgs/orgs-list-public-members';
import { OrgsListPublicMembers$Params } from '../fn/orgs/orgs-list-public-members';
import { orgsListSecurityManagerTeams } from '../fn/orgs/orgs-list-security-manager-teams';
import { OrgsListSecurityManagerTeams$Params } from '../fn/orgs/orgs-list-security-manager-teams';
import { orgsListWebhookDeliveries } from '../fn/orgs/orgs-list-webhook-deliveries';
import { OrgsListWebhookDeliveries$Params } from '../fn/orgs/orgs-list-webhook-deliveries';
import { orgsListWebhooks } from '../fn/orgs/orgs-list-webhooks';
import { OrgsListWebhooks$Params } from '../fn/orgs/orgs-list-webhooks';
import { orgsPatchCustomOrganizationRole } from '../fn/orgs/orgs-patch-custom-organization-role';
import { OrgsPatchCustomOrganizationRole$Params } from '../fn/orgs/orgs-patch-custom-organization-role';
import { orgsPingWebhook } from '../fn/orgs/orgs-ping-webhook';
import { OrgsPingWebhook$Params } from '../fn/orgs/orgs-ping-webhook';
import { orgsRedeliverWebhookDelivery } from '../fn/orgs/orgs-redeliver-webhook-delivery';
import { OrgsRedeliverWebhookDelivery$Params } from '../fn/orgs/orgs-redeliver-webhook-delivery';
import { orgsRemoveCustomProperty } from '../fn/orgs/orgs-remove-custom-property';
import { OrgsRemoveCustomProperty$Params } from '../fn/orgs/orgs-remove-custom-property';
import { orgsRemoveMember } from '../fn/orgs/orgs-remove-member';
import { OrgsRemoveMember$Params } from '../fn/orgs/orgs-remove-member';
import { orgsRemoveMembershipForUser } from '../fn/orgs/orgs-remove-membership-for-user';
import { OrgsRemoveMembershipForUser$Params } from '../fn/orgs/orgs-remove-membership-for-user';
import { orgsRemoveOutsideCollaborator } from '../fn/orgs/orgs-remove-outside-collaborator';
import { OrgsRemoveOutsideCollaborator$Params } from '../fn/orgs/orgs-remove-outside-collaborator';
import { orgsRemovePublicMembershipForAuthenticatedUser } from '../fn/orgs/orgs-remove-public-membership-for-authenticated-user';
import { OrgsRemovePublicMembershipForAuthenticatedUser$Params } from '../fn/orgs/orgs-remove-public-membership-for-authenticated-user';
import { orgsRemoveSecurityManagerTeam } from '../fn/orgs/orgs-remove-security-manager-team';
import { OrgsRemoveSecurityManagerTeam$Params } from '../fn/orgs/orgs-remove-security-manager-team';
import { orgsReviewPatGrantRequest } from '../fn/orgs/orgs-review-pat-grant-request';
import { OrgsReviewPatGrantRequest$Params } from '../fn/orgs/orgs-review-pat-grant-request';
import { orgsReviewPatGrantRequestsInBulk } from '../fn/orgs/orgs-review-pat-grant-requests-in-bulk';
import { OrgsReviewPatGrantRequestsInBulk$Params } from '../fn/orgs/orgs-review-pat-grant-requests-in-bulk';
import { orgsRevokeAllOrgRolesTeam } from '../fn/orgs/orgs-revoke-all-org-roles-team';
import { OrgsRevokeAllOrgRolesTeam$Params } from '../fn/orgs/orgs-revoke-all-org-roles-team';
import { orgsRevokeAllOrgRolesUser } from '../fn/orgs/orgs-revoke-all-org-roles-user';
import { OrgsRevokeAllOrgRolesUser$Params } from '../fn/orgs/orgs-revoke-all-org-roles-user';
import { orgsRevokeOrgRoleTeam } from '../fn/orgs/orgs-revoke-org-role-team';
import { OrgsRevokeOrgRoleTeam$Params } from '../fn/orgs/orgs-revoke-org-role-team';
import { orgsRevokeOrgRoleUser } from '../fn/orgs/orgs-revoke-org-role-user';
import { OrgsRevokeOrgRoleUser$Params } from '../fn/orgs/orgs-revoke-org-role-user';
import { orgsSetMembershipForUser } from '../fn/orgs/orgs-set-membership-for-user';
import { OrgsSetMembershipForUser$Params } from '../fn/orgs/orgs-set-membership-for-user';
import { orgsSetPublicMembershipForAuthenticatedUser } from '../fn/orgs/orgs-set-public-membership-for-authenticated-user';
import { OrgsSetPublicMembershipForAuthenticatedUser$Params } from '../fn/orgs/orgs-set-public-membership-for-authenticated-user';
import { orgsUnblockUser } from '../fn/orgs/orgs-unblock-user';
import { OrgsUnblockUser$Params } from '../fn/orgs/orgs-unblock-user';
import { orgsUpdate } from '../fn/orgs/orgs-update';
import { OrgsUpdate$Params } from '../fn/orgs/orgs-update';
import { orgsUpdateMembershipForAuthenticatedUser } from '../fn/orgs/orgs-update-membership-for-authenticated-user';
import { OrgsUpdateMembershipForAuthenticatedUser$Params } from '../fn/orgs/orgs-update-membership-for-authenticated-user';
import { orgsUpdatePatAccess } from '../fn/orgs/orgs-update-pat-access';
import { OrgsUpdatePatAccess$Params } from '../fn/orgs/orgs-update-pat-access';
import { orgsUpdatePatAccesses } from '../fn/orgs/orgs-update-pat-accesses';
import { OrgsUpdatePatAccesses$Params } from '../fn/orgs/orgs-update-pat-accesses';
import { orgsUpdateWebhook } from '../fn/orgs/orgs-update-webhook';
import { OrgsUpdateWebhook$Params } from '../fn/orgs/orgs-update-webhook';
import { orgsUpdateWebhookConfigForOrg } from '../fn/orgs/orgs-update-webhook-config-for-org';
import { OrgsUpdateWebhookConfigForOrg$Params } from '../fn/orgs/orgs-update-webhook-config-for-org';
import { SimpleUser } from '../models/simple-user';
import { Team } from '../models/team';
import { TeamRoleAssignment } from '../models/team-role-assignment';
import { TeamSimple } from '../models/team-simple';
import { UserRoleAssignment } from '../models/user-role-assignment';
import { WebhookConfig } from '../models/webhook-config';


/**
 * Interact with GitHub Orgs.
 */
@Injectable({ providedIn: 'root' })
export class OrgsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `orgsList()` */
  static readonly OrgsListPath = '/organizations';

  /**
   * List organizations.
   *
   * Lists all organizations, in the order that they were created.
   *
   * **Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers) to get the URL for the next page of organizations.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsList()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsList$Response(params?: OrgsList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrganizationSimple>>> {
    return orgsList(this.http, this.rootUrl, params, context);
  }

  /**
   * List organizations.
   *
   * Lists all organizations, in the order that they were created.
   *
   * **Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers) to get the URL for the next page of organizations.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsList(params?: OrgsList$Params, context?: HttpContext): Observable<Array<OrganizationSimple>> {
    return this.orgsList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OrganizationSimple>>): Array<OrganizationSimple> => r.body)
    );
  }

  /** Path part for operation `orgsGet()` */
  static readonly OrgsGetPath = '/orgs/{org}';

  /**
   * Get an organization.
   *
   * Gets information about an organization.
   *
   * When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://docs.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).
   *
   * To see the full details about an organization, the authenticated user must be an organization owner.
   *
   * The values returned by this endpoint are set by the "Update an organization" endpoint. If your organization set a default security configuration (beta), the following values retrieved from the "Update an organization" endpoint have been overwritten by that configuration:
   *
   * - advanced_security_enabled_for_new_repositories
   * - dependabot_alerts_enabled_for_new_repositories
   * - dependabot_security_updates_enabled_for_new_repositories
   * - dependency_graph_enabled_for_new_repositories
   * - secret_scanning_enabled_for_new_repositories
   * - secret_scanning_push_protection_enabled_for_new_repositories
   *
   * For more information on security configurations, see "[Enabling security features at scale](https://docs.github.com/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale)."
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to see the full details about an organization.
   *
   * To see information about an organization's GitHub plan, GitHub Apps need the `Organization plan` permission.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGet$Response(params: OrgsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<OrganizationFull>> {
    return orgsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get an organization.
   *
   * Gets information about an organization.
   *
   * When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://docs.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).
   *
   * To see the full details about an organization, the authenticated user must be an organization owner.
   *
   * The values returned by this endpoint are set by the "Update an organization" endpoint. If your organization set a default security configuration (beta), the following values retrieved from the "Update an organization" endpoint have been overwritten by that configuration:
   *
   * - advanced_security_enabled_for_new_repositories
   * - dependabot_alerts_enabled_for_new_repositories
   * - dependabot_security_updates_enabled_for_new_repositories
   * - dependency_graph_enabled_for_new_repositories
   * - secret_scanning_enabled_for_new_repositories
   * - secret_scanning_push_protection_enabled_for_new_repositories
   *
   * For more information on security configurations, see "[Enabling security features at scale](https://docs.github.com/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale)."
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to see the full details about an organization.
   *
   * To see information about an organization's GitHub plan, GitHub Apps need the `Organization plan` permission.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGet(params: OrgsGet$Params, context?: HttpContext): Observable<OrganizationFull> {
    return this.orgsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrganizationFull>): OrganizationFull => r.body)
    );
  }

  /** Path part for operation `orgsDelete()` */
  static readonly OrgsDeletePath = '/orgs/{org}';

  /**
   * Delete an organization.
   *
   * Deletes an organization and all its repositories.
   *
   * The organization login will be unavailable for 90 days after deletion.
   *
   * Please review the Terms of Service regarding account deletion before using this endpoint:
   *
   * https://docs.github.com/site-policy/github-terms/github-terms-of-service
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsDelete$Response(params: OrgsDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return orgsDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete an organization.
   *
   * Deletes an organization and all its repositories.
   *
   * The organization login will be unavailable for 90 days after deletion.
   *
   * Please review the Terms of Service regarding account deletion before using this endpoint:
   *
   * https://docs.github.com/site-policy/github-terms/github-terms-of-service
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsDelete(params: OrgsDelete$Params, context?: HttpContext): Observable<{
}> {
    return this.orgsDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `orgsUpdate()` */
  static readonly OrgsUpdatePath = '/orgs/{org}';

  /**
   * Update an organization.
   *
   * **Parameter Deprecation Notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).
   *
   * Updates the organization's profile and member privileges.
   *
   * With security configurations (beta), your organization can choose a default security configuration which will automatically apply a set of security enablement settings to new repositories in your organization based on their visibility. For targeted repositories, the following attributes will be overridden by the default security configuration:
   *
   * - advanced_security_enabled_for_new_repositories
   * - dependabot_alerts_enabled_for_new_repositories
   * - dependabot_security_updates_enabled_for_new_repositories
   * - dependency_graph_enabled_for_new_repositories
   * - secret_scanning_enabled_for_new_repositories
   * - secret_scanning_push_protection_enabled_for_new_repositories
   *
   * For more information on setting a default security configuration, see "[Enabling security features at scale](https://docs.github.com/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale)."
   *
   * The authenticated user must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` or `repo` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsUpdate$Response(params: OrgsUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<OrganizationFull>> {
    return orgsUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * Update an organization.
   *
   * **Parameter Deprecation Notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).
   *
   * Updates the organization's profile and member privileges.
   *
   * With security configurations (beta), your organization can choose a default security configuration which will automatically apply a set of security enablement settings to new repositories in your organization based on their visibility. For targeted repositories, the following attributes will be overridden by the default security configuration:
   *
   * - advanced_security_enabled_for_new_repositories
   * - dependabot_alerts_enabled_for_new_repositories
   * - dependabot_security_updates_enabled_for_new_repositories
   * - dependency_graph_enabled_for_new_repositories
   * - secret_scanning_enabled_for_new_repositories
   * - secret_scanning_push_protection_enabled_for_new_repositories
   *
   * For more information on setting a default security configuration, see "[Enabling security features at scale](https://docs.github.com/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale)."
   *
   * The authenticated user must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` or `repo` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsUpdate(params: OrgsUpdate$Params, context?: HttpContext): Observable<OrganizationFull> {
    return this.orgsUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrganizationFull>): OrganizationFull => r.body)
    );
  }

  /** Path part for operation `orgsListAttestations()` */
  static readonly OrgsListAttestationsPath = '/orgs/{org}/attestations/{subject_digest}';

  /**
   * List attestations.
   *
   * List a collection of artifact attestations with a given subject digest that are associated with repositories owned by an organization.
   *
   * The collection of attestations returned by this endpoint is filtered according to the authenticated user's permissions; if the authenticated user cannot read a repository, the attestations associated with that repository will not be included in the response. In addition, when using a fine-grained access token the `attestations:read` permission is required.
   *
   * **Please note:** in order to offer meaningful security benefits, an attestation's signature and timestamps **must** be cryptographically verified, and the identity of the attestation signer **must** be validated. Attestations can be verified using the [GitHub CLI `attestation verify` command](https://cli.github.com/manual/gh_attestation_verify). For more information, see [our guide on how to use artifact attestations to establish a build's provenance](https://docs.github.com/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListAttestations()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListAttestations$Response(params: OrgsListAttestations$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'attestations'?: Array<{

/**
 * The attestation's Sigstore Bundle.
 * Refer to the [Sigstore Bundle Specification](https://github.com/sigstore/protobuf-specs/blob/main/protos/sigstore_bundle.proto) for more information.
 */
'bundle'?: {
'mediaType'?: string;
'verificationMaterial'?: {
[key: string]: any;
};
'dsseEnvelope'?: {
[key: string]: any;
};
};
'repository_id'?: number;
}>;
}>> {
    return orgsListAttestations(this.http, this.rootUrl, params, context);
  }

  /**
   * List attestations.
   *
   * List a collection of artifact attestations with a given subject digest that are associated with repositories owned by an organization.
   *
   * The collection of attestations returned by this endpoint is filtered according to the authenticated user's permissions; if the authenticated user cannot read a repository, the attestations associated with that repository will not be included in the response. In addition, when using a fine-grained access token the `attestations:read` permission is required.
   *
   * **Please note:** in order to offer meaningful security benefits, an attestation's signature and timestamps **must** be cryptographically verified, and the identity of the attestation signer **must** be validated. Attestations can be verified using the [GitHub CLI `attestation verify` command](https://cli.github.com/manual/gh_attestation_verify). For more information, see [our guide on how to use artifact attestations to establish a build's provenance](https://docs.github.com/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds).
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListAttestations$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListAttestations(params: OrgsListAttestations$Params, context?: HttpContext): Observable<{
'attestations'?: Array<{

/**
 * The attestation's Sigstore Bundle.
 * Refer to the [Sigstore Bundle Specification](https://github.com/sigstore/protobuf-specs/blob/main/protos/sigstore_bundle.proto) for more information.
 */
'bundle'?: {
'mediaType'?: string;
'verificationMaterial'?: {
[key: string]: any;
};
'dsseEnvelope'?: {
[key: string]: any;
};
};
'repository_id'?: number;
}>;
}> {
    return this.orgsListAttestations$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'attestations'?: Array<{

/**
 * The attestation's Sigstore Bundle.
 * Refer to the [Sigstore Bundle Specification](https://github.com/sigstore/protobuf-specs/blob/main/protos/sigstore_bundle.proto) for more information.
 */
'bundle'?: {
'mediaType'?: string;
'verificationMaterial'?: {
[key: string]: any;
};
'dsseEnvelope'?: {
[key: string]: any;
};
};
'repository_id'?: number;
}>;
}>): {
'attestations'?: Array<{

/**
 * The attestation's Sigstore Bundle.
 * Refer to the [Sigstore Bundle Specification](https://github.com/sigstore/protobuf-specs/blob/main/protos/sigstore_bundle.proto) for more information.
 */
'bundle'?: {
'mediaType'?: string;
'verificationMaterial'?: {
[key: string]: any;
};
'dsseEnvelope'?: {
[key: string]: any;
};
};
'repository_id'?: number;
}>;
} => r.body)
    );
  }

  /** Path part for operation `orgsListBlockedUsers()` */
  static readonly OrgsListBlockedUsersPath = '/orgs/{org}/blocks';

  /**
   * List users blocked by an organization.
   *
   * List the users blocked by an organization.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListBlockedUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListBlockedUsers$Response(params: OrgsListBlockedUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SimpleUser>>> {
    return orgsListBlockedUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * List users blocked by an organization.
   *
   * List the users blocked by an organization.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListBlockedUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListBlockedUsers(params: OrgsListBlockedUsers$Params, context?: HttpContext): Observable<Array<SimpleUser>> {
    return this.orgsListBlockedUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SimpleUser>>): Array<SimpleUser> => r.body)
    );
  }

  /** Path part for operation `orgsCheckBlockedUser()` */
  static readonly OrgsCheckBlockedUserPath = '/orgs/{org}/blocks/{username}';

  /**
   * Check if a user is blocked by an organization.
   *
   * Returns a 204 if the given user is blocked by the given organization. Returns a 404 if the organization is not blocking the user, or if the user account has been identified as spam by GitHub.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsCheckBlockedUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsCheckBlockedUser$Response(params: OrgsCheckBlockedUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsCheckBlockedUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Check if a user is blocked by an organization.
   *
   * Returns a 204 if the given user is blocked by the given organization. Returns a 404 if the organization is not blocking the user, or if the user account has been identified as spam by GitHub.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsCheckBlockedUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsCheckBlockedUser(params: OrgsCheckBlockedUser$Params, context?: HttpContext): Observable<void> {
    return this.orgsCheckBlockedUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsBlockUser()` */
  static readonly OrgsBlockUserPath = '/orgs/{org}/blocks/{username}';

  /**
   * Block a user from an organization.
   *
   * Blocks the given user on behalf of the specified organization and returns a 204. If the organization cannot block the given user a 422 is returned.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsBlockUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsBlockUser$Response(params: OrgsBlockUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsBlockUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Block a user from an organization.
   *
   * Blocks the given user on behalf of the specified organization and returns a 204. If the organization cannot block the given user a 422 is returned.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsBlockUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsBlockUser(params: OrgsBlockUser$Params, context?: HttpContext): Observable<void> {
    return this.orgsBlockUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsUnblockUser()` */
  static readonly OrgsUnblockUserPath = '/orgs/{org}/blocks/{username}';

  /**
   * Unblock a user from an organization.
   *
   * Unblocks the given user on behalf of the specified organization.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsUnblockUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsUnblockUser$Response(params: OrgsUnblockUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsUnblockUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Unblock a user from an organization.
   *
   * Unblocks the given user on behalf of the specified organization.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsUnblockUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsUnblockUser(params: OrgsUnblockUser$Params, context?: HttpContext): Observable<void> {
    return this.orgsUnblockUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsListFailedInvitations()` */
  static readonly OrgsListFailedInvitationsPath = '/orgs/{org}/failed_invitations';

  /**
   * List failed organization invitations.
   *
   * The return hash contains `failed_at` and `failed_reason` fields which represent the time at which the invitation failed and the reason for the failure.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListFailedInvitations()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListFailedInvitations$Response(params: OrgsListFailedInvitations$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrganizationInvitation>>> {
    return orgsListFailedInvitations(this.http, this.rootUrl, params, context);
  }

  /**
   * List failed organization invitations.
   *
   * The return hash contains `failed_at` and `failed_reason` fields which represent the time at which the invitation failed and the reason for the failure.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListFailedInvitations$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListFailedInvitations(params: OrgsListFailedInvitations$Params, context?: HttpContext): Observable<Array<OrganizationInvitation>> {
    return this.orgsListFailedInvitations$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OrganizationInvitation>>): Array<OrganizationInvitation> => r.body)
    );
  }

  /** Path part for operation `orgsListWebhooks()` */
  static readonly OrgsListWebhooksPath = '/orgs/{org}/hooks';

  /**
   * List organization webhooks.
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListWebhooks()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListWebhooks$Response(params: OrgsListWebhooks$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrgHook>>> {
    return orgsListWebhooks(this.http, this.rootUrl, params, context);
  }

  /**
   * List organization webhooks.
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListWebhooks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListWebhooks(params: OrgsListWebhooks$Params, context?: HttpContext): Observable<Array<OrgHook>> {
    return this.orgsListWebhooks$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OrgHook>>): Array<OrgHook> => r.body)
    );
  }

  /** Path part for operation `orgsCreateWebhook()` */
  static readonly OrgsCreateWebhookPath = '/orgs/{org}/hooks';

  /**
   * Create an organization webhook.
   *
   * Create a hook that posts payloads in JSON format.
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or
   * edit webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsCreateWebhook()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsCreateWebhook$Response(params: OrgsCreateWebhook$Params, context?: HttpContext): Observable<StrictHttpResponse<OrgHook>> {
    return orgsCreateWebhook(this.http, this.rootUrl, params, context);
  }

  /**
   * Create an organization webhook.
   *
   * Create a hook that posts payloads in JSON format.
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or
   * edit webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsCreateWebhook$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsCreateWebhook(params: OrgsCreateWebhook$Params, context?: HttpContext): Observable<OrgHook> {
    return this.orgsCreateWebhook$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrgHook>): OrgHook => r.body)
    );
  }

  /** Path part for operation `orgsGetWebhook()` */
  static readonly OrgsGetWebhookPath = '/orgs/{org}/hooks/{hook_id}';

  /**
   * Get an organization webhook.
   *
   * Returns a webhook configured in an organization. To get only the webhook
   * `config` properties, see "[Get a webhook configuration for an organization](/rest/orgs/webhooks#get-a-webhook-configuration-for-an-organization).
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsGetWebhook()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGetWebhook$Response(params: OrgsGetWebhook$Params, context?: HttpContext): Observable<StrictHttpResponse<OrgHook>> {
    return orgsGetWebhook(this.http, this.rootUrl, params, context);
  }

  /**
   * Get an organization webhook.
   *
   * Returns a webhook configured in an organization. To get only the webhook
   * `config` properties, see "[Get a webhook configuration for an organization](/rest/orgs/webhooks#get-a-webhook-configuration-for-an-organization).
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsGetWebhook$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGetWebhook(params: OrgsGetWebhook$Params, context?: HttpContext): Observable<OrgHook> {
    return this.orgsGetWebhook$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrgHook>): OrgHook => r.body)
    );
  }

  /** Path part for operation `orgsDeleteWebhook()` */
  static readonly OrgsDeleteWebhookPath = '/orgs/{org}/hooks/{hook_id}';

  /**
   * Delete an organization webhook.
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsDeleteWebhook()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsDeleteWebhook$Response(params: OrgsDeleteWebhook$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsDeleteWebhook(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete an organization webhook.
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsDeleteWebhook$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsDeleteWebhook(params: OrgsDeleteWebhook$Params, context?: HttpContext): Observable<void> {
    return this.orgsDeleteWebhook$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsUpdateWebhook()` */
  static readonly OrgsUpdateWebhookPath = '/orgs/{org}/hooks/{hook_id}';

  /**
   * Update an organization webhook.
   *
   * Updates a webhook configured in an organization. When you update a webhook,
   * the `secret` will be overwritten. If you previously had a `secret` set, you must
   * provide the same `secret` or set a new `secret` or the secret will be removed. If
   * you are only updating individual webhook `config` properties, use "[Update a webhook
   * configuration for an organization](/rest/orgs/webhooks#update-a-webhook-configuration-for-an-organization)".
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsUpdateWebhook()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsUpdateWebhook$Response(params: OrgsUpdateWebhook$Params, context?: HttpContext): Observable<StrictHttpResponse<OrgHook>> {
    return orgsUpdateWebhook(this.http, this.rootUrl, params, context);
  }

  /**
   * Update an organization webhook.
   *
   * Updates a webhook configured in an organization. When you update a webhook,
   * the `secret` will be overwritten. If you previously had a `secret` set, you must
   * provide the same `secret` or set a new `secret` or the secret will be removed. If
   * you are only updating individual webhook `config` properties, use "[Update a webhook
   * configuration for an organization](/rest/orgs/webhooks#update-a-webhook-configuration-for-an-organization)".
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsUpdateWebhook$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsUpdateWebhook(params: OrgsUpdateWebhook$Params, context?: HttpContext): Observable<OrgHook> {
    return this.orgsUpdateWebhook$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrgHook>): OrgHook => r.body)
    );
  }

  /** Path part for operation `orgsGetWebhookConfigForOrg()` */
  static readonly OrgsGetWebhookConfigForOrgPath = '/orgs/{org}/hooks/{hook_id}/config';

  /**
   * Get a webhook configuration for an organization.
   *
   * Returns the webhook configuration for an organization. To get more information about the webhook, including the `active` state and `events`, use "[Get an organization webhook ](/rest/orgs/webhooks#get-an-organization-webhook)."
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsGetWebhookConfigForOrg()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGetWebhookConfigForOrg$Response(params: OrgsGetWebhookConfigForOrg$Params, context?: HttpContext): Observable<StrictHttpResponse<WebhookConfig>> {
    return orgsGetWebhookConfigForOrg(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a webhook configuration for an organization.
   *
   * Returns the webhook configuration for an organization. To get more information about the webhook, including the `active` state and `events`, use "[Get an organization webhook ](/rest/orgs/webhooks#get-an-organization-webhook)."
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsGetWebhookConfigForOrg$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGetWebhookConfigForOrg(params: OrgsGetWebhookConfigForOrg$Params, context?: HttpContext): Observable<WebhookConfig> {
    return this.orgsGetWebhookConfigForOrg$Response(params, context).pipe(
      map((r: StrictHttpResponse<WebhookConfig>): WebhookConfig => r.body)
    );
  }

  /** Path part for operation `orgsUpdateWebhookConfigForOrg()` */
  static readonly OrgsUpdateWebhookConfigForOrgPath = '/orgs/{org}/hooks/{hook_id}/config';

  /**
   * Update a webhook configuration for an organization.
   *
   * Updates the webhook configuration for an organization. To update more information about the webhook, including the `active` state and `events`, use "[Update an organization webhook ](/rest/orgs/webhooks#update-an-organization-webhook)."
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsUpdateWebhookConfigForOrg()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsUpdateWebhookConfigForOrg$Response(params: OrgsUpdateWebhookConfigForOrg$Params, context?: HttpContext): Observable<StrictHttpResponse<WebhookConfig>> {
    return orgsUpdateWebhookConfigForOrg(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a webhook configuration for an organization.
   *
   * Updates the webhook configuration for an organization. To update more information about the webhook, including the `active` state and `events`, use "[Update an organization webhook ](/rest/orgs/webhooks#update-an-organization-webhook)."
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsUpdateWebhookConfigForOrg$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsUpdateWebhookConfigForOrg(params: OrgsUpdateWebhookConfigForOrg$Params, context?: HttpContext): Observable<WebhookConfig> {
    return this.orgsUpdateWebhookConfigForOrg$Response(params, context).pipe(
      map((r: StrictHttpResponse<WebhookConfig>): WebhookConfig => r.body)
    );
  }

  /** Path part for operation `orgsListWebhookDeliveries()` */
  static readonly OrgsListWebhookDeliveriesPath = '/orgs/{org}/hooks/{hook_id}/deliveries';

  /**
   * List deliveries for an organization webhook.
   *
   * Returns a list of webhook deliveries for a webhook configured in an organization.
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListWebhookDeliveries()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListWebhookDeliveries$Response(params: OrgsListWebhookDeliveries$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HookDeliveryItem>>> {
    return orgsListWebhookDeliveries(this.http, this.rootUrl, params, context);
  }

  /**
   * List deliveries for an organization webhook.
   *
   * Returns a list of webhook deliveries for a webhook configured in an organization.
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListWebhookDeliveries$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListWebhookDeliveries(params: OrgsListWebhookDeliveries$Params, context?: HttpContext): Observable<Array<HookDeliveryItem>> {
    return this.orgsListWebhookDeliveries$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<HookDeliveryItem>>): Array<HookDeliveryItem> => r.body)
    );
  }

  /** Path part for operation `orgsGetWebhookDelivery()` */
  static readonly OrgsGetWebhookDeliveryPath = '/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}';

  /**
   * Get a webhook delivery for an organization webhook.
   *
   * Returns a delivery for a webhook configured in an organization.
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsGetWebhookDelivery()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGetWebhookDelivery$Response(params: OrgsGetWebhookDelivery$Params, context?: HttpContext): Observable<StrictHttpResponse<HookDelivery>> {
    return orgsGetWebhookDelivery(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a webhook delivery for an organization webhook.
   *
   * Returns a delivery for a webhook configured in an organization.
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsGetWebhookDelivery$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGetWebhookDelivery(params: OrgsGetWebhookDelivery$Params, context?: HttpContext): Observable<HookDelivery> {
    return this.orgsGetWebhookDelivery$Response(params, context).pipe(
      map((r: StrictHttpResponse<HookDelivery>): HookDelivery => r.body)
    );
  }

  /** Path part for operation `orgsRedeliverWebhookDelivery()` */
  static readonly OrgsRedeliverWebhookDeliveryPath = '/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts';

  /**
   * Redeliver a delivery for an organization webhook.
   *
   * Redeliver a delivery for a webhook configured in an organization.
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsRedeliverWebhookDelivery()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRedeliverWebhookDelivery$Response(params: OrgsRedeliverWebhookDelivery$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return orgsRedeliverWebhookDelivery(this.http, this.rootUrl, params, context);
  }

  /**
   * Redeliver a delivery for an organization webhook.
   *
   * Redeliver a delivery for a webhook configured in an organization.
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsRedeliverWebhookDelivery$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRedeliverWebhookDelivery(params: OrgsRedeliverWebhookDelivery$Params, context?: HttpContext): Observable<{
}> {
    return this.orgsRedeliverWebhookDelivery$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `orgsPingWebhook()` */
  static readonly OrgsPingWebhookPath = '/orgs/{org}/hooks/{hook_id}/pings';

  /**
   * Ping an organization webhook.
   *
   * This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event)
   * to be sent to the hook.
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsPingWebhook()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsPingWebhook$Response(params: OrgsPingWebhook$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsPingWebhook(this.http, this.rootUrl, params, context);
  }

  /**
   * Ping an organization webhook.
   *
   * This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event)
   * to be sent to the hook.
   *
   * You must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
   * webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsPingWebhook$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsPingWebhook(params: OrgsPingWebhook$Params, context?: HttpContext): Observable<void> {
    return this.orgsPingWebhook$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsListAppInstallations()` */
  static readonly OrgsListAppInstallationsPath = '/orgs/{org}/installations';

  /**
   * List app installations for an organization.
   *
   * Lists all GitHub Apps in an organization. The installation count includes
   * all GitHub Apps installed on repositories in the organization.
   *
   * The authenticated user must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:read` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListAppInstallations()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListAppInstallations$Response(params: OrgsListAppInstallations$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'total_count': number;
'installations': Array<Installation>;
}>> {
    return orgsListAppInstallations(this.http, this.rootUrl, params, context);
  }

  /**
   * List app installations for an organization.
   *
   * Lists all GitHub Apps in an organization. The installation count includes
   * all GitHub Apps installed on repositories in the organization.
   *
   * The authenticated user must be an organization owner to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:read` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListAppInstallations$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListAppInstallations(params: OrgsListAppInstallations$Params, context?: HttpContext): Observable<{
'total_count': number;
'installations': Array<Installation>;
}> {
    return this.orgsListAppInstallations$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'total_count': number;
'installations': Array<Installation>;
}>): {
'total_count': number;
'installations': Array<Installation>;
} => r.body)
    );
  }

  /** Path part for operation `orgsListPendingInvitations()` */
  static readonly OrgsListPendingInvitationsPath = '/orgs/{org}/invitations';

  /**
   * List pending organization invitations.
   *
   * The return hash contains a `role` field which refers to the Organization
   * Invitation role and will be one of the following values: `direct_member`, `admin`,
   * `billing_manager`, or `hiring_manager`. If the invitee is not a GitHub
   * member, the `login` field in the return hash will be `null`.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListPendingInvitations()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListPendingInvitations$Response(params: OrgsListPendingInvitations$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrganizationInvitation>>> {
    return orgsListPendingInvitations(this.http, this.rootUrl, params, context);
  }

  /**
   * List pending organization invitations.
   *
   * The return hash contains a `role` field which refers to the Organization
   * Invitation role and will be one of the following values: `direct_member`, `admin`,
   * `billing_manager`, or `hiring_manager`. If the invitee is not a GitHub
   * member, the `login` field in the return hash will be `null`.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListPendingInvitations$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListPendingInvitations(params: OrgsListPendingInvitations$Params, context?: HttpContext): Observable<Array<OrganizationInvitation>> {
    return this.orgsListPendingInvitations$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OrganizationInvitation>>): Array<OrganizationInvitation> => r.body)
    );
  }

  /** Path part for operation `orgsCreateInvitation()` */
  static readonly OrgsCreateInvitationPath = '/orgs/{org}/invitations';

  /**
   * Create an organization invitation.
   *
   * Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.
   *
   * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)"
   * and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsCreateInvitation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsCreateInvitation$Response(params: OrgsCreateInvitation$Params, context?: HttpContext): Observable<StrictHttpResponse<OrganizationInvitation>> {
    return orgsCreateInvitation(this.http, this.rootUrl, params, context);
  }

  /**
   * Create an organization invitation.
   *
   * Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.
   *
   * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)"
   * and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsCreateInvitation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsCreateInvitation(params: OrgsCreateInvitation$Params, context?: HttpContext): Observable<OrganizationInvitation> {
    return this.orgsCreateInvitation$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrganizationInvitation>): OrganizationInvitation => r.body)
    );
  }

  /** Path part for operation `orgsCancelInvitation()` */
  static readonly OrgsCancelInvitationPath = '/orgs/{org}/invitations/{invitation_id}';

  /**
   * Cancel an organization invitation.
   *
   * Cancel an organization invitation. In order to cancel an organization invitation, the authenticated user must be an organization owner.
   *
   * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsCancelInvitation()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsCancelInvitation$Response(params: OrgsCancelInvitation$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsCancelInvitation(this.http, this.rootUrl, params, context);
  }

  /**
   * Cancel an organization invitation.
   *
   * Cancel an organization invitation. In order to cancel an organization invitation, the authenticated user must be an organization owner.
   *
   * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications).
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsCancelInvitation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsCancelInvitation(params: OrgsCancelInvitation$Params, context?: HttpContext): Observable<void> {
    return this.orgsCancelInvitation$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsListInvitationTeams()` */
  static readonly OrgsListInvitationTeamsPath = '/orgs/{org}/invitations/{invitation_id}/teams';

  /**
   * List organization invitation teams.
   *
   * List all teams associated with an invitation. In order to see invitations in an organization, the authenticated user must be an organization owner.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListInvitationTeams()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListInvitationTeams$Response(params: OrgsListInvitationTeams$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Team>>> {
    return orgsListInvitationTeams(this.http, this.rootUrl, params, context);
  }

  /**
   * List organization invitation teams.
   *
   * List all teams associated with an invitation. In order to see invitations in an organization, the authenticated user must be an organization owner.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListInvitationTeams$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListInvitationTeams(params: OrgsListInvitationTeams$Params, context?: HttpContext): Observable<Array<Team>> {
    return this.orgsListInvitationTeams$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Team>>): Array<Team> => r.body)
    );
  }

  /** Path part for operation `orgsListMembers()` */
  static readonly OrgsListMembersPath = '/orgs/{org}/members';

  /**
   * List organization members.
   *
   * List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListMembers()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListMembers$Response(params: OrgsListMembers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SimpleUser>>> {
    return orgsListMembers(this.http, this.rootUrl, params, context);
  }

  /**
   * List organization members.
   *
   * List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListMembers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListMembers(params: OrgsListMembers$Params, context?: HttpContext): Observable<Array<SimpleUser>> {
    return this.orgsListMembers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SimpleUser>>): Array<SimpleUser> => r.body)
    );
  }

  /** Path part for operation `orgsCheckMembershipForUser()` */
  static readonly OrgsCheckMembershipForUserPath = '/orgs/{org}/members/{username}';

  /**
   * Check organization membership for a user.
   *
   * Check if a user is, publicly or privately, a member of the organization.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsCheckMembershipForUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsCheckMembershipForUser$Response(params: OrgsCheckMembershipForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsCheckMembershipForUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Check organization membership for a user.
   *
   * Check if a user is, publicly or privately, a member of the organization.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsCheckMembershipForUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsCheckMembershipForUser(params: OrgsCheckMembershipForUser$Params, context?: HttpContext): Observable<void> {
    return this.orgsCheckMembershipForUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsRemoveMember()` */
  static readonly OrgsRemoveMemberPath = '/orgs/{org}/members/{username}';

  /**
   * Remove an organization member.
   *
   * Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsRemoveMember()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRemoveMember$Response(params: OrgsRemoveMember$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsRemoveMember(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove an organization member.
   *
   * Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsRemoveMember$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRemoveMember(params: OrgsRemoveMember$Params, context?: HttpContext): Observable<void> {
    return this.orgsRemoveMember$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsGetMembershipForUser()` */
  static readonly OrgsGetMembershipForUserPath = '/orgs/{org}/memberships/{username}';

  /**
   * Get organization membership for a user.
   *
   * In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsGetMembershipForUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGetMembershipForUser$Response(params: OrgsGetMembershipForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<OrgMembership>> {
    return orgsGetMembershipForUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Get organization membership for a user.
   *
   * In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsGetMembershipForUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGetMembershipForUser(params: OrgsGetMembershipForUser$Params, context?: HttpContext): Observable<OrgMembership> {
    return this.orgsGetMembershipForUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrgMembership>): OrgMembership => r.body)
    );
  }

  /** Path part for operation `orgsSetMembershipForUser()` */
  static readonly OrgsSetMembershipForUserPath = '/orgs/{org}/memberships/{username}';

  /**
   * Set organization membership for a user.
   *
   * Only authenticated organization owners can add a member to the organization or update the member's role.
   *
   * *   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/rest/orgs/members#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
   *     
   * *   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.
   *
   * **Rate limits**
   *
   * To prevent abuse, organization owners are limited to creating 50 organization invitations for an organization within a 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsSetMembershipForUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsSetMembershipForUser$Response(params: OrgsSetMembershipForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<OrgMembership>> {
    return orgsSetMembershipForUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Set organization membership for a user.
   *
   * Only authenticated organization owners can add a member to the organization or update the member's role.
   *
   * *   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/rest/orgs/members#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
   *     
   * *   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.
   *
   * **Rate limits**
   *
   * To prevent abuse, organization owners are limited to creating 50 organization invitations for an organization within a 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsSetMembershipForUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsSetMembershipForUser(params: OrgsSetMembershipForUser$Params, context?: HttpContext): Observable<OrgMembership> {
    return this.orgsSetMembershipForUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrgMembership>): OrgMembership => r.body)
    );
  }

  /** Path part for operation `orgsRemoveMembershipForUser()` */
  static readonly OrgsRemoveMembershipForUserPath = '/orgs/{org}/memberships/{username}';

  /**
   * Remove organization membership for a user.
   *
   * In order to remove a user's membership with an organization, the authenticated user must be an organization owner.
   *
   * If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsRemoveMembershipForUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRemoveMembershipForUser$Response(params: OrgsRemoveMembershipForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsRemoveMembershipForUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove organization membership for a user.
   *
   * In order to remove a user's membership with an organization, the authenticated user must be an organization owner.
   *
   * If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsRemoveMembershipForUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRemoveMembershipForUser(params: OrgsRemoveMembershipForUser$Params, context?: HttpContext): Observable<void> {
    return this.orgsRemoveMembershipForUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsListOrganizationFineGrainedPermissions()` */
  static readonly OrgsListOrganizationFineGrainedPermissionsPath = '/orgs/{org}/organization-fine-grained-permissions';

  /**
   * List organization fine-grained permissions for an organization.
   *
   * Lists the fine-grained permissions that can be used in custom organization roles for an organization. For more information, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * To list the fine-grained permissions that can be used in custom repository roles for an organization, see "[List repository fine-grained permissions for an organization](https://docs.github.com/rest/orgs/organization-roles#list-repository-fine-grained-permissions-for-an-organization)."
   *
   * To use this endpoint, the authenticated user must be one of:
   *
   * - An administrator for the organization.
   * - A user, or a user on a team, with the fine-grained permissions of `read_organization_custom_org_role` in the organization.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListOrganizationFineGrainedPermissions()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListOrganizationFineGrainedPermissions$Response(params: OrgsListOrganizationFineGrainedPermissions$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrganizationFineGrainedPermission>>> {
    return orgsListOrganizationFineGrainedPermissions(this.http, this.rootUrl, params, context);
  }

  /**
   * List organization fine-grained permissions for an organization.
   *
   * Lists the fine-grained permissions that can be used in custom organization roles for an organization. For more information, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * To list the fine-grained permissions that can be used in custom repository roles for an organization, see "[List repository fine-grained permissions for an organization](https://docs.github.com/rest/orgs/organization-roles#list-repository-fine-grained-permissions-for-an-organization)."
   *
   * To use this endpoint, the authenticated user must be one of:
   *
   * - An administrator for the organization.
   * - A user, or a user on a team, with the fine-grained permissions of `read_organization_custom_org_role` in the organization.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListOrganizationFineGrainedPermissions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListOrganizationFineGrainedPermissions(params: OrgsListOrganizationFineGrainedPermissions$Params, context?: HttpContext): Observable<Array<OrganizationFineGrainedPermission>> {
    return this.orgsListOrganizationFineGrainedPermissions$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OrganizationFineGrainedPermission>>): Array<OrganizationFineGrainedPermission> => r.body)
    );
  }

  /** Path part for operation `orgsListOrgRoles()` */
  static readonly OrgsListOrgRolesPath = '/orgs/{org}/organization-roles';

  /**
   * Get all organization roles for an organization.
   *
   * Lists the organization roles available in this organization. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * To use this endpoint, the authenticated user must be one of:
   *
   * - An administrator for the organization.
   * - A user, or a user on a team, with the fine-grained permissions of `read_organization_custom_org_role` in the organization.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListOrgRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListOrgRoles$Response(params: OrgsListOrgRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<{

/**
 * The total number of organization roles available to the organization.
 */
'total_count'?: number;

/**
 * The list of organization roles available to the organization.
 */
'roles'?: Array<OrganizationRole>;
}>> {
    return orgsListOrgRoles(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all organization roles for an organization.
   *
   * Lists the organization roles available in this organization. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * To use this endpoint, the authenticated user must be one of:
   *
   * - An administrator for the organization.
   * - A user, or a user on a team, with the fine-grained permissions of `read_organization_custom_org_role` in the organization.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListOrgRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListOrgRoles(params: OrgsListOrgRoles$Params, context?: HttpContext): Observable<{

/**
 * The total number of organization roles available to the organization.
 */
'total_count'?: number;

/**
 * The list of organization roles available to the organization.
 */
'roles'?: Array<OrganizationRole>;
}> {
    return this.orgsListOrgRoles$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * The total number of organization roles available to the organization.
 */
'total_count'?: number;

/**
 * The list of organization roles available to the organization.
 */
'roles'?: Array<OrganizationRole>;
}>): {

/**
 * The total number of organization roles available to the organization.
 */
'total_count'?: number;

/**
 * The list of organization roles available to the organization.
 */
'roles'?: Array<OrganizationRole>;
} => r.body)
    );
  }

  /** Path part for operation `orgsCreateCustomOrganizationRole()` */
  static readonly OrgsCreateCustomOrganizationRolePath = '/orgs/{org}/organization-roles';

  /**
   * Create a custom organization role.
   *
   * Creates a custom organization role that can be assigned to users and teams, granting them specific permissions over the organization. For more information on custom organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * To use this endpoint, the authenticated user must be one of:
   *
   * - An administrator for the organization.
   * - A user, or a user on a team, with the fine-grained permissions of `write_organization_custom_org_role` in the organization.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsCreateCustomOrganizationRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsCreateCustomOrganizationRole$Response(params: OrgsCreateCustomOrganizationRole$Params, context?: HttpContext): Observable<StrictHttpResponse<OrganizationRole>> {
    return orgsCreateCustomOrganizationRole(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a custom organization role.
   *
   * Creates a custom organization role that can be assigned to users and teams, granting them specific permissions over the organization. For more information on custom organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * To use this endpoint, the authenticated user must be one of:
   *
   * - An administrator for the organization.
   * - A user, or a user on a team, with the fine-grained permissions of `write_organization_custom_org_role` in the organization.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsCreateCustomOrganizationRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsCreateCustomOrganizationRole(params: OrgsCreateCustomOrganizationRole$Params, context?: HttpContext): Observable<OrganizationRole> {
    return this.orgsCreateCustomOrganizationRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrganizationRole>): OrganizationRole => r.body)
    );
  }

  /** Path part for operation `orgsRevokeAllOrgRolesTeam()` */
  static readonly OrgsRevokeAllOrgRolesTeamPath = '/orgs/{org}/organization-roles/teams/{team_slug}';

  /**
   * Remove all organization roles for a team.
   *
   * Removes all assigned organization roles from a team. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * The authenticated user must be an administrator for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsRevokeAllOrgRolesTeam()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRevokeAllOrgRolesTeam$Response(params: OrgsRevokeAllOrgRolesTeam$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsRevokeAllOrgRolesTeam(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove all organization roles for a team.
   *
   * Removes all assigned organization roles from a team. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * The authenticated user must be an administrator for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsRevokeAllOrgRolesTeam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRevokeAllOrgRolesTeam(params: OrgsRevokeAllOrgRolesTeam$Params, context?: HttpContext): Observable<void> {
    return this.orgsRevokeAllOrgRolesTeam$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsAssignTeamToOrgRole()` */
  static readonly OrgsAssignTeamToOrgRolePath = '/orgs/{org}/organization-roles/teams/{team_slug}/{role_id}';

  /**
   * Assign an organization role to a team.
   *
   * Assigns an organization role to a team in an organization. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * The authenticated user must be an administrator for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsAssignTeamToOrgRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsAssignTeamToOrgRole$Response(params: OrgsAssignTeamToOrgRole$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsAssignTeamToOrgRole(this.http, this.rootUrl, params, context);
  }

  /**
   * Assign an organization role to a team.
   *
   * Assigns an organization role to a team in an organization. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * The authenticated user must be an administrator for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsAssignTeamToOrgRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsAssignTeamToOrgRole(params: OrgsAssignTeamToOrgRole$Params, context?: HttpContext): Observable<void> {
    return this.orgsAssignTeamToOrgRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsRevokeOrgRoleTeam()` */
  static readonly OrgsRevokeOrgRoleTeamPath = '/orgs/{org}/organization-roles/teams/{team_slug}/{role_id}';

  /**
   * Remove an organization role from a team.
   *
   * Removes an organization role from a team. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * The authenticated user must be an administrator for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsRevokeOrgRoleTeam()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRevokeOrgRoleTeam$Response(params: OrgsRevokeOrgRoleTeam$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsRevokeOrgRoleTeam(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove an organization role from a team.
   *
   * Removes an organization role from a team. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * The authenticated user must be an administrator for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsRevokeOrgRoleTeam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRevokeOrgRoleTeam(params: OrgsRevokeOrgRoleTeam$Params, context?: HttpContext): Observable<void> {
    return this.orgsRevokeOrgRoleTeam$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsRevokeAllOrgRolesUser()` */
  static readonly OrgsRevokeAllOrgRolesUserPath = '/orgs/{org}/organization-roles/users/{username}';

  /**
   * Remove all organization roles for a user.
   *
   * Revokes all assigned organization roles from a user. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * The authenticated user must be an administrator for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsRevokeAllOrgRolesUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRevokeAllOrgRolesUser$Response(params: OrgsRevokeAllOrgRolesUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsRevokeAllOrgRolesUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove all organization roles for a user.
   *
   * Revokes all assigned organization roles from a user. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * The authenticated user must be an administrator for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsRevokeAllOrgRolesUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRevokeAllOrgRolesUser(params: OrgsRevokeAllOrgRolesUser$Params, context?: HttpContext): Observable<void> {
    return this.orgsRevokeAllOrgRolesUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsAssignUserToOrgRole()` */
  static readonly OrgsAssignUserToOrgRolePath = '/orgs/{org}/organization-roles/users/{username}/{role_id}';

  /**
   * Assign an organization role to a user.
   *
   * Assigns an organization role to a member of an organization. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * The authenticated user must be an administrator for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsAssignUserToOrgRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsAssignUserToOrgRole$Response(params: OrgsAssignUserToOrgRole$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsAssignUserToOrgRole(this.http, this.rootUrl, params, context);
  }

  /**
   * Assign an organization role to a user.
   *
   * Assigns an organization role to a member of an organization. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * The authenticated user must be an administrator for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsAssignUserToOrgRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsAssignUserToOrgRole(params: OrgsAssignUserToOrgRole$Params, context?: HttpContext): Observable<void> {
    return this.orgsAssignUserToOrgRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsRevokeOrgRoleUser()` */
  static readonly OrgsRevokeOrgRoleUserPath = '/orgs/{org}/organization-roles/users/{username}/{role_id}';

  /**
   * Remove an organization role from a user.
   *
   * Remove an organization role from a user. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * The authenticated user must be an administrator for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsRevokeOrgRoleUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRevokeOrgRoleUser$Response(params: OrgsRevokeOrgRoleUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsRevokeOrgRoleUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove an organization role from a user.
   *
   * Remove an organization role from a user. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * The authenticated user must be an administrator for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsRevokeOrgRoleUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRevokeOrgRoleUser(params: OrgsRevokeOrgRoleUser$Params, context?: HttpContext): Observable<void> {
    return this.orgsRevokeOrgRoleUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsGetOrgRole()` */
  static readonly OrgsGetOrgRolePath = '/orgs/{org}/organization-roles/{role_id}';

  /**
   * Get an organization role.
   *
   * Gets an organization role that is available to this organization. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * To use this endpoint, the authenticated user must be one of:
   *
   * - An administrator for the organization.
   * - A user, or a user on a team, with the fine-grained permissions of `read_organization_custom_org_role` in the organization.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsGetOrgRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGetOrgRole$Response(params: OrgsGetOrgRole$Params, context?: HttpContext): Observable<StrictHttpResponse<OrganizationRole>> {
    return orgsGetOrgRole(this.http, this.rootUrl, params, context);
  }

  /**
   * Get an organization role.
   *
   * Gets an organization role that is available to this organization. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * To use this endpoint, the authenticated user must be one of:
   *
   * - An administrator for the organization.
   * - A user, or a user on a team, with the fine-grained permissions of `read_organization_custom_org_role` in the organization.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsGetOrgRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGetOrgRole(params: OrgsGetOrgRole$Params, context?: HttpContext): Observable<OrganizationRole> {
    return this.orgsGetOrgRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrganizationRole>): OrganizationRole => r.body)
    );
  }

  /** Path part for operation `orgsDeleteCustomOrganizationRole()` */
  static readonly OrgsDeleteCustomOrganizationRolePath = '/orgs/{org}/organization-roles/{role_id}';

  /**
   * Delete a custom organization role.
   *
   * Deletes a custom organization role. For more information on custom organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * To use this endpoint, the authenticated user must be one of:
   *
   * - An administrator for the organization.
   * - A user, or a user on a team, with the fine-grained permissions of `write_organization_custom_org_role` in the organization.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsDeleteCustomOrganizationRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsDeleteCustomOrganizationRole$Response(params: OrgsDeleteCustomOrganizationRole$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsDeleteCustomOrganizationRole(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a custom organization role.
   *
   * Deletes a custom organization role. For more information on custom organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * To use this endpoint, the authenticated user must be one of:
   *
   * - An administrator for the organization.
   * - A user, or a user on a team, with the fine-grained permissions of `write_organization_custom_org_role` in the organization.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsDeleteCustomOrganizationRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsDeleteCustomOrganizationRole(params: OrgsDeleteCustomOrganizationRole$Params, context?: HttpContext): Observable<void> {
    return this.orgsDeleteCustomOrganizationRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsPatchCustomOrganizationRole()` */
  static readonly OrgsPatchCustomOrganizationRolePath = '/orgs/{org}/organization-roles/{role_id}';

  /**
   * Update a custom organization role.
   *
   * Updates an existing custom organization role. Permission changes will apply to all assignees. For more information on custom organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   *
   * To use this endpoint, the authenticated user must be one of:
   *
   * - An administrator for the organization.
   * - A user, or a user on a team, with the fine-grained permissions of `write_organization_custom_org_role` in the organization.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsPatchCustomOrganizationRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsPatchCustomOrganizationRole$Response(params: OrgsPatchCustomOrganizationRole$Params, context?: HttpContext): Observable<StrictHttpResponse<OrganizationRole>> {
    return orgsPatchCustomOrganizationRole(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a custom organization role.
   *
   * Updates an existing custom organization role. Permission changes will apply to all assignees. For more information on custom organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   *
   * To use this endpoint, the authenticated user must be one of:
   *
   * - An administrator for the organization.
   * - A user, or a user on a team, with the fine-grained permissions of `write_organization_custom_org_role` in the organization.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsPatchCustomOrganizationRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsPatchCustomOrganizationRole(params: OrgsPatchCustomOrganizationRole$Params, context?: HttpContext): Observable<OrganizationRole> {
    return this.orgsPatchCustomOrganizationRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrganizationRole>): OrganizationRole => r.body)
    );
  }

  /** Path part for operation `orgsListOrgRoleTeams()` */
  static readonly OrgsListOrgRoleTeamsPath = '/orgs/{org}/organization-roles/{role_id}/teams';

  /**
   * List teams that are assigned to an organization role.
   *
   * Lists the teams that are assigned to an organization role. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * To use this endpoint, you must be an administrator for the organization.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListOrgRoleTeams()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListOrgRoleTeams$Response(params: OrgsListOrgRoleTeams$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TeamRoleAssignment>>> {
    return orgsListOrgRoleTeams(this.http, this.rootUrl, params, context);
  }

  /**
   * List teams that are assigned to an organization role.
   *
   * Lists the teams that are assigned to an organization role. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * To use this endpoint, you must be an administrator for the organization.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListOrgRoleTeams$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListOrgRoleTeams(params: OrgsListOrgRoleTeams$Params, context?: HttpContext): Observable<Array<TeamRoleAssignment>> {
    return this.orgsListOrgRoleTeams$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TeamRoleAssignment>>): Array<TeamRoleAssignment> => r.body)
    );
  }

  /** Path part for operation `orgsListOrgRoleUsers()` */
  static readonly OrgsListOrgRoleUsersPath = '/orgs/{org}/organization-roles/{role_id}/users';

  /**
   * List users that are assigned to an organization role.
   *
   * Lists organization members that are assigned to an organization role. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * To use this endpoint, you must be an administrator for the organization.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListOrgRoleUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListOrgRoleUsers$Response(params: OrgsListOrgRoleUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserRoleAssignment>>> {
    return orgsListOrgRoleUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * List users that are assigned to an organization role.
   *
   * Lists organization members that are assigned to an organization role. For more information on organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."
   *
   * To use this endpoint, you must be an administrator for the organization.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListOrgRoleUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListOrgRoleUsers(params: OrgsListOrgRoleUsers$Params, context?: HttpContext): Observable<Array<UserRoleAssignment>> {
    return this.orgsListOrgRoleUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserRoleAssignment>>): Array<UserRoleAssignment> => r.body)
    );
  }

  /** Path part for operation `orgsListOutsideCollaborators()` */
  static readonly OrgsListOutsideCollaboratorsPath = '/orgs/{org}/outside_collaborators';

  /**
   * List outside collaborators for an organization.
   *
   * List all users who are outside collaborators of an organization.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListOutsideCollaborators()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListOutsideCollaborators$Response(params: OrgsListOutsideCollaborators$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SimpleUser>>> {
    return orgsListOutsideCollaborators(this.http, this.rootUrl, params, context);
  }

  /**
   * List outside collaborators for an organization.
   *
   * List all users who are outside collaborators of an organization.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListOutsideCollaborators$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListOutsideCollaborators(params: OrgsListOutsideCollaborators$Params, context?: HttpContext): Observable<Array<SimpleUser>> {
    return this.orgsListOutsideCollaborators$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SimpleUser>>): Array<SimpleUser> => r.body)
    );
  }

  /** Path part for operation `orgsConvertMemberToOutsideCollaborator()` */
  static readonly OrgsConvertMemberToOutsideCollaboratorPath = '/orgs/{org}/outside_collaborators/{username}';

  /**
   * Convert an organization member to outside collaborator.
   *
   * When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://docs.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)". Converting an organization member to an outside collaborator may be restricted by enterprise administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsConvertMemberToOutsideCollaborator()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsConvertMemberToOutsideCollaborator$Response(params: OrgsConvertMemberToOutsideCollaborator$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return orgsConvertMemberToOutsideCollaborator(this.http, this.rootUrl, params, context);
  }

  /**
   * Convert an organization member to outside collaborator.
   *
   * When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://docs.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)". Converting an organization member to an outside collaborator may be restricted by enterprise administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsConvertMemberToOutsideCollaborator$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsConvertMemberToOutsideCollaborator(params: OrgsConvertMemberToOutsideCollaborator$Params, context?: HttpContext): Observable<{
}> {
    return this.orgsConvertMemberToOutsideCollaborator$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `orgsRemoveOutsideCollaborator()` */
  static readonly OrgsRemoveOutsideCollaboratorPath = '/orgs/{org}/outside_collaborators/{username}';

  /**
   * Remove outside collaborator from an organization.
   *
   * Removing a user from this list will remove them from all the organization's repositories.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsRemoveOutsideCollaborator()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRemoveOutsideCollaborator$Response(params: OrgsRemoveOutsideCollaborator$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsRemoveOutsideCollaborator(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove outside collaborator from an organization.
   *
   * Removing a user from this list will remove them from all the organization's repositories.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsRemoveOutsideCollaborator$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRemoveOutsideCollaborator(params: OrgsRemoveOutsideCollaborator$Params, context?: HttpContext): Observable<void> {
    return this.orgsRemoveOutsideCollaborator$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsListPatGrantRequests()` */
  static readonly OrgsListPatGrantRequestsPath = '/orgs/{org}/personal-access-token-requests';

  /**
   * List requests to access organization resources with fine-grained personal access tokens.
   *
   * Lists requests from organization members to access organization resources with a fine-grained personal access token.
   *
   * Only GitHub Apps can use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListPatGrantRequests()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListPatGrantRequests$Response(params: OrgsListPatGrantRequests$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrganizationProgrammaticAccessGrantRequest>>> {
    return orgsListPatGrantRequests(this.http, this.rootUrl, params, context);
  }

  /**
   * List requests to access organization resources with fine-grained personal access tokens.
   *
   * Lists requests from organization members to access organization resources with a fine-grained personal access token.
   *
   * Only GitHub Apps can use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListPatGrantRequests$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListPatGrantRequests(params: OrgsListPatGrantRequests$Params, context?: HttpContext): Observable<Array<OrganizationProgrammaticAccessGrantRequest>> {
    return this.orgsListPatGrantRequests$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OrganizationProgrammaticAccessGrantRequest>>): Array<OrganizationProgrammaticAccessGrantRequest> => r.body)
    );
  }

  /** Path part for operation `orgsReviewPatGrantRequestsInBulk()` */
  static readonly OrgsReviewPatGrantRequestsInBulkPath = '/orgs/{org}/personal-access-token-requests';

  /**
   * Review requests to access organization resources with fine-grained personal access tokens.
   *
   * Approves or denies multiple pending requests to access organization resources via a fine-grained personal access token.
   *
   * Only GitHub Apps can use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsReviewPatGrantRequestsInBulk()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsReviewPatGrantRequestsInBulk$Response(params: OrgsReviewPatGrantRequestsInBulk$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return orgsReviewPatGrantRequestsInBulk(this.http, this.rootUrl, params, context);
  }

  /**
   * Review requests to access organization resources with fine-grained personal access tokens.
   *
   * Approves or denies multiple pending requests to access organization resources via a fine-grained personal access token.
   *
   * Only GitHub Apps can use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsReviewPatGrantRequestsInBulk$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsReviewPatGrantRequestsInBulk(params: OrgsReviewPatGrantRequestsInBulk$Params, context?: HttpContext): Observable<{
}> {
    return this.orgsReviewPatGrantRequestsInBulk$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `orgsReviewPatGrantRequest()` */
  static readonly OrgsReviewPatGrantRequestPath = '/orgs/{org}/personal-access-token-requests/{pat_request_id}';

  /**
   * Review a request to access organization resources with a fine-grained personal access token.
   *
   * Approves or denies a pending request to access organization resources via a fine-grained personal access token.
   *
   * Only GitHub Apps can use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsReviewPatGrantRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsReviewPatGrantRequest$Response(params: OrgsReviewPatGrantRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsReviewPatGrantRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * Review a request to access organization resources with a fine-grained personal access token.
   *
   * Approves or denies a pending request to access organization resources via a fine-grained personal access token.
   *
   * Only GitHub Apps can use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsReviewPatGrantRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsReviewPatGrantRequest(params: OrgsReviewPatGrantRequest$Params, context?: HttpContext): Observable<void> {
    return this.orgsReviewPatGrantRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsListPatGrantRequestRepositories()` */
  static readonly OrgsListPatGrantRequestRepositoriesPath = '/orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories';

  /**
   * List repositories requested to be accessed by a fine-grained personal access token.
   *
   * Lists the repositories a fine-grained personal access token request is requesting access to.
   *
   * Only GitHub Apps can use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListPatGrantRequestRepositories()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListPatGrantRequestRepositories$Response(params: OrgsListPatGrantRequestRepositories$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MinimalRepository>>> {
    return orgsListPatGrantRequestRepositories(this.http, this.rootUrl, params, context);
  }

  /**
   * List repositories requested to be accessed by a fine-grained personal access token.
   *
   * Lists the repositories a fine-grained personal access token request is requesting access to.
   *
   * Only GitHub Apps can use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListPatGrantRequestRepositories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListPatGrantRequestRepositories(params: OrgsListPatGrantRequestRepositories$Params, context?: HttpContext): Observable<Array<MinimalRepository>> {
    return this.orgsListPatGrantRequestRepositories$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MinimalRepository>>): Array<MinimalRepository> => r.body)
    );
  }

  /** Path part for operation `orgsListPatGrants()` */
  static readonly OrgsListPatGrantsPath = '/orgs/{org}/personal-access-tokens';

  /**
   * List fine-grained personal access tokens with access to organization resources.
   *
   * Lists approved fine-grained personal access tokens owned by organization members that can access organization resources.
   *
   * Only GitHub Apps can use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListPatGrants()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListPatGrants$Response(params: OrgsListPatGrants$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrganizationProgrammaticAccessGrant>>> {
    return orgsListPatGrants(this.http, this.rootUrl, params, context);
  }

  /**
   * List fine-grained personal access tokens with access to organization resources.
   *
   * Lists approved fine-grained personal access tokens owned by organization members that can access organization resources.
   *
   * Only GitHub Apps can use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListPatGrants$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListPatGrants(params: OrgsListPatGrants$Params, context?: HttpContext): Observable<Array<OrganizationProgrammaticAccessGrant>> {
    return this.orgsListPatGrants$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OrganizationProgrammaticAccessGrant>>): Array<OrganizationProgrammaticAccessGrant> => r.body)
    );
  }

  /** Path part for operation `orgsUpdatePatAccesses()` */
  static readonly OrgsUpdatePatAccessesPath = '/orgs/{org}/personal-access-tokens';

  /**
   * Update the access to organization resources via fine-grained personal access tokens.
   *
   * Updates the access organization members have to organization resources via fine-grained personal access tokens. Limited to revoking a token's existing access.
   *
   * Only GitHub Apps can use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsUpdatePatAccesses()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsUpdatePatAccesses$Response(params: OrgsUpdatePatAccesses$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return orgsUpdatePatAccesses(this.http, this.rootUrl, params, context);
  }

  /**
   * Update the access to organization resources via fine-grained personal access tokens.
   *
   * Updates the access organization members have to organization resources via fine-grained personal access tokens. Limited to revoking a token's existing access.
   *
   * Only GitHub Apps can use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsUpdatePatAccesses$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsUpdatePatAccesses(params: OrgsUpdatePatAccesses$Params, context?: HttpContext): Observable<{
}> {
    return this.orgsUpdatePatAccesses$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `orgsUpdatePatAccess()` */
  static readonly OrgsUpdatePatAccessPath = '/orgs/{org}/personal-access-tokens/{pat_id}';

  /**
   * Update the access a fine-grained personal access token has to organization resources.
   *
   * Updates the access an organization member has to organization resources via a fine-grained personal access token. Limited to revoking the token's existing access. Limited to revoking a token's existing access.
   *
   * Only GitHub Apps can use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsUpdatePatAccess()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsUpdatePatAccess$Response(params: OrgsUpdatePatAccess$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsUpdatePatAccess(this.http, this.rootUrl, params, context);
  }

  /**
   * Update the access a fine-grained personal access token has to organization resources.
   *
   * Updates the access an organization member has to organization resources via a fine-grained personal access token. Limited to revoking the token's existing access. Limited to revoking a token's existing access.
   *
   * Only GitHub Apps can use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsUpdatePatAccess$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsUpdatePatAccess(params: OrgsUpdatePatAccess$Params, context?: HttpContext): Observable<void> {
    return this.orgsUpdatePatAccess$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsListPatGrantRepositories()` */
  static readonly OrgsListPatGrantRepositoriesPath = '/orgs/{org}/personal-access-tokens/{pat_id}/repositories';

  /**
   * List repositories a fine-grained personal access token has access to.
   *
   * Lists the repositories a fine-grained personal access token has access to.
   *
   * Only GitHub Apps can use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListPatGrantRepositories()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListPatGrantRepositories$Response(params: OrgsListPatGrantRepositories$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MinimalRepository>>> {
    return orgsListPatGrantRepositories(this.http, this.rootUrl, params, context);
  }

  /**
   * List repositories a fine-grained personal access token has access to.
   *
   * Lists the repositories a fine-grained personal access token has access to.
   *
   * Only GitHub Apps can use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListPatGrantRepositories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListPatGrantRepositories(params: OrgsListPatGrantRepositories$Params, context?: HttpContext): Observable<Array<MinimalRepository>> {
    return this.orgsListPatGrantRepositories$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MinimalRepository>>): Array<MinimalRepository> => r.body)
    );
  }

  /** Path part for operation `orgsGetAllCustomProperties()` */
  static readonly OrgsGetAllCustomPropertiesPath = '/orgs/{org}/properties/schema';

  /**
   * Get all custom properties for an organization.
   *
   * Gets all custom properties defined for an organization.
   * Organization members can read these properties.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsGetAllCustomProperties()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGetAllCustomProperties$Response(params: OrgsGetAllCustomProperties$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrgCustomProperty>>> {
    return orgsGetAllCustomProperties(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all custom properties for an organization.
   *
   * Gets all custom properties defined for an organization.
   * Organization members can read these properties.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsGetAllCustomProperties$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGetAllCustomProperties(params: OrgsGetAllCustomProperties$Params, context?: HttpContext): Observable<Array<OrgCustomProperty>> {
    return this.orgsGetAllCustomProperties$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OrgCustomProperty>>): Array<OrgCustomProperty> => r.body)
    );
  }

  /** Path part for operation `orgsCreateOrUpdateCustomProperties()` */
  static readonly OrgsCreateOrUpdateCustomPropertiesPath = '/orgs/{org}/properties/schema';

  /**
   * Create or update custom properties for an organization.
   *
   * Creates new or updates existing custom properties defined for an organization in a batch.
   *
   * To use this endpoint, the authenticated user must be one of:
   *   - An administrator for the organization.
   *   - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_definitions_manager` in the organization.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsCreateOrUpdateCustomProperties()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsCreateOrUpdateCustomProperties$Response(params: OrgsCreateOrUpdateCustomProperties$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrgCustomProperty>>> {
    return orgsCreateOrUpdateCustomProperties(this.http, this.rootUrl, params, context);
  }

  /**
   * Create or update custom properties for an organization.
   *
   * Creates new or updates existing custom properties defined for an organization in a batch.
   *
   * To use this endpoint, the authenticated user must be one of:
   *   - An administrator for the organization.
   *   - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_definitions_manager` in the organization.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsCreateOrUpdateCustomProperties$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsCreateOrUpdateCustomProperties(params: OrgsCreateOrUpdateCustomProperties$Params, context?: HttpContext): Observable<Array<OrgCustomProperty>> {
    return this.orgsCreateOrUpdateCustomProperties$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OrgCustomProperty>>): Array<OrgCustomProperty> => r.body)
    );
  }

  /** Path part for operation `orgsGetCustomProperty()` */
  static readonly OrgsGetCustomPropertyPath = '/orgs/{org}/properties/schema/{custom_property_name}';

  /**
   * Get a custom property for an organization.
   *
   * Gets a custom property that is defined for an organization.
   * Organization members can read these properties.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsGetCustomProperty()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGetCustomProperty$Response(params: OrgsGetCustomProperty$Params, context?: HttpContext): Observable<StrictHttpResponse<OrgCustomProperty>> {
    return orgsGetCustomProperty(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a custom property for an organization.
   *
   * Gets a custom property that is defined for an organization.
   * Organization members can read these properties.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsGetCustomProperty$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGetCustomProperty(params: OrgsGetCustomProperty$Params, context?: HttpContext): Observable<OrgCustomProperty> {
    return this.orgsGetCustomProperty$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrgCustomProperty>): OrgCustomProperty => r.body)
    );
  }

  /** Path part for operation `orgsCreateOrUpdateCustomProperty()` */
  static readonly OrgsCreateOrUpdateCustomPropertyPath = '/orgs/{org}/properties/schema/{custom_property_name}';

  /**
   * Create or update a custom property for an organization.
   *
   * Creates a new or updates an existing custom property that is defined for an organization.
   *
   * To use this endpoint, the authenticated user must be one of:
   * - An administrator for the organization.
   * - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_definitions_manager` in the organization.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsCreateOrUpdateCustomProperty()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsCreateOrUpdateCustomProperty$Response(params: OrgsCreateOrUpdateCustomProperty$Params, context?: HttpContext): Observable<StrictHttpResponse<OrgCustomProperty>> {
    return orgsCreateOrUpdateCustomProperty(this.http, this.rootUrl, params, context);
  }

  /**
   * Create or update a custom property for an organization.
   *
   * Creates a new or updates an existing custom property that is defined for an organization.
   *
   * To use this endpoint, the authenticated user must be one of:
   * - An administrator for the organization.
   * - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_definitions_manager` in the organization.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsCreateOrUpdateCustomProperty$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsCreateOrUpdateCustomProperty(params: OrgsCreateOrUpdateCustomProperty$Params, context?: HttpContext): Observable<OrgCustomProperty> {
    return this.orgsCreateOrUpdateCustomProperty$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrgCustomProperty>): OrgCustomProperty => r.body)
    );
  }

  /** Path part for operation `orgsRemoveCustomProperty()` */
  static readonly OrgsRemoveCustomPropertyPath = '/orgs/{org}/properties/schema/{custom_property_name}';

  /**
   * Remove a custom property for an organization.
   *
   * Removes a custom property that is defined for an organization.
   *
   * To use this endpoint, the authenticated user must be one of:
   *   - An administrator for the organization.
   *   - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_definitions_manager` in the organization.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsRemoveCustomProperty()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRemoveCustomProperty$Response(params: OrgsRemoveCustomProperty$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsRemoveCustomProperty(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a custom property for an organization.
   *
   * Removes a custom property that is defined for an organization.
   *
   * To use this endpoint, the authenticated user must be one of:
   *   - An administrator for the organization.
   *   - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_definitions_manager` in the organization.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsRemoveCustomProperty$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRemoveCustomProperty(params: OrgsRemoveCustomProperty$Params, context?: HttpContext): Observable<void> {
    return this.orgsRemoveCustomProperty$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsListCustomPropertiesValuesForRepos()` */
  static readonly OrgsListCustomPropertiesValuesForReposPath = '/orgs/{org}/properties/values';

  /**
   * List custom property values for organization repositories.
   *
   * Lists organization repositories with all of their custom property values.
   * Organization members can read these properties.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListCustomPropertiesValuesForRepos()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListCustomPropertiesValuesForRepos$Response(params: OrgsListCustomPropertiesValuesForRepos$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrgRepoCustomPropertyValues>>> {
    return orgsListCustomPropertiesValuesForRepos(this.http, this.rootUrl, params, context);
  }

  /**
   * List custom property values for organization repositories.
   *
   * Lists organization repositories with all of their custom property values.
   * Organization members can read these properties.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListCustomPropertiesValuesForRepos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListCustomPropertiesValuesForRepos(params: OrgsListCustomPropertiesValuesForRepos$Params, context?: HttpContext): Observable<Array<OrgRepoCustomPropertyValues>> {
    return this.orgsListCustomPropertiesValuesForRepos$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OrgRepoCustomPropertyValues>>): Array<OrgRepoCustomPropertyValues> => r.body)
    );
  }

  /** Path part for operation `orgsCreateOrUpdateCustomPropertiesValuesForRepos()` */
  static readonly OrgsCreateOrUpdateCustomPropertiesValuesForReposPath = '/orgs/{org}/properties/values';

  /**
   * Create or update custom property values for organization repositories.
   *
   * Create new or update existing custom property values for repositories in a batch that belong to an organization.
   * Each target repository will have its custom property values updated to match the values provided in the request.
   *
   * A maximum of 30 repositories can be updated in a single request.
   *
   * Using a value of `null` for a custom property will remove or 'unset' the property value from the repository.
   *
   * To use this endpoint, the authenticated user must be one of:
   *   - An administrator for the organization.
   *   - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_values_editor` in the organization.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsCreateOrUpdateCustomPropertiesValuesForRepos()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsCreateOrUpdateCustomPropertiesValuesForRepos$Response(params: OrgsCreateOrUpdateCustomPropertiesValuesForRepos$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsCreateOrUpdateCustomPropertiesValuesForRepos(this.http, this.rootUrl, params, context);
  }

  /**
   * Create or update custom property values for organization repositories.
   *
   * Create new or update existing custom property values for repositories in a batch that belong to an organization.
   * Each target repository will have its custom property values updated to match the values provided in the request.
   *
   * A maximum of 30 repositories can be updated in a single request.
   *
   * Using a value of `null` for a custom property will remove or 'unset' the property value from the repository.
   *
   * To use this endpoint, the authenticated user must be one of:
   *   - An administrator for the organization.
   *   - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_values_editor` in the organization.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsCreateOrUpdateCustomPropertiesValuesForRepos$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsCreateOrUpdateCustomPropertiesValuesForRepos(params: OrgsCreateOrUpdateCustomPropertiesValuesForRepos$Params, context?: HttpContext): Observable<void> {
    return this.orgsCreateOrUpdateCustomPropertiesValuesForRepos$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsListPublicMembers()` */
  static readonly OrgsListPublicMembersPath = '/orgs/{org}/public_members';

  /**
   * List public organization members.
   *
   * Members of an organization can choose to have their membership publicized or not.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListPublicMembers()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListPublicMembers$Response(params: OrgsListPublicMembers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SimpleUser>>> {
    return orgsListPublicMembers(this.http, this.rootUrl, params, context);
  }

  /**
   * List public organization members.
   *
   * Members of an organization can choose to have their membership publicized or not.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListPublicMembers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListPublicMembers(params: OrgsListPublicMembers$Params, context?: HttpContext): Observable<Array<SimpleUser>> {
    return this.orgsListPublicMembers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SimpleUser>>): Array<SimpleUser> => r.body)
    );
  }

  /** Path part for operation `orgsCheckPublicMembershipForUser()` */
  static readonly OrgsCheckPublicMembershipForUserPath = '/orgs/{org}/public_members/{username}';

  /**
   * Check public organization membership for a user.
   *
   * Check if the provided user is a public member of the organization.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsCheckPublicMembershipForUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsCheckPublicMembershipForUser$Response(params: OrgsCheckPublicMembershipForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsCheckPublicMembershipForUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Check public organization membership for a user.
   *
   * Check if the provided user is a public member of the organization.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsCheckPublicMembershipForUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsCheckPublicMembershipForUser(params: OrgsCheckPublicMembershipForUser$Params, context?: HttpContext): Observable<void> {
    return this.orgsCheckPublicMembershipForUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsSetPublicMembershipForAuthenticatedUser()` */
  static readonly OrgsSetPublicMembershipForAuthenticatedUserPath = '/orgs/{org}/public_members/{username}';

  /**
   * Set public organization membership for the authenticated user.
   *
   * The user can publicize their own membership. (A user cannot publicize the membership for another user.)
   *
   * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#http-method)."
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsSetPublicMembershipForAuthenticatedUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsSetPublicMembershipForAuthenticatedUser$Response(params: OrgsSetPublicMembershipForAuthenticatedUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsSetPublicMembershipForAuthenticatedUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Set public organization membership for the authenticated user.
   *
   * The user can publicize their own membership. (A user cannot publicize the membership for another user.)
   *
   * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#http-method)."
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsSetPublicMembershipForAuthenticatedUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsSetPublicMembershipForAuthenticatedUser(params: OrgsSetPublicMembershipForAuthenticatedUser$Params, context?: HttpContext): Observable<void> {
    return this.orgsSetPublicMembershipForAuthenticatedUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsRemovePublicMembershipForAuthenticatedUser()` */
  static readonly OrgsRemovePublicMembershipForAuthenticatedUserPath = '/orgs/{org}/public_members/{username}';

  /**
   * Remove public organization membership for the authenticated user.
   *
   * Removes the public membership for the authenticated user from the specified organization, unless public visibility is enforced by default.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsRemovePublicMembershipForAuthenticatedUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRemovePublicMembershipForAuthenticatedUser$Response(params: OrgsRemovePublicMembershipForAuthenticatedUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsRemovePublicMembershipForAuthenticatedUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove public organization membership for the authenticated user.
   *
   * Removes the public membership for the authenticated user from the specified organization, unless public visibility is enforced by default.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsRemovePublicMembershipForAuthenticatedUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRemovePublicMembershipForAuthenticatedUser(params: OrgsRemovePublicMembershipForAuthenticatedUser$Params, context?: HttpContext): Observable<void> {
    return this.orgsRemovePublicMembershipForAuthenticatedUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsListSecurityManagerTeams()` */
  static readonly OrgsListSecurityManagerTeamsPath = '/orgs/{org}/security-managers';

  /**
   * List security manager teams.
   *
   * Lists teams that are security managers for an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListSecurityManagerTeams()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListSecurityManagerTeams$Response(params: OrgsListSecurityManagerTeams$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TeamSimple>>> {
    return orgsListSecurityManagerTeams(this.http, this.rootUrl, params, context);
  }

  /**
   * List security manager teams.
   *
   * Lists teams that are security managers for an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
   *
   * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListSecurityManagerTeams$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListSecurityManagerTeams(params: OrgsListSecurityManagerTeams$Params, context?: HttpContext): Observable<Array<TeamSimple>> {
    return this.orgsListSecurityManagerTeams$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TeamSimple>>): Array<TeamSimple> => r.body)
    );
  }

  /** Path part for operation `orgsAddSecurityManagerTeam()` */
  static readonly OrgsAddSecurityManagerTeamPath = '/orgs/{org}/security-managers/teams/{team_slug}';

  /**
   * Add a security manager team.
   *
   * Adds a team as a security manager for an organization. For more information, see "[Managing security for an organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) for an organization."
   *
   * The authenticated user must be an administrator for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsAddSecurityManagerTeam()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsAddSecurityManagerTeam$Response(params: OrgsAddSecurityManagerTeam$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsAddSecurityManagerTeam(this.http, this.rootUrl, params, context);
  }

  /**
   * Add a security manager team.
   *
   * Adds a team as a security manager for an organization. For more information, see "[Managing security for an organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) for an organization."
   *
   * The authenticated user must be an administrator for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsAddSecurityManagerTeam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsAddSecurityManagerTeam(params: OrgsAddSecurityManagerTeam$Params, context?: HttpContext): Observable<void> {
    return this.orgsAddSecurityManagerTeam$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsRemoveSecurityManagerTeam()` */
  static readonly OrgsRemoveSecurityManagerTeamPath = '/orgs/{org}/security-managers/teams/{team_slug}';

  /**
   * Remove a security manager team.
   *
   * Removes the security manager role from a team for an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) team from an organization."
   *
   * The authenticated user must be an administrator for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsRemoveSecurityManagerTeam()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRemoveSecurityManagerTeam$Response(params: OrgsRemoveSecurityManagerTeam$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsRemoveSecurityManagerTeam(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove a security manager team.
   *
   * Removes the security manager role from a team for an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) team from an organization."
   *
   * The authenticated user must be an administrator for the organization to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsRemoveSecurityManagerTeam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsRemoveSecurityManagerTeam(params: OrgsRemoveSecurityManagerTeam$Params, context?: HttpContext): Observable<void> {
    return this.orgsRemoveSecurityManagerTeam$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsEnableOrDisableSecurityProductOnAllOrgRepos()` */
  static readonly OrgsEnableOrDisableSecurityProductOnAllOrgReposPath = '/orgs/{org}/{security_product}/{enablement}';

  /**
   * Enable or disable a security feature for an organization.
   *
   * Enables or disables the specified security feature for all eligible repositories in an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
   *
   * The authenticated user must be an organization owner or be member of a team with the security manager role to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsEnableOrDisableSecurityProductOnAllOrgRepos()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsEnableOrDisableSecurityProductOnAllOrgRepos$Response(params: OrgsEnableOrDisableSecurityProductOnAllOrgRepos$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orgsEnableOrDisableSecurityProductOnAllOrgRepos(this.http, this.rootUrl, params, context);
  }

  /**
   * Enable or disable a security feature for an organization.
   *
   * Enables or disables the specified security feature for all eligible repositories in an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
   *
   * The authenticated user must be an organization owner or be member of a team with the security manager role to use this endpoint.
   *
   * OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsEnableOrDisableSecurityProductOnAllOrgRepos$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsEnableOrDisableSecurityProductOnAllOrgRepos(params: OrgsEnableOrDisableSecurityProductOnAllOrgRepos$Params, context?: HttpContext): Observable<void> {
    return this.orgsEnableOrDisableSecurityProductOnAllOrgRepos$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orgsListMembershipsForAuthenticatedUser()` */
  static readonly OrgsListMembershipsForAuthenticatedUserPath = '/user/memberships/orgs';

  /**
   * List organization memberships for the authenticated user.
   *
   * Lists all of the authenticated user's organization memberships.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListMembershipsForAuthenticatedUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListMembershipsForAuthenticatedUser$Response(params?: OrgsListMembershipsForAuthenticatedUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrgMembership>>> {
    return orgsListMembershipsForAuthenticatedUser(this.http, this.rootUrl, params, context);
  }

  /**
   * List organization memberships for the authenticated user.
   *
   * Lists all of the authenticated user's organization memberships.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListMembershipsForAuthenticatedUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListMembershipsForAuthenticatedUser(params?: OrgsListMembershipsForAuthenticatedUser$Params, context?: HttpContext): Observable<Array<OrgMembership>> {
    return this.orgsListMembershipsForAuthenticatedUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OrgMembership>>): Array<OrgMembership> => r.body)
    );
  }

  /** Path part for operation `orgsGetMembershipForAuthenticatedUser()` */
  static readonly OrgsGetMembershipForAuthenticatedUserPath = '/user/memberships/orgs/{org}';

  /**
   * Get an organization membership for the authenticated user.
   *
   * If the authenticated user is an active or pending member of the organization, this endpoint will return the user's membership. If the authenticated user is not affiliated with the organization, a `404` is returned. This endpoint will return a `403` if the request is made by a GitHub App that is blocked by the organization.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsGetMembershipForAuthenticatedUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGetMembershipForAuthenticatedUser$Response(params: OrgsGetMembershipForAuthenticatedUser$Params, context?: HttpContext): Observable<StrictHttpResponse<OrgMembership>> {
    return orgsGetMembershipForAuthenticatedUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Get an organization membership for the authenticated user.
   *
   * If the authenticated user is an active or pending member of the organization, this endpoint will return the user's membership. If the authenticated user is not affiliated with the organization, a `404` is returned. This endpoint will return a `403` if the request is made by a GitHub App that is blocked by the organization.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsGetMembershipForAuthenticatedUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsGetMembershipForAuthenticatedUser(params: OrgsGetMembershipForAuthenticatedUser$Params, context?: HttpContext): Observable<OrgMembership> {
    return this.orgsGetMembershipForAuthenticatedUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrgMembership>): OrgMembership => r.body)
    );
  }

  /** Path part for operation `orgsUpdateMembershipForAuthenticatedUser()` */
  static readonly OrgsUpdateMembershipForAuthenticatedUserPath = '/user/memberships/orgs/{org}';

  /**
   * Update an organization membership for the authenticated user.
   *
   * Converts the authenticated user to an active member of the organization, if that user has a pending invitation from the organization.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsUpdateMembershipForAuthenticatedUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsUpdateMembershipForAuthenticatedUser$Response(params: OrgsUpdateMembershipForAuthenticatedUser$Params, context?: HttpContext): Observable<StrictHttpResponse<OrgMembership>> {
    return orgsUpdateMembershipForAuthenticatedUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Update an organization membership for the authenticated user.
   *
   * Converts the authenticated user to an active member of the organization, if that user has a pending invitation from the organization.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsUpdateMembershipForAuthenticatedUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orgsUpdateMembershipForAuthenticatedUser(params: OrgsUpdateMembershipForAuthenticatedUser$Params, context?: HttpContext): Observable<OrgMembership> {
    return this.orgsUpdateMembershipForAuthenticatedUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrgMembership>): OrgMembership => r.body)
    );
  }

  /** Path part for operation `orgsListForAuthenticatedUser()` */
  static readonly OrgsListForAuthenticatedUserPath = '/user/orgs';

  /**
   * List organizations for the authenticated user.
   *
   * List organizations for the authenticated user.
   *
   * For OAuth app tokens and personal access tokens (classic), this endpoint only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope for OAuth app tokens and personal access tokens (classic). Requests with insufficient scope will receive a `403 Forbidden` response.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListForAuthenticatedUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListForAuthenticatedUser$Response(params?: OrgsListForAuthenticatedUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrganizationSimple>>> {
    return orgsListForAuthenticatedUser(this.http, this.rootUrl, params, context);
  }

  /**
   * List organizations for the authenticated user.
   *
   * List organizations for the authenticated user.
   *
   * For OAuth app tokens and personal access tokens (classic), this endpoint only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope for OAuth app tokens and personal access tokens (classic). Requests with insufficient scope will receive a `403 Forbidden` response.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListForAuthenticatedUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListForAuthenticatedUser(params?: OrgsListForAuthenticatedUser$Params, context?: HttpContext): Observable<Array<OrganizationSimple>> {
    return this.orgsListForAuthenticatedUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OrganizationSimple>>): Array<OrganizationSimple> => r.body)
    );
  }

  /** Path part for operation `orgsListForUser()` */
  static readonly OrgsListForUserPath = '/users/{username}/orgs';

  /**
   * List organizations for a user.
   *
   * List [public organization memberships](https://docs.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.
   *
   * This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/rest/orgs/orgs#list-organizations-for-the-authenticated-user) API instead.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orgsListForUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListForUser$Response(params: OrgsListForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrganizationSimple>>> {
    return orgsListForUser(this.http, this.rootUrl, params, context);
  }

  /**
   * List organizations for a user.
   *
   * List [public organization memberships](https://docs.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.
   *
   * This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/rest/orgs/orgs#list-organizations-for-the-authenticated-user) API instead.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orgsListForUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orgsListForUser(params: OrgsListForUser$Params, context?: HttpContext): Observable<Array<OrganizationSimple>> {
    return this.orgsListForUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OrganizationSimple>>): Array<OrganizationSimple> => r.body)
    );
  }

}
