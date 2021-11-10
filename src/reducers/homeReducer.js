import constants from 'constants'

const initialState = {
  number: 0,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action = { type: '', data: '' }) => {
  const { type, data } = action
  switch (type) {
    case constants.CHANGE_NUMBER:
      return {
        ...state,
        number: data,
      }
    default:
      return state
  }
}