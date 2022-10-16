import React, { useContext, useState } from 'react'
import { TextInput } from '../../components/Input/TextInput'
import { GlobalStoreContext } from '../../store/TournamentStore'

export const TournamentPlan = () => {
    const context = useContext(GlobalStoreContext)
    const [teamToEdit, setTeamToEdit] = useState()
    const teamData = context.store

    const renderEditInputArea = (team) => {
        let name_dataBucket = null
        let won_dataBucket = null
        let lost_dataBucket = null

        const modifyTeamStatusByType = (value, type) => {
            if (type === 'name') name_dataBucket = value
            if (type === 'totalWon') won_dataBucket = value
            if (type === 'totalLost') lost_dataBucket = value
        }

        const dispatchTeamConfigDataToModify = () => {
            const payload = {
                teamId : team.teamId,
                name : name_dataBucket,
                totalWon : +won_dataBucket,
                totalLost : +lost_dataBucket
            }
            context.dispatchStoreValues({type : 'MODIFY_TOURNAMENT_DATA_BY_EDIT_TYPE', payload : payload})
            setTeamToEdit(null)
        }

        return (
            <div class="tt-tournament-plan__edit-wrapper">
                <TextInput label="Name" callback={modifyTeamStatusByType} type="name" placeholder={team.name}/>
                <TextInput label="Won" callback={modifyTeamStatusByType} type="totalWon" placeholder={team.totalWon}/>
                <TextInput label="Lost" callback={modifyTeamStatusByType} type="totalLost" placeholder={team.totalLost}/>
                <div>
                    <button className="tt-button" onClick={() => dispatchTeamConfigDataToModify()}>Save</button>
                    <button className="tt-button" onClick={() => setTeamToEdit(null)}>Cancel</button>
                </div>
            </div>
        )
    }

    return (
        <section>

            Select a team to edit: 
            {teamData.map((team, index) => <button className={"tt-button" + (teamToEdit === team.teamId ? " tt-button--selected" : '')} key={index} onClick={() => setTeamToEdit(team.teamId)}>{team.name}</button>)}

            {teamData.map((team, index) => {
                return (
                    <React.Fragment key={index}>
                        {team.teamId === teamToEdit && 
                            renderEditInputArea(team)
                        } 
                    </React.Fragment>
                )
            })}

        </section>
    )
}