import mongoose from "mongoose";

// An interface that describes the properties
// that are required to create a new User
interface AccountloginhistoryAttr {
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

// An interface that describes the properties
// that a User Model has
interface AccountloginhistoryModel
  extends mongoose.Model<AccountloginhistoryDoc> {
  build(attrs: AccountloginhistoryAttr): AccountloginhistoryDoc;
}

// An interface that describes the properties
// that a User Document has
interface AccountloginhistoryDoc extends mongoose.Document {
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

const AccountloginhistorySchema = new mongoose.Schema(
  {
    account_role: { type: String },
    device_type: { type: String },
    ip_address: { type: String },
    is_successful: { type: Boolean },
    os_type: { type: String },
    user_agent: { type: String },
    username: { type: String, required: true },
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

AccountloginhistorySchema.statics.build = (attrs: AccountloginhistoryAttr) => {
  return new Accountloginhistory(attrs);
};

const Accountloginhistory = mongoose.model<
  AccountloginhistoryDoc,
  AccountloginhistoryModel
>("Accountloginhistory", AccountloginhistorySchema);

export { Accountloginhistory };
