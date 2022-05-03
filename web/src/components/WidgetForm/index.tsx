import { useState } from "react";

import { CloseButtom } from "../CloseButtom";

import bugImage from "../../assests/images/bug.svg";
import ideiaImage from "../../assests/images/ideia.svg";
import outroImage from "../../assests/images/outro.svg";

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  const feedbackTypes = {
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
  type FeedbackType = keyof typeof feedbackTypes;
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>
        <CloseButtom />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {!feedbackType ? (
          Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 
              border-2 border-transparent hover:border-brand-500
              focus:border-brand-500 focus:outline-none"
                onClick={() => setFeedbackType(key as FeedbackType)}
              >
                <img src={value.image.src} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            );
          })
        ) : (
          <h1>ola</h1>
        )}
      </div>
      <footer>
        <span className="text-xl text-neutral-400">
          Feito por @3mstecnologia
        </span>
      </footer>
    </div>
  );
}
