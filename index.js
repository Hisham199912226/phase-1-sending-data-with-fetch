const formData = {
    name: "Steve",
    email: "steve@steve.com",
  };

const configurationObject = {
    method : "POST",
    headers: {
        "Content-Type":"application/json",
        Accept: "application/json"
    },
    body: JSON.stringify(formData)
};

function submitData(){
  const body = document.querySelector('body');
  return fetch("http://localhost:3000/users",configurationObject)
  .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      body.append(object.id);
    }) 
    .catch(function (error) {
      body.append(error.message)
    });
}
