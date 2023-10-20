import mongoose from "mongoose";
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

export interface AdminaccounttAttr {
  email: string;
  password: string;
  is_active: boolean;
  authentication_provider: string;
  authentication_type: string;
  ga_qrcode: string;
  ga_secret_key: string;
  first_name: string;
  last_name: string;
  privileges: any;
  privilege_id: number;
  role: string;
  email_code: string;
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
export interface AccountapikeyAttr {
  account_level: number;
  api_key: string;
  customer_id: mongoose.Schema.Types.ObjectId;
  ip_address: string;
  label: string;
  passphrase: string;
  permission: string;
  secret_key: string;
  sub_account: string;
  user_id: string;
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

export interface AccountstatusreasonAttr {
  customer_id: mongoose.Schema.Types.ObjectId;
  email: string;
  message: string;
  reason_type: string;
  display_type: string;
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

export interface AdminroleAttr {
  name: string;
  privileges: any;
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

export interface AccountwalletadressAttr {
  address: any;
  customer_id: mongoose.Schema.Types.ObjectId;
  memo: string;
  payment_id: string;
  tag: string;
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

export interface AccountloginhistoryAttr {
  account_role: string;
  device_type: string;
  ip_address: string;
  is_successful: string;
  os_type: string;
  user_agent: string;
  username: string;
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
