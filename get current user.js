var myHeaders = new Headers();
myHeaders.append("Authorization", 
                 "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDE1NDNlZmQyMTFjMjEwMGRiMmU2NSIsInVzZXJuYW1lIjoicnVzdGFtIiwiZXhwIjoxNjUzNjMyODkxLCJpYXQiOjE2NDg0NDg4OTF9.xf25WJdgNwOHq_x62Hynm5Sa63X-D2GF6E8Sa4AmrOs");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://kata.academy:8021/api/user", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
