// $(document).ready(function(){
//   $('.owl-carousel').owlCarousel({
//     items:1,
//     margin:10,
//     autoHeight:true
//   });
// });


$(document).ready(function() {
  function initCarousel() {
    $(".owl-carousel").owlCarousel({
      // Your carousel options
      items: 1,
      loop: true,
      dots:true,
 
     
      // autoplay: true,
      // autoplayTimeout: 10000,
      // autoplayHoverPause: true,
     
    });
  }

  function destroyCarousel() {
    var owl = $('.owl-carousel');
    if (owl.data('owl.carousel')) {
      owl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
      owl.find('.owl-stage-outer').children().unwrap();
    }
  }

  function handleCarousel() {
    if (window.innerWidth < 1000) {
      initCarousel();
    } else {
      destroyCarousel();
    }
  }

  // Initialize or destroy on window resize
  $(window).on('resize', function() {
    handleCarousel();
  });

  // Initial setup
  handleCarousel();
});







function initAnimations() {
  gsap.from(".slider4-right-1", {
    y: -100,
    scrollTrigger: {
      trigger: ".slider4-right-2",
      scroller: "body",
      start: "top 100%",
      end: "top 50%",
      scrub: 1,
    },
  });
  gsap.from(".slider4-right-2", {
    y: 200,
  
    scrollTrigger: {
      trigger: ".slider4-right-2",
      scroller: "body",
      start: "top 100%",
      end: "top 50%",
      scrub: 1,
    },
  });
  
  gsap.from(".slider7-right-1", {
    y: -100,
    scrollTrigger: {
      trigger: ".slider7-right-2",
      scroller: "body",
      start: "top 100%",
      end: "top 50%",
      scrub: 1,
    },
  });
  gsap.from(".slider7-right-2", {
    y: 100,
  
    scrollTrigger: {
      trigger: ".slider7-right-2",
      scroller: "body",
      start: "top 100%",
      end: "top 50%",
      scrub: 1,
    },
  });
  
  gsap.from(".ipad", {
    y: 300,
  
    scrollTrigger: {
      trigger: ".ipad",
      scroller: "body",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });
  
  gsap.from(".slider3-right-1", {
    y: 50,
  
    scrollTrigger: {
      trigger: ".slider3-right-1",
      scroller: "body",
      start: "top 100%",
      end: "top 50%",
      scrub: 1,
    },
  });
  
  gsap.from(".domi", {
    y: 100,
    duration: 0.6,
  });
  gsap.from(".dominos-bread-sliced", {
    y: 100,
    duration: 0.6,
  });
  gsap.from(".dominos-bread,.dominoes-full", {
    y: -100,
    x: 100,
    duration: 0.6,
  });
  gsap.from(".pizza_box", {
    y: -100,
    x: -100,
    duration: 0.6,
  });
  
  gsap.from(".slider5-right-2", {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".slider5-right-2",
      scroller: "body",
      start: "top 60%",
      end: "top 15%",
  
      scrub: 1,
    },
  });
  gsap.from(".slider5-right-1", {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".slider5-right-2",
      scroller: "body",
      start: "top 60%",
      end: "top 15%",
      scrub: 1,
    },
  });
  
  
  
  gsap.from(".slider6-right-5", {
    x: -100,
  
    scrollTrigger: {
      trigger: ".slider6-right-5",
      scroller: "body",
      start: "top 100%",
      end: "top 40%",
      scrub: 1,
    },
  });
  
  gsap.from(".slider6-right-4", {
    x: 100,
  
    scrollTrigger: {
      trigger: ".slider6-right-4",
      scroller: "body",
      start: "top 100%",
      end: "top 40%",
      scrub: 1,
    },
  });
  gsap.from(".slider6-right-2", {
    x: -30,
  
    scrollTrigger: {
      trigger: ".slider6-right-2",
      scroller: "body",
      start: "top 100%",
      end: "top 40%",
      scrub: 1,
    },
  });
  

  
  gsap.from(" .left-text1 h2, .left-text1 p, .left-text1 a", {
    opacity:1,
    // autoAlpha: 1,
    ease: "circ.out",
    y: 100,
    z: -100,
    
    stagger: 0.1,
    duration: 1,
  
  });
  
  gsap.from(" .left-text2 h2, .left-text2 p, .left-text2 a", {
    autoAlpha: 1,
    ease: "circ.out",
    yPercent: 100,
    z: -100,
    stagger: 0.1,
    duration: 0.5,
    scrollTrigger: {
      trigger: " .left-text2 h2, .left-text2 p, .left-text2 a",
      start: "top: 90%",
      end: "top: 50%",
      scrub: 2,
      toggleActions: "restart pause resume reverse",
    },
  });
  
  
  
  gsap.from(" .left-text4 h2, .left-text4 p, .left-text4 a", {
    autoAlpha: 1,
    ease: "circ.out",
    yPercent: 100,
    z: -100,
    stagger: 0.1,
    duration: 0.5,
    scrollTrigger: {
      trigger: " .left-text4 h2, .left-text4 p, .left-text4 a",
      start: "top: 90%",
      end: "top: 50%",
      scrub: 1,
      toggleActions: "restart pause resume reverse",
    },
  });
  gsap.from(" .left-text3 h2, .left-text3 p, .left-text3 a", {
    autoAlpha: 1,
    ease: "circ.out",
    yPercent: 100,
    z: -100,
    stagger: 0.1,
    duration: 0.5,
    scrollTrigger: {
      trigger: " .left-text3 h2, .left-text3 p, .left-text3 a",
      start: "top: 90%",
      end: "top: 50%",
      scrub: 1,
      toggleActions: "restart pause resume reverse",
    },
  });
  gsap.from(" .left-text5 h2, .left-text5 p, .left-text5 a", {
    autoAlpha: 1,
    ease: "circ.out",
    yPercent: 100,
    z: -100,
    stagger: 0.1,
    duration: 0.5,
    scrollTrigger: {
      trigger: " .left-text5 h2, .left-text5 p, .left-text5 a",
      start: "top: 90%",
      end: "top: 50%",
      scrub: 1,
      toggleActions: "restart pause resume reverse",
    },
  });
  gsap.from(" .left-text6 h2, .left-text6 p, .left-text6 a", {
    autoAlpha: 1,
    ease: "circ.out",
    yPercent: 100,
    z: -100,
    stagger: 0.1,
    duration: 0.5,
    scrollTrigger: {
      trigger: " .left-text6 h2, .left-text6 p, .left-text6 a",
      start: "top: 90%",
      end: "top: 50%",
      scrub: 1,
      toggleActions: "restart pause resume reverse",
    },
  });
  
  gsap.from(" .left-text7 h2, .left-text7 p, .left-text7 a", {
    autoAlpha: 1,
    ease: "circ.out",
    yPercent: 100,
    z: -100,
    stagger: 0.1,
    duration: 0.5,
    scrollTrigger: {
      trigger: " .left-text7 h2, .left-text7 p, .left-text7 a",
      start: "top: 90%",
      end: "top: 50%",
      scrub: 1,
      toggleActions: "restart pause resume reverse",
    },
  });



  gsap.from(" .middle-text1 h2, .middle-text1 p, .middle-text1 a", {
    
    y:50,
    stagger: 0.1,
    opacity:0,
    duration:0.5,
  });

 

  gsap.from(" .middle-text2 h2, .middle-text2 p, .middle-text2 a", {
    autoAlpha: 1,
    ease: "circ.out",
    y: 50,
    opacity:0,  
    stagger: 0.1,
    scrollTrigger: {
      trigger: " .middle-text2 h2, .middle-text2 p, .middle-text2 a",
      start: "top: 70%",
      end: "top: 40%",
      scrub: 1,
      toggleActions: "restart pause resume reverse",
     
    },
  });
  gsap.from(" .middle-text3 h2, .middle-text3 p, .middle-text3 a", {
    autoAlpha: 1,
    ease: "circ.out",
    y: 50,
    opacity:0,  
    stagger: 0.1,
    scrollTrigger: {
      trigger: " .middle-text3 h2, .middle-text3 p, .middle-text3 a",
      start: "top: 70%",
      end: "top: 40%",
      scrub: 1,
      toggleActions: "restart pause resume reverse",
     
    },
  });
  gsap.from(" .middle-text4 h2, .middle-text4 p, .middle-text4 a", {
    autoAlpha: 1,
    ease: "circ.out",
    y: 50,
    opacity:0,  
    stagger: 0.1,
    scrollTrigger: {
      trigger: " .middle-text4 h2, .middle-text4 p, .middle-text4 a",
      start: "top: 70%",
      end: "top: 40%",
      scrub: 1,
      toggleActions: "restart pause resume reverse",
     
    },
  });
  gsap.from(" .middle-text5 h2, .middle-text5 p, .middle-text5 a", {
    autoAlpha: 1,
    ease: "circ.out",
    y: 50,
    opacity:0,  
    stagger: 0.1,
    scrollTrigger: {
      trigger: " .middle-text5 h2, .middle-text5 p, .middle-text5 a",
      start: "top: 70%",
      end: "top: 40%",
      scrub: 1,
      toggleActions: "restart pause resume reverse",
     
    },
  });
  gsap.from(" .middle-text6 h2, .middle-text6 p, .middle-text6 a", {
    autoAlpha: 1,
    ease: "circ.out",
    y: 50,
    opacity:0,  
    stagger: 0.1,
    scrollTrigger: {
      trigger: " .middle-text6 h2, .middle-text6 p, .middle-text6 a",
      start: "top: 70%",
      end: "top: 40%",
      scrub: 1,
      toggleActions: "restart pause resume reverse",
     
    },
  });
  gsap.from(" .middle-text7 h2, .middle-text7 p, .middle-text7 a", {
    autoAlpha: 1,
    ease: "circ.out",
    y: 50,
    opacity:0,  
    stagger: 0.1,
    scrollTrigger: {
      trigger: " .middle-text7 h2, .middle-text7 p, .middle-text7 a",
      start: "top: 70%",
      end: "top: 40%",
      scrub: 1,
      toggleActions: "restart pause resume reverse",
     
    },
  });



}

function checkScreenSize() {
  if (window.innerWidth > 1000) {
      initAnimations();
      initIntersectionObserverAndScroll();
  } 
}

window.addEventListener('resize', checkScreenSize);
document.addEventListener('DOMContentLoaded', checkScreenSize);











function initIntersectionObserverAndScroll() {
  if (window.innerWidth <= 1200) {
    return; // Exit if screen width is less than or equal to 1200px
  }

  // Intersection Observer for sections and dots
  const sections = document.querySelectorAll(".sliders");
  const dots = [
    document.querySelector(".dotsfill1"),
    document.querySelector(".dotsfill2"),
    document.querySelector(".dotsfill3"),
    document.querySelector(".dotsfill4"),
    document.querySelector(".dotsfill5"),
    document.querySelector(".dotsfill6"),
    document.querySelector(".dotsfill7"),
  ];

  const options = {
    threshold: 0.5,
  };

  let currentActiveIndex = null; // Track currently active dot index

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(sections).indexOf(entry.target);
        if (currentActiveIndex !== index) {
          // If moving forward or to a new section
          if (currentActiveIndex === null || currentActiveIndex < index) {
            // Remove active-dot from dots after the current one
            for (let i = currentActiveIndex + 1; i <= index; i++) {
              dots[i].classList.remove("active-dot");
            }
          } else {
            // If moving backward
            for (let i = currentActiveIndex; i > index; i--) {
              dots[i].classList.remove("active-dot");
            }
          }
          dots[index].classList.add("active-dot"); // Add active-dot to current dot
          currentActiveIndex = index; // Update current active index
        }
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Update stroke-dasharray based on scroll position
  const opaqueRing = document.querySelector("#Opaque_Ring");

  function updateStrokeDasharray() {
    const scrollPercentage =
      (document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    const dashOffset = scrollPercentage * 820;

    opaqueRing.setAttribute("stroke-dasharray", dashOffset + ", 1000");
  }

  window.addEventListener("scroll", updateStrokeDasharray);

  // Observer for SVG background color change
  const svgContainer = document.getElementById("svgContainer");
  const sliders = document.querySelectorAll(".sliders");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sliderLeft = entry.target.querySelector(".slider-left");
        const bgColor = window.getComputedStyle(sliderLeft).backgroundColor;
        svgContainer.style.backgroundColor = bgColor;
      }
    });
  };

  const svgObserver = new IntersectionObserver(observerCallback, observerOptions);

  sliders.forEach((slider) => {
    svgObserver.observe(slider);
  });
}


