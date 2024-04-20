function myMenuFunction() {
  var menuBth = document.getElementById("myNavMenu");

  if (menuBth.className == "nav-menu") {
    menuBth.className += "responsive";
  } else {
    menuBth.className == "nav-menu";
  }
}

//-----------Dark Mode------------------



const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

//-------------Typing effect---------



var typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Coder", "Developer"],

  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 80,
});

//--------------scroll Animation-------------//



const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".socical_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 200 });

sr.reveal(".project-box ", { interval: 200 });

sr.reveal(".top-header", {});

const srleft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srleft.reveal(".about-info", { delay: 100 });
srleft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });


//------------active link-----------



const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href *=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href *=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}


window.addEventListener("scroll", scrollActive);


//-----------Download CV----//

function downloadCV() {
    // Construct the URL of the CV file
    const cvUrl = './Resume/Chetan N VResume.pdf';
    
    // Create an anchor element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Chetan_NV_Resume.pdf';
    
    // Simulate a click event to trigger the download
    link.click();
}


//-----------Hire me butt0n to email----------//

function sendEmail() {
    // Set recipient email address
    const recipient = 'chetanbharjari@gmail.com';
    // Create mailto link with recipient address
    const mailtoLink = `mailto:${recipient}`;

    // Navigate to mailto link
    window.location.href = mailtoLink;
  }

  // Add event listener to button
  document.getElementById('emailButton').addEventListener('click', sendEmail);

  