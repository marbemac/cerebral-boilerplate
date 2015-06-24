import './main.css';
import React from 'react';
import router from './router.js';
import cerebral from './cerebral.js';
import AppWrapper from './components/AppWrapper.js';

import setInputValue from './actions/setInputValue.js';
import addItem from './actions/addItem.js';
import setCurrentUser from './actions/setCurrentUser.js';
import unsetTest from './actions/unsetTest.js';

cerebral.signal('inputValueChanged', setInputValue);
cerebral.signal('inputValueSubmitted', addItem);
cerebral.signal('setCurrentUser', setCurrentUser);
cerebral.signal('runUnsetTest', unsetTest);

let Wrapper = cerebral.injectInto(AppWrapper);


// run the app. this is the entry point for every route
router.run((Root, state) => {
  let app = (
    <Wrapper>
      <Root cerebral={cerebral} />
    </Wrapper>
  )
  React.render(app, document.querySelector('#app'))
})
