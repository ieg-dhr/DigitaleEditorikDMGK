## Advanced XML - create indeces and encode names, dates or topics

In our last session, we have given you a brief overview of the XML syntax and how to edit XML in special software such as Oxygen. Unfortunately, time is limited, and we could not show you all the **advanced tasks** that XML can perform for you. If you want to learn more about extended features (e.g. creating indexes with XML), you may want to check out the following tutorial:

[Tutorial "Critical editions -- advanced features" by #dariahTeach](https://teach.dariah.eu/course/view.php?id=32&section=4)

---

## Using XML for scholarly annotations 

Although it is possible to use XML for mere structure mark-up (e.g. denoting pages, paragraphs, and lines), it's most valuable feature for humanities research is the **creation of annotations** that put the marked-up items into context and link them with additional information either within or outside your collection.

Generally, there are two types of annotations:

["Formal annotation" -- in: Digital Humanities Workbench](https://www2.fgw.vu.nl/werkbanken/dighum/source_data/annotation/annotation_formal.php)

> "In a lot of research in the humanities, information is added to the objects being studied (such as texts, audio files, images, or video files), in order to come to a formal analysis of certain phenomena. When this is done based on a predetermined classification system, we call it formal annotation. This may be non-content-based information, such as source information (metadata) and information about the structure of the text. But it can also be interpretative and/or analytical information."

["Free annotation" -- in: Digital Humanities Workbench](https://www2.fgw.vu.nl/werkbanken/dighum/source_data/annotation/annotation_free.php)

> Free annotation involves adding all kinds of notes to a text whilst reading/studying it. Besides underlining portions of the text and adding question marks, exclamation marks and other non-textual markers, textual annotations play an important part in the process. (...) This type of annotation is used often in interpretative research. 

*IMPORTANT*: Digital scholarly editions often combine formal annotation with descriptive / interpretational annotations in the forms of texts provided by the editors.

---

The [Littlehales Collection created at the NUI Maynooth in 2017](https://github.com/MonikaBarget/DigitalEditing4Historians/blob/master/3_challenge_annotations.md) is one example of a digital scholarly edition that uses annotations to provide additional information which is not found in the initial sources. The process of deciding what words to annotate and how to phrase the annotations was a difficult one and depended very much on the research questions we wanted to answer. 

---

One inherent problem of project-specific annotations is that they create **interoperability challenges** in relation to other XML/TEI-based editions.

The article ["Towards an Interoperable Digital Scholarly Edition" by Desmond Schmidt, 2014](https://journals.openedition.org/jtei/979#tocto1n4) gives a few examples:

> "The elements `note`, `interp`, and `interpGrp` describe content that, like metadata, is about the text, not the text itself. These are really annotations, and should ideally be represented via the established standards and practices of external annotation (Hunter and Gerber 2012). Annotations are stored in triple stores or graph databases like Neo4J,20 which record the identifiers of each component of the annotation and its data. Keeping track of how all these objects interrelate is a specialized task that should be assigned to a dedicated annotation engine. And annotation should point to the document, not the other way around. Otherwise, any alteration to the annotations will break the document. Strangely, the <interp> element in TEI does exactly that: it is assigned an id, and then the textual element points to it via its @ana attribute. A similar awkwardness can be seen with <span>, which can be used similarly to embed short annotations directly in the text. The problems this caused for Singer’s students have already been noted in section 2.2 above. As with metadata, the TEI mechanisms for annotation need to be brought more into line with modern practice."

---

## Annotating scanned sources (image files)

XML can also be used for **image annotation**. You can either annotate a scanned text or a photographed work of art, e.g. the scan of an early modern engraving.

The following video (which you may want to watch at home) explains the process of annotating a scanned text:

<div align="left">
      <a href="https://www.youtube.com/embed/2UEzX7tYwA0">
         <img src="https://img.youtube.com/vi/2UEzX7tYwA0/0.jpg" style="width:100%;">
      </a>
</div>

---

The process of **annotating digitised works of art** is explained in this research paper:

> Richard Gartner, Towards an ontology-based iconography, Digital Scholarship in the Humanities, Volume 35, Issue 1, April 2020, Pages 43–53, https://doi.org/10.1093/llc/fqz009

First, the researchers developed a system of classifying common themes in visual art and describing their relations. Then this ontology was translated into customised XML.

The following code is an example of how they tried to describe bodily features of a depicted mythological figure:

```
<SubClassOf>

  <Class IRI="#envy"/>

  <ObjectIntersectionOf>

   <ObjectSomeValuesFrom>

    <ObjectProperty IRI="#hasIndicator"/>

    <ObjectAllValuesFrom>

     <ObjectProperty IRI="#performsAction"/>

     <ObjectIntersectionOf>

      <Class IRI="#holding"/>

      <ObjectIntersectionOf>

       <ObjectAllValuesFrom>

        <ObjectProperty IRI="#hasPerformativeActionInstrument"/>

        <Class IRI="#hand"/>

      </ObjectAllValuesFrom>

      <ObjectAllValuesFrom>

       <ObjectProperty IRI="#hasPerformativeActionObject"/>

       <Class IRI="#snake"/>

      </ObjectAllValuesFrom>

     </ObjectIntersectionOf>

    </ObjectIntersectionOf>

   </ObjectAllValuesFrom>

  </ObjectSomeValuesFrom>

   <ObjectAllValuesFrom>

     <ObjectProperty IRI="#hasWeight"/>

     <Class IRI="#Medium"/>

   </ObjectAllValuesFrom>

  </ObjectIntersectionOf>

 </SubClassOf>
```
The advantage of using XML for the image description is that a larger collection of, for instance, early modern prints on religion and mythology could easily be searched for certain elements (e.g. female figures holding snakes) when a query language is applied to them or a search engine based on a programming language is constructed. Like most methods in Digital Humanities, the effort of structuring data only really begins to pay off when a corpus is so large that one human can no longer handle it on his/her own. Digital Humanities is driven towards "big data" although our data sets will never be as large as those that Google or Facebook handle.
 
---

## Navigating the XML file tree with XPath

To navigate the structure of an XML file, XPath is used, which can easily be run in the Oxygen XML editor.

*EXAMPLE: XPath expression applied to an XML file, WIKIPEDIA:*

![XPath expression applied to an XML file, WIKIPEDIA](https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/XPath_example.svg/300px-XPath_example.svg.png)

A thorough introduction to the logic behind the querying of linguistic trees is given in [Lai, Catherine, und Steven Bird. „Querying Linguistic Trees“. Journal of Logic, Language, and Information 19, Nr. 1 (2010): 53–73.](https://www.jstor.org/stable/20685004) The article is available via JSTOR, which you can access for free if you are logged in to the university network. When you are working from home, use a VPN client.

---

## Querying XML files with XQuery

To thoroughly analyse the content of XML files, you can use XQuery. It is a *language* of its own and follows particular syntax rules.

> What is XQuery?-- XQuery is to XML what SQL is to databases. XQuery is designed to query XML data.

We highly recommend the [W3Schools XQuery Tutorial](https://www.w3schools.com/xml/xquery_intro.asp) for a beginner-friendly introduction with many examples.

The overall structure of XQuery is also explained in the cheat sheet ["XML Flyer für Fortgeschrittene II"](https://gitlab.rlp.net/teaching-dhlab/dmgk-modul-5b-xml/-/blob/master/Technology%20handbooks/XML-Flyer-Fortgeschrittene-II.pdf).

In order to use XQuery correctly, you need to follow some basic rules:

    XQuery is case-sensitive
    XQuery elements, attributes, and variables must be valid XML names
    An XQuery string value can be in single or double quotes
    An XQuery variable is defined with a $ followed by a name, e.g. $bookstore
    XQuery comments are delimited by (: and :), e.g. (: XQuery Comment :)

Apart from that, XQuery and all other query languages operate with "conditional expressions". These expressions permit you to translate a sentence like "Find all the files that mention Mainz!" into a language that your computer understands. Rephrasing the sentence in human words, the condition here is:

> "IF a file contains Mainz as place name, return file as result."

Such IF statements are very common in querying languages but also in programming. 

Another frequent condition is an ELSE statement. A human expression using an ELSE statement would be:

> "Find all books in a library. If the book are in German, label them "German", ELSE label them "foreign".

In their [XQuery syntax tutorial](https://www.w3schools.com/xml/xquery_syntax.asp), W3Schools are also using a library example that combines an IF and an ELSE statement:

```
for $x in doc("books.xml")/bookstore/book
return if ($x/@category="children")
then <child>{data($x/title)}</child>
else <adult>{data($x/title)}</adult>
```
 
You see that XQuery uses expressions very similar to the English language but also **special characters** like $ and @. 

In the example above, $x is a *variable* -- that is place holder for different values specified below.

@ tells the computer that what follows is an *attribute* with a certain value `@attribute="value"`. @category is one of the attributes in the sample XML file and has at least one value: "children".

XQuery can also include **general comparison symbols** similar to those used in maths: `=, !=, <, <=, >, >=`

For further reading, I also recommend [Anderson, Clifford B., und Joseph C. Wicentowski. XQuery for Humanists. College Station, UNITED STATES: Texas A&M University Press, 2020](http://ebookcentral.proquest.com/lib/senc/detail.action?docID=6177763)

---

## Working with XQuery processors

In order to run a query, you need an XQuery processor, that is specialised software. Processors either run locally on your computer, in the browser, or on an external server. 

A simple [XQuery, XPath and XSLT tester](http://www.xpathtester.com/xquery) is available online. You can contact the developers via [Google Groups](https://groups.google.com/g/xpathtester?pli=1).

Some of the most popular XQuery processors are Saxon, eXist-db, BaseX and XQiB. Saxonica also provides a Saxon-CE processor which runs in the browser. XQuery files typically have the extension .xq or .xqy, although others are also in use.

[BaseX](https://basex.org/) is an open-source XML database and XQuery engine that runs on Windows, Linux and Mac. BaseX can be used from the command line, in client/server mode, or via the Graphical User Interface (GUI). The GUI does not only provide interactive views for visualizing your XML data, but also a powerful interactive query editor (XQuery 3.1 processor). The different options to visualise XML and the easy management of larger collection of XML files are the greatest advantages of this tool.

![GUI1](https://basex.org/basex/Screenshot-Raytracer-1080.png)
![GUI2](https://basex.org/images/BaseX/BaseX-9.0-Screenshot.png)

However, the in-built functionality for authoring XML is limited in comparison with Oxygen. For beginners, its usage is also less inuitive. Therefore, we recommend using an open-source editor like [QXmlEdit](http://qxmledit.org/) for writing XML files and BaseX for managing, querying and visualising your collections of XML files:

[Custom frameworks in BaseX (as Oxygen alternative)?](https://stackoverflow.com/questions/63452947/custom-frameworks-in-basex-as-oxygen-alternative)

*EXAMPLE: analysis and visualisation of an XML file in BaseX, created by [Christian Grün](https://commons.wikimedia.org/wiki/User:ChristianGruen):*

![Analysis and visualisation of an XML file in BaseX XML editor, created by [Christian Grün](https://commons.wikimedia.org/wiki/User:ChristianGruen)](https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Screenshot_BaseX_9.0.png/1280px-Screenshot_BaseX_9.0.png)

Using XQuery in BaseX is particularly easy because the query window is a standard feature of the graphic user interface. Once you open BaseX, you can already start writing and running your queries:

<div align="left">
      <a href="https://www.youtube.com/embed/NpfB41MOOz0">
         <img src="https://img.youtube.com/vi/NpfB41MOOz0/0.jpg" style="width:100%;">
      </a>
</div>

---

## Running XQuery in the Oxygen debugger

A relatively handy option to work with XQuery in Oxygen is to use the so-called debugger:

> Save time when developing complicated XQuery expressions by using the Oxygen XQuery debugger. Oxygen can debug and profile expressions run over MarkLogic or Berkeley XML databases, or using the Saxon EE processors. Oxygen provides a special layout when entering in debugging mode to show the XML source (optional) and the XQuery documents side by side and to also show the result and special XQuery debugging views and toolbars. The perspective allows you to use the common XML and XQuery editor features.

A "debugger" is essentially a "fault-finder" that helps you optimise code written in a certain (programming) language. Oxygen provides several debuggers for different purposes. In the current version of Oxygen, the XQuery (or: XQ) debugger is pre-installed. You will find it in the top right corner of the Oxygen main window.

Unfortunately, the official video tutorial provided by Oxygen relates to version 12.2 and is outdated. We have therefore created introductory slides which you will find in the "Presentations" folder of this repository.

Configuering the Oxygen XML Editor to run XQuery against an eXist XML Database is more complicated and here, too, Oxygen only provide a video from 2016 that is no longer up-to-date:

<div align="left">
      <a href="https://www.youtube.com/embed/Yoc5h1zSddA">
         <img src="https://img.youtube.com/vi/Yoc5h1zSddA/0.jpg" style="width:100%;">
      </a>
</div>

---

## Querying XML with JSONiq

There are alternatives to XQuery, and as the world of programming doesn't stand still, new tools are being launched all the time.
One query and functional programming language that has been influenced by XQuery and SQL (which Kai Bruhn will teach you), is **JSONiq**.

The [Wikipedia article on JSONiq](https://en.wikipedia.org/wiki/JSONiq) specifies:

> JSONiq is a query and functional programming language that is designed to declaratively query and transform collections of hierarchical and heterogeneous data in format of JSON, XML, as well as unstructured, textual data. JSONiq is an open specification published under the Creative Commons Attribution-ShareAlike 3.0 license. It is based on the XQuery language, with which it shares the same core expressions and operations on atomic types. JSONiq comes in two syntactical flavors, which both support JSON and XML natively.

    The JSONiq syntax (a superset of JSON) extended with XML support through a compatible subset of XQuery.
    The XQuery syntax (native XML support) extended with JSON support through a compatible subset (the JSONiq extension to XQuery) of the above JSONiq syntax.

A tool to apply JSONiq has recently been released by [Ghislain Fourny](https://inf.ethz.ch/people/person-detail.MTIyMzcw.TGlzdC8zMDQsLTg3NDc3NjI0MQ==.html) and ETH Zürich: It is called **Rumble 1.9.0 "Ficus Bonsai"** and described as a free, open source JSONiq engine. 

It can be downloaded as a jar from

  https://rumbledb.org/

or you can directly try out a JSONiq tutorial running on our public backend in your browser (it is a Jupyter notebook running on Google's Colab) from

  https://bit.ly/3jARuUU

This public backend is just one small machine for small queries -- if you need a larger Spark cluster, you can create one on your favorite cloud provider, e.g., Amazon EMR, in a few minutes, connect to it, download the Rumble jar and start querying.

New features (since the previous announcement of version 1.7.0 in this list) include:

- Detection of joins in many forms: two for clauses binding large sequences with a predicate in the second one (with support for allowing empty for left outer joins), two for clauses binding large sequences followed by a where clause, or a let clause binding a large sequence with a predicate, for "group joins" (to denormalize data easily).

- Efficient evaluation of equi-joins (pushed down to Spark) if the predicate involves equality comparison of (arbitrary) expressions from each side (or conjunctions thereof).

- Support for positional variables.

- Outputing large quantities of structured data to other formats: avro, parquet, csv, etc. This allows using Rumble to easily clean up a messy dataset with JSONiq, structure it, annotate it, and output it in a structured format, or to easily convert from one format to another, and use it in turn as input to another JSONiq query, or as input to a Python script for visualization with your favorite libraries (pie charts, etc).

- Various performance improvements and bugfixes.

---

## XML analysis with programming languages such as Python

[Monika Barget, "Doing Digital History with Python I: reading (messy) XML & JSON data," in Digital Humanities Lab, 30/04/2020](https://dhlab.hypotheses.org/1406)

e.g. [ReadXML_titles_withBeautifulSoup.py](https://github.com/MonikaBarget/DigitalHistory/blob/master/ReadXML_titles_withBeautifulSoup.py)

```
#!/usr/bin/env python
# coding: utf-8

from bs4 import BeautifulSoup
import os
from os.path import dirname, join
directory=("C:\\Users\\mbarg\\Documents\\corpus") # location of XML files on local drive

results=[] # create result list
for infile in os.listdir(directory):
    filename=join(directory, infile)
    indata=open(filename,"r", encoding="utf-8", errors="ignore") # UTF-8 encoding errors are ignored
    contents = indata.read()
    soup = BeautifulSoup(contents,'xml')
    titles = soup.find_all('title') # get item titles
    for title in titles:
        print(title.get_text())
        results.append(title.get_text())
print(results) # result list is shown on screen
```
---

## Hands-on session: XQuery in practice

Follow the [task description](https://gitlab.rlp.net/teaching-dhlab/dmgk-modul-5b-xml/-/blob/master/Session4b_Hands-On_queryingXML.md) in the project overview.

---