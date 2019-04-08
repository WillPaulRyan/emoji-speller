function copyText() {
  // Copies text from output bar
  var copyText = document.getElementById("output");
  copyText.select();
  document.execCommand("copy");
}

// Here's the alphabet:
const alphabet = {
  a:'🅰️',
	b:'🅱️',
  c:'©️',
  d:'🇩‌',
  e:'🇪‌',
  f:'🇫‌',
  g:'🇬‌',
  h:'♓',
  i:'ℹ',
  j:'🇯‌',
  k:'🇰‌',
  l:'🇱‌',
  m:'Ⓜ',
  n:'♑',
  o:'🅾',
  p:'🅿',
  q:'👁️‍🗨️',
  r:'®️',
  s:'💲',
  t:'✝️',
  u:'⛎',
  v:'♈',
  w:'🇼‌',
  x:'❌',
  y:'🇾‌',
  z:'💤',
  1:'1️⃣',
  2:'2️⃣',
  3:'3️⃣',
  4:'4️⃣',
	5:'5️⃣',
	6:'6️⃣',
	7:'7️⃣',
	8:'8️⃣',
	9:'9️⃣',
	0:'0️⃣',
	'?':'❓',
	'!':'❗️',
	'$':'💲',
	'#':'#️⃣',
	'*':'*️⃣',
	'+':'➕',
	'-':'➖',
	'÷':'➗',
	' ':'　',
};

function parse(text) {
  // Create string
  let result = ''
  let c = ''
  
  for (var i = 0; i <text.length; i++) {
    c = text.charAt(i)
    
    // Check for the tuples
    if (c.toLowerCase() == 'c' && text.charAt(i + 1).toLowerCase() == 'l') {
      result += '🆑';
      i++;
    }
    
    else if (c.toLowerCase() == 'n' && text.charAt(i + 1).toLowerCase() == 'g') {
      result += '🆖';
      i++;
    }
    
    else if (c.toLowerCase() == 'i' && text.charAt(i + 1).toLowerCase() == 'd') {
      result += '🆔';
      i++;
    }
    
    else if (c.toLowerCase() == 'o' && text.charAt(i + 1).toLowerCase() == 'k') {
      result += '🆗';
      i++;
    }
    
    else if (c.toLowerCase() == 't' && text.charAt(i + 1).toLowerCase() == 'm') {
      result += '™️';
      i++;
    }
    
    else if (c.toLowerCase() == 'u' && text.charAt(i + 1).toLowerCase() == 'p') {
      result += '🆙';
      i++;
    }
    
    else if (c.toLowerCase() == 'v' && text.charAt(i + 1).toLowerCase() == 's') {
      result += '🆚';
      i++;
    }
    
    else if (c.toLowerCase() == 'w' && text.charAt(i + 1).toLowerCase() == 'c') {
      result += '🚾';
      i++;
    }
    
    else if (c.toLowerCase() == '!' && text.charAt(i + 1).toLowerCase() == '!') {
      result += '‼️';
      i++;
    }
    
    else if (c.toLowerCase() == '!' && text.charAt(i + 1).toLowerCase() == '?') {
      result += '⁉️';
      i++;
    }
    
    else if (c.toLowerCase() == 'a' && text.charAt(i + 1).toLowerCase() == 't'
      && text.charAt(i + 2) == 'm') {
      result += '🏧';
      i += 2;
    }
    
    else if (c.toLowerCase() == 'n' && text.charAt(i + 1).toLowerCase() == 'e'
      && text.charAt(i + 2) == 'w') {
      result += '🆕';
      i += 2;
    }
    
    else if (c.toLowerCase() == 's' && text.charAt(i + 1).toLowerCase() == 'o'
      && text.charAt(i + 2).toLowerCase() == 's') {
      result += '🆘';
      i += 2;
    }
    
    else if (c.toLowerCase() == 'c' && text.charAt(i + 1).toLowerCase() == 'o'
      && text.charAt(i + 2) == 'o' && text.charAt(i + 3).toLowerCase() == 'l') {
      result += '🆒';
      i += 3;
    }
    
    else if (c.toLowerCase() == 'f' && text.charAt(i + 1).toLowerCase() == 'r'
      && text.charAt(i + 2) == 'e' && text.charAt(i + 3).toLowerCase() == 'e') {
      result += '🆓';
      i += 3;
    }
    
    // Replace
    else if (alphabet[c.toLowerCase()]) {
      result += alphabet[c.toLowerCase()];
    }

    // Return whatever's left over
    else {
      result += c;
    }
  }
  return result;
}

function moveText() {
  // Copies everything from first input into second input, w/ changes
  var text = document.getElementById("input").value;
  document.getElementById("output").value = parse(text);
}