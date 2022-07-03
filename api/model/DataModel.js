import CardSchema from "./DataSchema.js";

export const createCard = (obj) => {
  return CardSchema(obj).save();
};
