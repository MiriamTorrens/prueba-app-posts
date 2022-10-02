import { toast } from "react-toastify";

export const styleToast = {
  position: toast.POSITION.TOP_CENTER,
  hideProgressBar: true,
  autoClose: 1500,
};

export const styleToastWelcome = {
  position: toast.POSITION.TOP_CENTER,
  hideProgressBar: true,
  autoClose: 1000,
  className: "toast-welcome",
};
