<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>

    <!-- BESCHREIBUNG, BILD UND TEXT AUF "SOURCE" EBENE -->
    <xsl:template match="source">
        <!-- Jekyll statement --> --- <xsl:for-each select="metadata/digital_surrogate"> layout:
            page title: <xsl:value-of select="@filename"/> permalink: /<xsl:value-of
                select="@filename"/>/ exclude: true --- </xsl:for-each>
        <!-- Metadaten -->
        <xsl:for-each select="metadata/source_description">
            <h3>Ausstellungsort: <xsl:value-of select="@place"/></h3>
            <h3>Ausstellungsdatum: <xsl:value-of select="@date"/></h3>
        </xsl:for-each>
        <xsl:for-each select="edition">
            <h4 align="center">ediert von: <xsl:value-of select="editors/@name"/></h4>
            <h4 align="center">zuletzt bearbeitet: <xsl:value-of
                    select="transcription_info/@last_revision_date"/></h4>
        </xsl:for-each>
        <br/>
        <xsl:for-each select="metadata/digital_surrogate">
            <xsl:variable name="urlVar">
                <xsl:value-of select="@URL"/>
            </xsl:variable>
            <img src="{$urlVar}" valign="top"/>
        </xsl:for-each>
        <br/><br/>
        <!-- HTML-Flex-Container für Digitalisat und Inhalt -->
        <div class="flex-container">
            <div>
                <p>
                    <strong>Graphische Elemente:</strong>
                </p>
                <p padding="10px" style="border: 1px solid #34baaf;">
                <p> Art des Siegels: <xsl:value-of select="metadata/source_description/@seal"/>
                </p>
                <p> Sonstiges: 
                    <xsl:for-each select="content/visual_element">
                    <xsl:value-of select="@specification"/><br/>
                    </xsl:for-each>
                </p>
                </p>
                <br/>
            </div>
        </div>
        <div class="flex-container">
            <div>
                <p>
                    <strong>Transkription:</strong>
                </p>
                <p>
                <xsl:apply-templates select="content/body/div"> 
                </xsl:apply-templates>
                    </p>
            </div>
            <div>
                <p>
                    <strong>Übersetzung:</strong>
                </p>
                <p padding="10px" style="border: 1px solid #34baaf;">
                    <xsl:apply-templates select="translation"/>
                </p>
                <br/>
            </div>
        </div>
    </xsl:template>

    <!-- WHG LINKS AUF EBENE DIV UND TEXT -->

    <xsl:template match="place">
        <a href="{@link}" target="_blank">
            <xsl:value-of select="."/>
        </a>
    </xsl:template>
    
     <!-- LINEBREAKS -->

    <xsl:template match="lb">
        <br/>
    </xsl:template>
    
     <!-- RAHMEN UM VERSCHIEDENE TEXT-TEILE -->
    
    <xsl:template match="div">
        <p padding="10px" style="border: 1px solid #34baaf;">
        <xsl:apply-templates select="text"/>
        </p>
    </xsl:template>
    
</xsl:stylesheet>
