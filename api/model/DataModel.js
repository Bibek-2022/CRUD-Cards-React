import DataSchema from "./DataSchema.js";

export const getCard = () => {
  return DataSchema.find();
};

export const createCard = (obj) => {
  return DataSchema(obj).save();
};

export const deleteCard = (_id) => {
  return DataSchema.findByIdAndDelete(_id);
};
