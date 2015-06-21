import './main.css';
import React from 'react';
import router from './router.js';
import cerebral from './cerebral.js';
import AppWrapper from './components/AppWrapper.js';

import setInputValue from './actions/setInputValue.js';
import addItem from './actions/addItem.js';

cerebral.signal('inputValueChanged', setInputValue);
cerebral.signal('inputValueSubmitted', addItem);

let Wrapper = cerebral.injectInto(AppWrapper);


// run the app. this is the entry point for every route
router.run((Root, state) => {
  // Way #1, the normal way, without cerebral
  // React.render(<Root />, document.querySelector('#app'))

  // Way #2, inject on every route, does not work
  // let Wrapper = cerebral.injectInto(Root);
  // React.render(<Wrapper />, document.querySelector('#app'))

  // Way #3, inject outside of router, use here
  let app = (
    <Wrapper>
      <Root />
    </Wrapper>
  )
  React.render(app, document.querySelector('#app'))
})
