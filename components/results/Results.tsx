import { useResponseStore } from "@/stores/responseStore";
import { getPersonalityType } from "@/utils/responses";
import { Button } from "@heroui/button";

function Results() {
  const selfDisclosureScore = useResponseStore(
    (state) => state?.selfDisclosureScore
  );

  const feedbackScore = useResponseStore((state) => state?.feedbackScore);

  const perceptiveScore = useResponseStore((state) => state?.perceptiveScore);

  return (
    <div className="bg-violet-100 rounded-xl w-full text-violet-800 p-4 my-8 mt-16  ">
      <h2 className="text-lg font-semibold w-full text-center">Scores</h2>
      <p className="font-semibold">
        {" "}
        Self Disclosure Score : {selfDisclosureScore}
      </p>
      <p className="font-semibold"> Feedback Score : {feedbackScore}</p>

      <p className="font-semibold"> Perceptive Score : {perceptiveScore}</p>

      <p>
        {" "}
        Your personality type is :{" "}
        <span className="font-semibold">
          {getPersonalityType(
            selfDisclosureScore,
            feedbackScore,
            perceptiveScore
          )}
        </span>
      </p>
    </div>
  );
}

export default Results;
