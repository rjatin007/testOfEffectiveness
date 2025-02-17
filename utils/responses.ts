import {
  complimentResponses,
  feedbackSet,
  perceptiveSet,
  selfDisclosureSet,
} from "@/constants/choices";
import { personalityTypes } from "@/constants/personalityTypes";
import { questionType } from "@/types";

export const allQuestionsResponded = (questions: questionType[]): boolean => {
  let isAttempted = true;

  questions.forEach((q) => {
    isAttempted = q?.responded && isAttempted;
  });

  return isAttempted;
};
export const getResults = (
  questions: questionType[]
): {
  selfDisclosureScore: number;
  feedbackScore: number;
  perceptiveScore: number;
} => {
  let selfDisclosureScore = 0;
  let feedbackScore = 0;
  let perceptiveScore = 0;

  questions.forEach((q) => {
    if (selfDisclosureSet.has(q?.id)) {
      selfDisclosureScore += q?.reversedMarking
        ? Number(complimentResponses[`${q?.respondedScore}`])
        : Number(q?.respondedScore);
    } else if (feedbackSet.has(q?.id)) {
      feedbackScore += q?.reversedMarking
        ? Number(complimentResponses[`${q?.respondedScore}`])
        : Number(q?.respondedScore);
    } else if (perceptiveSet.has(q?.id)) {
      perceptiveScore += q?.reversedMarking
        ? Number(complimentResponses[`${q?.respondedScore}`])
        : Number(q?.respondedScore);
    }
  });

  return { selfDisclosureScore, feedbackScore, perceptiveScore };
};
const getLowHigh = (score: number): string => {
  return score <= 12 ? "L" : "H";
};
// eslint-disable-next-line padding-line-between-statements
export const getPersonalityType = (
  selfDisclosureScore: number,
  feedbackScore: number,
  perceptiveScore: number
) => {
  return personalityTypes[
    `${getLowHigh(selfDisclosureScore)}${getLowHigh(feedbackScore)}${getLowHigh(perceptiveScore)}`
  ];
};
