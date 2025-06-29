import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type ClipPathTitleProps = {
  title: string;
  color: string;
  bg: string;
  className: string;
  borderColor: string;
};

const ClipPathTitle = ({
  title,
  color,
  bg,
  className,
  borderColor,
}: ClipPathTitleProps) => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl.to(".benefit-section .first-title", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0% , 100% 0% , 100% 100% ,0% 100%)",
      ease: "circ.out",
    });

    revealTl.to(".benefit-section .second-title", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0% , 100% 0% , 100% 100% ,0% 100%)",
      ease: "circ.out",
    });
    revealTl.to(".benefit-section .third-title", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0% , 100% 0% , 100% 100% ,0% 100%)",
      ease: "circ.out",
    });
    revealTl.to(".benefit-section .fourth-title", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0% , 100% 0% , 100% 100% ,0% 100%)",
      ease: "circ.out",
    });
  });
  return (
    <div className="general-title">
      <div
        className={`${className} border-[.5vw] text-nowrap opacity-0`}
        style={{
          clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
          borderColor: borderColor,
        }}
      >
        <div
          className="pb-5 md:pb-3 px-3 md:pt-0 pt-3"
          style={{ backgroundColor: bg }}
        >
          <h2 style={{ color: color }}>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ClipPathTitle;
