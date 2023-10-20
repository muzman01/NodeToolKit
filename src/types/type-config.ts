export interface UserAttrs {
  email: string;
  password: string;
  is_active: boolean;
  authentication_provider: string;
  authentication_type: string;
  customer_level_id: string;
  email_verify_enable: boolean;
  ga_qrcode: string;
  ga_secret_key: string;
  reset_password: string;
  role: string;
  sms_verify_enable: boolean;
  status: string;
  sub_account: boolean;
  kyc_complete_at: Date;
  otp_verify_enable: boolean;
  restriction_expiration: Date;
  referral_code: string;
  // Additional audit fields
  audit: {
    created_by: string;
    updated_by: string;
    deleted_by: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  };
}
