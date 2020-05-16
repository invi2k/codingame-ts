export class CodinGameApp {
  public run() {
    this.initialize();
    // noinspection InfiniteLoopJS
    while (true) { // eslint-disable-line
      this.update();
      this.loop();
      this.initialize();
    }
  }

  protected initialize() {
  }

  protected update() {
  }

  protected loop() {
  }
}

if (isRunAtCodinGame) {
  const codingGameApp = new CodinGameApp();
  codingGameApp.run();
}
