## What is Jekyll?

> Jekyll is a simple, blog-aware, static site generator for personal, project, or organization sites. Written in Ruby by Tom Preston-Werner, GitHub's co-founder, it is distributed under the open source MIT license. 

Jekyll takes your content, renders Markdown and [Liquid](https://shopify.github.io/liquid/basics/introduction/) templates, and generates a complete, static website ready for publication.

Jekyll can be used to create a blog (with "posts" in .md format) or a website (with "pages" in .hmtl format).

Please visit the [Jekyll website](https://jekyllrb.com/) for more information and full documentation.

## Jekyll in GITLAB RLP

In order to deploy our edition online, we have created a separate Jekyll repo in GITLAB:

The set-up of Jekyll in GITLAB is detailed in these slides provided by Max Grüntgens (Akademie der Wissenschaften): https://docs.google.com/presentation/d/1yONX2vXhHUHjf7_XvYeZNhuu9eUNdiVnaLPLsKag9As/edit?usp=sharing 

Our own public site created through Jekyll is: https://teaching-dhlab.pages.gitlab.rlp.net/geburtsbriefemainz/team/

In order to deploy course outputs on these project pages, files need to be provided in HMTL and JSON format.

XML-encoded transcriptions and content pages are add to the "pages" folder in HTML format. XSLT files are needed to transform XML into HTML.

A separate "PNG" folder contains images to be embedded on the site. JSON files are needed for linked content from external sources such as Geonames. We will cover this aspect in our "semantic web" session.

