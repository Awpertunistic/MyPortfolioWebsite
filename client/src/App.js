import React, { useState, useEffect } from "react";
import "./App.scss";
import Axios from "axios";

function App() {
  return (
    <div className="App">
      <div className="header-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1920 300"
          fill="none"
        >
          <g id="g1">
            <rect
              id="background"
              width="1920"
              height="300"
              fill="#403D61"
              clip-path="url(#clip0_1_2)"
            />
            <linearGradient
              id="sunnyGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#FAD961" />
              <stop offset="100%" stop-color="#F76B1C" />
            </linearGradient>
            <g id="Moon">
              <g id="Ellipse 1" filter="url(#filter0_d_1_2)">
                <circle cx="1451" cy="99" r="75" fill="#ABABB9" />
              </g>
              <g id="Ellipse 2" filter="url(#filter1_i_1_2)">
                <path
                  d="M1497 75.7425C1497 87.0644 1488.05 96.2425 1477 96.2425C1465.95 96.2425 1457 87.0644 1457 75.7425C1457 64.4207 1465.95 55.2425 1477 55.2425C1488.05 55.2425 1497 64.4207 1497 75.7425Z"
                  fill="#887C7C"
                />
              </g>
              <g id="Ellipse 3" filter="url(#filter2_i_1_2)">
                <path
                  d="M1456 104C1456 109.523 1451.52 114 1446 114C1440.48 114 1436 109.523 1436 104C1436 98.4772 1440.48 94 1446 94C1451.52 94 1456 98.4772 1456 104Z"
                  fill="#887C7C"
                />
              </g>
            </g>
            <g
              id="Sun"
              filter="url(#filter0_d_1_42)"
              transform="translate(1320, 272)"
            >
              <path
                id="Polygon 1"
                d="M125.368 0L140.41 47.4093H110.327L125.368 0Z"
                fill="#DAA419"
              />
              <path
                id="Polygon 3"
                d="M121.368 244.212L106.327 196.803H136.41L121.368 244.212Z"
                fill="#DAA419"
              />
              <path
                id="Polygon 4"
                d="M4 123.368L51.4093 108.327V138.41L4 123.368Z"
                fill="#DAA419"
              />
              <path
                id="Polygon 5"
                d="M247.212 123.368L199.803 138.41V108.327L247.212 123.368Z"
                fill="#DAA419"
              />
              <path
                id="Polygon 6"
                d="M239.118 75.6074L201.355 107.977L189.601 80.2859L239.118 75.6074Z"
                fill="#DAA419"
              />
              <path
                id="Polygon 12"
                d="M238.974 170.687L189.456 166.008L201.21 138.317L238.974 170.687Z"
                fill="#DAA419"
              />
              <path
                id="Polygon 11"
                d="M11.7864 71.9877L61.3041 76.6662L49.5497 104.358L11.7864 71.9877Z"
                fill="#DAA419"
              />
              <path
                id="Polygon 15"
                d="M10.7864 170.687L48.5497 138.317L60.3041 166.008L10.7864 170.687Z"
                fill="#DAA419"
              />
              <path
                id="Polygon 7"
                d="M209.979 36.2813L187.092 80.4407L165.82 59.1688L209.979 36.2813Z"
                fill="#DAA419"
              />
              <path
                id="Polygon 13"
                d="M209.979 209.979L165.82 187.092L187.092 165.82L209.979 209.979Z"
                fill="#DAA419"
              />
              <path
                id="Polygon 14"
                d="M171.98 236.724L139.61 198.961L167.301 187.206L171.98 236.724Z"
                fill="#DAA419"
              />
              <path
                id="Polygon 10"
                d="M40.2813 32.2813L84.4407 55.1688L63.1688 76.4407L40.2813 32.2813Z"
                fill="#DAA419"
              />
              <path
                id="Polygon 16"
                d="M35.2814 208.979L58.1689 164.82L79.4408 186.092L35.2814 208.979Z"
                fill="#DAA419"
              />
              <path
                id="Polygon 8"
                d="M171.938 8.68037L168.125 58.2722L140.232 47.0029L171.938 8.68037Z"
                fill="#DAA419"
              />
              <path
                id="Polygon 9"
                d="M79.1037 8.50629L110.81 46.8288L82.9173 58.0981L79.1037 8.50629Z"
                fill="#DAA419"
              />
              <path
                id="Polygon 17"
                d="M75.1037 233.116L78.9174 183.524L106.81 194.793L75.1037 233.116Z"
                fill="#DAA419"
              />
              <ellipse
                id="Ellipse 4"
                cx="125.053"
                cy="122.28"
                rx="78.9474"
                ry="77.7202"
                fill="#D37A27"
              />
            </g>
            <g id="Stars1">
              <path
                id="Star 1"
                d="M577 55L578.123 58.8004H581.755L578.816 61.1492L579.939 64.9496L577 62.6008L574.061 64.9496L575.184 61.1492L572.245 58.8004H575.877L577 55Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 2"
                d="M460 170L461.123 173.8H464.755L461.816 176.149L462.939 179.95L460 177.601L457.061 179.95L458.184 176.149L455.245 173.8H458.877L460 170Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 3"
                d="M794 39L795.123 42.8004H798.755L795.816 45.1492L796.939 48.9496L794 46.6008L791.061 48.9496L792.184 45.1492L789.245 42.8004H792.877L794 39Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 4"
                d="M774 94L775.123 97.8004H778.755L775.816 100.149L776.939 103.95L774 101.601L771.061 103.95L772.184 100.149L769.245 97.8004H772.877L774 94Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 5"
                d="M287 115L288.123 118.8H291.755L288.816 121.149L289.939 124.95L287 122.601L284.061 124.95L285.184 121.149L282.245 118.8H285.877L287 115Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 6"
                d="M840 61L841.123 64.8004H844.755L841.816 67.1492L842.939 70.9496L840 68.6008L837.061 70.9496L838.184 67.1492L835.245 64.8004H838.877L840 61Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 7"
                d="M1644 85L1645.12 88.8004H1648.76L1645.82 91.1492L1646.94 94.9496L1644 92.6008L1641.06 94.9496L1642.18 91.1492L1639.24 88.8004H1642.88L1644 85Z"
                fill="#D9D9D9"
              />
            </g>
            <g id="Stars2">
              <path
                id="Star 19"
                d="M1704 115L1705.12 118.8H1708.76L1705.82 121.149L1706.94 124.95L1704 122.601L1701.06 124.95L1702.18 121.149L1699.24 118.8H1702.88L1704 115Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 20"
                d="M1778 56L1779.12 59.8004H1782.76L1779.82 62.1492L1780.94 65.9496L1778 63.6008L1775.06 65.9496L1776.18 62.1492L1773.24 59.8004H1776.88L1778 56Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 21"
                d="M1835 139L1836.12 142.8H1839.76L1836.82 145.149L1837.94 148.95L1835 146.601L1832.06 148.95L1833.18 145.149L1830.24 142.8H1833.88L1835 139Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 22"
                d="M1729 169L1730.12 172.8H1733.76L1730.82 175.149L1731.94 178.95L1729 176.601L1726.06 178.95L1727.18 175.149L1724.24 172.8H1727.88L1729 169Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 23"
                d="M1008 51L1009.12 54.8004H1012.76L1009.82 57.1492L1010.94 60.9496L1008 58.6008L1005.06 60.9496L1006.18 57.1492L1003.24 54.8004H1006.88L1008 51Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 8"
                d="M141 169L142.123 172.8H145.755L142.816 175.149L143.939 178.95L141 176.601L138.061 178.95L139.184 175.149L136.245 172.8H139.877L141 169Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 9"
                d="M619 104L620.123 107.8H623.755L620.816 110.149L621.939 113.95L619 111.601L616.061 113.95L617.184 110.149L614.245 107.8H617.877L619 104Z"
                fill="#D9D9D9"
              />
            </g>
            <g id="Stars3">
              <path
                id="Star 10"
                d="M493 34L494.123 37.8004H497.755L494.816 40.1492L495.939 43.9496L493 41.6008L490.061 43.9496L491.184 40.1492L488.245 37.8004H491.877L493 34Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 11"
                d="M441 94L442.123 97.8004H445.755L442.816 100.149L443.939 103.95L441 101.601L438.061 103.95L439.184 100.149L436.245 97.8004H439.877L441 94Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 12"
                d="M343 45L344.123 48.8004H347.755L344.816 51.1492L345.939 54.9496L343 52.6008L340.061 54.9496L341.184 51.1492L338.245 48.8004H341.877L343 45Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 13"
                d="M1162 45L1163.12 48.8004H1166.76L1163.82 51.1492L1164.94 54.9496L1162 52.6008L1159.06 54.9496L1160.18 51.1492L1157.24 48.8004H1160.88L1162 45Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 14"
                d="M1213 89L1214.12 92.8004H1217.76L1214.82 95.1492L1215.94 98.9496L1213 96.6008L1210.06 98.9496L1211.18 95.1492L1208.24 92.8004H1211.88L1213 89Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 15"
                d="M1264 44L1265.12 47.8004H1268.76L1265.82 50.1492L1266.94 53.9496L1264 51.6008L1261.06 53.9496L1262.18 50.1492L1259.24 47.8004H1262.88L1264 44Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 16"
                d="M1315 89L1316.12 92.8004H1319.76L1316.82 95.1492L1317.94 98.9496L1315 96.6008L1312.06 98.9496L1313.18 95.1492L1310.24 92.8004H1313.88L1315 89Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 17"
                d="M121 34L122.123 37.8004H125.755L122.816 40.1492L123.939 43.9496L121 41.6008L118.061 43.9496L119.184 40.1492L116.245 37.8004H119.877L121 34Z"
                fill="#D9D9D9"
              />
              <path
                id="Star 18"
                d="M178 88L179.123 91.8004H182.755L179.816 94.1492L180.939 97.9496L178 95.6008L175.061 97.9496L176.184 94.1492L173.245 91.8004H176.877L178 88Z"
                fill="#D9D9D9"
              />
            </g>
            <g id="Hills">
              <g id="Hill1" filter="url(#filter3_i_1_2)">
                <ellipse
                  cx="204.5"
                  cy="294.5"
                  rx="283.5"
                  ry="61.5"
                  fill="#6D63E7"
                />
              </g>
              <g id="Hill2" filter="url(#filter4_i_1_2)">
                <ellipse
                  cx="1212.5"
                  cy="307.5"
                  rx="283.5"
                  ry="61.5"
                  fill="#6D63E7"
                />
              </g>
              <g id="Hill3" filter="url(#filter5_i_1_2)">
                <ellipse
                  cx="697.5"
                  cy="307"
                  rx="359.5"
                  ry="58"
                  fill="#6D63E7"
                />
              </g>
              <g id="Hill4" filter="url(#filter6_i_1_2)">
                <ellipse
                  cx="1656.5"
                  cy="318"
                  rx="359.5"
                  ry="58"
                  fill="#6D63E7"
                />
              </g>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_1_2"
              x="1372"
              y="24"
              width="158"
              height="174"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_2"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_2"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_i_1_2"
              x="1457"
              y="55.2425"
              width="40"
              height="45"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_2"
              />
            </filter>
            <filter
              id="filter2_i_1_2"
              x="1436"
              y="94"
              width="20"
              height="24"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_2"
              />
            </filter>
            <filter
              id="filter3_i_1_2"
              x="-79"
              y="233"
              width="567"
              height="127"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_2"
              />
            </filter>
            <filter
              id="filter4_i_1_2"
              x="929"
              y="246"
              width="567"
              height="127"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_2"
              />
            </filter>
            <filter
              id="filter5_i_1_2"
              x="338"
              y="249"
              width="719"
              height="120"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_2"
              />
            </filter>
            <filter
              id="filter6_i_1_2"
              x="1297"
              y="260"
              width="719"
              height="120"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_2"
              />
            </filter>
            <clipPath id="clip0_1_2">
              <rect width="1920" height="300" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <h1 className="intro-head">Welcome to my Website</h1>
      <script src="./scripts.js"></script>
    </div>
  );
}

export default App;
