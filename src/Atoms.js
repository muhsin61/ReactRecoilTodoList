import { atom } from "recoil";

export const todoListState = atom({
    key: "todoListState",
    default: [{text:"başvuru",isActive:true},{text:"kod",isActive:true}]
});

export const buttons = atom({
    key: "buttons",
    default: "All"
})
