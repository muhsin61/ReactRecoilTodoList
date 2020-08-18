import { selector } from "recoil";
import {todoListState} from "./Atoms"

export const stateLength = selector({
    key:"stateLength",
    get:({get})=>{
        const text = get(todoListState);
        return text.length
    }

})