/* about.js - contact form on the About page (owner: Abdrakhman Almukhan)
   Validates the form and shows a confirmation message (demo: nothing is sent). */
(function () {
  'use strict';

  var form = document.getElementById('contact-form');
  var box = document.getElementById('contact-alert');
  if (!form || !box) { return; }

  function show(type, message) {
    box.replaceChildren();
    var alertEl = document.createElement('div');
    alertEl.className = 'alert alert-' + type + ' mb-0';
    alertEl.tabIndex = -1;
    alertEl.textContent = message;
    box.appendChild(alertEl);
    alertEl.focus();
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      show('danger', 'Please correct the highlighted fields.');
      var firstBad = form.querySelector(':invalid');
      if (firstBad) { firstBad.focus(); }
      return;
    }
    var name = document.getElementById('contact-name').value.trim();
    show('success', 'Thank you, ' + name + '! Your message was received. This is a demo project, so nothing was actually sent.');
    form.classList.remove('was-validated');
    form.reset();
  });
}());
