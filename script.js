gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




function loaderAnimation(){
    
    var tl = gsap.timeline();
    tl.from("#loader h3",{
        x:50,
        opacity:0,
        duration:1,
        stagger:0.3 
    })
    tl.to("#loader h3",{
        opacity:0,
        x:-30,
        duration:1,
        stagger:0.3
    })
    tl.to("#loader",{
        opacity:0
    })
    tl.from("#page21 .h21",{
        x:-50,
        duration:0.8,
        opacity:0,
    },'a')
    tl.from("#page21 .h22",{
        x:50,
        duration:0.8,
        opacity:0,
    },'a')
    tl.from("#page21 p",{
        y:30,
        duration:0.8,
        opacity:0,
    },'a')
    tl.to("#loader",{
        display:"none"
    })
    
    
    }
    loaderAnimation();
    

    window.addEventListener("wheel",function(dets){
        if(dets.deltaY>=0){
    
            gsap.to("nav",{
                transform:"translateY(-120%)",
                duration:0.1,
                ease:"none"
            })
        }
        else{
            gsap.to("nav",{
                transform:"translateY(0%)",
                duration:0.2,
                ease:"none",
                delay:0.1
            })
        }
    })
    
  
    
    // ---------------- Slider Js---------------
    
    
    
    
    let nextBtn = document.querySelector('.next')
    let prevBtn = document.querySelector('.prev')
    
    let slider = document.querySelector('.slider')
    let sliderList = slider.querySelector('.slider .list')
    let thumbnail = document.querySelector('.slider .thumbnail')
    let thumbnailItems = thumbnail.querySelectorAll('.item')
    
    thumbnail.appendChild(thumbnailItems[0])
    
    // Function for next button 
    nextBtn.onclick = function() {
        moveSlider('next')
    }
    
    
    // Function for prev button 
    prevBtn.onclick = function() {
        moveSlider('prev')
    }
    
    
    function moveSlider(direction) {
        let sliderItems = sliderList.querySelectorAll('.item')
        let thumbnailItems = document.querySelectorAll('.thumbnail .item')
        
        if(direction === 'next'){
            sliderList.appendChild(sliderItems[0])
            thumbnail.appendChild(thumbnailItems[0])
            slider.classList.add('next')
        } else {
            sliderList.prepend(sliderItems[sliderItems.length - 1])
            thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
            slider.classList.add('prev')
        }
    
    
        slider.addEventListener('animationend', function() {
            if(direction === 'next'){
                slider.classList.remove('next')
            } else {
                slider.classList.remove('prev')
            }
        }, {once: true}) // Remove the event listener after it's triggered once
    }
    
    
      function videoconAnimation() {
        var videocon = document.querySelector("#video-container");
        var playbtn = document.querySelector("#play");
        videocon.addEventListener("mouseenter", function () {
          gsap.to(playbtn, {
            scale: 1,
            opacity: 1,
          });
        });
        videocon.addEventListener("mouseleave", function () {
          gsap.to(playbtn, {
            scale: 0,
            opacity: 0,
          });
        });
        document.addEventListener("mousemove", function (dets) {
          gsap.to(playbtn, {
            left: dets.x - 70,
            top: dets.y - 80,
          });
        });
      }
    //   videoconAnimation();
    
    function pageCursor(){
        
    var page4 =document.querySelector("#hit-4");
    var page4Cursor = document.querySelector("#page4-cursor");
    
    page4.addEventListener("mouseenter", function(){
        gsap.to(page4Cursor,{
            opacity:1,
            scale:1
        })
    })
    
    page4.addEventListener("mousemove", function(dets){
        var diff = dets.y - page4.getBoundingClientRect().top;
        gsap.to(page4Cursor,{
            ease: Power3,
            top: diff - 8,
            left: dets.clientX - 8,
        })
    })
    
    page4.addEventListener("mouseleave", function(){
        gsap.to(page4Cursor,{
            opacity:0,
            scale:0
        })
    })
    }
    
    pageCursor();


    // #FFFFFF
