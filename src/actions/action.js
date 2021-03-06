import {POST_USER} from "../types/types";



export const postUser = data => {
    return {
        type: POST_USER,
        payload: data
    }
}