import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment/createRelayEnvironment";
import ListPage from "../components/ListPage";
import Header from "../components/Header";

const HomeAllPostQuery = graphql`
  query HomeAllPostQuery {
    viewer {
      ...ListPage_viewer
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <div>
        <QueryRenderer
          environment={environment}
          query={HomeAllPostQuery}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              return (
                <>
                  <Header />
                  <ListPage viewer={props.viewer} />
                </>
              );
            }
            return <div>Loading</div>;
          }}
        />
      </div>
    );
  }
}

export default Home;
