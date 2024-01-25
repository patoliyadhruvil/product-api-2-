import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

import { authUser, provider } from "../../firebseConfing"
import { POPUPSIGNINREJ, POPUPSIGNINREQ, POPUPSIGNINRES, USERLOGINREJ, USERLOGINREQ, USERLOGINRES, USERREJ, USERREQ, USERRES, USERSIGNOUTREJ, USERSIGNOUTREQ, USERSIGNOUTRES } from "../const"

export const UserReq = () => {

    return {
        type: USERREQ
    }

}

export const UserRes = () => {

    return {
        type: USERRES
    }

}

export const UserRej = () => {

    return {
        type: USERREJ
    }

}

export const UserLoginReq = () => {

    return {
        type: USERLOGINREQ
    }

}

export const UserLoginRes = () => {

    return {
        type: USERLOGINRES
    }

}

export const UserLoginRej = (err) => {

    return {
        type: USERLOGINREJ,
        payload: err
    }

}

export const userSignOutReq = () => {

    return {
        type: USERSIGNOUTREQ
    }

}

export const userSignOutRes = () => {

    return {
        type: USERSIGNOUTRES
    }

}


export const userSignOutRej = () => {

    return {
        type: USERSIGNOUTREJ
    }

}


export const popUpSignInReq = () => {

    return {

        type: POPUPSIGNINREQ

    }

}

export const popUpSignInRes = (data) => {

    return {

        type: POPUPSIGNINRES,
        payload: data

    }

}

export const popUpSignInRej = () => {

    return {

        type: POPUPSIGNINREJ

    }

}





export const UserCreate = (email, password) => {

    return async dispatch => {

        dispatch(UserReq());

        await createUserWithEmailAndPassword(authUser, email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log("User", user);
            dispatch(UserRes())
        }).catch((error) => {
            console.log("err", error);
            dispatch(UserRej())
        })

    }

}

export const Userlogin = (email, password) => {

    return async dispatch => {

        dispatch(UserLoginReq());

        await signInWithEmailAndPassword(authUser, email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log("USERRRRR", user);
            dispatch(UserLoginRes());
        }).catch((error) => {
            let err = null
            const errorCode = error.code;
            const errorMessage = error.message

            if ("auth/invalid-credential" == errorCode) {
                err = "email does not exist / user not found";
            }

            console.log("err", error);
            dispatch(UserLoginRej(err))
        })

    }

}

export const userSignOut = () => {

    return async dispatch => {

        dispatch(userSignOutReq());

        await signOut(authUser).then((res) => {
            dispatch(userSignOutRes());
        }).catch((err) => {
            console.log("err", err);
            dispatch(userSignOutRej());
        })

    }

}

export const popUpSignIn = () => {

    return async dispatch => {
        dispatch(popUpSignInReq())
        await signInWithPopup(authUser, provider).then((res) => {
            console.log("res", res.user);
            dispatch(popUpSignInRes(res.user))
        }).catch((err) => {
            console.log(err);
            dispatch(popUpSignInRej())
        })

    }

}
