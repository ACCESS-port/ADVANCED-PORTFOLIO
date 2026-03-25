gsap.to(".box1,.box2,.box3,.box4,.box5 " ,{
    x:-1000,
    duration:5,
    repeat:Infinity,
    ease:"none",
    yoyo:true
    
})

gsap.from(".bg",{
    x:-2000,              
    duration:5,
    opacity:0,
    scrollTrigger:{
        trigger:"bg",
        scrub:true

    }
    
})

gsap.from(".heading",{
    y:-200,
    duration:1,
    ease:"none",
    opacity:0,   
})

gsap.from(".profile",{
    x:500,
    duration:4,
    scrollTrigger:{
        trigger:".profile",
        scrub:true,
    }
})

gsap.from(".write",{
    x:-500,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".write",
        scrub:true
    }

})

