<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" encoding="utf-8" indent="yes"/>
    
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>    
    
    <xsl:template match="recipe">
        <xsl:copy>
            <xsl:copy-of select="@*"/>
            <xsl:where-populated>
                <ingredients>
                    <xsl:apply-templates select="ingredients"/>
                </ingredients>
            </xsl:where-populated>
            <xsl:apply-templates select="* except ingredients"/>
        </xsl:copy>
    </xsl:template>
    
    <xsl:template match="ingredients">
        <name>
            <xsl:value-of select="@name"/>
        </name>
    </xsl:template>
</xsl:stylesheet>
    
    
