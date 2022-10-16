
import React, { createContext, useReducer } from 'react'

const GlobalStoreContext = createContext()

const globalReducer = (store, action) => {
    const { type, payload } = action

    switch(type) {
        case 'SET_TOURNAMENT_DATA': 
            return store = payload
        
        case 'MODIFY_TOURNAMENT_DATA_BY_EDIT_TYPE':
            const newStore = store.map(team => {
                if (team.teamId === payload.teamId) {
                    return {
                        ...team,
                        name : payload.name ? payload.name : team.name,
                        totalWon : payload.totalWon ? payload.totalWon : team.totalWon,
                        totalLost : payload.totalLost != undefined && payload.totalLost != null ? payload.totalLost : team.totalLost
                    }
                } else {
                    return team
                }
            })

            return newStore

        default: 
            return store
    }
}


const GlobalStoreProvider = ({children}) => { 

    const [store, dispatchStoreValues] = useReducer(globalReducer, null)
    const providerValue = {store, dispatchStoreValues}

    return (
        <GlobalStoreContext.Provider value={providerValue}>
            {children}
        </GlobalStoreContext.Provider>
    )
}

export { GlobalStoreProvider, GlobalStoreContext } 