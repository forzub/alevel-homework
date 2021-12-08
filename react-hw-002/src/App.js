import React, { Fragment } from 'react';
import './App.css';
import RangeToInput from './componets/RangeToInput';
import Authorization from './componets/Authorization';
import FilmsList from './componets/FilmsList';

function App() {
  return (
    <div className="App">
        <Fragment>
          <RangeToInput />
          <Authorization />
          <FilmsList />
        </Fragment>
    </div>
  );
}

export default App;
