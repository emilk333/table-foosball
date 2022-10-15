

/**
 * Anti-corruption layer for "data that comes from the backend". This ensures null values and 
 * Faulty structure does not completely break the frontend. 
 */

export const ACLMapper = (data) => {
    return data.map(team => {
        return {
            "teamId" : team.teamId ?? 'error',
            "name" : team.name ?? '-',
            "isLeader" : team.isLeader ?? false,
            "totalWon" : team.totalWon ?? '-',
            "totalLost" : team.totalLost ?? '-',
            "totalPoints" : team.totalPoints ?? '-',
            "games" : team.games.map(game => {
                    return {
                        "gameId" : game.gameId,
                        "played" : game.played,
                        "opponentName" : game.opponentName ?? '-',
                        "score" : game.score ?? '-',
                        "won" : game.won
                    }
                }
            ) ?? []
        }
    })
}