import {Component} from 'react';

import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 22,
      text: '+++',
      position: ''
    }
  }

  nextYear = () => {
    this.setState(state => ({ //передаем колбек если важно предыдущее состояние стейт, если нет то передаем просто обьект
      years: state.years + 1 //стейт возвращает обьект но тут мы работает только с йеарс без текст и не стоит волноваться стейт изменяет только то с чем мы работаем 
    }))
  }

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const {name, surname, link} = this.props;
    const {position, years} = this.state;
    return (
      <>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, age - {years}, position - {position}</h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
      </>
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