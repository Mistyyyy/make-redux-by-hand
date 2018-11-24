const themeColor = (state = 'red', action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
        return action.themeColor
    default:
      return state
  }
}

const num = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'DEC':
      return state - 1
    default:
      return state
  }
}


export { themeColor,  num }