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

light_switch();
