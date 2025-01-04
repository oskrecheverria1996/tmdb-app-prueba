/* tslint:disable */
/* eslint-disable */
import { CopilotSeatBreakdown } from '../models/copilot-seat-breakdown';

/**
 * Information about the seat breakdown and policies set for an organization with a Copilot Business subscription.
 */
export interface CopilotOrganizationDetails {

  /**
   * The organization policy for allowing or disallowing organization members to use Copilot within their CLI.
   */
  cli?: 'enabled' | 'disabled' | 'unconfigured';

  /**
   * The organization policy for allowing or disallowing organization members to use Copilot Chat within their editor.
   */
  ide_chat?: 'enabled' | 'disabled' | 'unconfigured';

  /**
   * The organization policy for allowing or disallowing organization members to use Copilot features within github.com.
   */
  platform_chat?: 'enabled' | 'disabled' | 'unconfigured';

  /**
   * The organization policy for allowing or disallowing Copilot to make suggestions that match public code.
   */
  public_code_suggestions: 'allow' | 'block' | 'unconfigured' | 'unknown';
  seat_breakdown: CopilotSeatBreakdown;

  /**
   * The mode of assigning new seats.
   */
  seat_management_setting: 'assign_all' | 'assign_selected' | 'disabled' | 'unconfigured';

  [key: string]: any;
}
