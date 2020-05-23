export class CommaSeparator {
  static numberWithCommas(value: any) {
    if (!value) {
      return "۰";
    }
    const sValue = value.toString();

    return sValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
