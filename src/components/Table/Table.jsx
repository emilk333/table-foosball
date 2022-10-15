import React, { useEffect } from "react";

export const Table = (tableData) => {
    const { data } = tableData

    useEffect(() => {
        console.log("render")
    }, [])

    /**
     * Normally data should either be transformed to fit a table format with separate data for table headers 
     * and table cells (headers as keys with matching values in table cell data), or delivered by backend. 
     */

    const tableHeaderDict = {
        'name' : 'Name',
        'totalWon' : 'Won',
        'totalLost' : 'Lost',
        'totalPoints' : 'Points'
    }

    const dataKeysForFirstTeam = Object.keys(data[0])
    const keysAsTableHeaders = dataKeysForFirstTeam.filter(key => {
        return key === 'name' || 
        key === 'totalWon' || 
        key === 'totalLost'
    })
    keysAsTableHeaders.push('totalPoints')

    const calculatePoints = (numberOfWonGames) => {
        const pointFactor = 3
        return numberOfWonGames * pointFactor
    }

    const sortTableDataByHighestScore = (data) => {
        const compareTotalWins = (prevTeam, currentTeam) => {
            if (prevTeam.totalWon < currentTeam.totalWon) return 1
            if (prevTeam.totalWon > currentTeam.totalWon) return -1
            return 0
        }

        return data.sort(compareTotalWins).map((row, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{row.name}</td>
                    <td>{row.totalWon}</td>
                    <td>{row.totalLost}</td>
                    <td>{calculatePoints(row.totalWon)}</td>
                </tr>
            )
        })
    }

    /**
     * Is leader is "coming from the backend". This could easily be calculated in the frontend by 
     * finding the team with the most points. 
     */
  
    return (
        <table>
        <caption>Scoreboard</caption>
        <thead>
            <tr>
                <td></td>
                {keysAsTableHeaders.map((header, index) => {
                    return (
                        <th key={index} scope="col">{tableHeaderDict[header]}</th>
                    )
                })}
            </tr>
        </thead>
        <tbody>
            {sortTableDataByHighestScore(data)}
        </tbody>
        </table>
    )
}
