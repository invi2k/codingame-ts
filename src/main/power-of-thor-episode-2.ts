export class CodinGameApp {
  private static isRunning = true;

  public static stop() {
    CodinGameApp.isRunning = false;
  }

  public static run() {
    // read pre-loop inputs
    while (true) { // eslint-disable-line
      // read loop inputs
      // console.error('debug message');
      // console.log('game command');
    }
  }
}

if (isRunAtCodinGame) {
  CodinGameApp.run();
}