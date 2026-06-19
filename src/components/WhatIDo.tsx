import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }

    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <div className="what-service-id">01 / 03</div>
              <h3>CONTENT CREATION</h3>
              <h4>Brand Shoots • Professional Reels • Emotional Storytelling</h4>
              <p>
                We create professional content and trending reels — everything
                that makes your brand look better. We plan shoots that connect
                emotionally with your audience, crafting visuals that feel
                premium, authentic, and built to perform across every platform.
              </p>
              <h5>Tools &amp; Techniques</h5>
              <div className="what-content-flex">
                <div className="what-tags">Creative Direction</div>
                <div className="what-tags">Shot Planning</div>
                <div className="what-tags">Camera Setup</div>
                <div className="what-tags">Lighting</div>
                <div className="what-tags">B-Roll</div>
                <div className="what-tags">Reels</div>
                <div className="what-tags">Product Shoots</div>
                <div className="what-tags">Brand Films</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <div className="what-service-id">04 / 06</div>
              <h3>VIDEO EDITING</h3>
              <h4>Trending Reels • AI Video • Sound &amp; Graphics</h4>
              <p>
                We edit reels with trending voices, trending graphic styles, and
                AI-generated video — creating content that stops the scroll. From
                beat-synced cuts to AI visual FX, we make every frame work
                harder so your brand stands out and stays relevant.
              </p>
              <h5>Tools &amp; Techniques</h5>
              <div className="what-content-flex">
                <div className="what-tags">Premiere Pro</div>
                <div className="what-tags">After Effects</div>
                <div className="what-tags">DaVinci Resolve</div>
                <div className="what-tags">Runway Gen-4</div>
                <div className="what-tags">Trending Audio</div>
                <div className="what-tags">AI Video</div>
                <div className="what-tags">Motion Graphics</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
