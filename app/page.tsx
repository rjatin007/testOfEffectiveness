"use client";
import { Button } from "@heroui/button";
import { useState } from "react";

import Questionaire from "../components/questionaire/Questionaire";

import { resetResponseStore, useResponseStore } from "@/stores/responseStore";
import Results from "@/components/results/Results";
import Instructions from "@/components/instructions/Instructions";

export default function Home() {
  const completed = useResponseStore((state) => state?.completed);
  const [startTest, setStartTest] = useState<boolean>(false);
  const handlePress = () => {
    if (startTest) {
      completed && resetResponseStore();
      setStartTest(false);
    } else {
      setStartTest(true);
    }
  };

  return (
    <section className="h-full w-full relative flex flex-col items-center justify-start  md:py-10 px-2 ">
      <div className="font-bold text-center text-white text-4xl ">
        Are you Effective?{" "}
      </div>

      {startTest ? (
        completed ? (
          <Results />
        ) : (
          <Questionaire />
        )
      ) : (
        <Instructions />
      )}
      {(completed || !startTest) && (
        <Button className="my-4 w-full" color="secondary" onPress={handlePress}>
          {completed && "Start Again"}
          {!startTest && "Lets Go!"}
        </Button>
      )}
    </section>
  );
}
