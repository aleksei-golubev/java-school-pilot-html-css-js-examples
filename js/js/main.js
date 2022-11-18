function $(elementId) {
  return document.getElementById(elementId);
}

function $v(elementId) {
  return $(elementId).value;
}

function getUser() {
  return {
    email: $v('email'),
    password: btoa($v('passwd')),
    birth: $v('birth'),
    color: $v('color'),
    agreed: $('agreed').checked,
  };
}

function register() {
  if ($v('email') && $v('passwd') && $v('birth') && $('agreed').checked) {
    fetch('/js/json/user.json', {
      method: 'POST',
      body: JSON.stringify(getUser()),
    }).then((response) => {
      // Stackblitz blocks POST requests, so let's assume that 403 == 200
      // (response.status check is removed)
      $('registerForm').style.display = 'none';
      $('successMessage').style.display = 'block';
    });
  } else {
    alert('Sorry, all fields are mandatory!');
  }
}

function loadUser() {
  fetch('/js/json/user.json')
    .then((response) => response.json())
    .then((body) => console.log(body));
}
