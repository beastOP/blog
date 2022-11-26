---
title: "How did I built this blog in 8 min?" 
publish_date: 2022-11-26
---

It uses [Deno blog](https://deno.land/x/blog), which is a very easy way of setup a blog. It is built in javascript deployed on [Deno deploy](deno.com/deploy). The blog posts are written in markdown and are stored on my git repo.

## Pre-requisite

### Github
It is a version control system. Read more about it [here](https://en.wikipedia.org/wiki/GitHub).

### JavaScript
It is a dynamically typed scripting language mainly used on the web. Read more about it [here](https://en.wikipedia.org/wiki/JavaScript).

## Steps
There are 3 main steps involved in setting it up.

### Getting the code to run locally
Clone the repo from [here](https://github.com/beastOP/blog).

   ```bash
   git clone git@github.com:beastOP/blog.git blog
   cd blog
   deno task dev
   ```

Configure the options in `main.js`. Create a new markdown file in posts directory. It will serve as your blog post.

### Pushing it to github
Create your git repo, commit all the changes and push it to main.

### Hosting the blog globally
Sign-up on [Deno deploy](https://deno.com/deploy). 
Create a new project and link it the `main.js` on the *main branch* of your repo and select the *automatic* mode instead of *github action* unless necessary. Click the **Link** button, and there you go. <br/>
You have fully functional blog that runs on the edge. If you have a domain. Go to the **settings** and follow the instruction to set it up.
