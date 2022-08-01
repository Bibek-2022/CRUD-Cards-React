import RegisterSchema from "./RegisterSchema.js";

export const createNewAdmin = (obj) => {
  return AdminSchema(obj).save();
};
