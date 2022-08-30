<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" encoding="utf-8" indent="yes"/>
   
    <xsl:template match="@*|node()"> <!-- Identity transform (lines 4 to 8) -->
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
    
    <xsl:template match="marginalia">
        <addition>
            <hand hands="{@hand}"/>
            <xsl:apply-templates/>
        </addition>
    </xsl:template>
    
    <xsl:template match="marginalia_text">
        <note>
            <xsl:value-of select="."/> <!-- XPath, selecting current node (https://www.w3schools.com/xml/xpath_syntax.asp)-->
        </note>
    </xsl:template>
</xsl:stylesheet>
    
    
<!-- Another solution which uses a more 'nested' approach based on the original AOR schema 

<xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
        
    <xsl:template match="marginalia">
        <additions>
            <xsl:element name="hand">
                <xsl:attribute name="hands"><xsl:value-of select="@hand"/></xsl:attribute>
                <xsl:element name="position">
                    <xsl:attribute name="place"><xsl:value-of select="language/position/@place" /></xsl:attribute>
                    <xsl:attribute name="book_orientation"><xsl:value-of select="language/position/@book_orientation" /> 
                    </xsl:attribute>
                    <xsl:element name="note"><xsl:value-of select="language/position/marginalia_text"/>
                    </xsl:element>
                </xsl:element> 
            </xsl:element>
            <xsl:element name="translation"><xsl:value-of select="translation"/></xsl:element>
        </additions>
    </xsl:template>
</xsl:stylesheet>

-->
    
<!-- An earlier, faulty attempt. Have a look and try to find out why this doesn't work properly!   
    
    <xsl:template match="marginalia">
        <additions>
            <xsl:element name="hand">
                <xsl:attribute name="hands"><xsl:value-of select="@hand"/></xsl:attribute>
                <xsl:element name="position">
                    <xsl:attribute name="place"><xsl:value-of select="@place" /></xsl:attribute>
                    <xsl:attribute name="book_orientation"><xsl:value-of select="@book_orientation" /></xsl:attribute>
                    <xsl:element name="note"><xsl:value-of select="marginalia_text"/>
                    </xsl:element>
                </xsl:element> 
            </xsl:element>
            <xsl:element name="translation"><xsl:value-of select="translation"/></xsl:element>
        </additions>
    </xsl:template>
</xsl:stylesheet>

-->
    
    
