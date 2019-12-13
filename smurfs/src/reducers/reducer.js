import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_ERROR,
  POST_SMURFS_START,
  POST_SMURFS_SUCCESS,
  POST_SMURFS_ERROR,
  DELETE_SMURFS_START,
  DELETE_SMURFS_SUCCESS,
  DELETE_SMURFS_ERROR
} from "../actions/action";

//
export const initialState = {
  smurfs: "",
  isFetching: false,
  isPosting: false,
  isDeleting: false,
  smurfToEdit: {},
  error: ""
};

//
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        smurfs: "",
        isFetching: true,
        error: ""
      };

    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ""
      };

    case GET_SMURFS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    case POST_SMURFS_START:
      return {
        ...state,
        isPosting: true,
        error: ""
      };

    case POST_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isPosting: false,
        error: ""
      };

    case POST_SMURFS_ERROR:
      return {
        ...state,
        isPosting: false,
        error: action.payload
      };

    case DELETE_SMURFS_START:
      return {
        ...state,
        isDeleting: true,
        error: ""
      };

    case DELETE_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isDeleting: false,
        error: ""
      };

    case DELETE_SMURFS_ERROR:
      return {
        ...state,
        isDeleting: false,
        error: action.payload
      };

    default:
      return state;
  }
};
