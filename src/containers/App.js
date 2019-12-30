import React from 'react';
import './App.css';
import PlanetList from '../components/PlanetList';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      planets: []
    }
  }
  componentDidMount(){
    fetch(`https://swapi.co/api/planets/`).then(results => results.json()).then(
      (res)=>{
        this.setState({planets: res.results});
      }
    )
  }
  render(){
    return (
      <div className="tc">
        <h1>Star Wars</h1>
       <PlanetList planets={this.state.planets}/>
      </div>
    );
  }
 
}

export default App;
