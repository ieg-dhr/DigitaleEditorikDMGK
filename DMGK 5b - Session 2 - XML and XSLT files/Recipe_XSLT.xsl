<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    <xsl:template match="/"> <!-- apply template to entire document -->
        <html> <!-- HTML tag, in this case we want an HTML file as the output-->
            <body>
                <h1>Cookbook</h1>
                <xsl:for-each select="/cookbook/recipe">
                    <h2><xsl:value-of select="@name"/></h2>
                        <table border="1">
                            <tr bgcolor="#9acd32">
                                <th>Ingredients</th>
                            </tr>
                            <xsl:for-each select="ingredients"> <!-- We can only mention the 'ingredients element' here, since we are already in the path /cookbook/recipe-->
                                <xsl:sort select="@name" order="ascending"/> <!-- sort alphabetically-->
                            <tr>
                                <td><xsl:value-of select="@name"/></td>
                            </tr>
                            </xsl:for-each> <!-- make sure to properly nest the xsl elements and close them as well!-->
                        </table>
                    <br/>
                        <p><xsl:value-of select="instructions"/></p>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>