import {Point} from '../lib/point';

// the program executor
export class CodinGameApp {
  public static run() {
    // read pre-loop inputs
    const inputs = readline().split(' ');
    const lightX = parseInt(inputs[0]); // the X position of the light of power
    const lightY = parseInt(inputs[1]); // the Y position of the light of power
    const initialTX = parseInt(inputs[2]); // Thor's starting X position
    const initialTY = parseInt(inputs[3]); // Thor's starting Y position
    // the Y axis is inversed and pointing down, multiply Y by -1
    const thor: Point = new Point(initialTX, -1 * initialTY);
    const light: Point = new Point(lightX, -1 * lightY);
    // game loop
    while (true) { // eslint-disable-line
      // The remaining amount of turns Thor can move. Do not remove this line.
      const remainingTurns = parseInt(readline());
      const move = thor.cardinalDirection(light);
      console.error(
        'thor=' +
          thor.toString() +
          ' light=' +
          light.toString() +
          ' rem=' +
          remainingTurns +
          ' move=' +
          move
      );
      // A single line providing the move to be made: N NE E SE S SW W or NW
      console.log(move);
      const nextThor = thor.cardinalIncrement(move, 1);
      thor.x = nextThor.x;
      thor.y = nextThor.y;
      console.error('thor=' + thor.toString() + ' after move');
    }
  }
}

// START PROGRAM
if (isRunAtCodinGame) {
  CodinGameApp.run(); // start the program if the code is run at codingame
}
