import React, { useState, useContext, useEffect  } from 'react'
import { Scoreboard } from './features/Scoreboard/Scoreboard'
import { TournamentPlan } from './features/TournamentPlan/TournamentPlan'
import "./App.css";
import "./main.scss"
import { GlobalStoreProvider } from './store/TournamentStore'
import { GlobalStoreContext } from './store/TournamentStore'
import { fetchData } from './foundation/fetch'
import { ACLMapper } from './store/ACLmapper'

const AppWrapper = () => {
	const [screenToDisplay, setScreenToDisplay] = useState('scoreboard')
	const context = useContext(GlobalStoreContext)

	useEffect(() => {
		/**
		 * This simulates getting persisted data from a backend. Imagine an admin creating the tournament plan and saving it.
		 */
		fetchData('/public/data/tournamentData.json').then(res => {
			context.dispatchStoreValues({ type: 'SET_TOURNAMENT_DATA', payload : ACLMapper(res) })
		})
	},[])

	if (context.store) {
		return (
			<div>
				<h1>Signifly's Great Foosball Tournmanet App</h1>
				<div>
					<button onClick={() => setScreenToDisplay('scoreboard')}>Scoreboard</button>
					<button onClick={() => setScreenToDisplay('tournamentPlan')}>Tournament Plan</button>
				</div>
				{screenToDisplay === 'scoreboard' && <Scoreboard />}
				{screenToDisplay === 'tournamentPlan' && <TournamentPlan />}
			</div>
		)
	} else {
		<div>Loading...</div>
	}
}

function App() {
	return (
		<GlobalStoreProvider>
			<main className="App">
				<AppWrapper />
			</main>
		</GlobalStoreProvider>
	)
}

export default App;
