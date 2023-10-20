import mongoose from "mongoose";

// An interface that describes the properties
// that are required to create a new User
interface AdminaccounttAttr {
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

// An interface that describes the properties
// that a User Model has
interface AdminaccounttModel extends mongoose.Model<AdminaccounttDoc> {
  build(attrs: AdminaccounttAttr): AdminaccounttDoc;
}

// An interface that describes the properties
// that a User Document has
interface AdminaccounttDoc extends mongoose.Document {
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

const AdminaccounttSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    is_active: { type: Boolean, default: true },
    authentication_provider: { type: String, required: true },
    authentication_type: { type: String, required: true },
    ga_qrcode: { type: String },
    ga_secret_key: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    privileges: [
      {
        privileges_name: { type: String },
      },
    ],
    privilege_id: { type: Number },
    email_code: { type: String },
    role: { type: String },
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

AdminaccounttSchema.statics.build = (attrs: AdminaccounttAttr) => {
  return new Adminaccountt(attrs);
};

const Adminaccountt = mongoose.model<AdminaccounttDoc, AdminaccounttModel>(
  "Adminaccountt",
  AdminaccounttSchema
);

export { Adminaccountt };
