(function() {

  // No need to continue if we don't have data.
  if (typeof contactData === 'undefined') {
    return;
  }

  var dropdowns = document.getElementsByClassName('dropdown');
  for (var i = 0; i < dropdowns.length; i++) {

    // Add the change event callback.
    dropdowns.item(i).addEventListener('change', function(e) {

      var type = this.dataset.plural;

      // References to nodes.
      var results = document.getElementById('results-' + type);
      var tbody = document.getElementById('rows-' + type);

      // A template for the table rows.
      var rowTemplate = {'<>':'tr','html': '<td>${indicator}</td><td>${name}</td><td>${organization}</td><td>${email}</td>'};

      var selection = this.options[this.selectedIndex];
      if (selection.value) {
        // If an actual value, replace with the table rows.
        results.style.display = 'block';
        var contacts = contactData[type][selection.value];
        var rows = json2html.transform(contacts, rowTemplate);
        tbody.innerHTML = rows;
      }
      else {
        // Otherwise, hidden the results.
        results.style.display = 'none';
      }

    }, false);
  }
})()