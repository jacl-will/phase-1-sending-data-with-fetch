// const newUser = {
//     name: `${userName}`,
//     email: `${userEmail}`,
// }

function submitData(name, email){
    const newUser = {
        name,
        email,
        // name: `${userName}`,
        // email: `${userEmail}`,
    };

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(newUser),
};

return fetch("http://localhost:3000/users", configurationObject)
// .then(resp => resp.json())
// .then(newUser => console.log(newUser))
.then(function(resp) {
    return resp.json();
})
.then(function(obj) {
    document.body.innerHTML = object('id');
})
.catch(function(error) {
    document.body.innerHTML = error.message;
});
}