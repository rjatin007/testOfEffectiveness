/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { Button } from "@heroui/button";
import { useState } from "react";

import Questionaire from "../components/questionaire/Questionaire";
import InfoIcon from "../assets/icons/info-solid.svg";

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
      {/* <div className="w-full flex justify-end items-center max-h-content my-2">
        <div className="  rounded-full px-4 py-2 text-white border-2 border-white border-solid">
          <Image alt="info" height={6} src={InfoIcon} width={6} />
        </div>
      </div> */}
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
