import {Strings} from '../lib/strings';

describe('Test Strings class', () => {
  it('test group()', () => {
    const groups = Strings.group('00001100011111');
    expect(groups.length).toEqual(4);
    expect(groups[0]).toEqual('0000');
    expect(groups[1]).toEqual('11');
    expect(groups[2]).toEqual('000');
    expect(groups[3]).toEqual('11111');
  });
  it('test chuckNorrisEncode()', () => {
    const groups = ['1', '0000', '11'];
    const result = Strings.chuckNorrisEncode(groups);
    expect(result).toEqual('0 0 00 0000 0 00');
  });
});
