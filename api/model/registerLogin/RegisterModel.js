import RegisterSchema from "./RegisterSchema.js";

export const createNewAdmin = (obj) => {
  return RegisterSchema(obj).save();
};
