/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksChanges8 } from '../models/webhooks-changes-8';
import { WebhooksEffectiveDate } from '../models/webhooks-effective-date';
import { WebhooksSponsorship } from '../models/webhooks-sponsorship';
export interface WebhookSponsorshipPendingTierChange {
  action: 'pending_tier_change';
  changes: WebhooksChanges8;
  effective_date?: WebhooksEffectiveDate;
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository?: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
  sponsorship: WebhooksSponsorship;
}
