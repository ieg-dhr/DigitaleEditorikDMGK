## From digital text to print

Creating printed editions from digital data is by no means anachronistic. Despite many concerns in the early days of the world wide web, printed books are still selling well, and especially when it comes to literary classics, important political texts, or science handbooks, there is also a market for high-quality print editions beyond cheap paper backs.

Although we do not have time to cover print publishing in detail, you ought to know that XML (and HTML) can be used as a basis for print editions as well as digital editions.

## Making books

An article that gives you a brief introduction into print publishing is [Beyond XML: Making Books with HTML](https://www.xml.com/articles/2017/02/20/beyond-xml-making-books-html/):

The article is written by Dave Cramer who works for an American publishing company that offer both digital books and "print-on-demand":

> For seven years, Hachette Book Group, the fourth-largest trade publisher in the U.S., has been creating both print and digital books with HTML and CSS. We’ve published a thousand different titles. We've sold more than fifty million print books, and untold numbers of ebooks. Doing this work ourselves in Manhattan saves large amounts of money over offshore conversion. It's easy and natural to create digital-only titles, or even to add a print-on-demand edition to a digital original. By leaving the page layout metaphor behind, and treating print and digital as aspects of the same content, we work faster, better, and cheaper.

Rather than replacing print altogher, the digital has entered into a tight and complex relationship with print, and print itself has transformed through digitisation. In the past, it was necessary to order a minimum number of initial prints ("print run") from a publishing company to make it all worth their while. Today, it is possible to print individual books, calendars, maps, or postcards at very low prices.

Most printers / copy shops that serve private customers use PDF documents as their standard file format, and it is possible to create well-styled PDF documents directly from HTML and CSS.

This process is detailed by Dave Cramer in his article, and he also includes a very short HTML code snippet to show how a book section can be marked-up in HTML:

```
> <div class="galley-rw">
>   <div class="body-rw Chapter-rw">
>     <div class="title-block-rw">
>       <p class="title-num-rw">Chapter 1</p>
>       <h1>Loomings</h1>
>     </div>
>     <p>Call me Ishmael. Some years ago—never mind how long precisely—
>        having little or no money in my purse, and nothing particular 
>        to interest me on shore, I thought I would sail about a little 
>        and see the watery part of the world.…</p>
>     <div class="block-rw extract-rw headline-cus">
>       <p>Whaling Voyage by one Ishmael.</p>
>     </div>
>   </div>
> </div>
```

The different elements of the HTML code, such as the heading and invidual paragraphs, can be styled in an accompanying CSS file and define the look of both a digital and a printed edition. Changes that you might want to implement later can be easily made through the CSS without having to go back to each and every headline or paragraph in the marked-up text. This saves you a lot of time but also helps you avoid errors.

The Chicago Manual of Style website also features a nice overview of [How Books and Journals Are Produced](https://www.chicagomanualofstyle.org/help-tools/production-technologies.html).