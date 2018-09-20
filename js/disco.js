const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "A",
  "B"
];
let pointer = 0;

function discoMode(css) {
  var head = document.getElementsByTagName("head")[0];
  var s = document.createElement("style");
  s.setAttribute("type", "text/css");
  if (s.styleSheet) {
    // IE
    s.styleSheet.cssText = css;
  } else {
    // the world
    s.appendChild(document.createTextNode(css));
  }
  head.appendChild(s);
}
let css = `
        p,
        h1,
        h2,
        img,
        #rosehack-hero,
        section {
            -webkit-transform: rotateX(25deg) rotateY(20deg) rotateZ(-3deg);
            transform: rotateX(25deg) rotateY(20deg) rotateZ(-3deg);

            -webkit-animation: anim 3s;
            -webkit-animation-timing-function: linear;
            -webkit-animation-iteration-count: infinite;

            animation: anim 3s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }

        @-webkit-keyframes anim {
            0% {
                text-shadow: -6px 4px 0px red;
            }

            10% {
                text-shadow: 4px -6px 0px green;
            }

            20% {
                text-shadow: -9px 4px 0px blue;
            }

            30% {
                text-shadow: 4px -6px 0px yellow;
            }

            40% {
                text-shadow: -8px 4px 0px orange;
            }

            50% {
                text-shadow: 4px 5px 0px purple;
            }

            60% {
                text-shadow: -6px 4px 0px brown;
            }

            70% {
                text-shadow: 4px 7px 0px pink;
            }

            80% {
                text-shadow: -9px -4px 0px lime;
            }

            90% {
                text-shadow: 4px -6px 0px cyan;
            }

            100% {
                text-shadow: -9px 4px 0px teal;
                transform: scale(200%);
                -moz-transform: rotate(360deg);
            }
        }

        @keyframes anim {
            0% {
                text-shadow: -6px 4px 0px red;
            }

            10% {
                text-shadow: 4px -6px 0px green;
            }

            20% {
                text-shadow: -9px 4px 0px blue;
            }

            30% {
                text-shadow: 4px -6px 0px yellow;
            }

            40% {
                text-shadow: -8px 4px 0px orange;
            }

            50% {
                text-shadow: 4px 5px 0px purple;
            }

            60% {
                text-shadow: -6px 4px 0px brown;
            }

            70% {
                text-shadow: 4px 7px 0px pink;
            }

            80% {
                text-shadow: -9px -4px 0px lime;
            }

            90% {
                text-shadow: 4px -6px 0px cyan;
            }

            100% {
                text-shadow: -9px 4px 0px teal;
                transform: rotate(360deg);
            }
        }
        `;
function konamiTrigger(e) {
  if (e.key === konamiCode[pointer]) {
    pointer++;
  } else {
    if (e.key !== "Shift") {
      pointer = 0;
    }
  }
  if (pointer === konamiCode.length) {
    discoMode(css);
    let music = document.querySelector(".konami-music");
    music.play();
    pointer = 0;
  }
}
window.addEventListener("keydown", konamiTrigger);
