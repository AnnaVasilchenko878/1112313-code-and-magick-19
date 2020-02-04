'use strict';
// Улучшение игры

var widthCloud = 420;
var heightCloud = 270;

var X_CLOUD = 100;
var WIDTH_BAR = 40;
var Y_BAR = 260;
var MARGIN_BAR = 50;
var Y_TEXT = 260;
var X_TEXT = 40;
var HEIGHT_BAR = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.strokeStyle = '#000000';
  ctx.strokeRect(x, y, widthCloud, heightCloud);
  ctx.fillRect(x, y, widthCloud, heightCloud);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 120, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 110, 10, '#ffffff');

  var colorBar = ['hsl(200, 29%, 50%)', 'hsl(204, 09%, 50%)', 'hsl(204, 44%, 53%)'];

  for (var i = 0; i < players.length; i++) {
    var maxTime = getMaxElement(times);

    ctx.fillStyle = '#000000';
    ctx.fillText(players[i], X_CLOUD + MARGIN_BAR + ((X_TEXT + MARGIN_BAR) * i), Y_TEXT);
    ctx.fillStyle = colorBar[i];
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(225, 0, 0, 1)';
    }
    ctx.fillRect(X_CLOUD + MARGIN_BAR + ((WIDTH_BAR + MARGIN_BAR) * i), Y_BAR, WIDTH_BAR, (HEIGHT_BAR * times[i]) / maxTime);
  }

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 125, 40);
  ctx.font = '16px PT Mono';
  ctx.fillText('Список результатов:', 125, 70);


};
