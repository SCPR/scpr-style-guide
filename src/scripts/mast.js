document.querySelectorAll('.o-mast__search').forEach(function (s) {
  var search              = s;
  var link                = search.querySelector('label.o-mast__search-link');
  if (!link){return};
  var linkStateCheckboxId = link.getAttribute('for');
  if (!linkStateCheckboxId){return};
  var linkStateCheckbox   = document.querySelector(`#${linkStateCheckboxId}`);
  if (!linkStateCheckbox){return};
  var searchField         = link.parentElement.querySelector('input');

  link.addEventListener('click', function (e) {
    if (linkStateCheckbox.checked) {
      link.parentElement.submit();
    } else {
      setTimeout(function(){
        // Safari needs this timeout for whatever reason...
        searchField.focus();
      }, 0);
    }
  }, false);

  function uncheck(){
    setTimeout(function(){
      linkStateCheckbox.checked = false;
    }, 200)
  }

  searchField.addEventListener('blur', uncheck, true);

});