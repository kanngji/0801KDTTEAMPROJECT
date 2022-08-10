gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.from(".part-1", {
  x: 1000,
  duration: 2,
})
  .from(".part-2", {
    x: 1000,
    duration: 1,
  })
  .fromTo(".commet >img", 0.6, { opacity: 0 }, { opacity: 1, delay: 0.6 })
  .from(".part-3", {
    x: 1000,
    duration: 1,
  })
  .from(".part-4", {
    x: 1000,
    duration: 1,
  })
  .fromTo(".monster >img", 1.0, { opacity: 0 }, { opacity: 1, delay: 1.0 });
