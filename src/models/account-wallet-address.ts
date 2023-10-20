import mongoose from "mongoose";

// An interface that describes the properties
// that are required to create a new User
interface AccountwalletadressAttr {
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

// An interface that describes the properties
// that a User Model has
interface AccountwalletadressModel
  extends mongoose.Model<AccountwalletadressDoc> {
  build(attrs: AccountwalletadressAttr): AccountwalletadressDoc;
}

// An interface that describes the properties
// that a User Document has
interface AccountwalletadressDoc extends mongoose.Document {
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

const AccountwalletadressSchema = new mongoose.Schema(
  {
    address: [
      {
        chain: { type: String },
        address: { type: String },
      },
    ],
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    memo: { type: String },
    payment_id: {
      type: String,
    },
    tag: { type: String },
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

AccountwalletadressSchema.statics.build = (attrs: AccountwalletadressAttr) => {
  return new Accountwalletadress(attrs);
};

const Accountwalletadress = mongoose.model<
  AccountwalletadressDoc,
  AccountwalletadressModel
>("Accountwalletadress", AccountwalletadressSchema);

export { Accountwalletadress };
