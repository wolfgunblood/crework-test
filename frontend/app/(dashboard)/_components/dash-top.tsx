import { CircleHelp } from "lucide-react";
import React from "react";

const Dashtop = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1
          className="font-barlow text-5xl font-semibold leading-14 text-left"
          style={{ color: "#080808" }}
        >
          Good morning,Joe!
        </h1>
        <div className="inline-flex gap-2 items-center">
          <p
            className="font-inter text-base font-normal leading-custom-2"
            style={{ color: "#080808" }}
          >
            Help & Support
          </p>
          <CircleHelp size={24} stroke="#080808" strokeWidth={1.5} />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Dashtop;
