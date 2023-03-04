import { cartPersistReducer, favoritePersistReducer, userIdPersistReducer } from "./persistReducers";
import productReducer from "./reducers/productReducer";
import usersReducer from "./reducers/users";

export const rootReducers = {
    userId: userIdPersistReducer,
    favorite: favoritePersistReducer,
    cart: cartPersistReducer,
    users: usersReducer,
    product: productReducer
}