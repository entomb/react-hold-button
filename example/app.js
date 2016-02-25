import React from 'react';
import ReactDOM from 'react-dom';  
import HoldButton from '../src/HoldButton.js';  


    var exampleCallback = function(){ 
        alert("this is a callback"); 
    }

ReactDOM.render(
  <HoldButton onLongPress={exampleCallback} Content="yes" />,
  document.getElementById('container')
);
