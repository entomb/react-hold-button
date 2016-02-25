import React from 'react';
import ReactDOM from 'react-dom';  
import HoldButton from '../src/HoldButton.jsx';  


    const exampleCallback(){ 
        alert("this is a callback"); 
    }

    ReactDOM.render(
      <HoldButton onLongPress={exampleCallback} Content="yes" />,
      document.getElementById('container')
    );
