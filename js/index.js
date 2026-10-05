/* index.js - search form on the home page (owner: Kagan Tasbolat)
   - sets today's date as the earliest date
   - enables the return date only for round trips
   - makes sure the return date is not before the departure date */
(function () {
  'use strict';

  var depart = document.getElementById('depart');
  var ret = document.getElementById('return');
  var oneway = document.getElementById('trip-oneway');
  var round = document.getElementById('trip-round');
  if (!depart || !ret || !oneway || !round) { return; }

  // Local date as YYYY-MM-DD (toISOString would use UTC and can be off by a day)
  function today() {
    var d = new Date();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + m + '-' + day;
  }

  function syncDates() {
    var isRound = round.checked;
    ret.disabled = !isRound;
    ret.required = isRound;
    if (!isRound) { ret.value = ''; }
    ret.min = depart.value || today();
    ret.setCustomValidity(
      isRound && ret.value && depart.value && ret.value < depart.value
        ? 'Return date cannot be before the departure date.'
        : ''
    );
  }

  depart.min = today();
  oneway.addEventListener('change', syncDates);
  round.addEventListener('change', syncDates);
  depart.addEventListener('change', syncDates);
  ret.addEventListener('change', syncDates);
  syncDates();
}());
