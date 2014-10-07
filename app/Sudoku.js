'use strict';
// Lib dependencies
var lib = require('../lib');
var grid = require('./templates/grid.jade');

function Sudoku() {
  var that = {
    board: lib.generate()
  };
  that.html = function () {
    return grid({
      board: that.board
    });
  };
  that.update = function (x, y, newval) {
    that.board[x][y] = newval;
    return that;
  };
  return that;
}

module.exports = Sudoku;
