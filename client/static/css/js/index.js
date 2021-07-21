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

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(output)
    }
    

    // TODO This should return the id of the newly recrated object.
    const response = await fetch("http://localhost:3000/posts/new", options);

    const responseText = await response.json();
    console.log(responseText.id);


    const link = document.createElement("a");
    link.textContent = "view your post here"
    link.href = `/getposts/?id=${responseText.id}`
    link.classList.add("link-to-post");

    
    // TODO Render the ID for the user.
    transformDown()
    setTimeout(() => {transformUp(link)}, 3000);
    setTimeout(() => {document.querySelector("main").append(link)}, 6000);
});



function transformDown() {
    const target = document.querySelector("main");
    
    target.innerHTML = ''
    target.style.width = "0";
    target.style.height = "0";
    target.style.padding = "0";
    
};

function transformUp(link) {
    const target = document.querySelector("main");
    
    // this could be refactored to add a class.
    target.style.width = "550px";
    target.style.height = "550px";
    target.style.padding = "35px";
    target.style.display= "flex";
    target.style.alignItems = "center";
    target.style.justifyContent = "center";
};
