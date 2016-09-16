var temp = "";     //temp varible to store calulations
var final = [];
//var empty = false;  <--test varible


$(document).ready(function() {
  //button functions; each button adds to an array that is computed/reduced when the equal button is pressed.
  $(".but").click(function() {
    var text = $(this).attr("value");

    if (!isNaN(text) || text === ".") {
      temp += text;
      $(".text").val(temp);

    } else if (text == "back") {
      temp = temp.slice(0, -1);
      $(".text").val(temp);
    } else if (text === "C") {
      temp = "";
      $(".text").val(temp);
    } else if (text === "*") {
      final.push(temp)
      final.push("*")
      temp = "";
    } else if (text === "/") {
      final.push(temp)
      final.push("/")
      temp = "";
    } else if (text === "+") {
      final.push(temp)
      final.push("+")
      temp = "";
    } else if (text === "-") {
      final.push(temp)
      final.push("-")
      temp = "";
    } else if (text === "%") {
      final.push(temp)
      final.push("%")
      $(".text").val(temp * .01);
      temp = "";
    } else if (text === '=') {
      final.push(temp);
      //function to compute array
      var num = Number(final[0]);
      for (var i = 1; i < final.length; i++) {
        var nextNum = Number(final[i + 1])
        var symbol = final[i];

        if (symbol === '+') {
          num += nextNum;
        } else if (symbol === '-') {
          num -= nextNum;
        } else if (symbol === '*') {
          num *= nextNum;
        } else if (symbol === '/') {
          num /= nextNum;
        } else if (symbol === "%") {
          num = num * .01
        }
        i++;
        if (num < 0) {
          num = '-' + Math.abs(num);
        }
      }
      //displays result:
      $(".text").val(num);
      final = [];
      temp = num;
      // result is saved as temp variable
    } else {
      final.push(temp);
      final.push(text);
      temp = '';
    }

  });

});
