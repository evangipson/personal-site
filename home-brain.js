/**
 * Will pick a random element from an array.
 */
var randomElement = function (array) {
  return array[Math.floor(Math.random()*array.length)];
};

/**
 * Will paint the DOM using a selection from
 * the possibleColorCombos array.
 */
function paintDOM() {
    var selectedColorCombo = randomElement(possibleColorCombos);
    var body = document.getElementsByTagName("body")[0];
    var header = document.getElementsByTagName("h1")[0];
    var subheader = document.getElementsByTagName("h2")[0];
    // Body/sweeping
    body.style.background = selectedColorCombo.tertiary;
    body.style.color = selectedColorCombo.secondary;
    // Heading 1
    header.style.background = selectedColorCombo.primary;
    header.style.color = selectedColorCombo.tertiary;
    header.style.textShadow = "2px 4px " + selectedColorCombo.secondary;
    // Heading 2
    subheader.style.background = selectedColorCombo.secondary;
    subheader.style.color = selectedColorCombo.primary;
    subheader.style.textShadow = "2px 4px " + selectedColorCombo.tertiary;
    // All Heading 3s
    var allH3s = Array.prototype.slice.call(document.getElementsByTagName("h3"));
    for(var h3Index = 0; h3Index < allH3s.length; h3Index++) {
        allH3s[h3Index].style.color = selectedColorCombo.secondary;
        allH3s[h3Index].style.textShadow = "2px 4px " + selectedColorCombo.primary;
    }
    // All links
    var allLinks = Array.prototype.slice.call(document.getElementsByTagName("a"));
    for(var linkIndex = 0; linkIndex < allLinks.length; linkIndex++) {
        allLinks[linkIndex].style.color = selectedColorCombo.primary;
        allLinks[linkIndex].style.textShadow = "2px 3px " + selectedColorCombo.secondary;
    }
}

var possibleGreetings = [
  "oh- hi doggy!",
  "i make online web",
  "greetings, traveler",
  "stay awhile, and listen",
  "stop! you've violated the law!",
  "RIP Chuck Schuldiner",
  "hold x to jump higher",
  "an internet explorer",
  "big gulps, huh?"
];
/* color combos should be comprised of
 * primary, secondary, tertiary/textColor. */
var possibleColorCombos = [
  {
    "primary": "#333333",
    "secondary": "#7F7F7F",
    "tertiary": "#EEEEEE"
  },
  {
    "primary": "#FF59F9",
    "secondary": "#FFE272",
    "tertiary": "#35B2A2"
  },
];

document.addEventListener("DOMContentLoaded", function(e) {
    document.getElementById("greeting").textContent = randomElement(possibleGreetings);
    paintDOM();
});