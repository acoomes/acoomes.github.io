"use strict";
const projects = {
  morning: {
    title: "Morning Download",
    category: "01 / News & AI",
    image: "assets/newspaper.jpg",
    description:
      "A daily news and AI briefing. A small, focused product for making sense of what’s happening and finding something worth knowing.",
    url: "https://morning-download.com",
    source: "https://github.com/acoomes/morning-download",
  },
  decision: {
    title: "Decisionmakerr",
    category: "02 / Everyday decisions",
    image: "assets/dice.jpg",
    description:
      "Dice for when you can’t pick. A playful answer to a familiar problem: sometimes the next step is simply making a choice.",
    url: "https://decisionmakerr.com",
    source: "https://github.com/acoomes/com.decisionmakerr",
  },
  paper: {
    title: "Paper 86",
    category: "03 / Play & experimentation",
    image: "assets/paper-car.jpg",
    description:
      "60-second paper drift. A little driving experiment that brings two of my interests together: building software and going sideways.",
    url: "https://paper-86.vercel.app",
    source: "https://github.com/acoomes/paper-86",
  },
};
const dialog = document.querySelector("#project-dialog");
let dialogTrigger;
if (typeof dialog.showModal === "function") {
  document.querySelectorAll("[data-project]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;
      const project = projects[link.dataset.project];
      if (!project) return;
      event.preventDefault();
      dialogTrigger = link;
      document.querySelector("#dialog-title").textContent = project.title;
      document.querySelector("#dialog-category").textContent = project.category;
      document.querySelector("#dialog-description").textContent =
        project.description;
      document.querySelector("#dialog-image").src = project.image;
      document.querySelector("#dialog-visit").href = project.url;
      document.querySelector("#dialog-source").href = project.source;
      dialog.showModal();
      document.body.classList.add("modal-open");
      document.querySelector(".dialog-close").focus();
    });
  });
  document
    .querySelector(".dialog-close")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const controls = [...dialog.querySelectorAll("button, a[href]")];
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  dialog.addEventListener("click", (event) => {
    const box = dialog.getBoundingClientRect();
    if (
      event.target === dialog &&
      (event.clientX < box.left ||
        event.clientX > box.right ||
        event.clientY < box.top ||
        event.clientY > box.bottom)
    )
      dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    dialogTrigger?.focus({ preventScroll: true });
  });
}
const navLinks = [...document.querySelectorAll(".rail nav a")];
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.hash === "#" + entry.target.id;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
  );
  document
    .querySelectorAll("main > section")
    .forEach((section) => observer.observe(section));
}
const copyButton = document.querySelector("#copy-email");
if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    const status = document.querySelector("#copy-status");
    try {
      await navigator.clipboard.writeText("andrewjcoomes@gmail.com");
      status.textContent = "Email copied.";
      copyButton.textContent = "Copied";
    } catch {
      status.textContent =
        "Select the email address to copy it, or use the email link.";
    }
  });
}
