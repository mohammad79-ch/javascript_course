const APIURL = "https://api.github.com/users/";
const listInfo = document.getElementById("listInfo");

getUser("mohammad79-ch")

async function getUser(username){
    let url = APIURL + username;
    let response = await fetch(url);

    let data = await response.json();

    showContent(data)

    getrepo(username)

    // return data

}
//
// getUser("mohammad79-ch").then((data)=>{
//     console.log(data)
// })

function showContent(user){
    listInfo.innerHTML+=`
       <div class="card">
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
            </div>
            <div class="user-info">
                <h2>${user.login}</h2>
                <p>${user.bio}</p>
                <ul class="info">
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repos</strong></li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `
}

async function getrepo(usrename){
    let url = APIURL + usrename + "/repos";
    let response = await fetch(url);

    let data = await response.json();

    showRepoContent(data)

}

function showRepoContent(repos){
    const reposEl = document.getElementById("repos");

    repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 10)
        .forEach((repo) => {
            const repoEl = document.createElement("a");
            repoEl.classList.add("repo");

            repoEl.href = repo.html_url;
            repoEl.target = "_blank";
            repoEl.innerText = repo.name;

            reposEl.appendChild(repoEl);
        });
}



