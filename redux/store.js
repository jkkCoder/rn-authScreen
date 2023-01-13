import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { userListReducer, userReducer } from "./userReducers"

const rootReducer = combineReducers({
    userList : userListReducer,
    user : userReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))