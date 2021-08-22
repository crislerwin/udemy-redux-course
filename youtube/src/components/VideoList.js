import { List, Image } from "semantic-ui-react";
import { Component } from "react";

class VideoList extends Component {
  render() {
    return (
      <>
        <div className="video-list">
          <List.Item animated verticalAlign="middle">
            <Image avatar src="https://picsum.photos/seed/picsum/200/300" />
            <List.Content>
              <List.Header>Titulo do Video</List.Header>
            </List.Content>
          </List.Item>
        </div>
      </>
    );
  }
}

export default VideoList;
