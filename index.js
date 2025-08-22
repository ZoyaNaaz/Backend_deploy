require('dotenv').config()
// console.log(process.env)
const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "ZoyaNaaz",
  "id": 123814747,
  "node_id": "U_kgDOB2FDWw",
  "avatar_url": "https://avatars.githubusercontent.com/u/123814747?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ZoyaNaaz",
  "html_url": "https://github.com/ZoyaNaaz",
  "followers_url": "https://api.github.com/users/ZoyaNaaz/followers",
  "following_url": "https://api.github.com/users/ZoyaNaaz/following{/other_user}",
  "gists_url": "https://api.github.com/users/ZoyaNaaz/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ZoyaNaaz/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ZoyaNaaz/subscriptions",
  "organizations_url": "https://api.github.com/users/ZoyaNaaz/orgs",
  "repos_url": "https://api.github.com/users/ZoyaNaaz/repos",
  "events_url": "https://api.github.com/users/ZoyaNaaz/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ZoyaNaaz/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "zoya naaz",
  "company": null,
  "blog": "",
  "location": "meerut",
  "email": null,
  "hireable": null,
  "bio": "I am a frontend developer enthusiast.",
  "twitter_username": null,
  "public_repos": 39,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2023-01-28T12:57:57Z",
  "updated_at": "2025-07-06T06:09:11Z"
}
app.get('/', (req, res) => {
  res.send('Hello from backend!')
})
app.get('/twitter', (req, res)=>{
    res.send('zoyadotcom')
})
app.get('/login', (req,res)=>{
    res.send('<h2>Please Login!</h2>')
})
app.get('/youtube', (req,res)=>{
  res.send('<h3>Chai aur code</h3>')
})
app.get('/github', (req,res)=>{
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

