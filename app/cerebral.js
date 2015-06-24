import Cerebral from 'cerebral';

let cerebral = Cerebral({
  inputValue: '',
  list: [],

  users: {
    marc: {
      name: 'marc',
      variables: {
        name: 'marc',
        foo: 'bar'
      }
    }
  },
  session: {},
  variables: {},
  currentUser: function() {
    return {
      initialState: {},
      lookupState: ['session', 'users'],
      get(cerebral, lookupState, state) {
        console.log(lookupState.session.id)
        if (lookupState.session.id && lookupState.users[lookupState.session.id]) {
          return lookupState.users[lookupState.session.id]
        }
        return state
      }
    }
  },
  currentVariables: function() {
    return {
      initialState: {},
      lookupState: ['currentUser', 'variables'],
      get(cerebral, lookupState, state) {
        if (lookupState.currentUser.id) {
          return lookupState.currentUser.variables
        }
        return lookupState.variables
      }
    }
  }
});

export default cerebral;
