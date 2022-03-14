export class SharedUtil {
  static isNotNullOrEmpty(object: any): boolean {
    if (object !== '' && object !== null && object !== undefined) {
      return true;
    }
    return false;
  }

  static isNullOrEmpty(object: any): boolean {
    if (object === '' || object === null || object === undefined) {
      return true;
    }
    return false;
  }
}
