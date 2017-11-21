export default function (state = [], action) {

  switch (action.type) {

    case 'STORE_INSURANCE': {

      state = action.payload;
      return state;
      break;
    }

    default:
      return state
  }
}