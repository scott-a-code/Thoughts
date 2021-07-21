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

    console.log(responseJson);
    // Update the dom.

    if (responseJson.length === 0) {
        document.getElementById("title").textContent = "404 - not found.";
        document.getElementById("pseudonym").textContent = "Your story is waiting to be told. We can\'t wait to hear it.";
    } else {
        document.getElementById("title").textContent = responseJson[0].title;
        document.getElementById("pseudonym").textContent = responseJson[0].pseudonym;
        document.getElementById("body").textContent = responseJson[0].body;
    }

    
};

getRequestedID();