import {configureStore} from "@reduxjs/toolkit";
import authorizationReducer from "./authorizationSlice";
import groupReducer from "./groupSlice";
import editReducer from "./editSlice";

export default configureStore({
    reducer:{
        authorization: authorizationReducer,
        groups: groupReducer,
        edit: editReducer
    }
})