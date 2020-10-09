let delayTime;

if(sessionStorage.getItem("CoomingSoonApp-FirstLog") === null) {
  delayTime = 1;
  sessionStorage.setItem("CoomingSoonApp-FirstLog", 'true');
} else
 delayTime = 0.5;

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: delayTime });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1.5");
