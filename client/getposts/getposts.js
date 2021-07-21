// On load the string query is read and will request that post from the server.
function getRequestedID() {
    const queryString = window.location.search;
    console.log(queryString);

    const id = queryString.replace("?id=", '');

    getPostFromServer(id);
};


async function getPostFromServer(id) {
    // at the moment this endpoint isn't working but the logic to handle it on the client side is.
    const response = await fetch(`http://localhost:3000/posts/${id}`)
    const responseJson = await response.json();

    // Update the dom.

    document.getElementById("title").textContent = responseJson.title;
    document.getElementById("pseudonym").textContent = responseJson.pseudonym;
    document.getElementById("body").textContent = responseJson.body;
};

getRequestedID();