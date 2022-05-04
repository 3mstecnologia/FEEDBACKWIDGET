import { useState } from "react";

import { CloseButtom } from "../CloseButtom";

import bugImage from "../../assests/images/bug.svg";
import ideiaImage from "../../assests/images/ideia.svg";
import outroImage from "../../assests/images/outro.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContent";

export const feedbackTypes = {
  BUG: {
    title: "Bug",
    image: {
      src: bugImage,
      alt: "Icone de uma minhoca que resepresenta um bug",
    },
  },
  IDEIA: {
    title: "Ideia",
    image: {
      src: ideiaImage,
      alt: "Icone de uma lampada que representa uma ideia",
    },
  },
  OUTRO: {
    title: "Outro",
    image: {
      src: outroImage,
      alt: "Icone de uma nuvem que representa outro",
    },
  },
};
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  function handleRestartFeedback() {
    setFeedbackType(null);
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedBackRestartRequested={handleRestartFeedback}
        />
      )}

      <footer>
        <span className="text-xl text-neutral-400">
          Feito por @3mstecnologia
        </span>
      </footer>
    </div>
  );
}
