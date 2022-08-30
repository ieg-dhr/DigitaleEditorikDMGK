<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    <xsl:template match="/">
        <html>
            <body>
                <h1>Cookbook</h1>
                <xsl:for-each select="/cookbook/recipe">
                    <h2><xsl:value-of select="@name"/></h2>
                        <table border="1">
                            <tr bgcolor="#ff9900">
                                <th>Ingredients</th>
                            </tr>
                            <xsl:for-each select="ingredients"> 
                                <xsl:sort select="@name"/> <!-- Up until this point, the XSLT file in identical to the previous one that we've seen-->
                                <xsl:choose> 
                                    <xsl:when test="contains(@name, 'cream')"> <!-- Recall the syntax of the XPath query that we seen: //person[contains(@name, "Romul")]-->
                            <tr>
                                <td bgcolor="#ff1500"><xsl:value-of select="@name"/></td>
                            </tr>
                                </xsl:when>
                                    <xsl:otherwise>
                                        <tr>
                                            <td><xsl:value-of select="@name"/></td>
                                        </tr>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:for-each>
                        </table>
                    <br/>
                        <p><xsl:value-of select="instructions"/></p>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>

<!--Stylesheet to show the choose function-->