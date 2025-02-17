export const choices = ["0", "1", "2", "3", "4"];
export const complimentResponses: {
  [key: string]: any;
} = {
  "0": "4",
  "1": "3",
  "2": "2",
  "3": "1",
  "4": "0",
};

export const selfDisclosureSet = new Set([1, 4, 7, 10, 13]);
export const feedbackSet = new Set([2, 5, 8, 11, 14]);
export const perceptiveSet = new Set([3, 6, 9, 12, 15]);
export const getComplimentScore = (responseScore: string): number => {
  return Number(complimentResponses[`${responseScore}`]);
};
