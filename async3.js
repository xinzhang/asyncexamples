const fetch = require('node-fetch');

const fetchGitHubUser = async (handle) => {
  const url = `https://api.github.com/users/{$handle}`;
  const resp = await fetch(url);
  return await resp.json();
}

(async function() {
  const user = await fetchGitHubUser("xinzhang");
  console.log(user.name);
})();

// -------------------------------------------------------------

class GitHubApiClient {
  async fetchUser(handle) {
    const url = `https://api.github.com/users/{$handle}`;
    const resp = await fetch(url);
    return await resp.json();
  }
}

(async function() {
  const client = new GitHubApiClient();
  const user = await client.fetchUser("xinzhang");
  console.log(user.name);
})();
