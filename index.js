let rangevalue = document.getElementById("myRange");

let setvalue = document.getElementById("rangevalue");
let imgchangevalue = document.getElementById("imgchange");




rangevalue.oninput = function bar() {
  let getvalue = rangevalue.value;
  setvalue.innerHTML = this.value;

// COLOR CHANGING METHOD START..
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #357176 " + value + "%, red " + value + "% , #D1E1E4 " + value + "%)";
    getvalue.innerHTML = this.value;
// COLOR CHANGING METHOD END...


  if (getvalue > 3 && getvalue < 16) {
    imgchangevalue.setAttribute(
      "src",
      "./cut_images_qAuaW0blEp/image_part_002.jpg"
    );

  } else if (getvalue >= 17 && getvalue <= 33) {
    imgchangevalue.setAttribute(
      "src",
      "./cut_images_qAuaW0blEp/image_part_003.jpg"
    );
  } else if (getvalue >= 34 && getvalue <= 49) {
    imgchangevalue.setAttribute(
      "src",
      "./cut_images_qAuaW0blEp/image_part_005.jpg"
    );
  } else if (getvalue >= 50 && getvalue <= 66) {
    imgchangevalue.setAttribute(
      "src",
      "./cut_images_qAuaW0blEp/image_part_006.jpg"
    );
  } else if (getvalue >= 67 && getvalue <= 83) {
    imgchangevalue.setAttribute(
      "src",
      "./cut_images_qAuaW0blEp/image_part_007.jpg"
    );
  } else if (getvalue >= 84 && getvalue <= 99) {
    imgchangevalue.setAttribute(
      "src",
      "./cut_images_qAuaW0blEp/image_part_009.jpg"
    );
  } else if (getvalue === 100) {
    imgchangevalue.setAttribute(
      "src",
      "./cut_images_qAuaW0blEp/image_part_0011.jpg"
    );
  }
};
bar();

// rangevalue.oninput = function abc () {
//   let getvalue = rangevalue.value;
//   var value = ((this.value - this.min) / (this.max - this.min)) * 100;
//   this.style.background =
//     "linear-gradient(to right, #357176 " + value + "%, red " + value + "% , #D1E1E4 " + value + "%)";
//     getvalue.innerHTML = this.value;
// };
// abc();

