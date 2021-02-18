import './App.css';
import ActivityCard from './components/ActivityCard';
import GenerateNew from './components/GenerateNew';
import axios from 'axios';
import React, { Component } from 'react';

async function getNewActivity(){
  
  const endPoint = 'https://www.boredapi.com/api/activity';
  const config = {headers:{"Content-type":"application/json"}};

  const result = await axios.get(endPoint,config);
  return result.data;

}

class App extends Component {

  state = {
    activity: {}
  }
  
  componentDidMount(){
    this.getNewActivity();
  }

  getNewActivity = async () => {
    const activity = await getNewActivity();
    this.setState({
      activity
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Bored?</h1>
        <h4>Maybe you could try this...</h4>
        <ActivityCard activity={this.state.activity}/>
        <GenerateNew onClick={this.getNewActivity}/>
      </div>
    );
  }
  
}

export default App;