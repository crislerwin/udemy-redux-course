import { Component } from "react";
import { Segment, Input } from "semantic-ui-react";
import { buscaVideo } from "../redux/actions/busca-video";

import { connect } from "react-redux";
class SearchBar extends Component {
  buscaVideo = (e) => {
    if (e.keyCode === 13) {
      const termo = e.target.value;
      console.log(termo);
      this.props.buscaVideo(termo);
    }
  };

  render() {
    return (
      <div className="search-bar">
        <Segment stacked>
          <Input
            icon="search"
            placeholder="Search..."
            onKeyDown={this.buscaVideo}
          />
        </Segment>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buscaVideo: (termo) => dispatch(buscaVideo(termo)),
  };
};
export default connect(null, mapDispatchToProps)(SearchBar);
