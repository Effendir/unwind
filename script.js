function toggleLightSwitch() {

  const lightSwitchButton = document.querySelector(".toggle");
  const wallpaper = document.querySelector("#wallpaper");

  lightSwitchButton.addEventListener("click", () => {
    if (lightSwitchButton.innerHTML == "Night light") {
      lightSwitchButton.innerHTML = "Day light";
      wallpaper.src = "videos/CozyNightDesktop.mp4";
      wallpaper.load();
      wallpaper.play();
    } else {
      lightSwitchButton.innerHTML = "Night light";
      wallpaper.src = "videos/CozyDayDesktop.mp4";
      wallpaper.load();
      wallpaper.play();
    }
  });

}

function displayMailForm () {
  const form = document.querySelector("#contact-form")
  const sendMailButton = document.querySelector("#send-mail");

  sendMailButton.addEventListener("click", () => {
    form.style.display = "flex";
    sendMailButton.style.display = "none"
  });

}

function sendMail() {
  (function() {
      // https://dashboard.emailjs.com/admin/account
      emailjs.init('KaeIisZjDCiWkL-yt');
  })();

  window.onload = function() {
      document.getElementById('contact-form').addEventListener('submit', function(event) {
          event.preventDefault();
          // generate a five digit number for the contact_number variable
          this.contact_number.value = Math.random() * 100000 | 0;
          // these IDs from the previous steps
          emailjs.sendForm('contact_service', 'contact_form', this)
              .then(function() {
                  console.log('SUCCESS!');
                  alert("Mail sent :)")
              }, function(error) {
                  console.log('FAILED...', error);
                  alert("Technical issue, sorry for the inconvenience")
              });
      });
  }
}

toggleLightSwitch();
displayMailForm();
sendMail();
