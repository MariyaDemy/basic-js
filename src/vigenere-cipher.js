//const { NotImplementedError } = require('../extensions/index.js');
/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('at tack at dawn!', '01234') => 'AEIHQX SX DLLU!'
 *                        01 234
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

const alphabet = {
'A':0,
'B':1,
'C':2,
'D':3,
'E':4,
'F':5,
'G':6,
'H':7,
'I':8,
'J':9,
'K':10,
'L':11,
'M':12,
'N':13,
'O':14,
'P':15,
'Q':16,
'R':17,
'S':18,
'T':19,
'U':20,
'V':21,
'W':22,
'X':23,
'Y':24,
'Z':25
};

const lettersArr = Object.keys(alphabet);

class VigenereCipheringMachine {
  constructor(machine){
    this.machine = machine;
  }

  encrypt(message, key) {
    if(!message || !key){
      throw new Error('Incorrect arguments!');
    }
    let resultMes = [];
    let mes = message.toUpperCase();
    let k = key.toUpperCase().split('').filter(v=>alphabet[v] !== undefined).join('');
    console.log(k, 'k')
    let index = 0;

    for(let i=0;i<mes.length;i++){
      let msgSym = mes[i];
      let keySym = k[index];
      let msgNum = alphabet[msgSym];
      let keyNum = alphabet[keySym];
      if(msgNum !== undefined && keyNum !== undefined){
        let encryptedNum = msgNum + keyNum;
        if(encryptedNum > 25){
          encryptedNum -= 26;
        }
        resultMes.push(lettersArr[encryptedNum]);
        index++;
        if(index === k.length){
          index = 0;
        }
      } else {
        resultMes.push(msgSym);
      }
    }

    if(this.machine === true){
      console.log(resultMes.join(''))
      return resultMes.join('');
    } else {
      console.log(resultMes.reverse().join(''), 'result')
      return resultMes.reverse().join('');
    }
  }
  decrypt(message, key) {
    if(!message || !key){
      throw new Error('Incorrect arguments!');
    }
    let resultMes = [];
    let mes = message.toUpperCase();
    let k = key.toUpperCase().split('').filter(v=>alphabet[v] !== undefined).join('');
    let index = 0;

    for(let i=0;i<mes.length;i++){
      let msgSym = mes[i];
      let keySym = k[index];
      let msgNum = alphabet[msgSym];
      let keyNum = alphabet[keySym];
      if(msgNum !== undefined && keyNum !== undefined){
        let encryptedNum = msgNum - keyNum;
        if(encryptedNum < 0){
          encryptedNum += 26;
        }
        resultMes.push(lettersArr[encryptedNum]);
        index++;
        if(index === k.length){
          index = 0;
        }
      } else {
        resultMes.push(msgSym);
      }
    }

    if(this.machine === true){
      console.log(resultMes.join(''))
      return resultMes.join('');
    } else {
      console.log(resultMes.reverse().join(''), 'result')
      return resultMes.reverse().join('');
    }
  }
}

// let mes = new VigenereCipheringMachine();
//mes.encrypt('attack at dawn!', 'alphonse');

module.exports = {
  VigenereCipheringMachine
};
