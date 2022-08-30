# Deploying XML on the web

## From XML to HMTL

As we have explained in previous sessions, XML is a great basis for creating digital editions that are displayed on the web.

In his session on **XSLT**, Jaap showed you how to **transform XML to HTML** and include visual features like tables and colours.

While XML is very much functional / structural, HTML places a greater emphasis on **how things will look**. You can define different types of headlines in HTML that may then be displayed in different fonts or sizes. And you can include elements like images or videos or, perhaps most importantly, hyperlinks to enrich your data.

## CSS and the challenge of "making things look nice"

In many cases, however, you will find that the graphic features provided by HTML are not quite enough to design a modern website. HMTL is rather **static**, and if you want to change the colours of all headlines in your digital edition every month, you will be facing a lot of work when updating your HTML code directly. Going back to each and every `<h1>` headline tag, for instance, to adjust them would be utterly tedious, which is why you can apply a so-called **"Cascading Style Sheet" (CSS)** to your HMTL and change the display of HTML features on the fly.

If you have worked with **WORDPRESS**, you may be aware that there are options to **add custom CSS** even when you are using a ready-made template. These CSS additions can give a blog a "personal touch".

As always, we recommend the [W3 Schools Tutorial](https://www.w3schools.com/css/css_syntax.asp) as a starting point for beginners. The structure of CSS files is different from XML and HTML in as far as it consists of a collection of **rule sets** that can be freely combined and extended.

The basic syntax of a CSS rule set looks like this:

![model of CSS rule set](https://www.w3schools.com/css/selector.gif)

- [ ] The selector points to the HTML element you want to style. 
- [ ] The declaration block contains one or more declarations separated by semicolons.
- [ ] Each declaration includes a CSS property name and a value, separated by a colon.
- [ ] Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.
- [ ] Example

In the following example all `<p>` elements will be center-aligned, with a red text color:

```
p {
  color: red;
  text-align: center;
} 
```

In our hands-on session on **web deployment**, you will find additional information on working with CSS, e.g. more details about colouring texts and backgrounds.

## Javascript for interactive display

**Javascript** is the third important aspect of web publishing that you ought to know as a digital humanist. Javascript is used for mobile, interactive features such as zoomable maps or clickable network diagrams. I can also be used to create pop-up windows with background information in your digital edition.

Here is a sample Javascript "layers" file I used for a zoomable map I created for the IEG jubilee exhibition in September 2020:

https://github.com/ieg-dhr/ieg-jubilee/blob/master/ieg-jubilee-map/layers/MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1.js

My file has a fairly repetitive structure because it contains many similar map features and looks like this:

```
var json_MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1 = {
"type": "FeatureCollection",
"name": "MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "label": "32", "institute": "Max-Planck-Institut für Silikatforschung", "place": "Bad Königshofen", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 10.468511581420898, 50.30151176935793 ] } },
{ "type": "Feature", "properties": { "label": "18", "institute": "Max-Planck-Institut für Biophysik", "place": "Frankfurt", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 8.669629096984863, 50.097193933128494 ] } },
{ "type": "Feature", "properties": { "label": "16", "institute": "Max-Planck-Institut für Hirnforschung, Abteilung für klinische Psychiatrie und Konstitutionsforschung", "place": "Marburg", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 8.764944076538086, 50.813527796495642 ] } },
{ "type": "Feature", "properties": { "label": "17", "institute": "Max-Planck-Institut für Hirnforschung", "place": "Gießen", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 8.673877716064451, 50.586288446443632 ] } },
{ "type": "Feature", "properties": { "label": "21", "institute": "Max-Planck-Institut für ausländisches öffentliches Recht und Völkerrecht", "place": "Heidelberg", "mix": "MPI für ausländisches öffentliches Recht und Völkerrecht" }, "geometry": { "type": "Point", "coordinates": [ 8.672922849655151, 49.419963247003615 ] } },
{ "type": "Feature", "properties": { "label": "31", "institute": "Generalverwaltung der Max-Planck-Gesellschaft", "place": "München", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 11.581397652626038, 48.141209230352061 ] } },
{ "type": "Feature", "properties": { "label": "10a", "institute": "Zentralverwaltung der Max-Planck-Gesellschaft", "place": "Göttingen", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 9.951553344726561, 51.545908033765457 ] } },
{ "type": "Feature", "properties": { "label": "11b", "institute": "Max-Planck-Institut für physikalische Chemie", "place": "Göttingen" }, "geometry": { "type": "Point", "coordinates": [ 9.932670593261719, 51.533950009942004 ] } },
{ "type": "Feature", "properties": { "label": "11c", "institute": "Forschungsstelle von Sengbusch in der Verwaltung der Max-Planck-Gesellschaft", "place": "Göttingen" }, "geometry": { "type": "Point", "coordinates": [ 9.94537353515625, 51.53800754877571 ] } },
{ "type": "Feature", "properties": { "label": "11d", "institute": "Institut für Instrumentalkunde in der Verwaltung der Max-Plank-Gesellschaft", "place": "Göttingen" }, "geometry": { "type": "Point", "coordinates": [ 9.935760498046875, 51.546548553515585 ] } },
{ "type": "Feature", "properties": { "label": "11f", "institute": "Max-Planck-Institut für Strömungsforschung", "place": "Göttingen" }, "geometry": { "type": "Point", "coordinates": [ 9.915504455566404, 51.537153360132571 ] } },
{ "type": "Feature", "properties": { "label": "10b", "institute": "Gemeinsame Einrichtungen, gemeinsame Personal und Sachausgaben für alle Max-Planck-Institute", "place": "Göttingen" }, "geometry": { "type": "Point", "coordinates": [ 9.918133020400999, 51.537600476499939 ] } },
{ "type": "Feature", "properties": { "label": "11g", "institute": "Max-Planck-Institut für Physik, Abt. Astrophysik", "place": "Göttingen" }, "geometry": { "type": "Point", "coordinates": [ 9.928550720214844, 51.542918822373899 ] } },
{ "type": "Feature", "properties": { "label": "11h", "institute": "Max-Planck-Institut für Physik", "place": "Göttingen", "mix": "Max-Planck-Institut für Physik" }, "geometry": { "type": "Point", "coordinates": [ 9.936447143554688, 51.545267504998435 ] } },
{ "type": "Feature", "properties": { "label": "11i", "institute": "Medizinische Forschungsanstalt der Max-Planck-Gesellschaft", "place": "Göttingen" }, "geometry": { "type": "Point", "coordinates": [ 9.940910339355469, 51.535231377071241 ] } },
{ "type": "Feature", "properties": { "label": "11j", "institute": "Institut für Instrumentenkunde in der Verwaltung der Max-Planck-Gesellschaft", "place": "Göttingen" }, "geometry": { "type": "Point", "coordinates": [ 9.955587387084961, 51.539929414609297 ] } },
{ "type": "Feature", "properties": { "label": "09", "institute": "Institut für Ionosphärenforschung in der Verwaltung der Max-Planck-Gesellschaft", "place": "Lindau", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 10.119287967681885, 51.647770587938339 ] } },
{ "type": "Feature", "properties": { "label": "11a", "institute": "Max-Planck-Institut für Strömungsforschung", "place": "Göttingen", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 9.931401908397675, 51.527304007764954 ] } },
{ "type": "Feature", "properties": { "label": "07", "institute": "Gmelin-Institut für anorganische Chemie und Grenzgebiete in der Max-Planck-Gesellschaft", "place": "Clausthal-Zellerfeld", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 10.362526774406433, 51.804455333940552 ] } },
{ "type": "Feature", "properties": { "label": "03", "institute": "Max-Planck-Institut für Meeresbiologie", "place": "Wilhelmshaven-Seedeich", "mix": "MPI für Meeresbiologie" }, "geometry": { "type": "Point", "coordinates": [ 8.09967041015625, 53.531329471950947 ] } },
{ "type": "Feature", "properties": { "label": "05", "institute": "Max-Planck-Institut für Züchtungsforschung", "place": "Coppenbrügge", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 9.548492431640625, 52.118839223228761 ] } },
{ "type": "Feature", "properties": { "label": "04", "institute": "Max-Planck-Institut für Tierzucht und Tierernährung", "place": "Neustadt am Rübenberge", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 9.461288452148436, 52.506609284480099 ] } },
{ "type": "Feature", "properties": { "label": "08", "institute": "Institut für landwirtschaftliche Arbeitswissenschaft und Landtechnik in der Max-Plank-Gesellschaft", "place": "Imbshausen", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 10.04150390625, 51.760190496399375 ] } },
{ "type": "Feature", "properties": { "label": "14", "institute": "Max-Planck-Institut für Kohleforschung", "place": "Mülheim", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 6.885112524032592, 51.417161105605665 ] } },
{ "type": "Feature", "properties": { "label": "15", "institute": "Max-Planck-Institut für Eisenforschung", "place": "Düsseldorf", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 6.813492178916931, 51.239693883430817 ] } },
{ "type": "Feature", "properties": { "label": "06", "institute": "Max-Planck-Institut für Bastfaserforschung", "place": "Bielefeld", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 8.538436889648436, 52.015740031155794 ] } },
{ "type": "Feature", "properties": { "label": "13", "institute": "Max-Planck-Institut für Hirnforschung, Abteilung Tumorforschung", "place": "Bochum", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 7.218360900878906, 51.481382896100975 ] } },
{ "type": "Feature", "properties": { "label": "12", "institute": "MPI für Arbeitsphysiologie", "place": "Dortmund", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 7.462463378906249, 51.516861667940589 ] } },
{ "type": "Feature", "properties": { "label": "19", "institute": "Max-Planck-Institut für Chemie", "place": "Mainz", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 8.238785862922668, 49.992025613527254 ] } },
{ "type": "Feature", "properties": { "label": "01", "institute": "Hydrobiologische Anstalt der Max-Planck-Gesellschaft", "place": "Plön", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 10.433986186981201, 54.160188228349035 ] } },
{ "type": "Feature", "properties": { "label": "24", "institute": "Max-Planck-Institut für Metallforschung", "place": "Stuttgart", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 9.081659317016602, 48.7466355765754 ] } },
{ "type": "Feature", "properties": { "label": "23", "institute": "Astronomisches Recheninstitut", "place": "Heidelberg", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 8.687862753868103, 49.417754276955151 ] } },
{ "type": "Feature", "properties": { "label": "22", "institute": "Max-Planck-Institut für medizinische Forschung", "place": "Heidelberg", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 8.667740821838379, 49.418260289932057 ] } },
{ "type": "Feature", "properties": { "label": "20", "institute": "Max-Planck-Institut für Züchtungsforschung", "place": "Ladenburg", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 8.607101440429688, 49.473924726849205 ] } },
{ "type": "Feature", "properties": { "label": "02", "institute": "Max-Planck-Institut für ausländisches und internationales Privatrecht", "place": "Hamburg", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 9.994779825210571, 53.562855377932479 ] } },
{ "type": "Feature", "properties": { "label": "28", "institute": "Max-Planck-Institut für Physik", "place": "Hechingen", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 8.964500427246094, 48.350887529074754 ] } },
{ "type": "Feature", "properties": { "label": "30", "institute": "Forschungsstelle für Physik der Stratosphäre in der Max-Planck-Gesellschaft", "place": "Weißenau", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 9.598875045776367, 47.763618460289401 ] } },
{ "type": "Feature", "properties": { "label": "29", "institute": "Forschungsstelle für Spektroskopie in der Max-Planck-Gesellschaft", "place": "Hechingen", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 8.9703369140625, 48.350431205112493 ] } },
{ "type": "Feature", "properties": { "label": "25", "institute": "Gmelin-Institut für anorganische Chemie und Grenzbetriebe", "place": "Tübingen", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 9.049816131591797, 48.527838974114474 ] } },
{ "type": "Feature", "properties": { "label": "27", "institute": "Max-Planck-Institut für Biochemie", "place": "Tübingen", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 9.058442115783691, 48.528229760628591 ] } },
{ "type": "Feature", "properties": { "label": "26", "institute": "Max-Planck-Institut für Biologie", "place": "Tübingen", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 9.05449390411377, 48.528627649253728 ] } },
{ "type": "Feature", "properties": { "label": "33", "institute": "Gmelin-Institut für anorganische Chemie und Grenzgebiete in der Max-Plank-Gesellschaft", "place": "Clausthal-Zellerfeld", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 10.362526774406433, 51.804455333940552 ] } },
{ "type": "Feature", "properties": { "label": "34", "institute": "Gmelin-Institut für anorganische Chemie und Grenzbetriebe (Max-Planck-Gesellschaft)", "place": "Tübingen", "mix": null }, "geometry": { "type": "Point", "coordinates": [ 9.049816131591797, 48.527838974114474 ] } }
]
}
```
You can see that the file contains information on certain **geometries** (in this case: point data) I am displaying on my map, but it also contains information on the **labels** that ought to be linked with each point. 

How these points and labels ought to "behave" on the Open Street map "base map" I am using for the background is defined in another file:

https://github.com/ieg-dhr/ieg-jubilee/blob/master/ieg-jubilee-map/layers/layers.js

The actual **interactive map** looks like this: https://monikabarget.github.io/GeoHumTutorials/qgis2web_IEG_jubilee_map/index.html

It has the following options:

- [ ] It is zoomable, that means it can be enlarged to reveal more detailed views.
- [ ] Users can display or hide individual layers of point data.
- [ ] The map has pop-up labels with additional information that user can activate by clicking on an individual point.

Comparing what you see online to what is coded in my Javascript file will help you understand the logic of interactive web features.

## Easy web-deployment with Jekyll / GITHUB pages

The biggest challenge in digital editing is not that team members lack the technical skills to build a beautiful and accessible website, but that time and money are scarce. This also implies that hardly any research group can afford to maintain their own servers but need to rely on university / library services which are usually limited. Therefore, you should not always do what you CAN do but carefully consider costs and sustainability.

![Jekyll logo](https://jekyllrb.com/img/logo-2x.png)

An easy and cheap way to deploy contents on the web is to use [Jekyll](https://jekyllrb.com/), which is also intigrated in a service called GITHUB pages. This service is also available to us through GITLAB and will be used to publish our small student edition in the summer.

Members of the Mainz Academy of Science have provided [slides that explain the publishing workflow with Jekyll](https://docs.google.com/presentation/d/1yONX2vXhHUHjf7_XvYeZNhuu9eUNdiVnaLPLsKag9As/edit#slide=id.p). We will cover this in more detail in the summer term.

## TEIViewer for web display

Another tool for displaying XML on the web is the [TEIViewer](http://teiviewer.org/about/) first released in 2007. It is based on XSLT and CSS. The TEIViewer needs to be downloaded as a ZIP file from http://teiviewer.org/download/. 

## What digital editions can do that printed editions cannot

If you do not only display your digital edition as a static web site but make good use of the possibilities of modern web design, you can create a lot of interactive features that are not only nice to look at but really useful for research.

One example is the possibility to display different versions of a text next to each other and to facilitate comparison by highlighting individual lines.

The ["Versioning Machine"](http://v-machine.org/) created by Susan Schreibman and her team is one example of an XML-based **digital text comparison tool**.

You can, for example, use the *Versioning Machine* to compare different manuscripts of the ["The Prophecy of Merlin"](http://v-machine.org/samples/prophecy_of_merlin.xml):

> There are three MS versions of this poem transcribed by James M. Dean and made publicly available through http://www.lib.rochester.edu/camelot/. Versions are from: Trinity College Dublin MS 516 fol. 115r; Oxford University, Bodleian Library MS 6943 fol. 78r; Magdalene College. Cambridge MS 1236 fol. 91r. Transcriptions were provided by James M. Dean and encoded by Susan Schreibman. 

In our **hands-on session**, you will have the chance to dive deeper into this tool and prepare your own HTML file for web deployment.
