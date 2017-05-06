const fetch = require('node-fetch');

async function fetchFromGithub(endpoint) {
  const url = `https://api.github.com/${endpoint}`;
  const response = await fetch(url);
  return await response.json();
}

async function showUserAndRepos(handle) {
  const results =  await Promise.all([
    fetchFromGithub(`/users/${handle}`),
    fetchFromGithub(`/users/${handle}/repos`)
  ])

  const user = results[0];
  const repos = results[1];
}

async function showUserAndRepos(handle) {
  const [user, repos] =  await Promise.all([
    fetchFromGithub(`/users/${handle}`),
    fetchFromGithub(`/users/${handle}/repos`)
  ])
  
}
