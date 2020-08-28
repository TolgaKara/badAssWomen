function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
  
    points = 0;
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("points", points);
    location.href = "quiz.html";
  }