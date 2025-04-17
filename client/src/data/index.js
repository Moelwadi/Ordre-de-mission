import { createStore } from "react-data-stores";
export const errorFlag = createStore({ value: false, message: "" });
export const warnningFlas = createStore({ value: false, message: "" });
export const successFlag = createStore({ value: false, message: "" });
