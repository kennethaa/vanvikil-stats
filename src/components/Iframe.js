// @flow

import { Component } from 'react';

function postMessage() {
  const root = document.getElementById('root');
  window.parent.postMessage(
    JSON.stringify({
      height: root && root.scrollHeight,
    }),
    'https://vanvikil.no'
  );
}

function iframe() {
  // stop if window is top / not iframe
  if (self === top) {
    // eslint-disable-line no-restricted-globals
    return;
  }

  // post message initially
  postMessage();

  const MutationObserver =
    window.MutationObserver || window.WebKitMutationObserver;

  if (!MutationObserver) {
    return;
  }

  new MutationObserver(() => postMessage()).observe(
    document.getElementById('root'),
    {
      attributes: true,
      attributeOldValue: false,
      characterData: true,
      characterDataOldValue: false,
      childList: true,
      subtree: true,
    }
  );
}

class Iframe extends Component {
  componentDidMount() {
    iframe();
  }

  render() {
    return null;
  }
}

export default Iframe;
