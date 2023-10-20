import mongoose from "mongoose";

// An interface that describes the properties
// that are required to create a new User
interface AccountstatusreasonAttr {
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

// An interface that describes the properties
// that a User Model has
interface AccountstatusreasonModel
  extends mongoose.Model<AccountstatusreasonDoc> {
  build(attrs: AccountstatusreasonAttr): AccountstatusreasonDoc;
}

// An interface that describes the properties
// that a User Document has
interface AccountstatusreasonDoc extends mongoose.Document {
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

const AccountstatusreasonSchema = new mongoose.Schema(
  {
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    email: { type: String },
    message: { type: String },
    reason_type: { type: String, enum: ["FROZEN", "DELETED"] },
    disable_type: {
      type: String,
      enum: ["DONT_USE_BALANCE_NETWORK", "OTHER", "NOT_SECURE"],
    },
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

AccountstatusreasonSchema.statics.build = (attrs: AccountstatusreasonAttr) => {
  return new Accountstatusreason(attrs);
};

const Accountstatusreason = mongoose.model<
  AccountstatusreasonDoc,
  AccountstatusreasonModel
>("Accountstatusreason", AccountstatusreasonSchema);

export { Accountstatusreason };
