# Using XQuery in the digital humanities

In our last session, we introduced you to XPath, a language for navigating the XML file tree, and to XQuery, an extended language for querying XML. In the humanities, XQuery is used to find selected data in large sets of XML files, e.g. publication dates of books or the names of correspondents in a collection of letters.

We have shown you that there are alternatives to XQuery and that you may want to explore these alternative methods in the future. However, XQuery is a useful basis for learning other query languages (e.g. SPARQL), so it is important you do some hands-on exercises.

# Running XQuery on a TEI-encoded XML file in Oxygen

In this hands-on session, we would like you to **use XQuery in Oxygen**, our standard XML editor. And to make things a little bit more challenging, we would like you to run XQuery on a **TEI-encoded file**.

Analysing XML/TEI is making our XQuery more complicated because we need to let the XQuery processor know which version of TEI we are referring to. Also, the structure of TEI documents is more standardised or rigid than that of "plain XML" files. 

As Jaap likes to put it: 

> It's always TEI which is messing stuff up! :wink:

Nevertheless, TEI is used in very many DH projects, including *Letters 1916-1923*, and you need to know how to handle it. 

The following XQuery expression is a simple way of just reading a TEI file selected by file name "as is":

```
xquery version "3.1";

declare namespace tei = "http://www.tei-c.org/ns/1.0";

fn:doc("32.xml")
```

Here I am doing **THREE THINGS** that are vital for analysing TEI with XQuery:

1. I am indicating the version of XQuery I want to apply. This statement has to be concluded by ";".
2. I am decaring the namespace of the TEI version I am using. This tells XQuery that we are NOT dealing with a randomly created XML document but with a certain structure. This statement also needs to end in ";". If the TEI version indicated in your XQuery file does NOT match the version in the header of your TEI file, Oxygen will not be able to run a query and return an empty result.
3. It is possible to avoid the "return" expression by calling a function `fn:`. In this case, the function is to simply reproduce the XML/TEI document. There are other functions, including custom-made functions built by individual users, that can be called through `fn:`. Such functions are particularly useful in running more advanced queries on large collections of XML/TEI files. We will not cover this in our Übung, but when you come across functions later, you will know what they are.

I ran my simple query in BaseX on a sample file named "32.xml" from the *Letters 1916-1923* collection, and you can see the correct output in the *result* window at the bottom:

![XQuery in BaseX -- screenshot](https://gitlab.rlp.net/teaching-dhlab/dmgk-modul-5b-xml/-/blob/master/Session%204%20-%20extendedXML%20-%20XQuery/Bildschirmfoto_vom_2020-11-19_11-34-47.png)

You will find the [same XML file in my folder with samples for session 4](https://gitlab.rlp.net/teaching-dhlab/dmgk-modul-5b-xml/-/blob/master/Session%204%20-%20extendedXML%20-%20XQuery/32.xml) and should download it alongside the ["Ciaran Wallace" XQuery file](https://gitlab.rlp.net/teaching-dhlab/dmgk-modul-5b-xml/-/blob/master/Session%204%20-%20extendedXML%20-%20XQuery/CiaranWallace.xquery), which contains a slightly more advanced query:

```
xquery version "3.1";
declare namespace tei = "http://www.tei-c.org/ns/1.0";

for $change in fn:doc("Session 4 - extendedXML - XQuery_32.xml")/tei:TEI/tei:teiHeader/tei:revisionDesc/tei:change
where ($change/@who="#Ciaranwallace")
return $change
```

Please make sure to put those files in the SAME folder on you local drive, e.g. in the "download" folder. Also, GITLAB renames files when they are downloaded from a sub-directory, so either rename the query file OR add the new name to the XML file.

Now open Oxygen and display BOTH files next to each other. You can use the XQ debugger mode, but the query will also run in the standard editor view. Please try and complete the tasks below.

# Tasks and questions to tackle in your break out group

1. Run the ["Ciaran Wallace" query](https://gitlab.rlp.net/teaching-dhlab/dmgk-modul-5b-xml/-/blob/master/Session%204%20-%20extendedXML%20-%20XQuery/CiaranWallace.xquery) I have provided as a sample on [file "32.xml"](https://gitlab.rlp.net/teaching-dhlab/dmgk-modul-5b-xml/-/blob/master/Session%204%20-%20extendedXML%20-%20XQuery/32.xml) and check the output. What kind of information was I looking for, and what is the XML tag called where this information is stored? What does that tell you about "best practice" in your choice of variable names?

2. In the same tag that I was looking for in my "Ciaran Wallace" query, there is also an attribute which indicates time. Try and manipulate the query to return all data in this same type of tags where the date BEFORE 3rd November 2013. What information about the workflow of the *Leters 1916-1923* project is contained in the output you get?

3. Run a query to return only the actual transcription of the letter contained in "32.xml" that is now displayed on the *Letters 1916-1923* website. To find the right answer, look at the different results you get when using either of the these two *return* expressions in my "Ciaran Wallace" query:

`return $change` OR `return data($change)`

Please take notes as we will discuss your results in class.


