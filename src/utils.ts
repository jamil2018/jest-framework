export const comparator = (
  compareFrom: string | string[],
  compareTo: string | string[]
) => {
  const sanitizer = (value: string[]) =>
    value.filter((v) => {
      // add filter condition for html line break values
      if (v.includes("<br>") || v.includes("<br />") || v.includes("&nbsp;")) {
        return false;
      }
      // add filter condition for empty values
      if (v.trim() === "") {
        return false;
      }
      // add filter condition for null or undefined values
      if (v === null || v === undefined) {
        return false;
      }
      return true;
    });

  const formattedCompareFrom = Array.isArray(compareFrom)
    ? sanitizer(compareFrom)
    : sanitizer([compareFrom]);

  const formattedCompareTo = Array.isArray(compareTo)
    ? sanitizer(compareTo)
    : sanitizer([compareTo]);

  return (
    JSON.stringify(formattedCompareFrom) === JSON.stringify(formattedCompareTo)
  );
};

export const sum = (a: number, b: number) => a + b;
