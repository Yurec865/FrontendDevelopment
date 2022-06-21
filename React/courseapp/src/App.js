import {Component} from 'react';
import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 22,
      text: '+++'
    }
  }

  nextYear = () => {
    this.setState(state => ({ //передаем колбек если важно предыдущее состояние стейт, если нет то передаем просто обьект
      years: state.years + 1
    }))
  }

  render() {
    const {name, surname, link} = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name='John' surname="Smith" link="facebook.com" />
      <WhoAmI name='Alex' surname="Shepard" link="insta.com" />
    </div>
  );
}

export default App;