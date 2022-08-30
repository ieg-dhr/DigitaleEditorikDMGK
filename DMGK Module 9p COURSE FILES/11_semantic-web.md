## Introduction to "linked data" and the "semantic web"

W3C: [What is Linked Data?](https://www.w3.org/standards/semanticweb/data)

> The Semantic Web is a Web of Data — of dates and titles and part numbers and chemical properties and any other data one might conceive of. The collection of Semantic Web technologies (RDF, OWL, SKOS, SPARQL, etc.) provides an environment where applications can query that data, draw inferences using vocabularies, etc. 

> To achieve and create Linked Data, technologies should be available for a common format (RDF), to make either conversion or on-the-fly access to existing databases (relational, XML, HTML, etc). It is also important to be able to setup query endpoints to access that data more conveniently. W3C provides a palette of technologies (RDF, GRDDL, POWDER, RDFa, the upcoming R2RML, RIF, SPARQL) to get access to the data. 

> A typical case of a large Linked Dataset is DBPedia, which, essentially, makes the content of Wikipedia available in RDF. The importance of DBPedia is not only that it includes Wikipedia data, but also that it incorporates links to other datasets on the Web, e.g., to Geonames. By providing those extra links (in terms of RDF triples) applications may exploit the extra (and possibly more precise) knowledge from other datasets when developing an application; by virtue of integrating facts from several datasets, the application may provide a much better user experience.

## Integrating XML and RDF with the XML2RDF tool

https://digicademy.github.io/ws-dh2019-xml2rdf/#/step-1

## Working with XTriples

A generic webservice to extract RDF statements from XML resources. With the XTriples webservice you can crawl XML repositories and extract RDF statements using a simple configuration based on XPATH/XQuery expressions. The webservice can be used with direct POST, form-style POST or GET requests. 

Design principles

    Generic - works on any XML
    Simple - easy to configure
    Powerful - for building complex statements
    Flexible - returns several formats
    RESTful - uses http for request and response

The XTriples webservice was originally developed during the digital humanities research project IBR - Inscriptions in their spatial context (2012-2015). The project was jointly conducted by the Academy of Sciences and Literature | Mainz and the Institute for Spatial Information and Surveying Technology i3Mainz - University of Applied Sciences. It was funded by the German Federal Ministry of Education and Research. 

**Direct POST requests**

You can also submit direct POST requests to https://xtriples.lod.academy/extract.xql

The request body should contain your XTriples configuration. Additionally, you need to send the Content-Type HTTP header with a value of application/xml and the format HTTP header with one of the following values:

| value | result |
| ------ | ------ |
|rdf| 	returns extraction result as RDF|
|turtle| 	returns extraction result in Turtle notation|
|ntriples| 	returns extraction result as N-Triples|
|nquads| 	returns extraction result as N-Quads|
|trix| 	returns extraction result as TriX named graph|
|json |	returns extraction result as JSON-LD|
|svg |	returns extraction result as SVG Graph|
|xtriples| 	returns extraction result as XTriples XML for debugging purposes|

If you send no format header, the format defaults to rdf.

**GET requests**

The most compact way to use the service is with HTTP GET requests. This is the URL scheme:

https://xtriples.lod.academy/extract.xql?configuration=###YOUR_URI###&format=###FORMAT_KEYWORD###

The keywords for the format parameter are the same as for direct POST requests (see above).
Configuration Template

This is the basic structure of a XTriples configuration:

<xtriples>
    <configuration>
        <vocabularies>
            <vocabulary prefix="###MY_NAMESPACE_PREFIX###" uri="###MY_NAMESPACE_URI###"/>
            <vocabulary prefix="rdf" uri="http://www.w3.org/1999/02/22-rdf-syntax-ns#"/>
        </vocabularies>
        <triples>
            <statement>
                <subject prefix="###MY_NAMESPACE_PREFIX###">###XPATH###</subject>
                <predicate prefix="rdf">about</predicate>
                <object type="literal">###XPATH###</object>
            </statement>
        </triples>
    </configuration>
    <collection uri="###MY_COLLECTION_URI###">
        <resources uri="{###XPATH###}"/>
    </collection>
</xtriples>

## Contributing data to WHG

See [12_hands-on.md](/12_hands-on.md) and further information on "Linked Places" in the "web content" folder!
