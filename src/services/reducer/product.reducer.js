import { DATADELETEREQ, DATAEDITREJ, DATAEDITREQ, PRODUCTREJ, PRODUCTREQ, PRODUCTSUC, SINGLEDATAREJ, SINGLEDATAREQ, SINGLEDATARES } from "../const";

const initialState = {
  products: [],
  product: null,
  isloading: false,
  err: false
}

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTREQ:
      return {
        ...state,
        isloading: true
      };

    case PRODUCTSUC:
      return {
        ...state,
        isloading: false,
        products: action.payload,
        error: null
      };

    case PRODUCTREJ:
      return {
        ...state,
        err: true,
        isloading: false
      }

    case SINGLEDATAREQ:
      return {
        ...state,
        isloading: true,
      }

    case SINGLEDATARES:
      return {
        ...state,
        isloading: false,
        product: action.payload,
        error: null,
      }

    case SINGLEDATAREJ:
      return {
        ...state,
        isloading: false,
        error: "error",
      }

    case DATAEDITREQ:
      return {
        ...state,
        isloading: true
      }

    case DATAEDITREJ:
      return {
        ...state,
        isloading: false,
        err: "error"
      }

    case DATADELETEREQ:
      return {
        ...state,
        isloading: true,
      }

    case DATAEDITREJ:
      return {
        ...state,
        isloading: false,
        error: "error"
      }

    default:
      return state;

  }


}