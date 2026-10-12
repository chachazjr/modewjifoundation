(() => {
  const form = document.getElementById("loan-form");
  const message = document.getElementById("loan-message");
  document.getElementById("year").textContent = String(new Date().getFullYear());
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    message.textContent = "Jaribio limekamilika. Ombi HALIJATUMWA wala kuhifadhiwa. Usitumie taarifa halisi. Mfumo utahitaji backend salama, hifadhidata, uthibitishaji wa akaunti na ruhusa za msimamizi kabla ya kupokea maombi.";
    message.hidden = false;
    message.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
})();