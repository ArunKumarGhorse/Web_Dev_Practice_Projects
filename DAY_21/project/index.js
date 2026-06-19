
async function Github() {
    const response = await fetch("https://api.github.com/users?per_page=20");
    const data = await response.json();
    const parent = document.getElementById("first");

    for (let user of data) {
        const child = document.createElement("div");
        child.classList.add("user");

        const image = document.createElement('img');
        image.src = user.avatar_url;

        const username = document.createElement('h2');
        username.textContent = user.login;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.textContent = "Visit Profile"

        child.append(image, username, anchor);
        parent.append(child);
    }
}

Github();