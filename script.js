
 var tl = gsap.timeline() ;

 tl.from("#nav>h1", {
         x:-30 ,
         ease: Expo.InOut ,
         duration:1,
         opacity: 0 
 })
 tl.from("#rnav>button", {
        x:30 ,
        ease: Expo.InOut ,
        stagger: .3 ,
        duration:1,
        opacity: 0 
}, "-=1")
 tl.from("#cnav>a", {
         y:30 ,
         ease: Expo.InOut ,
         stagger: .2,
         duration:.1,
         opacity: 0 
 })



 
 tl.from("#lcntr>h1", {
        y:30 ,
        ease: Expo.InOut ,
        stagger: .3 ,
        duration:1,
        opacity: 0 
}, "-=1")

tl.from("#stxt>#line", {
        x:-20 ,
        ease: Expo.InOut ,
        stagger: .3 ,
        duration:1,
        opacity: 0 
})
tl.from("#lcntr>#btxt", {
        y:10 ,
        
        ease: Expo.InOut ,
       
        duration:.5,
        opacity: 0 
}, "-=1")
tl.from("#stxt>h4", {
        x:10 ,
        ease: Expo.InOut ,
        stagger: .3 ,
        duration:1,
        opacity: 0 
}, "-=1")
tl.from("#rcntr", {
        x:50 ,
        y:10,
        scale: 1,
        // rotate: "20deg",
        ease: Expo.InOut ,
        stagger: .3 ,
        duration:1,
        opacity: 0 
}, "-=1")



// gsap.from("#nav>h1" , {
 
//         y: 40 , 
//         ease: Power1.easeInOut ,
//         stagger: .3 , 
//         duration: 1.5 , 
//         delay : .1,
//         opacity:0 

// })