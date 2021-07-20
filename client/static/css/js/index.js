console.log("hey");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const output = {
        title: e.target.title.value,
        pseudonym: e.target.pseudonym.value,
        body: e.target.body.value,
    };

    console.log(output);

});