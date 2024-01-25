import { signInWithPopup } from "firebase/auth";
import { authUser, db, provider } from "../../firebseConfing";
import { PRODUCTREJ, PRODUCTREQ, PRODUCTSUC, DATADELETEREJ, DATADELETEREQ, DATAEDITREJ, DATAEDITREQ, SINGLEDATAREJ, SINGLEDATAREQ, SINGLEDATARES, POPUPSIGNINREQ, POPUPSIGNINRES, POPUPSIGNINREJ} from "../const"
import {addDoc , collection , deleteDoc, doc, getDoc, getDocs, setDoc} from "firebase/firestore";
 
export const PRODUCTReq = () =>{
  return{
    type: PRODUCTREQ
  }
}

export const PRODUCTSuc = (data) =>{
  return{
    type: PRODUCTSUC,
    payload:data
  }
}

export const PRODUCTRej = () =>{
  return{
    type: PRODUCTREJ
  }
}

export const singleDataReq = () => {
  return {
      type: SINGLEDATAREQ
  }
};

export const singleDataRes = (data) => {
  return {
      type: SINGLEDATARES,
      payload: data
  }

};

export const singleDataRej = () => {
  return {
      type: SINGLEDATAREJ

  }
};

export const DataEditReq = () => {
  return {
      type: DATAEDITREQ

  }
}

export const DataEditRej = () => {
  return {
      type: DATAEDITREJ

  }
}

export const DatadeleteReq = () => {
  return {
      type: DATADELETEREQ

  }
}

export const DatadeleteRej = () => {
  return {
      type: DATADELETEREJ

  }
}

export const popUpSignInReq = () => {

  return{

    type: POPUPSIGNINREQ

  }

}

export const popUpSignInRes = () => {

  return{

    type: POPUPSIGNINRES

  }

}

export const popUpSignInRej = () => {

  return{

    type: POPUPSIGNINREJ

  }

}

export const Productadmin = (data) =>{

    return async dispatch => {
      await dispatch(PRODUCTReq());

      addDoc(collection(db , "product") , data).then((res) =>{
        dispatch(dataGet());
      }).catch((err) =>{
        console.log("err" , err);
        dispatch(PRODUCTRej(err));
      })
    }

}

export const dataGet = () =>{

    return async dispatch => {
      dispatch(PRODUCTReq());

     await getDocs(collection(db , "product")).then((res) =>{
        let arr= [];
        res.forEach((doc) => {
          let obj = {id: doc.id, ...doc.data()}
          arr = [...arr , obj]
        });
        dispatch(PRODUCTSuc(arr));
        console.log("arr" , arr);
      }).catch((err) =>{
        dispatch(PRODUCTRej(err));
      });
    };
};

export const datasingle = (id) =>{

  return async dispatch => {

    dispatch(singleDataReq())

    await getDoc(doc(db , "product" , `${id}`)).then((res)=>{

      if(res.exists()){
        const obj = {id: id, ...res.data()};
        console.log("obj" , obj);
        dispatch(singleDataRes(obj));
      }else{
        dispatch(singleDataRej());
      }
    }).catch((err) =>{
      dispatch(singleDataRej(err));
    })
  }

}   

export const dataEdit =  (data) => {
  return async dispatch => {
      dispatch((DataEditReq));
   await setDoc(doc(db, 'product', `${data.id}`), data).then((res) => {
          dispatch(dataGet())
      }).catch((err) => {
          dispatch(DataEditRej())
      })
  }
}

export const dataDelete = (id) => {
  return dispatch => {
      dispatch(DatadeleteReq())
      deleteDoc(doc(db, "product", `${id}`)).then((res) => {
          dispatch(dataGet())
      }).catch((err) => {
          dispatch(editDataRej())
      })
  }
}

