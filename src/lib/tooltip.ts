import $ from "jquery";

const activeHover = $(".tooltip-container");

export const initializeTooltips = () => {
  // mouseenter
  activeHover.on("mouseenter", function () {
    switch (this.id) {
      case "jasmin":
        $(this).find(".story-tooltip").toggleClass("slideToLeft-400");
        break;
      case "kristine":
        $(this).find(".story-tooltip").toggleClass("slidetoup-400");
        break;
      case "sheilamay":
        $(this).find(".story-tooltip").toggleClass("slidetoup-400");
        break;
      case "daniela":
        $(this).find(".story-tooltip").toggleClass("slidetodown-400");
        break;
      case "rey":
        $(this).find(".story-tooltip").toggleClass("slidetodown-400");
        break;
      case "wilson":
        $(this).find(".story-tooltip").toggleClass("slidetodown-400");
        break;
      case "laizanny":
        $(this).find(".story-tooltip").toggleClass("slideToRight-400");
        break;
    }
  });

  // mouseleave
  activeHover.on("mouseleave", function () {
    switch (this.id) {
      case "jasmin":
        $(this).find(".story-tooltip").toggleClass("slideToLeft-400");
        break;
      case "kristine":
        $(this).find(".story-tooltip").toggleClass("slidetoup-400");
        break;
      case "sheilamay":
        $(this).find(".story-tooltip").toggleClass("slidetoup-400");
        break;
      case "daniela":
        $(this).find(".story-tooltip").toggleClass("slidetodown-400");
        break;
      case "rey":
        $(this).find(".story-tooltip").toggleClass("slidetodown-400");
        break;
      case "wilson":
        $(this).find(".story-tooltip").toggleClass("slidetodown-400");
        break;
      case "laizanny":
        $(this).find(".story-tooltip").toggleClass("slideToRight-400");
        break;
    }
  });
};
