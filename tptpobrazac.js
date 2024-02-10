function validateForm() {
  var x = document.forms["forma"]["ime"].value;
  if (x == "") {
    alert("Niste ispravno ispunili sva polja");
    return false;
  }
  
  var x = document.forms["forma"]["prezime"].value;
  if (x == "") {
    alert("Niste ispravno ispunili sva polja");
    return false;
  }

  var x = document.forms["forma"]["btelefona"].value;
  if (x == "") {
    alert("Niste ispravno ispunili sva polja");
    return false;
  }

  var x = document.forms["forma"]["email"].value;
  if (x == "") {
    alert("Niste ispravno ispunili sva polja");
    return false;
  }

  var x = document.forms["forma"]["poruka"].value;
  if (x == "") {
    alert("Niste ispravno ispunili sva polja");
    return false;
  }
  else{
    return true;
  }
  
}
