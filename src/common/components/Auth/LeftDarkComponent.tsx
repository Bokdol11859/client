import { CommandIcon } from "lucide-react";
import React from "react";

import quotes from "@/quotes.json";

export const LeftDarkComponent = React.memo(() => {
  const quote = React.useMemo(() => {
    const idx = Math.floor(Math.random() * quotes.length);
    return quotes[idx];
  }, []);

  return (
    <div className="hidden w-full h-full bg-zinc-900 rounded-l-lg xl:block">
      <div className="w-full h-full flex flex-col items-center justify-between p-4">
        <div className="w-full text-white flex gap-2 items-center justify-start">
          <CommandIcon />
          <h3 className=" text-xl">Bokdol Inc.</h3>
        </div>
        <div className="w-full text-white flex flex-col gap-2 items-start">
          <h3 className=" text-sm italic">{`"${quote.quote}"`}</h3>
          <h3 className=" text-lg">{quote.author}</h3>
        </div>
      </div>
    </div>
  );
});

LeftDarkComponent.displayName = "LeftDarkComponent";
