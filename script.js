let counter = 0;

function setCounter() { 
    const startValue = document.getElementById("startValue").value;
    counter = parseInt(startValue);
    document.getElementById("num").innerText = counter;
}

// const hu = document.getElementById('up');
// hu = addEventListener('click', function(){
//     counter++;
// })

function increment() {
    counter++;
    document.getElementById("num").innerText = counter;
}

function decrement() {
    counter--;
    document.getElementById("num").innerText = counter;
}

const h4 = document.getElementById('h4');
const barh4 = document.getElementById('setnumkeycontainer');
h4.addEventListener('click', function(){
    barh4.style.display='flex';
})

const set = document.getElementById('set');
set.addEventListener('click', function(){
    barh4.style.display='none';
})



//bg start

const starContainer = document.querySelector('.stars');
      const starCount = 60; // Number of stars to generate

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');

        // Randomly decide if the star will be circular or polygon-shaped
        if (Math.random() < 0.7) {
          star.classList.add('circle-star'); // 70% chance to be circular
        } else {
          star.classList.add('polygon-star'); // 30% chance to be star-shaped
        }

        const size = Math.random() * 4 + 2; // Random size
        const x = Math.random() * 100; // Random position (X-axis)
        const y = Math.random() * 100; // Random position (Y-axis)
        const twinkleDuration = Math.random() * 3 + 2; // Random twinkle duration

        // Set size, position, and animation
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        star.style.animation = `twinkle ${twinkleDuration}s infinite`;

        starContainer.appendChild(star);
      }


      // Mousemove event to adjust star opacity
document.body.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
  
    document.querySelectorAll('.stars div').forEach((star) => {
      const starRect = star.getBoundingClientRect();
  
      // Calculate distance from mouse to the star's center
      const starX = starRect.left + starRect.width / 2;
      const starY = starRect.top + starRect.height / 2;
      const distance = Math.sqrt(
        Math.pow(mouseX - starX, 2) + Math.pow(mouseY - starY, 2)
      );
  
      // Adjust opacity for stars within a 100px radius
      if (distance < 100) {
        star.classList.add('hovered');
      } else {
        star.classList.remove('hovered');
      }
    });
  });

//bg end

setTimeout(() => {
    const titleElementReplace = document.getElementById('h3');
    titleElementReplace.textContent = 'Count Your Stars!';
}, 5100);


// setTimeout(() => {
//     const titleElement = document.getElementById('h3');
//     const newText = 'Count Your Stars'; // New text
//     // Replace "or" with a span to style it
//     const styledText = newText.replace(/Stars$/, '<span id="starstext" style="color: yellow; text-shadow: 2px 2px 20px yellow; transition: 1s;">Stars</span>');
//     titleElement.innerHTML = styledText;
// }, 5100); // 1000 milliseconds = 1 second
// setTimeout(() => {
//     const h3sElement = document.getElementById('h3s');
//     h3sElement.textContent = 'Stars'; // Changing the content to "Stars"
//     // h3sElement.style.color = 'yellow'; // Changing the color to yellow
// }, 5100); // 1000 milliseconds = 1 second
