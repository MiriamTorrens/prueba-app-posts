import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { styleToast, styleToastWelcome } from "../styles/styleToast";
import { UserType } from "../types";

function getUsersStorage() {
  const fromStorage = localStorage.getItem("users");
  return fromStorage ? JSON.parse(fromStorage) : [];
}
export interface userState {
  users: UserType[];
}

const initialState: userState = {
  users: getUsersStorage(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state, action: PayloadAction<UserType>) {
      const { payload } = action;
      const { name, password } = payload;
      const usersName = state.users.map((user) => user.name);
      if (!usersName.includes(name)) {
        if (password.length >= 6) {
          state.users.push(payload);
          localStorage.setItem("users", JSON.stringify(state.users));
          toast.success(
            "¡Registro completado con éxito! Ya puedes iniciar sesión",
            styleToast
          );
          setTimeout(() => (window.location.href = "/login"), 2000);
        } else {
          toast.error(
            "La contraseña debe tener al menos 6 caracteres",
            styleToast
          );
        }
      } else {
        toast.error("El nombre de usuario ya existe", styleToast);
      }
    },
    login(state, action: PayloadAction<UserType>) {
      const { payload } = action;
      const { name, password } = payload;
      let currentUser: undefined | UserType;
      const usersName = state.users.map((user) => user.name);
      usersName.includes(name)
        ? (currentUser = state.users.find((user) => user.name === name))
        : toast.error("El usuario no existe", styleToast);
      if (currentUser) {
        if (currentUser.password === password) {
          localStorage.setItem("token", "true");
          localStorage.setItem(
            "user",
            name.charAt(0).toUpperCase() + name.slice(1)
          );
          toast(
            `!Bienvenido/a ${localStorage.getItem("user")}! :)`,
            styleToastWelcome
          );
          setTimeout(() => (window.location.href = "/"), 800);
        } else {
          toast.error("Usuario o contraseña incorrecto", styleToast);
        }
      }
    },
    logout() {
      localStorage.removeItem("token");
      toast(
        `¡Hasta luego/a ${localStorage.getItem("user")}! :)`,
        styleToastWelcome
      );
      setTimeout(() => (window.location.href = "/login"), 800);
    },
  },
});

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer;
