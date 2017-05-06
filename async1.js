const fetch = require('node-fetch');

async function showGitHubUser(handle) {
  const url = `https://api.github.com/users/{$handle}`;
  //await fetch(url);

  // fetch(url, )
  //   .then(resp => resp.json())
  //   .then(user => {
  //     console.log(user.name);
  //     console.log(user.location);
  //   })

  const resp = await fetch(url);
  const user = await resp.json();

  console.log(user.name);
  console.log(user.location);

}

showGitHubUser('xinzhang');
