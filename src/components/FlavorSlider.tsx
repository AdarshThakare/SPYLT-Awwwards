import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const isTablet = useMediaQuery({
    query: "(max-width : 1024px)",
  });

  useGSAP(() => {
    const scrollAmount = sliderRef.current
      ? sliderRef.current.scrollWidth - window.innerWidth
      : 0;

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1000}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1000}px`,
        ease: "power1.inOut",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "linear",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "linear",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "linear",
        },
        "<"
      );
  });
  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            className={`relative z-30 lg:w-[50vw] w-90 lg:h-[70vh] h-80 flex-none ${flavor.rotation}`}
            key={flavor.name}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt="background"
              className="absolute bottom-0"
            />
            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt="drinks"
              className="drinks"
            />
            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt="elements"
              className="elements"
            />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
