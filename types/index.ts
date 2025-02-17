import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export type questionType = {
  id: number;
  questionText: string;
  reversedMarking: boolean;
  responded: boolean;
  respondedScore: string;
};
