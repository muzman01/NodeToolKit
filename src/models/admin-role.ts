import mongoose from "mongoose";

// An interface that describes the properties
// that are required to create a new User
interface AdminroleAttr {
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

// An interface that describes the properties
// that a User Model has
interface AdminroleModel extends mongoose.Model<AdminroleDoc> {
  build(attrs: AdminroleAttr): AdminroleDoc;
}

// An interface that describes the properties
// that a User Document has
interface AdminroleDoc extends mongoose.Document {
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

const AdminroleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    privileges: [
      {
        privileges_name: { type: String },
      },
    ],
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

AdminroleSchema.statics.build = (attrs: AdminroleAttr) => {
  return new Adminrole(attrs);
};

const Adminrole = mongoose.model<AdminroleDoc, AdminroleModel>(
  "Adminrole",
  AdminroleSchema
);

export { Adminrole };
