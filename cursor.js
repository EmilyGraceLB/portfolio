document.addEventListener('mousemove', function(e) {
    // const sparkle = document.createElement('div');
    //   // Set position directly center of cursor
    // sparkle.style.left = `${e.pageX}px`;
    // sparkle.style.top = `${e.pageY}px`;
    // document.body.appendChild(sparkle);
    // return;
  // Only spawn a sparkle roughly every 4 cursor pixels moved so it isn't too cluttered
  if (Math.random() > 0.15) return; 

  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  
  // Set position directly center of cursor
  sparkle.style.left = `${e.pageX}px`;
  sparkle.style.top = `${e.pageY}px`;
  
  const size = Math.random() * 12 + 6;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;

  document.body.appendChild(sparkle);

  // Auto-clean the DOM after animation completes
  setTimeout(() => sparkle.remove(), 800);
});


//circle?
// document.addEventListener('mousemove', (e) => {
//   const body = document.body;
//   // Creates a dynamic radial gradient anchored at the user's cursor coordinates
//   const circle = document.createElement('div');
//   circle.className = 'circle';

//   //set position of circle to cursor position
//   circle.style.left = `${e.pageX}px`;
//   circle.style.top = `${e.pageY}px`;

//   circle.style.width = `${20}px`;
//   circle.style.height = `${20}px`;


//   document.body.appendChild(circle);
// });
