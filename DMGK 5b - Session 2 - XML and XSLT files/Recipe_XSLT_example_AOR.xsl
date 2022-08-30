<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    <xsl:template match="/">
        <html>
            <body>
                <h1>People, books and locations in marginal notes</h1>
                <xsl:apply-templates select='transcription/page'/>
                <xsl:apply-templates select='transcription/annotation/marginalia'/>
                
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="transcription/page">
        
        Page number: <xsl:value-of select="@pagination"/> and file name: <xsl:value-of select="@filename"/>
       
    </xsl:template>
    
    <xsl:template match="transcription/annotation/marginalia">
        
        <h2>Marginal note</h2>
                  
        <p style="margin-left: 40px">
        <h3>Books</h3>
        <xsl:apply-templates select='language/position/book'/>
        </p>
        
        <p style="margin-left: 40px">
        <h3>Locations</h3>
        <xsl:apply-templates select='language/position/location'/>
        </p>
        
        <p style="margin-left: 40px">
            <h3>People</h3>
            <xsl:apply-templates select='language/position/person'/>
            <br/>
        </p>
        
    </xsl:template>
    
    <xsl:template match="language/position/person">
        <ol><xsl:value-of select="@name"/></ol>
    </xsl:template>
    
    <xsl:template match="language/position/book">
        <ol><xsl:value-of select="@title"/></ol>
    </xsl:template>
    
    <xsl:template match="language/position/location">
        <ol><xsl:value-of select="@name"/></ol>
    </xsl:template>
    
</xsl:stylesheet>
    
    
    


<!--Stylesheet to show the apply templates function-->