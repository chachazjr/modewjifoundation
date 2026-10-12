(() => {
  const views = ["login", "register", "reset", "terms"];
  const forms = {
    login: document.getElementById("login-form"),
    register: document.getElementById("register-form"),
    reset: document.getElementById("reset-form"),
    terms: document.getElementById("terms-panel")
  };
  const message = document.getElementById("demo-message");
  const title = document.getElementById("form-title");
  const subtitle = document.getElementById("form-subtitle");
  const titles = {
    login: ["Ingia kwenye akaunti", "Ingia ili kuendelea na mchakato wa maombi utakapowashwa."],
    register: ["Fungua akaunti yako", "Anza kwa taarifa za msingi. Usajili halisi bado haujawashwa."],
    reset: ["Rejesha nenosiri", "Pata maelekezo ya kurejesha akaunti katika mfumo kamili."],
    terms: ["Masharti ya majaribio", "Soma maelezo ya muda kabla ya kuendelea."]
  };

  function showView(view) {
    if (!views.includes(view)) return;
    views.forEach((name) => { forms[name].hidden = name !== view; });
    document.querySelectorAll("[data-view].view-tab").forEach((tab) => {
      const active = tab.dataset.view === view;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    title.textContent = titles[view][0];
    subtitle.textContent = titles[view][1];
    message.hidden = true;
    if (view === "terms") document.getElementById("akaunti").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.view));
  });
  document.getElementById("back-to-account").addEventListener("click", () => showView("register"));

  function showDemoNotice(text) {
    message.textContent = text;
    message.hidden = false;
    message.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    showDemoNotice("Huu ni mfano wa kiolesura pekee. Kuingia hakujawashwa na taarifa hazijatumwa wala kuhifadhiwa.");
  });
  document.getElementById("register-form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    showDemoNotice("Asante kwa kujaribu usajili. Akaunti haijaundwa; hakuna taarifa iliyotumwa au kuhifadhiwa. Usitumie taarifa zako halisi kwenye toleo hili.");
  });
  document.getElementById("reset-form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    showDemoNotice("Kurejesha nenosiri bado hakujawashwa. Hakuna barua pepe iliyotumwa wala taarifa iliyohifadhiwa.");
  });

  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".main-nav");
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Funga menyu" : "Fungua menyu");
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
  document.getElementById("year").textContent = String(new Date().getFullYear());
  showView("login");
})();