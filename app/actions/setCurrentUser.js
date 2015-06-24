let setCurrentUser = function (cerebral) {
  cerebral.set('session', {id: 'marc'});
};

export default setCurrentUser;
