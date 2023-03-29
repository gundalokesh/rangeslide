let rangevalue = document.getElementById("myRange");

let setvalue = document.getElementById("rangevalue");
let imgchangevalue = document.getElementById("imgchange");

let stick = document.querySelectorAll(".item");

rangevalue.oninput = function bar() {
  let getvalue = rangevalue.value;
  setvalue.innerHTML = this.value;

  // COLOR CHANGING METHOD START...
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #357176 " +
    value +
    "%, red " +
    value +
    "% , #D1E1E4 " +
    value +
    "%)";
  getvalue.innerHTML = this.value;

  // COLOR CHANGING METHOD END....

  if (getvalue > 5 && getvalue < 10) {
    imgchangevalue.setAttribute(
      "src",
      "./cut_images_qAuaW0blEp/image_part_002.jpg"
    );
  } else if (getvalue >= 11 && getvalue <= 20) {
    imgchangevalue.setAttribute(
      "src",
      "./cut_images_qAuaW0blEp/image_part_003.jpg"
    );
  } else if (getvalue >= 21 && getvalue <= 30) {
    imgchangevalue.setAttribute(
      "src",
      "./cut_images_qAuaW0blEp/image_part_005.jpg"
    );
  } else if (getvalue >= 31 && getvalue <= 40) {
    imgchangevalue.setAttribute(
      "src",
      "./cut_images_qAuaW0blEp/image_part_006.jpg"
    );
  } else if (getvalue >= 41 && getvalue <= 50) {
    imgchangevalue.setAttribute(
      "src",
      "./cut_images_qAuaW0blEp/image_part_007.jpg"
    );
  } else if (getvalue >= 51 && getvalue <= 60) {
    imgchangevalue.setAttribute(
      "src",
      "./cut_images_qAuaW0blEp/image_part_008.jpg"
    );
  } else if (getvalue >= 61 && getvalue <= 70) {
    imgchangevalue.setAttribute(
      "src",
      "./cut_images_qAuaW0blEp/image_part_009.jpg"
    );
  } else if (getvalue >= 71 && getvalue <= 80) {
    imgchangevalue.setAttribute(
      "src",
      "./cut_images_qAuaW0blEp/image_part_010.jpg"
    );
  } else if (getvalue >= 81 && getvalue <= 95) {
    imgchangevalue.setAttribute(
      "src",
      "./cut_images_qAuaW0blEp/image_part_011.jpg"
    );
  } else if (getvalue === 100) {
    imgchangevalue.setAttribute(
      "src",
      "./cut_images_qAuaW0blEp/image_part_0012.jpg"
    );
  }
};
// bar();

// rangevalue.oninput = function abc () {
//   let getvalue = rangevalue.value;
//   var value = ((this.value - this.min) / (this.max - this.min)) * 100;
//   this.style.background =
//     "linear-gradient(to right, #357176 " + value + "%, red " + value + "% , #D1E1E4 " + value + "%)";
//     getvalue.innerHTML = this.value;
// };
// abc();
