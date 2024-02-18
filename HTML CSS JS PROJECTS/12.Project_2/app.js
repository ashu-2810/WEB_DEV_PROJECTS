// mouse folower
Shery.mouseFollower();

// magnet effect
Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hvr",{videos: ["https://player.vimeo.com/external/371745222.sd.mp4?s=17a4f2bb178b42f6a7b7dfeeeb1a131227ee32b3&profile_id=164&oauth2_token_id=57447761", "https://player.vimeo.com/external/352012012.sd.mp4?s=7b6f82678265a4c6c75831a304e781a28fd40469&profile_id=164&oauth2_token_id=57447761","https://player.vimeo.com/external/479728625.sd.mp4?s=f4f886d3d45a0312d8d47419647788178535a2c6&profile_id=165&oauth2_token_id=57447761"] });

gsap.to(".fleftelem", {
    scrollTrigger: {
        trigger: "#fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1,
    },
    y: "-300%",
    ease: Power1,
});

let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
    style: 2,
    // debug:true,
    config:{onMouse:{value:1}},
    slideStyle: (setScroll) => {
        sections.forEach((section,index) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress+index)
                }
            })
        })
    }
});


