import { atom } from "recoil";

export const todoListState = atom({
    key: "todoListState",
    default: []
});

export const buttons = atom({
    key: "buttons",
    default: "All"
})
