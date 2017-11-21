export const incrementCounter = (obj) => {
  return {
    type: 'INCREMENT_COUNTER',
    payload: obj
  }
}

export const decrementCounter = (obj) => {
  return {
    type: 'DECREMENT_COUNTER',
    payload: obj
  }
}

export const addInsurance = (obj) => {
  return {
    type: 'ADD_INSURANCE',
    payload: obj
  }
}

export const removeInsurance = (obj_id) => {
  return {
    type: 'REMOVE_INSURANCE',
    payload: obj_id
  }
}

export const saveInsuranceToRemove = (obj) => {

  return {
    type: 'STORE_INSURANCE',
    payload: obj
  }
}
