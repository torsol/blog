---
title: Project Blog - The unraveling of Gatsby.js
date: "2021-01-16"
description: 'This blog is based on a template provided by the gatsby.js-framework. This framework is often mentioned because it is built upon React, and is great for static webpages. '
tag: "posted"
---

With the risk of not being entirely correct, my understanding of Gatsby is that it offers a lot of tools for creating good looking static webpages fast. Think ecommerce-, blog- or portfolio-pages. 

There exists well-developed ecosystems for building and deploying gatsby-webpages in a quick and easy way. One platform that is often mentioned in context with Gatsby.js is [Netlify](https://www.netlify.com/with/gatsby/).

Because this blog serves as a learning experience both for my writing and devops-skills, I wanted to have platform where me as an end-user sat with all the control.

Therefore, I instead created a pipeline for the new feature from github (github-pages) which allows for the free hosting of static webpages directly from their repositories. The flow is similar to [this](https://blog.bitsrc.io/deploy-a-gatsby-site-on-github-pages-for-free-f18853c1b7a9).

Coming from React, there is a lot of confusing things that Gatsby does, one example is handling data using graphQL. The starter used for this [project](https://github.com/gatsbyjs/gatsby-starter-blog) also has some questionable design-choices that a) could be the way Gatsby is meant to be written, b) is implemented by someone that doesn't know what they are doing, or c) (the most likely alternative), a bit of both.

My approach of using the boilerplate with some tweaks here and there isn't optimal, so a thing on the todo-list is to learn more of the in's and out's of this framework.  






