var Node = require('./Node');

function Graph(matrix) {
    this.nodes = [];

    this.nodes = this._buildNodes(matrix);
}

Graph.prototype._buildNodes = function(matrix) {
    var i, j,
        element,
        neighbor,
        neighborNode,
        node;

    for(i = 0; i < matrix.length; ++i) {
        element = matrix[i];

        node = this.addNodeAt(element.x, element.y)

        for(j = 0; j < element.neighbors.length; ++j) {
            neighbor = element.neighbors[j];

            neighborNode = this.addNodeAt(neighbor.x, neighbor.y);

            this.setNeighbor(node, neighborNode);
        }
    }

    return this.nodes;
}

Graph.prototype.addNodeAt = function(x, y) {
    var node = this.getNodeAt(x, y);

    if(node) {
        return node;
    }

    node = new Node(x, y);
    this.nodes.push(node);

    return node;
}

Graph.prototype.setNeighbor = function(node, neighbor) {
    for(var i = 0; i < node.neighbors.length; i++) {
        if(node.neighbors[i].equals(neighbor)) {
            return;
        }
    }


    node.neighbors.push(neighbor);
}

Graph.prototype.getNodeAt = function(x, y) {
    for(var i = 0; i < this.nodes.length; i++) {
        if(this.nodes[i].equals({x: x, y:y })) {
            return this.nodes[i];
        }
    }

    return false;
}

Graph.prototype.isWalkableAt = function(x, y) {
    var node = this.getNodeAt(x, y);

    if(node) {
        return node.walkable;
    }

    return false;
}

Graph.prototype.isInside = function(x, y) {
    if(this.getNodeAt(x, y)) {
        return true;
    }

    return false;
}

Graph.prototype.setWalkableAt = function(x, y, walkable) {
    this.getNodeAt(x, y).walkable = walkable;
}

Graph.prototype.getNeighbors = function(node) {
    return node.neighbors;
}

module.exports = Graph;