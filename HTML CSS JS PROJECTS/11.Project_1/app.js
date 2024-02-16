// mouse follower ->
var timeout;
circleChaptaKaro = () => {
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", (details) => {
        clearTimeout(timeout);

        var xdiff = details.clientX - xprev;
        var ydiff = details.clientY - yprev;
        
        xscale = gsap.utils.clamp(.8, 1.2, xdiff);
        yscale = gsap.utils.clamp(.8, 1.2, ydiff);
        
        xprev = details.clientX;
        yprev = details.clientY;
        
        circleMouseFollower(xscale, yscale);
        timeout=setTimeout(() => {
            document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1,1)`;
        },100)
    });
};
circleChaptaKaro();

circleMouseFollower = (xscale, yscale) => {
    window.addEventListener("mousemove", (details) => {
        document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale},${yscale})`;
    });
};
circleMouseFollower();
// mouse follower ends ->

// smooth scrolling ->
// attach loco scroll css
// attach locomotive scroll min js
// some code from loco github for js
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// gsap ->
// attach gsap
firstPageAnim = () => {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        ease: Expo,
        duration:1.5,
    })
    .to(".boundingelem", {
        y: '0',
        ease: Expo.easeInOut,
        duration:2,
        stagger:.2,
        delay:-1,
    })
    .from("#herofooter", {
        y: '-10',
        opacity:0,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay:-1,
    })
}
firstPageAnim();

document.querySelectorAll(".elem").forEach((elem) => {
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mouseleave", (details) => {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration:0.5,
        });
    });
    elem.addEventListener("mousemove", (details) => {
        var diff = details.clientY - elem.getBoundingClientRect().top;
        diffrot = details.clientX - rotate;
        rotate = details.clientX;
        
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: details.clientX,
            rotate:gsap.utils.clamp(-20, 20, diffrot*0.8),
        });
    });
});
// scrolltrigger
