import {
  setGameState,
  setInGameMessage
} from '../../../Common/redux/slices/wheelSpinSlice'

const durations = {
  RESET: 0,
  STARTING: 0,
  SPINNING: 0,
  END: 0
}

export const handleStateTransition = (currentState, dispatch) => {
  switch (currentState) {
    case 'RESET':
      dispatch(setGameState('STARTING'))
      dispatch(setInGameMessage('Betting is now open! Place your bets.'))
      break

    case 'STARTING':
      dispatch(setInGameMessage('The wheel is spinning... Good luck!'))
      dispatch(setGameState('SPINNING'))
      break

    case 'SPINNING':
      dispatch(setGameState('END'))
      dispatch(setInGameMessage('Round complete. Check your results!'))
      break

    case 'END':
      dispatch(setGameState('RESET'))
      break

    default:
      console.error(`Unknown game state: ${currentState}`)
  }
}

export const getDurationForState = state => durations[state] || 0
