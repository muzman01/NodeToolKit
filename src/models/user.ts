import mongoose from "mongoose";

// An interface that describes the properties
// that are required to create a new User
interface UserAttrs {
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

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
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

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    is_active: { type: Boolean, default: true },
    authentication_provider: { type: String, required: true },
    authentication_type: { type: String, required: true },
    customer_level_id: { type: String, required: true },
    email_verify_enable: { type: Boolean, default: false },
    ga_qrcode: { type: String },
    ga_secret_key: { type: String },
    reset_password: { type: String },
    role: { type: String, required: true },
    sms_verify_enable: { type: Boolean, default: false },
    status: { type: String, required: true },
    sub_account: { type: Boolean, default: false },
    kyc_complete_at: { type: Date },
    otp_verify_enable: { type: Boolean, default: false },
    restriction_expiration: { type: Date },
    referral_code: { type: String },
    audit: {
      created_by: { type: String },
      updated_by: { type: String },
      deleted_by: { type: String },
      created_at: { type: Date, default: Date.now },
      updated_at: { type: Date },
      deleted_at: { type: Date },
    },
  },
  {
    timestamps: true, // createdAt and updatedAt fields will be auto-managed by mongoose
  }
);

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
