import React, { useState, useEffect } from "react";
import jumpscareImage from "./assets/jumpscareImage.jpg";
import jumpscareSound from "./assets/jumpscareSound.mp3";

function Content() {
  // Preload image
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = jumpscareImage;
    image.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  // Initialize audio
  const audio = new Audio(jumpscareSound);

  const [isJumpscareVisible, setIsJumpscareVisible] = useState(false);

  // Handle button click :)
  const handleClick = () => {
    audio.play();
    setTimeout(() => {
      setIsJumpscareVisible(true);
    }, 500);
  };

  return (
    <>
      {isJumpscareVisible && (
        <div className="absolute z-99">
          <img
            src={jumpscareImage}
            alt="Jumpscare"
            className="h-screen object-cover md:object-fill sm:w-screen"
          />
        </div>
      )}

      <div className="h-screen">
        <div className="p-5">
          <h1 className="text-text font-black text-4xl sm:text-5xl text-center uppercase">
            Heartstopper
          </h1>
        </div>

        {isImageLoaded && (
          <div className="flex flex-col justify-center">
            <button
              onClick={handleClick}
              className="bg-primary-button text-background font-semibold text-3xl sm:text-5xl p-3 sm:p-5 text-center mx-auto rounded-lg mt-64 sm:mt-44 hover:shadow-2xl hover:shadow-accent/50 hover:text-text active:scale-95 transition-colors duration-200"
            >
              <span>Start the Experience</span>
            </button>
            <span className="text-text text-center mt-4">
              Click the button above to reveal a surprise
            </span>
          </div>
        )}

        {!isJumpscareVisible && (
          <div className="fixed w-full bottom-0 pb-8 flex flex-col justify-center items-center">
            <span className="text-text mb-2">Made by Reeman</span>
            <a
              href="https://github.com/ReemanS"
              className="hover:scale-110 active:scale-95 transition duration-200"
            >
              <svg
                height="24px"
                width="24px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>github [#142]</title> <desc>Created with Sketch.</desc>{" "}
                  <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {" "}
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-140.000000, -7559.000000)"
                      fill="#ffffff"
                    >
                      {" "}
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        {" "}
                        <path
                          d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                          id="github-[#142]"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Content;
