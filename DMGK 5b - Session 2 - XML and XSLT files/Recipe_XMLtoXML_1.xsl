<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" encoding="utf-8" indent="yes"/>
    
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template> 
    
    <xsl:template match="recipe[@name='Cheesecake']">
        <xsl:copy>
            <xsl:copy-of select="@*"/>
            <xsl:copy-of select="node()"/>
            <xsl:element name="Equipment">Oven
            </xsl:element>
        </xsl:copy>
    </xsl:template>
    
</xsl:stylesheet>

  
<!-- Add a child element
        <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template> 
        
        <xsl:template match="recipe">
        <xsl:copy>
            <xsl:copy-of select="@*"/>
            <xsl:copy-of select="node()"/>
            <xsl:element name="Equipment">Oven
            </xsl:element>
        </xsl:copy>
    </xsl:template>
</xsl:stylesheet>

-->

<!-- Add a child element to a specific recipe
        <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template> 
        
        <xsl:template match="recipe[@name='Cheesecake']">
        <xsl:copy>
            <xsl:copy-of select="@*"/>
            <xsl:copy-of select="node()"/>
            <xsl:element name="Equipment">Oven
            </xsl:element>
        </xsl:copy>
    </xsl:template>
</xsl:stylesheet>

-->    
