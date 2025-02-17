/* eslint-disable no-console */
"use client";
import { useCallback, useState } from "react";
import { Button } from "@heroui/button";

import QuestionCard from "./QuestionCard";

import { setCompleted, useResponseStore } from "@/stores/responseStore";
import { allQuestionsResponded, getResults } from "@/utils/responses";

function Questionaire() {
  const responses = useResponseStore((state) => state?.responses);
  const questionaire = useCallback(() => responses, [responses]);
  const [err, setErr] = useState<{ isErr: boolean; errMsg: string }>({
    isErr: false,
    errMsg: "",
  });

  const handleSubmit = () => {
    if (allQuestionsResponded(questionaire())) {
      const { selfDisclosureScore, feedbackScore, perceptiveScore } =
        getResults(questionaire());

      setErr({
        isErr: false,
        errMsg: "",
      });
      setCompleted(selfDisclosureScore, feedbackScore, perceptiveScore);
    } else {
      setErr({
        isErr: true,
        errMsg: "Please respond to all questions",
      });
    }
  };

  return (
    <div className="flex justify-start items-center flex-col mt-2 pb-8 mb-8 h-full ">
      {err?.isErr && (
        <p className="text-xs text-white bg-red-500 rounded-lg p-2 my-2 w-full">
          {err?.errMsg}
        </p>
      )}
      <div className="w-full  h-[calc(80%)]  overflow-y-scroll ">
        {questionaire()?.map(
          (q) => q && <QuestionCard key={q?.id} question={q} />
        )}
      </div>
      <Button
        className="mb-4 mt-4 w-full"
        color="secondary"
        onPress={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
}

export default Questionaire;
