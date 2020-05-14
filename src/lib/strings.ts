/**
 * String utility class
 */
export class Strings {
  /**
   * Create groups based on repeated characters
   */
  public static group(str: string): string[] {
    let result: string[] = [];
    const matched = str.match(/(.)\1*/g);
    if (matched != null) {
      result = matched;
    }
    return result;
  }

  /**
   * key for zero => 00, key for one => 0
   * key count_in_zeroes
   * 4 zeros => 00 0000
   * 4 ones  => 0 0000
   */
  public static chuckNorrisEncode(groups: string[]): string {
    let encoded = '';
    for (let i = 0; i < groups.length; i++) {
      const key = groups[i][0] === '0' ? ' 00 ' : ' 0 ';
      const num = '0'.repeat(groups[i].length);
      encoded += key + num;
    }
    return encoded.trim();
  }
}
