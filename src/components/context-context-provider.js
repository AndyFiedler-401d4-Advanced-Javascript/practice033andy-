import React from 'react';

export const counterContext = React.createContext();



function addToCount(){
    return <button onClick={() => this.setState({ counter: this.state.counter + 1})}>{this.state.count}</button>;
  }

function takeFromCount(){
  return <button onClick={() => this.setState({ counter: this.state.counter -1})}>{this.state.count}</button>;
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