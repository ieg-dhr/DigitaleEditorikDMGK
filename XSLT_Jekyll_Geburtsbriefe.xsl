<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:template match="/">
        <!-- Jekyll statement --> --- <xsl:for-each select="source/metadata/digital_surrogate">
            layout: page title: <xsl:value-of select="@filename"/> permalink: /<xsl:value-of
                select="@filename"/>/ exclude: true --- </xsl:for-each>
        <!-- Metadaten -->
        <xsl:for-each select="source/metadata/source_description">
            <h4>Ausstellungsort: <xsl:value-of select="@place"/></h4>
            <h4>Ausstellungsdatum: <xsl:value-of select="@date"/></h4>
        </xsl:for-each>
        <xsl:for-each select="source/edition">
            <h3 align="center">ediert von: <xsl:value-of select="editors/@name"/></h3>
            <h3 align="center">zuletzt bearbeitet: <xsl:value-of
                    select="transcription_info/@last_revision_date"/></h3>
        </xsl:for-each>
        <!--HTML-Flex-Container für Digitalisat und Inhalt -->
        <br/>
        <xsl:for-each select="source/metadata/digital_surrogate">
            <xsl:variable name="urlVar">
                <xsl:value-of select="@URL"/>
            </xsl:variable>
            <img src="{$urlVar}" valign="top"/>
        </xsl:for-each>
        <hr/>
        <div class="flex-container">
            <div><p><strong>Graphische Elemente:</strong></p>
                <p><xsl:apply-templates select="//visual_element"/></p><br/>
            </div>
        </div>
        <hr/>
            <div class="flex-container">
            <div><p><strong>Transkription:</strong></p> <p><xsl:apply-templates select="//div">
                    </xsl:apply-templates>
                <!-- KEEP line break -->
                    <br><xsl:apply-templates select="//lb" /></br>
                <!-- include WHG links -->
                <xsl:for-each select="//place">
                    <xsl:variable name="urlPlace">
                        <xsl:value-of select="@link"/>
                    </xsl:variable>
                    <a href="{$urlPlace}" target="_blank"><xsl:apply-templates select="//place" /></a>
                </xsl:for-each>
            </p><br/>
            </div>
            <div><p><strong>Übersetzung:</strong></p>
                <p><xsl:apply-templates select="//translation"/></p><br/>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
