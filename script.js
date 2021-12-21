// gsap.to(".card", {
//   x: () => Math.round(Math.random() * 99) + 1,
//   y: () => Math.round(Math.random() * 99) + 1,
// });

// let cardTimeline = gsap.timeline();

// cardTimeline
//   .fromTo(".box", { x: 250, y: 270, opacity: 0 }, { opacity: 1 })
//   .fromTo(
//     ".card1",
//     { x: 250, y: 300, opacity: 0 },
//     {
//       x: -50,
//       y: 70,
//       //   rotationY: 70,
//       opacity: 1,
//       duration: 1,
//       ease: "ease-in",
//       scale: 2,
//       //   marginLeft: "6%",
//     }
//   )
//   .fromTo(
//     ".card2",
//     { x: 250, y: 300, opacity: 0 },
//     {
//       x: 0,
//       y: 70,
//       opacity: 1,
//       duration: 1,
//       ease: "ease-in",
//       scale: 2,
//       //   marginLeft: "6%",
//     }
//   )
//   .fromTo(
//     ".card3",
//     { x: 250, y: 300, opacity: 0 },
//     {
//       x: 50,
//       y: 70,
//       opacity: 1,
//       duration: 1,
//       ease: "ease-in",
//       scale: 2,
//       //   marginLeft: "6%",
//     }
//   )
//   .fromTo(
//     ".card4",
//     { x: 250, y: 300, opacity: 0 },
//     {
//       x: 100,
//       y: 70,
//       opacity: 1,
//       duration: 1,
//       ease: "ease-in",
//       scale: 2,
//       //   marginLeft: "6%",
//     }
//   )
//   .to(".card", { delay: 2, x: 50, y: 70, opacity: 0 });

//   rotationY: 70,
//   marginRight: "6%",

let cardTimeline = gsap.timeline();

cardTimeline
  .fromTo(
    ".box",
    { x: 250, y: 270, scale: 0.2 },
    { scale: 1, opacity: 1, duration: 2 }
  )
  .to(".card1", {
    top: 210,
    left: 130,
    opacity: 1,
    duration: 1,
    ease: "ease-in",
  })
  .to(
    ".card2",

    {
      top: 210,
      left: 230,
      opacity: 1,
      // duration: 1,
      ease: "ease-in",
      marginRight: "6%",
    }
  )
  .to(
    ".card3",

    {
      top: 210,
      left: 330,
      opacity: 1,
      // duration: 1,
      ease: "ease-in",
      //   marginRight: "6%",
    }
  )
  .to(
    ".card4",

    {
      top: 210,
      left: 430,
      opacity: 1,
      // duration: 1,
      ease: "ease-in",
      //   marginRight: "3%",
    }
  )
  .to(".card", { delay: 1, top: 210, left: 250, opacity: 0 })
  .fromTo(
    "#logo",
    { top: 210, left: 250, opacity: 0 },
    { delay: 1, top: 210, left: 250, scale: 1.2, opacity: 1 },
    "-=0.5"
  )
  .to(
    "#logo",
    { delay: 1, top: 210, rotate: 90, left: 250, scale: 0.4, opacity: 1 },
    "-=0.5"
  )
  .to(
    "#logo",
    {
      delay: 1,
      top: 310,
      rotate: 90,
      left: 250,
      opacity: 0,
      ease: "ease-in",
      duration: 2,
    },
    "-=0.5"
  );
