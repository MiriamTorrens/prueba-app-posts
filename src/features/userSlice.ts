import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { styleToast, styleToastWelcome } from "../styles/styleToast";
import { UserType } from "../types";
import type { RootState } from "../app/store";

function getUsersStorage() {
  const fromStorage = localStorage.getItem("users");
  return fromStorage ? JSON.parse(fromStorage) : [];
}
export interface userState {
  users: UserType[];
  auth: boolean;
  register: boolean;
}

const initialState: userState = {
  users: getUsersStorage(),
  auth: false,
  register: false,
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
          state.register = true;
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
          state.auth = true;
        } else {
          toast.error("Usuario o contraseña incorrecto", styleToast);
        }
      }
    },
    logout(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.auth = false;
      toast(
        `¡Hasta luego/a ${localStorage.getItem("user")}! :)`,
        styleToastWelcome
      );
    },
  },
});

export const { register, login, logout } = userSlice.actions;
export const auth = (state: RootState) => state.user.auth;
export const signup = (state: RootState) => state.user.register;
export default userSlice.reducer;
