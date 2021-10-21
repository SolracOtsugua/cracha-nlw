const LinksSocialMedia = {
  github: 'SolracOtsugua',
  youtube: 'jakelinygracielly',
  facebook: 'carlos.augusto.397501',
  instagram: 'carlosaugustoslima',
  linkedin: 'in/carlos-augusto-a52370218'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}/`

    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bioText.textContent = data.bio
      userGit.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
