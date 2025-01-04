/* tslint:disable */
/* eslint-disable */

/**
 * A unique encryption key
 */
export interface GpgKey {
  can_certify: boolean;
  can_encrypt_comms: boolean;
  can_encrypt_storage: boolean;
  can_sign: boolean;
  created_at: string;
  emails: Array<{
'email'?: string;
'verified'?: boolean;
}>;
  expires_at: string | null;
  id: number;
  key_id: string;
  name?: string | null;
  primary_key_id: number | null;
  public_key: string;
  raw_key: string | null;
  revoked: boolean;
  subkeys: Array<{
'id'?: number;
'primary_key_id'?: number;
'key_id'?: string;
'public_key'?: string;
'emails'?: Array<{
'email'?: string;
'verified'?: boolean;
}>;
'subkeys'?: Array<any>;
'can_sign'?: boolean;
'can_encrypt_comms'?: boolean;
'can_encrypt_storage'?: boolean;
'can_certify'?: boolean;
'created_at'?: string;
'expires_at'?: string | null;
'raw_key'?: string | null;
'revoked'?: boolean;
}>;
}
