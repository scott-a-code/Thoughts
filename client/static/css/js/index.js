console.log("hey");

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const output = {
        title: e.target.title.value,
        pseudonym: e.target.pseudonym.value,
        body: e.target.body.value,
    };

    // Here We're checking none of the inputs are falsy, if they are we aren't sending them to the server because they're required in our database.
    for (const key in output) {
        if (!output[key]) {
            return
        }
    }

    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Content-Length': data.length,
    //     },
    //     body: JSON.stringify(output)
    // }
    

    // // TODO This should return the id of the newly recrated object.
    // const response = fetch("localhost:3000/posts/new", options);

    // const link = `/posts/${response.id}`
    
    // TODO Render the ID for the user.
    transformDown()
    setTimeout(() => {transformUp('link')}, 3000)
    // transformUp('link')

});

function transformDown() {
    const target = document.querySelector("main");
    
    
    target.innerHTML = ''
    target.style.width = "0";
    target.style.height = "0";
    target.style.padding = "0";
    
}
function transformUp(link) {
    const target = document.querySelector("main");
    
    
    target.innerHTML = 'link'
    target.style.width = "550px";
    target.style.height = "550px";
    target.style.padding = "35px";
    
}
