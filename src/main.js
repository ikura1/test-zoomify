import $ from "jquery";
import moment from "moment";

$(() => {
  let $msg = $("#msg");
  $msg.fadeOut("slow", () => {
    $msg
      .text("webpack " + moment().format("YYYY-MM-DD HH:mm:ss"))
      .css("color", "red")
      .fadeIn("slow");
  });
});
