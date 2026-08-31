/* NEXUS Mobile Detailing — site behavior. Vanilla JS, no dependencies. */
(function () {
  "use strict";

  /* ---------- mobile nav ---------- */
  var toggle = document.querySelector("[data-nav-toggle]");
  var closeBtn = document.querySelector("[data-nav-close]");
  var nav = document.querySelector("[data-nav]");
  var overlay = document.querySelector("[data-nav-overlay]");

  function openNav() {
    nav && nav.classList.add("is-open");
    overlay && overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function closeNav() {
    nav && nav.classList.remove("is-open");
    overlay && overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  toggle && toggle.addEventListener("click", openNav);
  closeBtn && closeBtn.addEventListener("click", closeNav);
  overlay && overlay.addEventListener("click", closeNav);

  /* dropdown nav groups (Services / Service Area) — mobile accordion +
     desktop hover/click. On desktop, hovering opens it (mouseenter/
     mouseleave drive the same .is-open class the CSS shows the dropdown
     from — not a separate :hover rule). Clicking always flips it, so a
     click while it's open (however it got open) closes it. The
     "lockedClosed" flag exists because a click doesn't stop the mouse
     from still resting on the trigger afterward: without it, the very
     next mouseenter-driven re-check would just reopen what you just
     closed. The lock clears on mouseleave, so hovering in again later
     behaves normally. */
  document.querySelectorAll(".nav-group").forEach(function (group) {
    var label = group.querySelector(".nav-group-label");
    var lockedClosed = false;

    label.addEventListener("click", function () {
      if (window.innerWidth >= 960) {
        var isOpen = group.classList.contains("is-open");
        group.classList.toggle("is-open", !isOpen);
        lockedClosed = isOpen; // just closed it -> lock; just opened it -> unlock
      } else {
        group.classList.toggle("is-open");
      }
    });
    group.addEventListener("mouseenter", function () {
      if (window.innerWidth >= 960 && !lockedClosed) group.classList.add("is-open");
    });
    group.addEventListener("mouseleave", function () {
      if (window.innerWidth >= 960) {
        group.classList.remove("is-open");
        lockedClosed = false;
      }
    });
  });

  /* close mobile nav after choosing a link */
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 960) closeNav();
    });
  });

  /* ---------- image placeholder fallback ----------
     Any <img data-slot> that fails to load (because the real photo
     hasn't been added yet) reveals a labeled placeholder instead of
     a broken-image icon. Drop a file in /images with the matching
     name and the placeholder disappears automatically. */
  document.querySelectorAll(".img-slot img").forEach(function (img) {
    img.addEventListener("error", function () {
      img.closest(".img-slot").classList.add("is-empty");
      img.style.display = "none";
    });
    if (img.complete && img.naturalWidth === 0) {
      img.dispatchEvent(new Event("error"));
    }
  });

  /* ---------- booking / quote form ---------- */
  var form = document.querySelector("[data-booking-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      var status = form.querySelector("[data-form-status]");
      var endpointConfigured = form.getAttribute("data-endpoint-ready") === "true";

      if (!endpointConfigured) {
        // No form backend wired up yet (see README) — fall back to a
        // pre-filled email so requests are never silently lost.
        e.preventDefault();
        var data = new FormData(form);
        var lines = [];
        data.forEach(function (value, key) { lines.push(key + ": " + value); });
        var subject = encodeURIComponent("New booking request — NEXUS Mobile Detailing");
        var body = encodeURIComponent(lines.join("\n"));
        window.location.href = "mailto:info@nexusmobiledetailing.com?subject=" + subject + "&body=" + body;
        if (status) {
          status.textContent = "Opening your email app to send the request — or just call/text us instead.";
          status.className = "form-status ok is-visible";
        }
      }
    });
  }

  /* ---------- footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
