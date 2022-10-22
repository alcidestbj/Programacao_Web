let url = "https://randomuser.me/api/?format=json&results=10";

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let div = document.querySelector("#lista");
        div.innerHTML = "";

        let usuarios = data.results;
        console.log(usuarios);

        usuarios.forEach(function(user,i){
            div.innerHTML += `<p><img src='${user.picture.large}'><br>
                              Nome: ${user.name.first}</p>`;
        });      
    })
    .catch(function(error) {
        console.log(error);
    });