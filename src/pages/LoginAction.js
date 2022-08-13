import { toast } from "react-toastify";
import { logUser, registerUser } from "../helper/axiosHelper";
import { setLogin } from "./LoginSlice";

export const loginAction = (obj) => async (dispatch) => {
  const results = logUser(obj);

  toast.promise(results, { pending: "Please Wait" });

  const { status, message, result } = await results;

  toast[status](message);

  status === "success" && dispatch(setLogin(result));
};
