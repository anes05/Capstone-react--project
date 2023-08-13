
export const initializeTimes = () => {
  // return initial state
  return [
      "09:00 AM",
      "12:00 PM",
      "03:00 PM",
      "06:00 PM",
      "09:00 PM",
    ];
}

export const updateTimes = (selectedDate) => {
  return initializeTimes()
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_AVAILABLE_TIMES':
    return {
      ...state,
      availableTimes: action.payload
    }
    default:
      return state
    }
}


export default reducer