export default function (state = 0, action) {

  switch (action.type) {

    case 'INCREMENT_COUNTER': {

      return parseInt(state)+parseInt(action.payload.yearlyPremium);
      break;
    }

    case 'DECREMENT_COUNTER':
      return parseInt(state)-parseInt(action.payload.yearlyPremium);
      break;

    default:
      return state
  }
}