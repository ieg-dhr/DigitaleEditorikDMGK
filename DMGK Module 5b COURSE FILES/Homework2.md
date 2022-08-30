**Converting AOR XML into TEI/TEI Lite using XSLT**

It quite often happens that there is a need to convert XML data into another format. This need can arise when one wants to submit all data to a singly query, which requires the data to be in the same format. Moreover, one might want to express the data in a format which is widely known and used (in particular if the original data model is not particularly well documented). 

For the project "[The Archaeology of Reading in Early Modern Europe](www.bookwheel.org)" (AOR) we have made use of our own XML schema, mainly because we found that existing schema's do not offer sufficient possibilities of capturing the data we are interested in. However, it could still be rewarding to publish our data according to the guidelines set by the Text Encoding Initiative (TEI).

In this assignment, you are asked to *transform the data contained in one transcription (amended for this purpose) from the AOR corpus into TEI* (see below, under the header 'sources'). *Make use of the TEI elements and attributes listed below and retain the AOR elements/attributes where necessary*. Decide for yourself when and where you want to make use of attributes - and why!

NB. Only focus on transforming the data in lines 9-18 in the XML file!


*TEI elements and attributes*
- Additions: https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-additions.html
- Hand: https://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-handDesc.html
- Language: https://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-language.html
- Note: https://tei-c.org/release/doc/tei-p5-doc/en/html//examples-note.html#MS (see #10 Manuscript Description)


*Sources*
- The amended AOR XML file: https://github.com/ieg-dhr/-DMGK---Modul-5b-XML/blob/master/Amended%20XML%20for%20homework%20XSLT.xml
- The documentation of the AOR XML schema: https://archaeologyofreading.org/wp-content/uploads/sites/21/2019/04/AOR2_Transcribers_Manual_29012019.pdf
- The original AOR XML file: https://github.com/livesandletters/aor/blob/master/Tusser/00000005.xml
- The digital surrogate on which the transcription is based: https://archaeologyofreading.org/viewer/#aor/PrincetonRB16th99a/frontmatter.flyleaf.002r/image 
- TEI Lite: https://tei-c.org/guidelines/customization/lite/
- TEI: https://tei-c.org/guidelines/

*See also*
- Free online XSL Transformer: https://www.freeformatter.com/xsl-transformer.html
- Reflection on TEI: https://journals.psu.edu/dls/article/view/59715/59912