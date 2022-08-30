
**Metadaten:**

- Titel

- Quellenidentifier (Gyyyymmdd oder Lyyyymmdd)

- Bestandshaltende Institution (Link, Signatur)

- Copyright / Lizenz

- Edition: Person(en), Institution, Datum

- Revisionen

- Datierung

- Objektart

- (Vor-)Provenienz

- Ausstellungsort

- Person der Ausstellung

- Verfassungssprache

- Materialangaben

- Siegel/Kein Siegel bzw. angeheftet/ausgedruckt

**Annotationen:**

a) Text

- Identifier für Personen und Orte????

- Allgemeine tags:

    - <p>
    - <pb> -->  @n=" ..."
    - <lb>
    - <hi>
    - <s>
    - <unclear>
    - <gap>


- Textstruktur:

    - <body>
    - <text>
    - <opening>
    - <closer> 
    - <signature> 


- Anmerkungen:

    - <marginalia>
    - <foreign>; z.B. Signatur vom Archiv

- Attribute bezogen auf Textstyling/Autorenschaft:

    - @style =&quot;written&quot;, &quot;printed&quot; -\&gt; @type=&quot;kurrent&quot;, &quot;fracture font&quot;
    - @who -\&gt;Autorenschaft
    - @language

- Personen/Orte

    - <place> @func="geburtsort", "ausstellungsort", "zielort", "sonstige Orte", Normdaten einbeziehen (Bsp: <place ref="http:/....">Walden</persName>)
    - <personName> @id=".." -> Identifier für Personen erstellen? Attribute @role="mother" @gender="male", "female", @age"..", 
    - @denomination


b) Visual Elements
- <seal>
    - @style = &quot;&quot;
    -  @position = &quot;left/right/center&quot;