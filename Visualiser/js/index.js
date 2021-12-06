fetch('../../Resources/Data/Jsonfiles/before_20thcentury.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var events = data;
    console.log(events);
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementsByClassName("dropdown")[0].classList.toggle("positioning");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
