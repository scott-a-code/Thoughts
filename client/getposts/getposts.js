console.log("hey");



// request post 200 from the server

function getRequestedID() {
    const queryString = window.location.search;
    console.log(queryString);

    const id = queryString.replace("?id=", '');

    console.log(id);
    getPostFromServer(id);
};


async function getPostFromServer(id) {
    const response = await fetch('http://localhost:3000/posts/${id}')
    const responseJson = await response.json();

    // Update the dom.

    document.getElementById("title").textContent = responseJson.title;
    document.getElementById("pseudonym").textContent = responseJson.pseudonym;
    document.getElementById("body").textContent = responseJson.body;
};

getRequestedID();