

import React, { createContext, useReducer } from 'react'


const GlobalStoreContext = createContext()


const globalReducer = (store, action) => {
    const { type, payload } = action

    switch(type) {
        case 'SET_TOURNAMENT_DATA': 
            return store = payload
            
        default: 
            return store
    }
}


const GlobalStoreProvider = ({children}) => { 

    const [store, dispatchStoreValues] = useReducer(globalReducer, [
        {
            "teamId" : 1,
            "name" : "Team A",
            "isLeader" : true,
            "totalWon" : 2,
            "totalLost" : 0,
            "totalPoints" : 6,
            "games" : [
                {
                    "gameId" : 1,
                    "played" : true,
                    "opponentName" : "Team B",
                    "score" : "4-10",
                    "won" : false
                },
                {
                    "gameId" : 2,
                    "played" : true,
                    "opponentName" : "Team C",
                    "score" : "0-10",
                    "won" : false
                }
            ]
        },
        {
            "teamId" : 2,
            "name" : "Team B",
            "isLeader" : false,
            "totalWon" : 1,
            "totalLost" : 1,
            "totalPoints" : 3,
            "games" : [
                {
                    "gameId" : 3,
                    "played" : true,
                    "opponentName" : "Team A",
                    "score" : "10-8",
                    "won" : true
                },
                {
                    "gameId" : 4,
                    "played" : true,
                    "opponentName" : "Team C",
                    "score" : "6-10",
                    "won" : false
                }
            ]
        },
        {
            "teamId" : 3,
            "name" : "Team C",
            "isLeader" : false,
            "totalWon" : 0,
            "totalLost" : 2,
            "totalPoints" : 0,
            "games" : [
                {
                    "gameId" : 5,
                    "played" : true,
                    "opponentName" : "Team A",
                    "score" : "10-5",
                    "won" : true
                },
                {
                    "gameId" : 6,
                    "played" : true,
                    "opponentName" : "Team B",
                    "score" : "8-10",
                    "won" : false
                }
            ]
        }
    ])
    const providerValue = {store, dispatchStoreValues}

    return (
        <GlobalStoreContext.Provider value={providerValue}>
            {children}
        </GlobalStoreContext.Provider>
    )
}

export { GlobalStoreProvider, GlobalStoreContext } 