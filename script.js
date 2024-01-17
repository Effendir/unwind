function light_switch() {

  const light_switch_button = document.querySelector(".toggle");
  const wallpaper = document.querySelector("#wallpaper");
  const wallpaper_credits = document.querySelector("#wallpaper-credits");

  light_switch_button.addEventListener("click", () => {
    if (light_switch_button.innerHTML == "Night light") {
      light_switch_button.innerHTML = "Day light";
      wallpaper_credits.innerHTML = '<p>Live Wallpaper : <a href="https://moewalls.com/lifestyle/lo-fi-cozy-house-rainy-night-live-wallpaper/" target="_blank">Moe Walls</a></p>';
      wallpaper.src = "videos/CozyNightDesktop.mp4";
      wallpaper.load();
      wallpaper.play();
    } else {
      light_switch_button.innerHTML = "Night light";
      wallpaper_credits.innerHTML = '<p>Live Wallpaper : <a href="https://www.youtube.com/watch?v=milmM8OxcrE" target="_blank">Live Wall Master</a></p>'
      wallpaper.src = "videos/CozyDayDesktop.mp4";
      wallpaper.load();
      wallpaper.play();
    }
  });

}

function mail_form () {
  const cta = document.querySelector(".cta")
  const mail_button = document.querySelector("#send-mail");
  const form = '<form id="contact-form"><input type="hidden" name="contact_number"><label>Name</label><br><input type="text" name="user_name"><br><label>Email</label><br><input type="email" name="user_email"><br><label>Message</label><br><textarea name="message"></textarea><br><input type="submit" value="Send"><br></form>';

  mail_button.addEventListener("click", () => {
    cta.innerHTML = form;
    send_mail();
  });

}

function send_mail() {
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

light_switch();
mail_form();
