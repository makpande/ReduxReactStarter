//Create a new component. This component should produce some HTML
import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return <div>Hi from React app!</div>;
}

//take this component generate HTML and put it on the page (in the DOM)
ReactDom.render(<App/>, document.querySelector('.container'));
