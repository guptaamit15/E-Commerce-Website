function validate() {
  if (document.contact.email.value == "") {
    alert("Please provide your Email!");
    document.contact.email.focus();
    return false;
  }
  
  if (document.contact.query.value == "") {
    alert("Please write your Query!");
    document.contact.query.focus();
    return false;
  }
}

