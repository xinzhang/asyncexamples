const fetch = require('node-fetch');

async function showGitHubUser(handle) {
  const url = `https://api.github.com/users/{$handle}`;

  const resp = await fetch(url);
  return await resp.json();
}

showGitHubUser('xinzhang')
  .then(user => {
    console.log(user.name);
  })
