// CONSTANTS (ACTION TYPES) ALL CAPS TO DENOTE THAT IT SHOULDN'T BE CHANGED
const UPDATE_NAME = 'UPDATE_NAME';

// ACTION CREATORS (ALWAYS RETURN OBJECTS CALLED ACTIONS)
export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}

// INITIAL STATE

const initialState = {
  name: 'Steven'
};

// REDUCER

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, { name: action.payload });
    // Can Also Be Written `return { ...state, name: action.payload }`
    default:
      return state;
  }
}
