import bcrypt from "bcrypt";
const salt = bcrypt.genSaltSync(10);

export const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword);
};
