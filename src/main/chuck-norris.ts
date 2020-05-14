import {Strings} from '../lib/strings';

// the program executor
export class CodinGameApp {
  public run() {
    const MESSAGE = readline();
    let base2s = '';
    for (let i = 0; i < MESSAGE.length; i++) {
      const char = MESSAGE[i];
      // get ascii code, then convert to base2
      let base2 = char.charCodeAt(0).toString(2);
      // pad front if less than 7 bits
      base2 = base2.length < 7 ? '0'.repeat(7 - base2.length) + base2 : base2;
      console.error('loop ' + char + ' ' + base2);
      base2s += base2;
    }
    // group by same characters
    const codes = Strings.group(base2s);
    console.error('codes ' + codes);
    // encode with chuck norris algorithm
    console.log(Strings.chuckNorrisEncode(codes));
  }
}

// START PROGRAM
if (typeof isRunAtCodinGame === 'boolean') {
  new CodinGameApp().run(); // start the program if the code is run at codingame
}
