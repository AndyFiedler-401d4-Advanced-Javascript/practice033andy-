import React from 'react';

export const counterContext = React.createContext();



function addToCount(count){
  
}

class contextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      increment: addToCount,
      decrement: takeFromCount,
    }
  }
}

export default contextProvider;