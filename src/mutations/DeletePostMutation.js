import { commitMutation, graphql } from "react-relay";
import { ConnectionHandler } from "relay-runtime";
import environment from "../Environment/createRelayEnvironment";

const mutation = graphql`
  mutation DeletePostMutation($input: DeletePostInput!) {
    deletePost(input: $input) {
      deletedId
    }
  }
`;

export default function DeletePostMutation(postId, viewerId) {
  const variables = {
    input: {
      id: postId,
      clientMutationId: ""
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    onError: err => console.error(err),
    updater: proxyStore => {
      const deletePostField = proxyStore.getRootField("deletePost");
      const deletedId = deletePostField.getValue("deletedId");

      console.log("viewerId********", viewerId);
      const viewerProxy = proxyStore.get(viewerId);
      console.log("viewerProxy********", viewerProxy);
      const connection = ConnectionHandler.getConnection(
        viewerProxy,
        "ListPage_allPosts"
      );
      console.log("connection********", connection);
      ConnectionHandler.deleteNode(connection, deletedId);
    }
  });
}
