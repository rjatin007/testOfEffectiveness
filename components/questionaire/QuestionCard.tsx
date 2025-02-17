/* eslint-disable no-console */
"use client";
import { RadioGroup, Radio } from "@heroui/radio";

import { choices } from "@/constants/choices";
import { setResponses } from "@/stores/responseStore";
import { questionType } from "@/types";

function QuestionCard({ question }: { question: questionType }) {
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event?.target?.value;

    setResponses(question, value);
  };

  return (
    <div className="w-calc(90%) bg-violet-100 rounded-lg shadow-xl my-4 p-4">
      <p className="text-wrap font-semibold my-2 text-violet-800">
        <span className="fobt-bold  text-black">
          {question?.id}
          {"."}
        </span>{" "}
        {question?.questionText}
      </p>
      <RadioGroup
        classNames={{ label: "font-medium text-violet-800" }}
        defaultValue={choices[0]}
        orientation="horizontal"
        value={`${question?.respondedScore}`}
        onChange={handleValueChange}
      >
        {choices.map((c) => (
          <Radio
            key={c}
            classNames={{
              label: ` ${c === `${question?.respondedScore}` ? "text-violet-600 font-bold" : "text-black font-light"}`,
              wrapper: "ml-2 my-1",
            }}
            value={c}
          >
            {c}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
}

export default QuestionCard;
