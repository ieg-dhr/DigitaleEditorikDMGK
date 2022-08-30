## Creating a digital scholarly edition from scratch: "Mainzer Geburts- und Lehrbriefe"

In this seminar, we will apply what you have learned in winter and create our own digital scholarly edition from scratch.

We will use a very interesting and regional source: so-called "Geburtsbriefe" ("birth letters") and "Lehrbriefe" ("apprenticeship letters") from early modern Mainz.

These letters contain a lot of interesting biographic information and tell us a lot about people's networks and mobility in past centuries. We will, therefore, not only edit some of these letters but also try and create additional content such as a digital map. The final edition will be published via Jekyll.

Jekyll is essentially a set of HTML and CSS templates for building websites. Jekyll is integrated into GITLAB and therefore easy to use. We have created a separate Jekyll repository for our project to which we will invite you in due course.

The preliminary URL of our project website is https://teaching-dhlab.pages.gitlab.rlp.net/geburtsbriefemainz/team/.

We will collaboratively improve the layout and add content.

## Introductions to the source type

You can find a **list of historiographical texts on "Geburtsbriefe"** in our digital editing **ZOTERO library** (publicly available):

https://www.zotero.org/groups/2503448/dmgk_digital_editing/collections/CA9DTBRB/items/F4UXQC5D/collection


**The following websites explain what type of document "Geburtsbriefe" are and how they relate to other early modern certificates**:

- „Geburtsbrief“. o. J. Genealogie-Tagebuch. Zugegriffen 14. Januar 2021. https://www.genealogie-tagebuch.de/?tag=geburtsbrief.

- LEO BW. o. J. „Mannrechtsbriefe und Geburtsbriefe“. Zugegriffen 14. Januar 2021. https://www.leo-bw.de/themenmodul/sudwestdeutsche-archivalienkunde/archivaliengattungen/urkunden/mannrechtsbriefe-und-geburtsbriefe.

- Wikipedia. 2019. „Geburtsbrief“. In Wikipedia. https://de.wikipedia.org/w/index.php?title=Geburtsbrief&oldid=192098338.

**The historical importance of "Geburtsbriefe" in the context of citizen rights and mobility is explained here:**

- „Einwohner und ihre Rechte“. o. J. Universität Münster. Zugegriffen 14. Januar 2021. https://www.uni-muenster.de/FNZ-Online/sozialeOrdnung/stadtgesellschaft/unterpunkte/einwohner.htm.

- „Rechercheportal UB Mainz: Titel: Studien zur Namenkunde und...“ o. J. Zugegriffen 14. Januar 2021. https://hds.hebis.de/ubmz/Record/HEB076814122.

- Stadtmuseum Ingolstadt. o. J. „Mobilität im 17. Jh.“ Zugegriffen 14. Januar 2021. https://www.ingolstadt.de/stadtmuseum/scheuerer/ing/briefpr1.htm.


## Introduction to early modern German handwriting and print

Most early-modern "Geburtsbriefe" are hand-written documents and may therefore be difficult to read. The old German hand-writing used in these documents is commonly called ["Kurrentschrift"](http://www.kurrentschrift.net/) and to be distinguished from "antiqua" used in Latin or French texts of the time. "Antiqua" looks very much like our present-day "Blockscrift" and is a lot easier to transcribe. In order to get used to "Kurrentschrift", you may want to download a table of characters that can help you identify the letters:

<img src="/Literature%20-%20session%201/1024px-Deutsche_Kurrentschrift.jpg">

Zooming in on your screen also makes old hand-writing a lot more legible.

Many "Geburtsbriefe" of the later 18th century are printed and thus set in ["Frakturschrift"](https://www.typolexikon.de/fraktur-schrift/) with characteristically "broken" letters. Till the mid-20th century, "Frakturschrift" was common in German printing.

For our digital edition, we will focus on printed "Geburtsbriefe" but also include 2 samples of older, hand-written documents.

## Workflow of editing "Geburtsbriefe"

- [x] extract list of brith / apprenticeship letters from the Stadtarchiv Mainz database (already done by Monika)

- [x] map the metadata to CSV to be able to sort the letters by name or date and identify about 100 letters to be scanned (done by Monika)

- [x] ask Stadtarchiv to digitise the selected letters for us (done by Monika)

- [ ] create preliminary transcriptions (??)

- [ ] decide what aspects of the letters to mark up / create an XML schema (input from Jaap's own research project will be helpful)

- [ ] decide what external content to link to the edition: e.g. DNB data for people or professions, or World Historical Gazetteer Data for places?

- [ ] complete transcription and text encoding of sample letters

- [ ] write editorial content (e.g. an introduction to the source type or a historiographical reflection on early modern mobility) for the project site

- [ ] decide on how to display the edition on the web: use JGU XSLT schema for HTML transformation and CSS

- [ ] deploy the edition via GITLAB paces / Jekyll

- [ ] advertise the results


## Possibilities to automate transcriptions with TRANSKRIBUS

When working on larger editions, transcribing documents by hand can be inefficient. One solution is to turn your project into a public humanities project that involves volunteers in the transcription process. Another solution is to use optical character / hand-writing recognition software.
We won't be able to test this in class, but [TRANSKRIBUS](https://readcoop.eu/de/transkribus/) is a very powerful software for character and handwriting recognition and now includes several public training packages for "Kurrentschrift". TRANSKRIBUS uses a machine learning approach and gets better as more people share their own data with the project.
A similar software is called [eScriptorium](https://escripta.hypotheses.org/). Unfortunately, eScriptorium is still under construction and not publicly available at present.

In general, huge edition projects including large research teams may also require a so-called "boilerplate":

[What Is a Boilerplate?](https://www.investopedia.com/terms/b/boilerplate.asp)

[Boilerplate text](https://en.wikipedia.org/wiki/Boilerplate_text)

[Boilerplate code](https://en.wikipedia.org/wiki/Boilerplate_code)

For automation of multiple items of a similar structure, "bash scripts" tend to be used:

[Introduction to automation with Bash scripts](https://opensource.com/article/19/12/automation-bash-scripts)

[Automating workflows using Bash](https://angus.readthedocs.io/en/2019/bash_automation.html)

[Learn bash scripting](https://www.linkedin.com/learning/learning-bash-scripting)

If you want to focus on digital editing in the future, you should know that these concepts exists.
