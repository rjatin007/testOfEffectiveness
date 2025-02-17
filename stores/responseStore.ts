/* eslint-disable no-console */
import { create } from "zustand";

import { questionaire } from "../constants/questionaire";

import { questionType } from "@/types";

export const useResponseStore = create<{
  responses: questionType[];
  selfDisclosureScore: number;
  feedbackScore: number;
  perceptiveScore: number;
  completed: boolean;
}>(() => ({
  responses: [...questionaire],
  selfDisclosureScore: 0,
  feedbackScore: 0,
  perceptiveScore: 0,
  completed: false,
}));

export const setResponses = (question: questionType, respondedScore: string) =>
  useResponseStore.setState((state) => ({
    ...state,
    responses: [
      ...state?.responses.map((resp) => {
        return question?.id === resp?.id
          ? {
              ...resp,
              respondedScore,
              responded: true,
            }
          : { ...resp };
      }),
    ],
  }));

export const setCompleted = (
  selfDisclosureScore: number,
  feedbackScore: number,
  perceptiveScore: number
) =>
  useResponseStore.setState((state) => ({
    ...state,
    completed: true,
    responses: [...questionaire],
    selfDisclosureScore,
    feedbackScore,
    perceptiveScore,
  }));

export const resetResponseStore = () =>
  useResponseStore.setState(() => ({
    responses: [...questionaire],
    selfDisclosureScore: 0,
    feedbackScore: 0,
    perceptiveScore: 0,
    completed: false,
  }));
