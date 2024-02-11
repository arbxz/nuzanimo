export const calcAge = (age: number) => {
  if (age < 1) {
    return `${Math.round(age * 12)} months`;
  } else {
    return `${age} years`;
  }
};
