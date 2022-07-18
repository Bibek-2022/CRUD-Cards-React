import CardSchema from "./DataSchema.js";

export const getCard = () => {
  return CardSchema.find();
};

export const createCard = (obj) => {
  return CardSchema(obj).save();
};

export const deleteCard = (_id) => {
  return CardSchema.findByIdAndDelete(_id);
};
