import React from 'react';

const CurrentArrayContext = React.createContext({
  currentArray: [], // valor predeterminado para 'currentArray'
  setCurrentArray: (array) => {}, // valor predeterminado para 'setCurrentArray'
});

export default CurrentArrayContext;
