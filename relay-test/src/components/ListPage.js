import React from "react";
import Post from "./Post";

import { createFragmentContainer, graphql } from "react-relay";

class ListPage extends React.Component {
  render() {
    // console.log('ListPage - render - environment', this.props.relay.environment)
    return (
      <div className="pa3 bg-black-05 ma3">
        <div className="pt3">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Description</th>
                <th>Add New</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.props.viewer.allPosts.edges.map(({ node }) => (
                <Post key={node.id} post={node} viewer={this.props.viewer} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(ListPage, {
  viewer: graphql`
    fragment ListPage_viewer on Viewer {
      ...Post_viewer
      allPosts(last: 100, orderBy: createdAt_DESC)
        @connection(key: "ListPage_allPosts", filters: []) {
        edges {
          node {
            id
            description
            imageUrl
            ...Post_post
          }
        }
      }
    }
  `
});
