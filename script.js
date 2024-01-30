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
  const cta = document.querySelector(".cta")
  const sendMailButton = document.querySelector("#send-mail");
  const form = '<form id="contact-form"><input type="hidden" name="contact_number"><label>Name</label><input type="text" name="user_name"><label>Email</label><input type="email" name="user_email"><label>Message</label><textarea name="message"></textarea><input type="submit" value="Send" id="send-button"></form>';

  sendMailButton.addEventListener("click", () => {
    cta.innerHTML = form;
    sendMail();
  });

}

function sendMail() {
  (function() {
    emailjs.init('KaeIisZjDCiWkL-yt');
  })();

  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
                alert("Your mail has been sent :)");
            }, function(error) {
                console.log('FAILED...', error);
                alert("Something went wrong, sorry for the inconvenience...");
            });
    });
  }
}

toggleLightSwitch();
displayMailForm();
