import React, { createContext, use } from 'react';

export const FriendsContext = createContext();

const FriendsPromise = fetch("/friends.json").then(res => res.json());

const FriendsContextData = ({children}) => {
    const FriendsData = use(FriendsPromise);
    // console.log( "arrray:" , FriendsData);
    return (
        <FriendsContext.Provider value={FriendsData} > {children} </FriendsContext.Provider>
    );
};

export default FriendsContextData;