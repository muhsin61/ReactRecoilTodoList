import { atom } from "recoil";

export const todoListState = atom({
    key: "todoListState",
    default: "yaz"
});

export const buttons = atom({
    key: "buttons",
    default: "All"
})
