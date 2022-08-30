# Encode a letter from the Littlehales collection based on sample:

In the ["LettersScans"](https://gitlab.rlp.net/teaching-dhlab/dmgk-modul-5b-xml/-/tree/master/Session%201%20-%20XML%20files%20and%20sources/LettersScans_LittlehalesEdition) folder, you will find photographs of two sample letters written by an Anglo-Irish administrator in 1808. Please note that each letter has several pages. These letters are part of the Littlehales collection kept at the University Library Maynooth in Ireland. In 2017, DH students in Maynooth first transcribed and encoded letters from this collection to create a digital scholarly edition. 

Try to transcribe and encode one of the two photographed letters in Oxygen, using the [XML template](https://gitlab.rlp.net/teaching-dhlab/dmgk-modul-5b-xml/-/blob/master/Session%201%20-%20XML%20files%20and%20sources/littlehales-template.xml) as a model. Please also use the (incomplete) transcriptions in the "LettersScans" folder as reading early modern hand-writing can be tricky at first. You may also want to look at the fully transcribed and encoded letters provided in the [XMLfiles_LittlehalesCollection folder](https://gitlab.rlp.net/teaching-dhlab/dmgk-modul-5b-xml/-/tree/master/Session%201%20-%20XML%20files%20and%20sources/XMLfiles_LittlehalesCollection) as a model. 

To encode special characters, please use the UTF-8 numeric character reference instead of that character. Because XML syntax uses some characters for tags and attributes it is not possible to directly use those characters inside XML tags or attribute values. You can find guidelines for correct UTF-8 encoding on the web, e.g. in [13.1 How to use special characters in XML?](https://www.dvteclipse.com/documentation/svlinter/How_to_use_special_characters_in_XML.3F.html).

If you also want to use a schema to validate your file, you have to make sure that the [Littlehales4 RNG](https://gitlab.rlp.net/teaching-dhlab/dmgk-modul-5b-xml/-/blob/master/Session%201%20-%20XML%20files%20and%20sources/littlehales4.rng) file path on your local drive is correctly referenced.

At the moment, the schema location is indicated as being the DOWNLOAD folder on your PC. If placing the schema in this folder does not work, please contact Monika for help.

# Advanced encoding including persons, organisations and events:

If you are already confident with the basics of XML/TEI, you can also encode certain person names, organisation names and events according to the
tags and attributes provided in the [Littlehales Case Study](https://github.com/ieg-dhr/ISS-Mainz/blob/master/3_case-study_annotations.md) created for the ISS 2020.

In [Sinéad's sample letters](https://gitlab.rlp.net/teaching-dhlab/dmgk-modul-5b-xml/-/tree/master/Session%201%20-%20XML%20files%20and%20sources/XMLfiles_LittlehalesCollection), you will find plenty of examples for the correct encoding of people, organisations and events according to our schema,

e.g.

`<persName key="per01">J. Beckett</persName>`

`<persName key="per02">Charles Bushe</persName>`


# Answer the following questions:

* Which parts of the XML template and the sample files could you re-use for your own encoding? Why?

* What information is encoded? What information isn't encoded? Why or why not?

* What XML tags used in the encoding of the Littlehales collection could be used for other
digital editions of correspondence?

# Learn more about the Littlehales collection and the student edition created in 2017:

If you want to know more about the Littlehales collection and the team of MA students from NUI Maynooth
who first photographed and edited it, you may watch the following video:

<div align="left">
      <a href="https://www.youtube.com/embed/wRslCtTPpzc">
         <img src="https://img.youtube.com/vi/wRslCtTPpzc/0.jpg" style="width:100%;">
      </a>
</div>

