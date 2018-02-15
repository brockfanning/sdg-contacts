(function() {

  // No need to continue if we don't have data.
  if (typeof contactData === 'undefined') {
    return;
  }

  // Start with the results hidden.
  var results = document.getElementById('results');
  results.style.display = 'none';

  // A template for the table rows.
  var rowTemplate = {'<>':'tr','html': '<td>${indicator}</td><td>${name}</td><td>${email}</td>'};

  // Add the change event callback.
  document.getElementById('search').addEventListener('change', function(e) {
    var selection = this.options[this.selectedIndex];
    if (selection.value) {
      // If an actual value, replace with the table rows.
      results.style.display = 'block';
      var contacts = contactData[selection.value].contacts;
      var rows = json2html.transform(contacts, rowTemplate);
      document.getElementById('rows').innerHTML = rows;
    }
    else {
      // Otherwise, hidden the results.
      results.style.display = 'none';
    }

  }, false);
})()