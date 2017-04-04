$(document).ready(function () {
  start(384, "25px", true);
  attachClearListener();
  attachPixelSizeChangeListener();
});

var start = function(gridsize=384, size="25px") {
  addGrid(gridsize, size);
  attachSketchListener();
};

var addGrid = function (gridsize, size) {
  var counter = 0;
  while (counter < gridsize) {
    $("#container").append("<div class=grid></div>");
    counter ++;
  }
  $(".grid").width(size);
  $(".grid").height(size);
};

var attachSketchListener = function () {
  $(".grid").on('mouseenter',function () {
    $(this).addClass('sketch');
  });
};

var attachClearListener = function () {
  $("#container").click(function (){
    clearSketch();
  });
};

var clearSketch = function () {
      $("#container").effect("shake", 4);
    $(".grid").removeClass("sketch");
};

var attachPixelSizeChangeListener = function() {
  $('input:radio').change(function(){
    var pixel = $(this).val();
    if (pixel === "25px") {
      restart(384, pixel);
    } else if (pixel === "20px") {
      restart(600, pixel);
    } else {
      restart(2400, pixel);
    }
  });
};

var restart = function (gridsize, pixelsize) {
  clearSketch();
  removeGrid();
  start(gridsize, pixelsize)
};

var removeGrid = function () {
  $(".grid").off('mouseenter')
  $(".grid").remove();
};