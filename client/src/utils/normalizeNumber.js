export const normalizeNumber = (num) => {
  if (isFinite(num)) return num;
  else return '';
};