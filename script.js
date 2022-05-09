const animations = ['up', 'down'];

const createParticles = (e) => {
  if (
    e.type == 'touchstart' ||
    e.type == 'touchmove' ||
    e.type == 'touchend' ||
    e.type == 'touchcancel'
  ) {
    var evt = typeof e.originalEvent === 'undefined' ? e : e.originalEvent;
    var touch = evt.touches[0] || evt.changedTouches[0];
    x = touch.pageX;
    y = touch.pageY;
  } else if (
    e.type == 'mousedown' ||
    e.type == 'mouseup' ||
    e.type == 'mousemove' ||
    e.type == 'mouseover' ||
    e.type == 'mouseout' ||
    e.type == 'mouseenter' ||
    e.type == 'mouseleave'
  ) {
    x = e.clientX;
    y = e.clientY;
  }

  const random_size = `${Math.floor(Math.random() * 10) + 1}`;

  const particle = document.createElement('div');
  particle.classList.add('particle');

  particle.style.left = x + 'px';
  particle.style.top = y + 'px';

  particle.style.height = random_size + 'px';
  particle.style.width = random_size + 'px';

  const random_animation = `${Math.floor(Math.random() * animations.length)}`;

  particle.classList.add(animations[random_animation]);

  const bg = (particle.style.background = `hsl(${Math.floor(
    Math.random() * 360
  )},
    100%,
    50%
  )`);

  (particle.style.boxShadow = `0 0 5px ${bg}`),
    `0 0 10px ${bg}`,
    `0 0 15px ${bg}`,
    `0 0 20px ${bg}`;

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 3100);
};

window.addEventListener('mousemove', createParticles);
window.addEventListener('touchmove', createParticles);
