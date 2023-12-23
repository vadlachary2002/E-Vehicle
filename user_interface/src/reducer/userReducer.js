export const defaultState = {
  user: false,
  email:'',
  isAmin:false
};
export const initialState = localStorage.getItem('state')?JSON.parse(localStorage.getItem('state')):defaultState;


export const reducer = (state, action) => {
  switch (action.type) {
  case 'USER':
    var newState={
      ...state,
      user: action.payload
    }
    localStorage.setItem('state',JSON.stringify(newState));
    return newState;
  case 'ADMIN':
    var newState={
      ...state,
      isAdmin: action.payload
    }
    localStorage.setItem('state',JSON.stringify(newState));
    return newState;
  case 'EMAIL':
    var newState = {
      ...state,
      email: action.payload
    }
    localStorage.setItem('state',JSON.stringify(newState));
    return newState;
  default:
    return state;
  }
};