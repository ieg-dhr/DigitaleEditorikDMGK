## XML/TEI as the established standard in digital editing

XML uses *tags (<>)* similar to HTML. It has more rigid hierarchies / nesting rules but permits the "invention" of additional tags and / or attributes to describe text features.

The great strength of XML therefore is that it is both machine-readable and easily accessible to humans. If element names are well-chosen, just looking at an XML file will tell you a lot about the original text that was encoded.

Example: extract from the encoded body of a letter from the Edward Baker Littlehales collection:

```
        <opener>
			<p><note type="private">Private</note></p>
			<p><address>
                  <addrLine>Ely Place</addrLine>
               </address>
			</p>
		    <p>
			   <date>December 2 1808</date>
			</p>
            <p>
			   <salute>My dear Sir <persName key="per03">Edward</persName>:</salute>
			</p>
		</opener>
               <p>I send you herewith
			   <lb/>this little note, you wished to have
			   <lb/>&#8212; I shall say nothing more, about
			   <lb/>about the <gap/> until I have made
			   <lb/>further enquiries.
		       </p>
        <closer>
			<signed>
			   <p>Yours most <unclear>humbly</unclear>
			   <lb/><persName key="per02">Charles Bushe</persName>
			   </p>
			</signed>
		</closer>   
```
Despite its flexibility, XML has some naming conventions. You will find a very good overview in the [W3Schools tutorial on naming conventions](https://www.w3schools.com/xml/xml_elements.asp).

Here are a few of the naming rules outlined in this tutorial:

    Element names are case-sensitive
    Element names must start with a letter or underscore
    Element names cannot start with the letters xml (or XML, or Xml, etc)
    Element names can contain letters, digits, hyphens, underscores, and periods
    Element names cannot contain spaces
	Any name can be used, no words are reserved (except xml).

*Best Naming Practices:*

* Create descriptive names, like this: <person>, <firstname>, <lastname>.
* Create short and simple names, like this: <book_title> not like this: <the_title_of_the_book>.
* Avoid "-". If you name something "first-name", some software may think you want to subtract "name" from "first".
* Avoid ".". If you name something "first.name", some software may think that "name" is a property of the object "first".
* Avoid ":". Colons are reserved for namespaces (more later).
* Non-English letters like éòá are perfectly legal in XML, but watch out for problems if your software doesn't support them.

## XML syntax rules

XML - like any natural language - has a set of rules for building expressions although the choice of "words" is fairly flexible: 

* Each XML tag that is opened must be closed unless it is an "empty tag". 
* XML tags can only be used in a specific, hierarchical order.
* There are rules for additional statements (attributes) within tags.

The overall structure of an XML file is often called "tree". W3Schools have a [tutorial on XML trees](https://www.w3schools.com/xml/xml_tree.asp) that features the following visualisation:

![XML TREE](https://www.w3schools.com/xml/nodetree.gif)

A valid XML file must at least include the following elements:

![Syntax Pic](https://4.bp.blogspot.com/-wroXCf4Hvm8/XDuWoyB_qkI/AAAAAAAAASM/cHtCTAZ5mTEQ_l-ztn_9cxBx1_OxD1KTgCLcBGAs/s1600/xml_syntax.png)

A more complex structure is necessary if metadata (information ABOUT the file) are to be included. 

## TEI guidelines

A widely recognised attempt to provide guidelines for the use of XML in digital editions has been made by the [Text Encoding Initiative (TEI)](https://tei-c.org/).

The [Text Encoding Initiative](http://www.tei-c.org/index.xml) is a non-profit consortium composed of academic institutions, individual scholars and research project teams from around the world engaged in the maintenance and support of the standard for the encoding electronic texts in the humanities.

<p align="left">
<img src="https://tei-c.org/Vault/Logos/TEIlogo.svg" width="200">
</p>

[TEI: Introducing the Guidelines (official website)](https://tei-c.org/support/learn/introducing-the-guidelines/)

[Einführung in die TEI -- PPT von Christiane Fritze, 2019](https://www.i-d-e.de/wp-content/uploads/2019/11/05_Einf%C3%BChrung-TEI.pdf)

![TEI header](https://faqingperplxd.files.wordpress.com/2013/04/teiheader-min.png?w=840)

[Using a TEI schema in Oxygen (exercise provided by Oxford University)](http://tei.it.ox.ac.uk/Talks/2008-08-kazan/exercise-2.xml)

## Customizing XML/TEI schema

![book on TEI](https://static.openedition.org/covers/OB/oep/426/426-225x270.jpg)[Customizing the TEI -- in: "What is the Text Encoding Initiative?" by Lou Burnard](https://books.openedition.org/oep/692)

[Customizing TEI -- PPT von Stefan Dumont, 2017](https://www.i-d-e.de/wp-content/uploads/2017/11/IDE_2017_TEI-Customization.pdf)

## Example -- TEI-compliant XML in the Letters 1916-1923 project

One of principal goals of *Letters 1916-1923* crowdsourcing project is to collect good quality transcriptions of the letters stored in the digital archive. These transcriptions form a digital scholarly edition and are used as sources for historical and academic studies as well as general reading/consultation. In order to improve the search results and value for research, text transcriptions in *Letters 1916-1923* are encoded in TEI-compliant XML. Moreover, international guidelines developed for the encoding of correspondence have been respected in the creation of the project schema:

* [Towards a Model for Encoding Correspondence in the TEI: Developing and Implementing <correspDesc>](https://journals.openedition.org/jtei/1433)
by Peter Stadler, Marcel Illetschko and Sabine Seifert

* [From crowd sourced collection to digital scholarly edition](https://www.slideshare.net/bleierr/from-crowd-sourced-collection-to-digital-scholarly-edition)
by Roman Bleier and Susan Schreibman
