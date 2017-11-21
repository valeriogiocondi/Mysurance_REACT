export default function (state = [], action) {

  switch (action.type) {

    case 'ADD_INSURANCE': {

      state.push(action.payload);
      return state;
      break;
    }

    case 'REMOVE_INSURANCE': {
    
      var index = state.findIndex(function(item) {

        return (action.payload.id == item.id);
      });

      state.splice(index, 1);

      return state;
      break;
    }

    default:
      return state
  }
}