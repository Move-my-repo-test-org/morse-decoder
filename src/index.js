const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrOfTens = [];

    for (let i = 0; i < expr.length / 10; i++) {
        arrOfTens.push(expr.slice(i*10, i*10+10));
    }

    let arrWithoutZero = [];

    for (let el of arrOfTens) {
        let i = 0;
        while (el[i] == '0') {
            i++;
        }
        arrWithoutZero.push(el.slice(i));
    }

    let arrOfCode = [];

    for (let el of arrWithoutZero) {
        let code = '';
        if (el == '**********') {
            arrOfCode.push(' ');
        } else {
            for (let i = 0; i < el.length / 2; i++) {
                if (el.slice(i*2, i*2+2) == '10') {
                    code += '.';
                } else if (el.slice(i*2, i*2+2) == '11') {
                    code += '-';
                }
            }
            arrOfCode.push(code);
        }  
    }

    let result = [];

    for (let el of arrOfCode) {
        if (el == ' ') {
            result.push(el);
        } else {
            result.push(MORSE_TABLE[el]);
        }  
    }

    return result.join('');
}

module.exports = {
    decode
}