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

// State is set to initialState by default for initial Application load where
// no action is dispatched
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, { name: action.payload });
    // Can Also Be Written in es8 object rest spread `return { ...state, name: action.payload }`
    default:
      return state;
  }
}
