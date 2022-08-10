import AdminSchema from "./AdminSchema.js";

export const createNewAdmin = (obj) => {
  return AdminSchema(obj).save();
};

export const getOneAdmin = (filter) => {
  return AdminSchema.findOne(filter);
};
