import React, { useState } from 'react'
import { Scoreboard } from './features/Scoreboard/Scoreboard'
import { TournamentPlan } from './features/TournamentPlan/TournamentPlan'
import "./App.css";
import "./main.scss"
import { GlobalStoreProvider } from './store/TournamentStore'

function App() {
	const [screenToDisplay, setScreenToDisplay] = useState('scoreboard')

	return (
		<GlobalStoreProvider>
			<div className="App">
				<h1>Signifly's Great Foosball Tournmanet App</h1>
				<div>
					<button onClick={() => setScreenToDisplay('scoreboard')}>Scoreboard</button>
					<button onClick={() => setScreenToDisplay('tournamentPlan')}>Tournament Plan</button>
				</div>
				{screenToDisplay === 'scoreboard' && <Scoreboard />}
				{screenToDisplay === 'tournamentPlan' && <TournamentPlan />}
			</div>
		</GlobalStoreProvider>
	)
}

export default App;
