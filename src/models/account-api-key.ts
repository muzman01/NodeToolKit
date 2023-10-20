import mongoose from "mongoose";

// An interface that describes the properties
// that are required to create a new User
interface AccountapikeyAttr {
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

// An interface that describes the properties
// that a User Model has
interface AccountapikeyModel extends mongoose.Model<AccountapikeyDoc> {
  build(attrs: AccountapikeyAttr): AccountapikeyDoc;
}

// An interface that describes the properties
// that a User Document has
interface AccountapikeyDoc extends mongoose.Document {
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

const AccountapikeySchema = new mongoose.Schema(
  {
    account_level: { type: Number, default: 1 },
    api_key: { type: String },
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    ip_address: { type: String },
    label: { type: String },
    passphrase: { type: String },
    permission: { type: String },
    secret_key: { type: String },
    sub_account: { type: String },
    user_id: { type: String },

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

AccountapikeySchema.statics.build = (attrs: AccountapikeyAttr) => {
  return new Accountapikey(attrs);
};

const Accountapikey = mongoose.model<AccountapikeyDoc, AccountapikeyModel>(
  "Accountapikey",
  AccountapikeySchema
);

export { Accountapikey };
