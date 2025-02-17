import { instructions } from "@/constants/instructions";

function Instructions() {
  return (
    <div className="bg-violet-100 rounded-xl p-4 text-violet-800 mt-16 w-full">
      <h2 className="text-lg font-semibold my-2">How to Attempt?</h2>
      {Object.keys(instructions).map((k) => (
        <p key={`${instructions[k].slice(1, 3)}-${k}`} className="text-md my-2">
          Write <span className="font-semibold">{k}</span> {instructions[k]}{" "}
        </p>
      ))}
    </div>
  );
}

export default Instructions;
