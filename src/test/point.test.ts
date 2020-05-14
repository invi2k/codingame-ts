import {KeyPoint, Point} from '../lib/point';

describe('Test Point class', () => {
  // -- Cardinal Direction

  it('cardinalDirection should be a function', () => {
    expect(typeof new Point(0, 0).cardinalDirection).toBe('function');
  });
  it('cardinal direction test N', () => {
    expect(new Point(0, 0).cardinalDirection(new Point(0, 1))).toEqual('N');
  });
  it('cardinal direction test NE', () => {
    expect(new Point(0, 0).cardinalDirection(new Point(1, 1))).toEqual('NE');
  });
  it('cardinal direction test E', () => {
    expect(new Point(0, 0).cardinalDirection(new Point(1, 0))).toEqual('E');
  });
  it('cardinal direction test SE', () => {
    expect(new Point(0, 0).cardinalDirection(new Point(1, -1))).toEqual('SE');
  });
  it('cardinal direction test S', () => {
    expect(new Point(0, 0).cardinalDirection(new Point(0, -1))).toEqual('S');
  });
  it('cardinal direction test SW', () => {
    expect(new Point(0, 0).cardinalDirection(new Point(-1, -1))).toEqual('SW');
  });
  it('cardinal direction test W', () => {
    expect(new Point(0, 0).cardinalDirection(new Point(-1, 0))).toEqual('W');
  });
  it('cardinal direction test NW', () => {
    expect(new Point(0, 0).cardinalDirection(new Point(-1, 1))).toEqual('NW');
  });

  // -- Cardinal Increment

  it('cardinalIncrement should be a function', () => {
    expect(typeof new Point(0, 0).cardinalIncrement).toBe('function');
  });
  it('cardinal increment test N', () => {
    const point = new Point(0, 0).cardinalIncrement('N', 1);
    expect(point.x).toEqual(0);
    expect(point.y).toEqual(1);
  });
  it('cardinal increment test NE', () => {
    const point = new Point(0, 0).cardinalIncrement('NE', 1);
    expect(point.x).toEqual(1);
    expect(point.y).toEqual(1);
  });
  it('cardinal increment test E', () => {
    const point = new Point(0, 0).cardinalIncrement('E', 1);
    expect(point.x).toEqual(1);
    expect(point.y).toEqual(0);
  });
  it('cardinal increment test SE', () => {
    const point = new Point(0, 0).cardinalIncrement('SE', 1);
    expect(point.x).toEqual(1);
    expect(point.y).toEqual(-1);
  });
  it('cardinal increment test S', () => {
    const point = new Point(0, 0).cardinalIncrement('S', 1);
    expect(point.x).toEqual(0);
    expect(point.y).toEqual(-1);
  });
  it('cardinal increment test SW', () => {
    const point = new Point(0, 0).cardinalIncrement('SW', 1);
    expect(point.x).toEqual(-1);
    expect(point.y).toEqual(-1);
  });
  it('cardinal increment test W', () => {
    const point = new Point(0, 0).cardinalIncrement('W', 1);
    expect(point.x).toEqual(-1);
    expect(point.y).toEqual(0);
  });
  it('cardinal increment test NW', () => {
    const point = new Point(0, 0).cardinalIncrement('NW', 1);
    expect(point.x).toEqual(-1);
    expect(point.y).toEqual(1);
  });
  it('closest to point', () => {
    const keyPoints: KeyPoint[] = [];
    for (let i = 1; i < 10; i++) {
      keyPoints.push(new KeyPoint(i, new Point(i, i)));
    }
    const result: KeyPoint[] = KeyPoint.sortByClosest(
      keyPoints,
      new Point(0, 0)
    );
    expect(result[0].key).toEqual(1);
    expect(result[1].key).toEqual(2);
    expect(result[2].key).toEqual(3);
    expect(result[3].key).toEqual(4);
  });
});
