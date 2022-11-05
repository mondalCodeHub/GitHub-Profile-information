// const and variables
const API_URL = 'https://api.github.com/users/'
const form = document.getElementById('form');
const search = document.getElementById('search');
const contentInformation = document.getElementById('contentInformation');

// getuser - function
// getuser('test')
async function getuser(username) {
    try {
        const { data } = await axios(API_URL + username);
        userCard(data)
        getRespositry(username)
        console.log(data);
    } catch (error) {
        if (error.response.status == 404) {
            // createErrorMSG(`"@${username}"  does not exist`);
            createErrorMSG("username does not exist");
            console.log(error);
        }
    }
}

// getRespositry - function
async function getRespositry(username) {
    try {
        const { data } = await axios(API_URL + username + '/repos?sort=created');
        addRepoInsideCard(data)
    } catch (error) {
        createErrorMSG("problm in fetching repo")
    }
}

//  HTML userCard
function userCard(user) {
    const cardHTMLCode = `<div class="card">
    <div>
        <img class="avatar" src="${user.avatar_url}" alt="${user.name}"
            ,style="1px solid red">
    </div>
    <div class="userInformation">
        <h2>${user.name}  <span class="followProfile"><a href="${user.html_url}">(Follow on GitHub</a></span></h2>
        <p>${user.bio}</p>
        <ul class="profileInteraction">
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following </strong></li>
            <li>${user.public_repos} <strong>Repositry </strong></li>
        </ul>
        <hr>
        <div id="profleRepos"> </div>
    </div>
</div> `
    contentInformation.innerHTML = cardHTMLCode;
}

//  if any error occured - createErrorMSG()
function createErrorMSG(msg) {
    const cardHTMLCode = `
    <div class="card problemOcc" >
        <h1>${msg}</h1>
    </div> `
    contentInformation.innerHTML = cardHTMLCode;
}

//  Repository details - addRepoInsideCard()
function addRepoInsideCard(repos) {
    const reposElement = document.getElementById('profleRepos');
    repos
        .slice(0, 10)
        .forEach(repo => {
            const repoEl = document.createElement('a');
            repoEl.classList.add('repo');
            repoEl.href = repo.html_url;
            repoEl.target = '_blank';
            repoEl.innerText = repo.name;
            reposElement.appendChild(repoEl);
        })
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value;
    if (user) {
        getuser(user);
        search.value = " ";
    }
})

// @mondalCodeHub(October 2022)
