## Transforming XML to html

Digital editions consists in many -- often hundreds of -- XML files. For web publication, these XML files need to be transformed into HTML. In other words, XML tags need to be mapped to HMTL tags. The difference between XML and HTML is that XML denotes content, whereas HMTL marks up structure and layout. 

Although there is ready-made software to transform XML to HTML, it is best to use costum XSLT as the software options are rather limited.


## XSLT processors

To run XSLT, a so-called "XSLT processor" is needed. In the Oxygen XML editor, several Saxon processors are directly available to users. The [Saxon](https://www.saxonica.com/documentation9.5/about/whatis.html) package is a collection of tools for processing XML documents. 

The main components are:


    An XSLT 2.0 processor, which can be used from the command line, or invoked from an application, using a supplied API. This can also be used to run XSLT 1.0 stylesheets.

    An XPath 2.0 processor accessible to applications via a supplied API.

    An XQuery 1.0 processor that can be used from the command line, or invoked from an application by use of a supplied API. This includes support for XQuery Updates 1.0 which is now a W3C Recommendation.

    An XML Schema 1.0 processor. This can be used on its own to validate a schema for correctness, or to validate a source document against the definitions in a schema. It is also used to support the schema-aware functionality of the XSLT and XQuery processors. Like the other tools, it can be run from the command line, or invoked from an application.

    As well as providing full implementations of the stable specifications listed above, Saxon also has a track record of early implementation of forthcoming standards. Saxon 9.4 offers a complete implementation of XML Schema 1.1, which is now in the final stages of standardization. It also implements many features from the forthcoming XSLT 3.0, XQuery 3.0, and XPath 3.0 working drafts which are still at an earlier stage of development.

    On the Java platform, when using XSLT, XPath, or XML schema validation, Saxon offers a choice of APIs. If you need portability across different vendor's tools, you can use the JAXP API for XSLT, XPath, and XML Schema processing, and the XQJ interface for XQuery. On the other hand, if you want a more integrated and complete API offering access to all Saxon's facilities, the s9api interface is recommended. You can also dive down deeper into the Saxon internals if you need to: there has been no particular attempt to make interfaces private, and all public interfaces are documented in the JavaDoc. Clearly, the deeper you go, the greater the risk of interfaces changing in future releases.

    On the .NET platform, Saxon offers an API that enables close integration with other services available from .NET, notably the XML-related classes in the System.Xml namespace. It isn't possible to use Saxon as a transparent plug-in replacement for the System.Xml.Xsl processor, because the API for the Microsoft engine using concrete classes rather than abstract interfaces. However, it is possible to use it as a functional replacement with minor changes to your application code.


It is especially useful in digital editing because Saxon-HE-Jars can be used for XSL transformations in Java:

[How to run Saxon XSLT transformation in Java](https://stackoverflow.com/questions/40181386/how-to-run-saxon-xslt-transformation-in-java)

[Running XSLT from the Command Line](https://www.saxonica.com/documentation9.5/using-xsl/commandline.html)

## Run XSLT in the windows command line

If your Oxygen licence has expired, you may want to consider running XSLT transformations in the windwos command line:

https://dev.pageseeder.com/get_started/tutorials/how_to_run_xslt_from_the_command_line.html


## Batch-transformation of XML

There are several tools that permit the batch transformation of XML collections:

1. [XML buddy](https://www.xml-buddy.com/valbuddy/help/transform-xml-batch-html.htm)
2. [Oxygen XML editor](https://www.oxygenxml.com/doc/versions/22.1/ug-editor/topics/apply-batch-transformation.html)
3. [Batch transformation with XSLT](https://dh.obdurodon.org/transformation-scenario.xhtml)

# Video tutorials to improve your knowledge of XSLT

The videos below are part of the [#dariahTeach platform](http://teach.dariah.eu), an open-source, community-driven platform for high quality teaching and training materials for the digital arts and humanities. It is part of the course Digital Scholarly Editions: Manuscripts, Texts and TEI Encoding. 

## Video I: introduction to XSLT:

This video features Syd Bauman (Northeastern University, USA) and Martin Holmes (University of Victoria, Canada) talking about XSLT (eXtensible Stylesheet Language for Transformation), the tool used to transform XML.

<div align="left">
      <a href="https://youtu.be/0yKvq4pkhaQ">
         <img src="https://img.youtube.com/vi/0yKvq4pkhaQ/0.jpg" style="width:100%;">
      </a>
</div>

## Video II: working with Xpath:

This video features Martin Holmes (University of Victoria, Canada) teaching XPath, the language for navigating XML.

<div align="left">
      <a href="https://youtu.be/sH0Xt4aknos">
         <img src="https://img.youtube.com/vi/sH0Xt4aknos/0.jpg" style="width:100%;">
      </a>
</div>

## Video III: templates and namespaces:

This video features Syd Bauman (Northeastern University, USA) teaching about some of the details of XSLT.

<div align="left">
      <a href="https://youtu.be/M1MXwjF-aSA">
         <img src="https://img.youtube.com/vi/M1MXwjF-aSA/0.jpg" style="width:100%;">
      </a>
</div>

## Video IV: XSLT processing / XML transformation into different formats:

This video features Syd Bauman (Northeastern University, USA) teaching how to use XSLT to process an XML file and transform it into a HTML file. 

<div align="left">
      <a href="https://youtu.be/fYuwIOK302U">
         <img src="https://img.youtube.com/vi/fYuwIOK302U/0.jpg" style="width:100%;">
      </a>
</div>

## Video V: working with new elements (in HTML) -- EXERCISE:

This video features Syd Bauman (Northeastern University, USA) and Martin Holmes (University of Victoria, Canada) explaining the steps for an XSLT exercise on the course.

<div align="left">
      <a href="https://youtu.be/SWgEKiLqzNM">
         <img src="https://img.youtube.com/vi/SWgEKiLqzNM/0.jpg" style="width:100%;">
      </a>
</div>

# How to run XSLT

In order to write and run XSLT, you can use different software. One option is Oxygen, but you may also want to try the [XSLT edit mode](https://qxmledit.org/tutorials/xsltmode.pdf) in QXmledit.

To use XSLT for actual file transformation, you can either use software installed on your own device or a browser-based tool like the [Free Formatter XSL Transformer](https://www.freeformatter.com/xsl-transformer.html).

