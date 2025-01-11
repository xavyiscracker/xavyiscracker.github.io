function initializeParticles() {
  particlesJS('particles-js', {
      particles: {
          number: {
              value: 70,  // Number of snowflakes
              density: {
                  enable: true,
                  value_area: 800
              }
          },
          color: {
              value: '#ffffff' 
          },
          shape: {
              type: 'circle',  
          },
          opacity: {
              value: 0.5,
              random: true,
              anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1
              }
          },
          size: {
              value: 3,
              random: true,
              anim: {
                  enable: false
              }
          },
          line_linked: {
              enable: false
          },
          move: {
              enable: true,
              speed: 1,
              direction: 'bottom',  
              random: true,
              straight: false,
              out_mode: 'out'
          }
      },
      interactivity: {
          events: {
              onhover: {
                  enable: false
              },
              onclick: {
                  enable: false
              }
          }
      },
      retina_detect: true
  });
}


function disableParticles() {
  const particlesContainer = document.getElementById('particles-js');
  if (particlesContainer) {
      particlesContainer.style.display = 'none'; 
  }
  localStorage.setItem('particlesEnabled', 'false');
  toggleButtons('hide');
}


function enableParticles() {
  const particlesContainer = document.getElementById('particles-js');
  if (particlesContainer) {
      particlesContainer.style.display = 'block'; 
  }
  localStorage.setItem('particlesEnabled', 'true'); 
  initializeParticles();
  toggleButtons('show');
}


function toggleButtons(action) {
  const disableButton = document.getElementById('disable-particles');
  const enableButton = document.getElementById('enable-particles');

  if (action === 'hide') {
      disableButton.style.display = 'none';
      enableButton.style.display = 'inline-block';
  } else if (action === 'show') {
      disableButton.style.display = 'inline-block';
      enableButton.style.display = 'none';
  }
}


window.addEventListener('load', function() {
  const particlesEnabled = localStorage.getItem('particlesEnabled');
  if (particlesEnabled !== 'false') {
      initializeParticles(); 
      toggleButtons('show');
  } else {
      document.getElementById('particles-js').style.display = 'none'; 
      toggleButtons('hide');
  }
});


document.getElementById('disable-particles').addEventListener('click', disableParticles);
document.getElementById('enable-particles').addEventListener('click', enableParticles);
