"use client";
import * as React from "react";

function DecorationBlob() {
  return (
    <div className="relative">
      {/* Using aria-hidden since this is a decorative element */}
      <div
        aria-hidden="true"
        className="w-[79px] h-[537px] absolute left-[-42px] top-[-116px] opacity-[0.45]"
      >
        <svg
          width="373"
          height="469"
          viewBox="0 0 373 469"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform rotate-[-149.283deg] filter blur-[51.45px]"
        >
          <g opacity="0.45" filter="url(#filter0_f_1_1561)">
            <path
              d="M78.0146 105.536C140.919 211.408 252.233 374.372 267.761 365.146C283.289 355.92 206.313 187.822 143.409 81.9499C80.5049 -23.9225 -20.2456 -88.6437 -35.7736 -79.4178C-51.3016 -70.1918 15.1103 -0.336288 78.0146 105.536Z"
              fill="#A78BFA"
              fillOpacity="0.75"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1_1561"
              x="-140.96"
              y="-183.189"
              width="513.644"
              height="651.611"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="51.45"
                result="effect1_foregroundBlur_1_1561"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default DecorationBlob;
