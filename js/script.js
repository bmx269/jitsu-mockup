$(document).ready(function(){
  $('#surveyTabs a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
  $('#designTabs a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
});  

