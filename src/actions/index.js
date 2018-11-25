const createChangeAction = themeColor => ({
  type: 'CHANGE_COLOR',
  themeColor
})

const createAddAction = () => ({
  type: 'ADD'
})

const createDecAction = () => ({
  type: 'DEC'
})

export { createChangeAction, createAddAction, createDecAction }