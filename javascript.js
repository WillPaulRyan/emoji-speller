function copyText() {
  var copyText = document.getElementById("output");
  copyText.select();
  document.execCommand("copy");
}

function isAlpha(c) {
    return ((c >= 'a') && (c <= 'z')) || ((c >= 'A') && (c <= 'Z'));
}

function isDigit(c) {
  return ((c >= ' ') && (c <= '?'));
}

/* TODO
Double Characters
🆑
🆔
🆖
🆗
™️
🆙
🆚
🚾

🔟
‼️
⁉️

Multiple Characters
🏧
🆒
🆓
🆕
🆘

💯

*/

function replaceAlpha(c) {
  if (c == 'A' || c == 'a') {
    return '🅰';
  }

  else if (c == 'B' || c == 'b') {
    return '🅱';
  }
  
  else if (c == 'C' || c == 'c') {
    return '©️';
  }
  
  else if (c == 'I' || c == 'i') {
    return 'ℹ️';
  }
  
  else if (c == 'M' || c == 'm') {
    return 'Ⓜ️';
  }
  
  else if (c == 'O' || c == 'o') {
    return '🅾';
  }
  
  else if (c == 'P' || c == 'p') {
    return '🅿';
  }
  
  else if (c == 'Q' || c == 'q') {
    return '👁️‍🗨️';
  }
  
  else if (c == 'R' || c == 'r') {
    return '®️';
  }
  
  else if (c == 'S' || c == 's') {
    return '⚡';
  }
  
  else if (c == 'T' || c == 't') {
    return '✝️';
  }
  
  else if (c == 'V' || c == 'v' || c == 'U' || c == 'u' ) {
    return '🔽';
  }

  else if (c =='X' || c == 'x') {
    return '✖️';
  }

  else if (c == 'Z' || c == 'z') {
    return '💤';
  }

  else {
    return c;
  }
}

/* DOUBLES
🔟
‼️
⁉️

*/

function replaceDigit(c) {
  if (c == '1') {
    return '1️⃣';
  }

  else if (c == '2') {
    return '2️⃣';
  }
  
  else if (c == '2') {
    return '2️⃣';
  }
  
  else if (c == '2') {
    return '2️⃣';
  }
  
  else if (c == '2') {
    return '2️⃣';
  }
  
  else if (c == '2') {
    return '2️⃣';
  }
  
  else if (c == '3') {
    return '3️⃣';
  }
  
  else if (c == '4') {
    return '4️⃣';
  }
  
  else if (c == '5') {
    return '5️⃣';
  }
  
  else if (c == '6') {
    return '6️⃣';
  }
  
  else if (c == '7') {
    return '7️⃣';
  }
  
  else if (c == '8') {
    return '8️⃣';
  }
  
  else if (c == '9') {
    return '9️⃣';
  }
  
  else if (c == '0') {
    return '0️⃣';
  }
  
  else if (c == '#') {
    return '#️⃣';
  }

  else if (c == '*') {
    return '*️⃣';
  }

  else if (c == '+') {
    return '➕';
  }

  else if (c == '-') {
    return '➖';
  }

  else if (c == '÷') {
    return '➗';
  }

  else if (c == '!') {
    return '❗';
  }

  else if (c == '?') {
    return '❓';
  }

  else if (c == '$') {
    return '💲';
  }

  else if (c == ' ') {
    return '  ';
  }

  else {
    return c;
  }
}

function parse(text) {
  let result = ''
  let c = ''
  
  for (var i = 0; i <text.length; i++) {
    c = text.charAt(i)
    
    if (isAlpha(c) === true) {
      result += replaceAlpha(c);
    }

    else if (isDigit(c) === true) {
      result += replaceDigit(c);
    }

    else {
      result += c;
    }
  }
  return result;
}

function moveText() {
  var text = document.getElementById("input").value;
  document.getElementById("output").value = parse(text);
}
