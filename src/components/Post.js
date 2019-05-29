import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import DeletePostMutation from "../mutations/DeletePostMutation";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Post extends React.Component {
  render() {
    return (
      <>
        <tr>
          <td>
            <div
              className="w-100"
              style={{
                backgroundImage: `url(${this.props.post.imageUrl})`,
                backgroundSize: "cover",
                paddingBottom: "100%"
              }}
            />
          </td>
          <td>{this.props.post.description}</td>
          <td>
            <Link to="/create" style={{ margin: 20 }}>
              Add New Post
            </Link>
          </td>
          <td>
            <button className="red f6 pointer dim" onClick={this._handleDelete}>
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  }

  _handleDelete = () => {
    console.log("delete***", this.props.post.id, this.props.viewer.id);
    DeletePostMutation(this.props.post.id, this.props.viewer.id);
  };
}

const FragmentContainer = createFragmentContainer(Post, {
  viewer: graphql`
    fragment Post_viewer on Viewer {
      id
    }
  `
});

export default withRouter(FragmentContainer);
