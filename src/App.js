import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { initialState } from './reducers/featureReducer'

const App = () => {
  

  return (
    <div className="boxes">
      <div className="box">
        <Header car={initialState.car} />
        <AddedFeatures car={initialState.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={initialState.additionalFeatures} />
        <Total car={initialState.car} additionalPrice={initialState.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
