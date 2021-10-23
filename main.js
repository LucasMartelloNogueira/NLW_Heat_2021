const LucasSocialMedia = {
    github: "LucasMartelloNogueira"
}


function getGitHubUserInfo(user){
    const url = `https://api.github.com/users/${user.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userDescription.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubUserInfo(LucasSocialMedia)
