/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Post_viewer$ref: FragmentReference;
declare export opaque type Post_viewer$fragmentType: Post_viewer$ref;
export type Post_viewer = {|
  +id: string,
  +$refType: Post_viewer$ref,
|};
export type Post_viewer$data = Post_viewer;
export type Post_viewer$key = {
  +$data?: Post_viewer$data,
  +$fragmentRefs: Post_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Post_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '96f0d0386e10ad5647d0bfc7ab685ca6';
module.exports = node;
