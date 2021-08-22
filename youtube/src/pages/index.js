import { Component } from "react";
import SearchBar from "../components/SearchBar";
import { Provider } from "react-redux";
import VideoList from "../components/VideoList";
import "./index.css";
import store from "../redux";
import VideoPlayer from "../components/VideoPlayer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <SearchBar />
          <VideoList />
          <VideoPlayer />
        </div>
      </Provider>
    );
  }
}

export default App;
