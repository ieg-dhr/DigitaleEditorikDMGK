# ProjectDocumentation_visual

## Schema-Entscheidungen "graphische Elemente"

### Beschreibung der vorhandenen Elemente/ Metadaten 

Als typische Layoutmerkmale kommen in den Geburtsbriefen Verzierungen und Siegel vor. Je nach Format (Hochformat/Querformat) sind die Verzierungen umfassender und setzen einen Rahmen für den eigentlichen Text. Die Siegel sind entweder aufgedruckt oder angehängt. Die angehängten Siegel wiederum bestehen entweder aus Wachs oder Papier. 
Die Metadaten des Stadtarchivs Mainz zur Erfassung der graphischen Elemente sind in ihrer Formalbeschreibungen nicht konsistent, da Angaben zur Beschaffenheit und Art der Siegel unvollständig und nicht formalisiert sind. Dies gilt ebenso für Angaben zum Ortsindex. Daher konnten diese Metadaten nicht berücksichtigt werden.
Weitere Unklarheiten traten im Zusammenhang mit den Digitalisaten auf. Insbesondere die aufgedruckten Siegel auf Papier sind auf den Digitalisaten schlecht zu erkennnen. Es liegen keine separaten Aufnahmen der angehängten Siegel vor. Durch fehlende Beschreibung oder Titelung der Stadtansichten konnten diese nur nachträglich identifizert werden.
Allerdings war eine ausführliche Annotation aller Verzierungen innerhalb dieser Edition auch nicht vorgesehen, da keine kunsthistorische Fragestellung zugrundegelegt wurde.

### Umsetzung im XML-Schema
Die genaue Anordnung der graphischen Elemente wurde durch das XML-Schema nicht nachgebaut. Innerhalb des Elements "visual_element" wird durch das Attribut "type" mit den Werten "coats_of_arms", "cityscape", "decorations" nach Art unterschieden. Dabei werden die Siegel und Stadtwappen im Gegensatz zu sonstigen "decorations" hervorgehoben, da diese für die Fragestellung der Edition insbesondere wichtig sein könnten. Das Setzen eines Attributs ist Voraussetzung, wenn das Element "visual_element" genutzt werden soll.
Durch das Attribut "location" wird durch entsprechende Werte ("top_left", "top_center", "top_right", "bottom_left","bottom_center", "bottom_right", "center", "frame") die Position der Bildelemente erfasst. Außerdem kann man durch das Attribut "specification" weitere Informationen zu einem Siegel oder einer Stadtansicht ergänzen, bspw. ob diese auf eine bestimmte Zunft oder ein Herrscherhaus hinweisen. Die beiden Attribute können bei einer guten Quellenlage gesetzt werden, müssen aber nicht ausgefüllt sein.
Zusätzlich kann innerhalb des Elements "source description" mit dem Attribut "seal" die Beschaffenheit des Siegels erfasst werden ("wax" oder "printed").



