const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.node = null;
  }
  root() {
    return this.node;
  }

  add( data ) {
    this.node = addWithin(this.node, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has( data ) {
    return hasNode(this.node, data);

    function hasNode(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return hasNode(node.left, data);
      } else {
        return hasNode(node.right, data);
      }
    }
  }

  find( data ) {
    return findNode(this.node, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  remove( data ) {
    this.node = removeData(this.node, data);
    function removeData(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRigth = node.right;

        while (minRigth.left) {
          minRigth = minRigth.left;
        }
        node.data = minRigth.data;
        node.right = removeData(node.right, minRigth.data);
        return node;
      }
    }
  }

  min() {
    if (!this.node) {
      return;
    }
    let current = this.node;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.node) {
      return;
    }
    let current = this.node;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
  }


module.exports = {
  BinarySearchTree
};