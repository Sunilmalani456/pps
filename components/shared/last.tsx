import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Last = () => {
  return (
    <>
      <div className="w-full flex max-sm:px-7 justify-center py-8">
        <div className="w-full max-w-xl flex flex-col gap-2 text-center">
          <h2 className="h2-semibold">Caring is the new marketing</h2>
          <p className="body-regular">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who&apos;s joining the
            community, read about how our community are increasing their
            membership income and lot&apos;s more.​
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center max-sm:px-4 bg-neutral-100 py-8">
        <div className="w-full max-w-xl flex flex-col items-center gap-5 text-center">
          <h2 className="font-bold leading-[55px] tracking-tighter text-5xl">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <Button className="bg-shade-100 text-white flex items-center justify-center gap-1 hover:bg-shade-100/90">
            Click Me <ArrowRight className="text-white w-4 h-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Last;
