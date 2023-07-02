import React from "react";

function Content() {
  return (
    <div className="h-screen">
      <div className="p-5">
        <h1 className="text-text font-black text-4xl sm:text-5xl text-center uppercase">
          Heartstopper
        </h1>
      </div>
      <div className="flex flex-col justify-center">
        <button className="bg-primary-button text-background font-semibold text-3xl sm:text-5xl p-3 sm:p-5 text-center mx-auto rounded-lg mt-64 sm:mt-44 hover:shadow-2xl hover:shadow-accent/50 hover:text-text transition-colors duration-200">
          <span>Start the Experience</span>
        </button>
        <span className="text-text text-center mt-4">
          Click the button above to reveal a surprise
        </span>
      </div>
      <div className="fixed bottom-0 text-text p-4 flex justify-center">
        <span>Made by Reeman</span>
      </div>
    </div>
  );
}

export default Content;
