import "./body.css";
const $ = require("jquery");
const _ = require("lodash");

$("body").append("<button>Click here to get started</button>");
$("body").append('<p id="counter"><p>');
// test
const updateCounter = () => {
  let times = $("#counter").html() || 0;
  $("button").on("click", () => {
    times++;
    $("#counter").html(`${times} clicks on the button`);
  });
};

_.debounce(updateCounter, 500);
updateCounter();
