/* Fashion Café — interazioni della pagina */
(function () {
  'use strict';

  // Orari di apertura per giorno (0 = domenica). La chiusura oltre le 24:00
  // e' espressa in minuti dall'inizio del giorno di apertura.
  var HOURS = {
    0: { open: '09:00', close: '22:00' },
    1: { open: '07:30', close: '01:00' },
    2: { open: '07:30', close: '01:00' },
    3: { open: '07:30', close: '01:00' },
    4: { open: '07:30', close: '01:00' },
    5: { open: '07:30', close: '02:00' },
    6: { open: '07:30', close: '02:00' }
  };

  function toMinutes(hhmm) {
    var parts = hhmm.split(':');
    return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
  }

  function isOpenAt(date) {
    var day = date.getDay();
    var now = date.getHours() * 60 + date.getMinutes();

    // Turno iniziato oggi (la chiusura dopo mezzanotte sfora nel giorno dopo).
    var today = HOURS[day];
    var openToday = toMinutes(today.open);
    var closeToday = toMinutes(today.close);
    if (closeToday <= openToday) closeToday += 24 * 60;
    if (now >= openToday && now < closeToday) return true;

    // Coda del turno iniziato ieri.
    var yesterday = HOURS[(day + 6) % 7];
    var closeYesterday = toMinutes(yesterday.close);
    if (closeYesterday <= toMinutes(yesterday.open) && now < closeYesterday) return true;

    return false;
  }

  function renderHours() {
    var now = new Date();
    var today = HOURS[now.getDay()];
    var label = document.getElementById('today-hours');
    var status = document.getElementById('open-status');
    if (label) label.textContent = today.open + ' — ' + today.close;
    if (status) status.textContent = isOpenAt(now) ? 'Aperto ora' : 'Chiuso ora';
  }

  function setupNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function setupMenuTabs() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (other) {
          var active = other === tab;
          other.classList.toggle('is-active', active);
          other.setAttribute('aria-selected', String(active));
          var panel = document.getElementById(other.dataset.panel);
          if (panel) panel.hidden = !active;
        });
      });
    });
  }

  function setupBookingForm() {
    var form = document.getElementById('booking-form');
    var note = document.getElementById('form-note');
    if (!form || !note) return;

    // Non si prenota nel passato.
    var dateField = form.elements.data;
    if (dateField) dateField.min = new Date().toISOString().slice(0, 10);

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        note.textContent = 'Controlla i campi: servono nome, telefono, data e numero di persone.';
        form.reportValidity();
        return;
      }

      // Demo statica: nessun backend collegato, la richiesta non viene inviata.
      note.textContent = 'Grazie ' + form.elements.nome.value.trim() +
        '! Richiesta registrata per ' + form.elements.persone.value +
        ' persone. Ti richiamiamo per confermare.';
      form.reset();
      if (dateField) dateField.min = new Date().toISOString().slice(0, 10);
    });
  }

  function setYear() {
    var year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  renderHours();
  setupNav();
  setupMenuTabs();
  setupBookingForm();
  setYear();
})();
