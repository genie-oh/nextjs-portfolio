export const calculateYearsAgo = (givenDate: Date) => {
  var diff_ms = Date.now() - givenDate.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
};
