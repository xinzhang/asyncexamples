const fetch = require('node-fetch');

function showGitHubUser(handle) {
  const url = 'https://api.github.com/users/xinzhang';
  //await fetch(url);

  fetch(url)
    .then(resp => resp.json())
    .then(user => {
      console.log(user.name);
      console.log(user.location);
    })

}

showGitHubUser('xinzhang');
