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
// { repeat: -1 }

// let cardTimeline = gsap.timeline();

// cardTimeline
//   .fromTo(
//     ".box",
//     { x: 200, y: 270, scale: 0.2 },
//     { scale: 1, opacity: 1, duration: 2 }
//   )
//   .to(".card1", {
//     top: 210,
//     left: 100,
//     opacity: 1,
//     duration: 1,
//     ease: "ease-in",
//   })
//   .to(
//     ".card2",

//     {
//       top: 210,
//       left: 200,
//       opacity: 1,
//       // duration: 1,
//       ease: "ease-in",
//       marginRight: "6%",
//     }
//   )
//   .to(
//     ".card3",

//     {
//       top: 210,
//       left: 300,
//       opacity: 1,
//       // duration: 1,
//       ease: "ease-in",
//       //   marginRight: "6%",
//     }
//   )
//   .to(
//     ".card4",

//     {
//       top: 210,
//       left: 400,
//       opacity: 1,
//       // duration: 1,
//       ease: "ease-in",
//       //   marginRight: "3%",
//     }
//   )
//   .to(".card", { delay: 1, top: 210, left: 230, opacity: 0 })
//   .add("test")
//   .fromTo(
//     "#logo",
//     { top: 210, left: 205, opacity: 0 },
//     { delay: 1, top: 210, left: 205, scale: 1.2, opacity: 1 },
//     "-=0.5"
//   )
//   .to(
//     "#logo",
//     { delay: 1, top: 210, rotate: 90, left: 200, scale: 0.4, opacity: 1 },
//     "-=0.5"
//   )
//   .add("test")
//   .to(
//     "#logo",
//     {
//       delay: 1,
//       top: 310,
//       rotate: 90,
//       left: 200,
//       opacity: 0,
//       ease: "ease-in",
//       // duration: 2,
//     },
//     "-=0.5"
//   )
//   .to(".box", { x: 17, opacity: 0 })
//   .fromTo(
//     ".baloon",
//     { x: 1030, y: 300, opacity: 0 },
//     { x: 1050, y: 150, opacity: 1, duration: 2 },
//     "<"
//   )
//   .fromTo(".baloon", { x: 1050, y: 150 }, { scale: 0 })

//   .fromTo(
//     ".topics",
//     { x: 750, y: 150, scale: 0, opacity: 0 },
//     { x: 1050, y: 300, scale: 1, opacity: 1, stagger: 1 },
//     "-=0.5"
//   );

// let topicNo = document.querySelectorAll(".topics");
// .fromTo(".box", { x: 250, y: 270 }, { y: 280, opacity: 0, duration: 1 })
// .fromTo(
//   ".hand",
//   { top: 310, left: 290, opacity: 0 },
//   { y: -150, opacity: 1, duration: 1 },
//   "<"
// )
// .fromTo(
//   ".path",
//   { opacity: 0, top: -30 },
//   { opacity: 1, y: 270, duration: 1 }
// )
// .fromTo(
//   ".hand",
//   { x: 0, y: -150, opacity: 1 },
//   { top: 450, duration: 1 },
//   "<"
// );

// cardTimeline.play("test");

// function fourC() {
//   let fourC = gsap.timeline();

//   fourC
//     .to(".box", { y: "+=10", ease: "bounce", opacity: 1, duration: 1 })
//     .to(".cover", { x: "-=1", rotate: -25 })
//     .to(".cover", { x: "", y: "+=34", rotate: "-=65" })
//     .to(".card1", {
//       rotate: -25,
//       x: "+=100",
//       y: "-=80",
//       scale: 0.6,
//       duration: 0.4,
//       delay: 0.2,
//       opacity: 1,
//       ease: "linear",
//     })
//     .to(".card1", {
//       rotate: "+=25",
//       x: "-=240",
//       y: "-=80",
//       scale: 1,
//       duration: 0.6,
//     })
//     .to(".card2", {
//       rotate: -25,
//       x: "+=100",
//       y: "-=80",
//       scale: 0.6,
//       duration: 0.2,
//       delay: 0.2,
//       opacity: 1,
//       ease: "linear",
//     })
//     .to(".card2", {
//       rotate: "+=25",
//       x: "-=160",
//       y: "-=80",
//       scale: 1,
//       duration: 0.6,
//     })
//     .to(".card3", {
//       rotate: -25,
//       x: "+=100",
//       y: "-=80",
//       scale: 0.6,
//       duration: 0.2,
//       delay: 0.2,
//       opacity: 1,
//       ease: "linear",
//     })
//     .to(".card3", {
//       rotate: "+=25",
//       x: "-=80",
//       y: "-=80",
//       scale: 1,
//       duration: 0.6,
//     })
//     .to(".card4", {
//       rotate: -25,
//       x: "+=100",
//       y: "-=80",
//       scale: 0.6,
//       duration: 0.2,
//       delay: 0.2,
//       opacity: 1,
//       ease: "linear",
//     })
//     .to(".card4", {
//       rotate: "+=25",
//       x: "-=0",
//       y: "-=80",
//       scale: 1,
//       duration: 0.6,
//     });

//   return fourC;
// }

// function logo() {
//   let logo = gsap.timeline({ delay: 1 });

//   logo
//     .to(".card", { x: "+=20", opacity: 0, scale: 0 })
//     .to("#logo", { opacity: 1, scale: 1, duration: 1 })
//     .to("#logo", { scale: 0.4, rotate: 90 });

//   return logo;
// }

//============================================
function hide() {
  let hideTL = gsap.timeline();

  hideTL
    .set(".hand-click", { top: 420, left: 120, opacity: 0 })
    .set(".home-screen", { opacity: 0 })
    .set(".community-screen", { opacity: 0 })
    .set(".textCommunity>h5", { opacity: 0 })
    .set(".career-screen", { opacity: 0 })
    .set(".textCareer>h5", { opacity: 0 })
    .set(".compete-screen", { opacity: 0 })
    .set(".textCompete>h5", { opacity: 0 })
    .set(".content-screen", { opacity: 0 })
    .set(".textContent>h5", { opacity: 0 })
    .set(".end-screen", { opacity: 0 })
    .set(".end-text", { opacity: 0 });

  // .set(".heading1", { opacity: 0 })
  // .set(".heading2", { opacity: 0 })
  // .set(".description", { opacity: 0 });

  return hideTL;
}

let colors = ["#E84C54", "#3AAABA", "#E48E1D", "#4F2A4E"];

function text() {
  let textTL = gsap.timeline();

  textTL
    .fromTo(
      ".heading1",
      { y: "-=50" },
      { y: 0, opacity: 1, duration: 0.7, ease: "linear" }
    )
    .fromTo(
      ".heading2",
      { y: "-=25", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    )
    .fromTo(
      ".description",
      { x: "-=100", opacity: 0 },
      { x: 0, duration: 1, opacity: 1 },
      "-=0.2"
    )
    .fromTo(
      ".users-img>img",
      { x: "-=100", opacity: 0 },
      { opacity: 1, stagger: 0.4, x: 0 }
    )
    .fromTo(
      ".user-text",
      { x: "-=20", opacity: 0 },
      { opacity: 1, x: 0, ease: "elastic", duration: 0.5 }
    )
    .fromTo(
      ".button",
      { y: "-=30", opacity: 0 },
      { y: 0, opacity: 1, ease: "bounce", duration: 0.2 }
    );

  return textTL;
}

function lockScreen() {
  let lockScreen = gsap.timeline();

  lockScreen
    .fromTo(
      ".hand-click",
      { delay: 1 },
      { y: "-=32", opacity: 1, duration: 1, ease: "bounce" }
    )
    .to(".hand-click", { scale: 0.7, delay: 0.5 })
    .to(".hand-click", { scale: 1 })
    .fromTo(
      ".lock-screen",
      { opacity: 1 },
      { opacity: 0, x: "+=1", duration: 0.5 },
      "-=0.4"
    )
    .to(".hand-click", { opacity: 1, duration: 0.4 }, "-=0.5")
    .fromTo(
      ".home-screen",
      { x: "-=1", opacity: 1 },
      { x: "+=1", duration: 0.5 },
      "<"
    );

  return lockScreen;
}

function communityScreen() {
  let communityScreen = gsap.timeline();

  communityScreen
    .fromTo(
      ".hand-click",
      { delay: 1 },
      { y: "-=215", x: "+= 125", opacity: 1, duration: 1, ease: "slow" }
    )
    .to(".hand-click", { scale: 0.7 })
    .to(".hand-click", { scale: 1 })
    .to(".laptop-screen", { opacity: 0, x: "+=1", duration: 0.2 }, "-=0.4")
    .to(".hand-click", { opacity: 1, duration: 0.4 }, "-=0.5")
    .fromTo(
      ".community1",
      { x: "-=1" },
      {
        x: "+=1",
        opacity: 1,
        scale: 1,
        backgroundColor: colors[0],
        duration: 0.8,
        stagger: { from: "end" },
      }
    )
    .fromTo(
      ".community2",
      { x: "-=1" },
      {
        x: "+=1",
        opacity: 1,
        scale: 1,
        backgroundColor: colors[1],
        duration: 0.8,
      }
    )
    .fromTo(
      ".community3",
      { x: "-=1" },
      { x: "+=1", opacity: 1, scale: 1, backgroundColor: colors[2] }
    )
    .to(".textCommunity>h5", { x: "+=30", opacity: 0, stagger: 0.2 })
    .to(".hand-click", { x: "+=90" })
    .to(".hand-click", { x: "-=50", ease: "linear" })
    .to(".hand-click", { scale: 0.7 })
    .to(".hand-click", { scale: 1 })
    .to(".home-screen", { x: "+=1", duration: 1 }, "-=0.4")
    .fromTo(
      ".career-screen",
      { x: "-=1", opacity: 1 },
      { x: "+=1", duration: 1 },
      "<"
    )
    .fromTo(
      ".career1",
      { x: "-=1" },
      {
        x: "+=1",
        opacity: 1,
        scale: 1,
        backgroundColor: colors[0],
        duration: 0.8,
        stagger: { from: "end" },
      }
    )
    .fromTo(
      ".career2",
      { x: "-=1" },
      {
        x: "+=1",
        opacity: 1,
        scale: 1,
        backgroundColor: colors[1],
        duration: 0.8,
      }
    )
    .fromTo(
      ".career3",
      { x: "-=1" },
      { x: "+=1", opacity: 1, scale: 1, backgroundColor: colors[2] }
    )
    .to(".textCareer>h5", { x: "+=30", opacity: 0, stagger: 0.2 })
    .to(".hand-click", { y: "-=20" })
    .to(".hand-click", { y: "+=20", x: "-=35", ease: "linear" })
    .to(".hand-click", { scale: 0.7 })
    .to(".hand-click", { scale: 1 })
    .to(".career-screen", { x: "+=1", duration: 1 }, "-=0.4")
    .fromTo(
      ".compete-screen",
      { x: "-=1", opacity: 1 },
      { x: "+=1", duration: 1 },
      "<"
    )
    .fromTo(
      ".compete1",
      { x: "-=1" },
      {
        x: "+=1",
        opacity: 1,
        scale: 1,
        backgroundColor: colors[0],
        duration: 0.8,
        stagger: { from: "end" },
      }
    )
    .fromTo(
      ".compete2",
      { x: "-=1" },
      {
        x: "+=1",
        opacity: 1,
        scale: 1,
        backgroundColor: colors[1],
        duration: 0.8,
      }
    )
    .fromTo(
      ".compete3",
      { x: "-=1" },
      { x: "+=1", opacity: 1, scale: 1, backgroundColor: colors[2] }
    )
    .to(".textCompete>h5", { x: "+=30", opacity: 0, stagger: 0.2 })
    .to(".hand-click", { y: "-=5", x: "+=35", ease: "linear" })
    .to(".hand-click", { scale: 0.7 })
    .to(".hand-click", { scale: 1 })
    .to(".compete-screen", { x: "+=1", duration: 1 }, "-=0.4")
    .fromTo(
      ".content-screen",
      { x: "-=1", opacity: 1 },
      { x: "+=1", duration: 1 },
      "<"
    )
    .fromTo(
      ".content1",
      { x: "-=1" },
      {
        x: "+=1",
        opacity: 1,
        scale: 1,
        backgroundColor: colors[0],
        duration: 0.8,
        stagger: { from: "end" },
      }
    )
    .fromTo(
      ".content2",
      { x: "-=1" },
      {
        x: "+=1",
        opacity: 1,
        scale: 1,
        backgroundColor: colors[1],
        duration: 0.8,
      }
    )
    .fromTo(
      ".content3",
      { x: "-=1" },
      { x: "+=1", opacity: 1, scale: 1, backgroundColor: colors[2] }
    )
    .to(".textContent>h5", { x: "+=30", opacity: 0, stagger: 0.2 })
    .to(".content-screen", { x: "+=1", duration: 0.5, opacity: 0 })
    .to(".hand-click", { opacity: 0 })
    .fromTo(
      ".end-screen",
      { x: "-=1", opacity: 1 },
      { x: "+=1", duration: 1, opacity: 1 },
      "-=0.5"
    );
  // .to(".end-text", { opacity: 1, stagger: 1 });

  return communityScreen;
}

function backSwipe() {
  let backSwipe = gsap.timeline();

  backSwipe.to(".hand-click", { y: "+=100", x: "-=60", ease: "linear" });
  backSwipe.fromTo(
    ".hand-click",
    { opacity: 1, delay: 1 },
    { x: "+=190", ease: "bounce", duration: 2 }
  );

  return backSwipe;
}

function main() {
  let mainTL = gsap.timeline();

  mainTL

    .add(hide(), "hide-elements")
    .add(text(), "text")
    .add(lockScreen(), "laptop-screen")
    .add(communityScreen(), "community-screen");
}

main();
