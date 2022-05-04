import { Camera } from "phosphor-react";
import { useState } from "react";
import html2canvas from "html2canvas";

export function ScreenShotCamera() {
  const [isTakinScreenshot, setIsTakinScreenshot] = useState(false);
  async function handleTakeScreenShot() {
    //console.log("take screenshot");
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    console.log(base64image);
  }
  return (
    <button
      type="button"
      className="
          p-2 bg-zinc-800 rounded-md border-transparent 
        hover:bg-zinc-700 transition-colors duration-300 ease-in-out
        focus:border-brand-500 focus:ring-brand-500 focus:ring-1 
        focus:outline-none resize-none
        "
      onClick={handleTakeScreenShot}
    >
      <Camera className="w-6 h-6 text-zinc-100 " />
    </button>
  );
}
