gsap.registerPlugin(MotionPathPlugin);

neuralLinks();

function neuralLinks() {
  const links = document.querySelectorAll(".neural-links__svg .link");
  const link = {
    topLeft: document.querySelector(".link--top-left"),
    topRight: document.querySelector(".link--top-right"),
    bottomLeft: document.querySelector(".link--bottom-left"),
    bottomRight: document.querySelector(".link--bottom-right"),
    bottomCenter: document.querySelector(".link--bottom-center"),
  };
  const card = {
    topLeft: document.querySelector(".neural-links__card--top-left"),
    topRight: document.querySelector(".neural-links__card--top-right"),
    bottomLeft: document.querySelector(".neural-links__card--bottom-left"),
    bottomRight: document.querySelector(".neural-links__card--bottom-right"),
    bottomCenter: document.querySelector(".neural-links__card--bottom-center"),
  };

  setCardPosition();

  animate({
    orb: ".neural-links__orb--top-left",
    link: link.topLeft,
    duration: 2.5,
    repeatDelay: 1,
    delay: 0,
  });

  animate({
    orb: ".neural-links__orb--bottom-right",
    link: link.bottomRight,
    duration: 2.5,
    repeatDelay: 1,
    delay: 0.5,
  });

  animate({
    orb: ".neural-links__orb--bottom-center",
    link: link.bottomCenter,
    duration: 2.5,
    repeatDelay: 1,
    delay: 1,
  });

  animate({
    orb: ".neural-links__orb--bottom-left",
    link: link.bottomLeft,
    duration: 2.5,
    repeatDelay: 1,
    delay: 1.5,
  });

  animate({
    orb: ".neural-links__orb--top-right",
    link: link.topRight,
    duration: 2.5,
    repeatDelay: 1,
    delay: 2,
  });

  window.addEventListener("resize", neuralLinks);


  function animate(config) {
    const orb = document.querySelector(config.orb);
    const link = config.link;
    gsap.fromTo(
      orb,
      { opacity: 1,},
      {
        onStart: () => orb.classList.remove("is-hidden"),
        delay: config.delay,
        opacity: 0,
        duration: config.duration + 0.2,
        repeat: -1,
        repeatDelay: config.repeatDelay - 0.2,
      }
    );

    gsap.to(orb, {
      motionPath: {
        path: link,
        align: link,
        alignOrigin: [0.5, 0.5],
        start: 0,
        end: 1,
      },
      delay: config.delay,
      transformOrigin: "50% 50%",
      duration: config.duration,
      repeat: -1,
      repeatDelay: config.repeatDelay,
      ease: Expo.easeOut,
      skewX: "0",
    });
  }

  function setCardPosition() {
    card.topRight.style.top =
      getPosition(link.topRight).top - card.topRight.scrollHeight / 2 + "px";
    card.topRight.style.left = getPosition(link.topRight).right + "px";

    card.topLeft.style.top =
      getPosition(link.topLeft).top - card.topLeft.scrollHeight / 2 + "px";
    card.topLeft.style.left =
      getPosition(link.topLeft).left - card.topLeft.scrollWidth + "px";

    card.bottomLeft.style.top =
      getPosition(link.bottomLeft).bottom -
      card.bottomLeft.scrollHeight / 2 +
      "px";
    card.bottomLeft.style.left =
      getPosition(link.bottomLeft).left - card.bottomLeft.scrollWidth + "px";

    card.bottomRight.style.top =
      getPosition(link.bottomRight).bottom -
      card.bottomRight.scrollHeight / 2 +
      "px";
    card.bottomRight.style.left = getPosition(link.bottomRight).right + "px";

    card.bottomCenter.style.top = getPosition(link.bottomCenter).bottom + "px";
    card.bottomCenter.style.left =
      getPosition(link.bottomCenter).right -
      card.bottomCenter.scrollWidth / 2 +
      "px";

      card.topRight.classList.remove("is-hidden");
      card.topLeft.classList.remove("is-hidden");
      card.bottomRight.classList.remove("is-hidden");
      card.bottomLeft.classList.remove("is-hidden");
      card.bottomCenter.classList.remove("is-hidden");
  }

  function getPosition(el) {
    const { top, left, right, bottom } = el.getBoundingClientRect();
    const { scrollY, scrollX } = window;

    return {
      top: top + scrollY,
      bottom: bottom + scrollY,
      left: left + scrollX,
      right: right + scrollX,
    };
  }
}
