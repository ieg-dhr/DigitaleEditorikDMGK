<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:tei="http://www.tei-c.org/ns/1.0" exclude-result-prefixes="#default">
  <xsl:output method="html"/> 
  
  <!-- Jekyll statement -->
  <xsl:template match="tei:TEI">
  ---
  layout: page
  title: <xsl:apply-templates select="tei:idno"/>
  permalink: /<xsl:apply-templates select="tei:idno"/>/
  exclude: true
  ---
  
    <!-- Body -->
      <body>
        <h1 align="center"><xsl:apply-templates select="tei:title"/></h1>
        <h2 align="center"><xsl:apply-templates select="tei:orgName"/></h2>
        <p><xsl:apply-templates select="tei:text"/></p>
      </body>
  </xsl:template>
</xsl:stylesheet>