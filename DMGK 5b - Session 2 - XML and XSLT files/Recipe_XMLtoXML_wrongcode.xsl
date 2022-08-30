<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" encoding="utf-8"/>
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
    
        <xsl:template match="ingredients">
        <xsl:element name="{name(@name)}">
            <xsl:value-of select="@name"/> 
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>


    

