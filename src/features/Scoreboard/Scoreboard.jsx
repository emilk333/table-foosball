import React, { useContext, useEffect } from 'react'
import { Table } from '../../components/Table/Table'
import { GlobalStoreContext } from '../../store/TournamentStore'

export const Scoreboard = () => {

    const context = useContext(GlobalStoreContext)
    const tableData = context.store

    return (
        <section>
            <Table data={tableData}/>
        </section>
    )
}