import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from './hooks/nav'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Nav />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Navigation bar points to dark mode selector', ()=>{
  it('Has a Prompt to click darkmode button', ()=>{
   const test = rtl.render(<Nav/>);
   const h1 = test.queryByText(/dark/i);
   expect(h1).toBeInTheDocument();
 
   })
})