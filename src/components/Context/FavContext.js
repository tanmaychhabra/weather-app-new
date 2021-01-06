import React, {createContext} from 'react'

export const FavContext = React.createContext();
export const FavProvider = FavContext.Provider;
export const FavConsumer = FavContext.Consumer;

