import { ArrowLeft, Camera } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButtom } from "../../CloseButtom";
import { ScreenShotButton, ScreenShotCamera } from "../ScreenShotButton";
import { useState } from "react";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedBackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedBackRestartRequested,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [screenshot, setScreenshot] = useState<string | null>(null);

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedBackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.src}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButtom />
      </header>
      <form className="my-4 w-full">
        <textarea
          className="
            min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 
            text-zinc-100 border-zinc-600 bg-transparent rounded-md
            focus:border-brand-500 focus:ring-brand-500 focus:ring-1 
            focus:outline-none resize-none
            scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin
            "
          placeholder="Deixe seu feedback"
        ></textarea>
        <footer className="flex gap-2 mt-2">
          <ScreenShotButton
            onScreenShotTook={setScreenshot}
            screenshot={screenshot}
          />
          <button
            type="submit"
            className="
            p-2 bg-brand-500 rounded-md 
            border-transparent hover:bg-brand-300 focus:outline-none
            flex-1 flex justify-center items-center text-sm
            focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900
            transition-colors duration-300 ease-in-out
            "
          >
            Enviar FeedBack
          </button>
        </footer>
      </form>
    </>
  );
}
