import { Component } from 'react';
import SearchBar from '../components/SearchBar'
import {Provider} from 'react-redux'
import "./App.css"
import store from '../redux';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
      <div>
        <SearchBar/>
      </div>
      </Provider>
    )
  }
}

export default App;