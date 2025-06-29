import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width : 768px)",
  });

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "circ.inOut",
      });
    }
  });
  return (
    <section className="vd-pin-section">
      <div
        className="size-full video-box"
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(9% at 50% 50%)",
        }}
      >
        <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay />
        <div className="abs-center md:scale-100 scale-200">
          <img
            src="/images/circle-text.svg"
            alt="spinning video loader"
            className="spin-circle"
          />
          <div className="play-btn">
            <img
              src="/images/play.svg"
              alt="play btn"
              className="size-[3vw] ml-[0.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
