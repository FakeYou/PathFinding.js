var Graph = require('..').Graph;

describe('Graph', function() {
    describe('generate with matrix', function() {
        var matrix, graph;

        beforeEach(function() {
            matrix = [
                { x: 0, y: 1, neighbors: [{x:3,y:0}, {x:2,y:3}] },
                { x: 1, y: 5, neighbors: [{x:2,y:3}, {x:5,y:5}] },
                { x: 2, y: 3, neighbors: [{x:0,y:1}, {x:1,y:5}, {x:4,y:2}] },
                { x: 3, y: 0, neighbors: [{x:0,y:1}, {x:4,y:2}] },
                { x: 4, y: 2, neighbors: [{x:2,y:3}, {x:3,y:0}, {x:6,y:1}, {x:6,y:3}, {x:5,y:5}] },
                { x: 5, y: 5, neighbors: [{x:1,y:5}, {x:4,y:2}, {x:7,y:5}] },
                { x: 6, y: 1, neighbors: [{x:4,y:2}, {x:6,y:3}] },
                { x: 6, y: 3, neighbors: [{x:4,y:2}, {x:6,y:1}, {x:7,y:5}] },
                { x: 7, y: 5, neighbors: [{x:5,y:5}, {x:6,y:3}] }
            ];

            graph = new Graph(matrix);
        });

        it('should have correct size', function() {
            graph.nodes.length.should.equal(matrix.length);
        });

        it('should set all nodes\' walkable attribute', function() {
            for(var i = 0; i < matrix.length; ++i) {
                graph.isWalkableAt(matrix[i].x, matrix[i].y).should.be.true;
            }
        });

        it('should return correct amount of neighbors', function() {
            for(var i = 0; i < matrix.length; ++i) {
                var node = graph.getNodeAt(matrix[i].x, matrix[i].y);
                var neighbors = graph.getNeighbors(node);

                neighbors.length.should.equal(matrix[i].neighbors.length);
            }
        });
    });
});