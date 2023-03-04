import {WebStorage} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer"
import cartReducer from "./reducers/cartReducer"
import userIdReducer from "./reducers/userId"
import favoriteReducer from './reducers/favoriteReducer'

interface IPersistConfig {
    key: string
    version: number
    storage: WebStorage
}

const userIdPersistConfig: IPersistConfig = {
    key: 'userId',
    version: 1,
    storage,
}

const favoritePersistConfig: IPersistConfig = {
    key: 'favorite',
    version: 2,
    storage
}

const cartPersistConfig: IPersistConfig = {
    key: 'cart',
    version: 3,
    storage,
}

export const userIdPersistReducer = persistReducer(userIdPersistConfig, userIdReducer)
export const favoritePersistReducer = persistReducer(favoritePersistConfig, favoriteReducer)
export const cartPersistReducer = persistReducer(cartPersistConfig, cartReducer)