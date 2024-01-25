import { POPUPSIGNINREQ, POPUPSIGNINRES, USERLOGINREJ, USERLOGINREQ, USERLOGINRES, USERREJ, USERREQ, USERRES, USERSIGNOUTREQ, USERSIGNOUTRES } from "../const";


const initialState = {
    isLoading: false,
    isLogin: false,
    user: null,
    isSignup: false,
    err: null
}

export const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case USERREQ:
            return {
                ...state,
                isLoading: true
            };

        case USERRES:
            return {
                ...state,
                isLoading: false,
                isSignup: true
            }

        case USERREJ:
            return {
                ...state,
                isLoading: false,
                isSignup: false,
                err: "somthing wrong"
            }

        case USERLOGINREQ:
            return {
                ...state,
                isLoading: true,
            }

        case USERLOGINRES:
            return {
                ...state,
                isLoading: false,
                isLogin: true,
            }

        case USERLOGINREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }

        case USERSIGNOUTREQ:
            return {
                ...state,
                isLoading: false,
            }

        case USERSIGNOUTRES:
            return {
                ...state,
                isLoading: false,
                user: null,
                isLogin: false
            }

        case USERSIGNOUTRES:
            return {
                ...state,
                isLoading: false,
                err: "something write wrong"
            }

        case POPUPSIGNINREQ:
            return {
                ...state,
                isloading: true
            }

        case POPUPSIGNINRES:
            return {
                ...state,
                isloading: false,
                user: action.payload,
                err: null,
                isLogin: true
            }

        case USERSIGNOUTRES:
            return {
                ...state,
                isLoading: false,
                err: "something write wrong"
            }


        default:
            return state;
    }

}