import React, { useEffect, useContext } from 'react'
import { TextInput } from '../../components/Input/TextInput'
import { GlobalStoreContext } from '../../store/TournamentStore'


export const TournamentPlan = () => {
    const context = useContext(GlobalStoreContext)

    useEffect(() => {
        //context.dispatchStoreValues({type : 'SET_TOURNAMENT_DATA', payload : teams})
    }, [])

    return (
        <section>
            I'm a tournament plan. 
            Page with input fields to generate the data model
            <TextInput />
        </section>
    )
}