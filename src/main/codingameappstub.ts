/**
 * Use this stub to create new codingame apps
 * Be sure to add an entry in the webpack.config.js
 */
// put any imports here

// the program executor
export class CodinGameApp {
  public run() {
    // read pre-loop inputs
    // TODO read pre-loop inputs
    // game loop
    while (true) {
      // read loop inputs
      // printErr('debug message');
      // print('game command');
    }
  }
}

// START PROGRAM
if (typeof isRunAtCodinGame === 'boolean') {
  new CodinGameApp().run(); // start the program if the code is run at codingame
}
