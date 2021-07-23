# Projektdokumentation Text

### Encoding-Entscheidungen

- In unserem Editionsprojekt beschäftigten wir uns mit verschiedensprachigen Geburts- und Lehrbriefen aus der frühen Neuzeit. Diese Mehrsprachigkeit führte dazu, dass wir uns neben den diplomatischen Transkriptionen der Dokumente im Falle von französischen und lateinischen Texten für die Erstellung von Übersetzungen entschieden, um die Auseinandersetzung mit den Dokumenten niedrigschwellig zugänglich zu machen. Im Schema berücksichtigen wir dies durch die Erfassung der Transkriptionen im body-Element und der Übersetzung im translation-Element.

- Während das Encoding der Übersetzung im *translation*-Element als zusammenhängender String (PCDATA) erfasst wird, ist die Erfassung der Transkriptionen in die verschiedenen Bestandteile des Briefs (*section*) unterteilt. Diese Bestandteile besitzen ein Attribut, das ihre Rolle im Dokument deutlich macht: Fließtext (*text*), Unterschrift (*signature*) oder Randnotiz (*marginalia*).

- Da in den Geburts- und Lehrbriefen mitunter sowohl gedruckte als auch handschriftliche Elemente vorkommen, kann die *section* in einzelne Textbereiche (*text*) unterteilt werden, die sich hinsichtlich ihrer Methoden, Sprache oder Schriftart unterscheiden. Dieses *text*-Element muss mit den Attributen *method* (written / printed), *hand* (Antiqua / Kurrentschrift / Frakturschrift) und *language* (German / French / Latin) ausgezeichnet werden. So könnte etwa auch der Fall abgefangen werden, dass sich Dokumente hinsichtlich ihrer Verfassungssprache unterscheiden, was in den von uns behandelten Briefen aber nicht vorkam. Für uns gestaltete sich insbesondere die Möglichkeit, handschriftliche und gedruckte Bereiche voneinander unterscheiden zu können, als gewinnbringend bei Dokumenten, die Formularcharakter haben. Bei Texten, die sich hinsichtlich der genannten Attribute nicht unterscheiden, wird nur ein *text*-Element gesetzt.

- Im *text*-Element können neben dem transkribierten Text auch Personen und Orte über entsprechende Elemente (*people* bzw. *place*) eingefügt werden. Dies stellte eine Veränderung zu dem von uns zuerst erstellten Schema dar, in dem Orte und Personen nur unterhalb des transkribierten Textes pro oben genannten Abschnitt (section-Element, Attribute text / signature / marginalia) erfasst werden konnten, was sich im Encoding als unpraktikabel erwies.

- Des Weiteren erwies es sich im Encodingprozess auch hinsichtlich der Transformation in html-Dateien als praktikabel, die einzelnen Zeilen mit dem selfclosing-Tag <lb/> auszuzeichnen, was in der Erstellung des ersten Schemas nicht vorgesehen war. Grund dafür war eine möglicherweise angenehmere Darstellung im Web

- Typographische Merkmale, die über Druck/Handschrift und die allgemeine Schriftart hinausgehen, werden in diesem Schema generell nicht erfasst, da der Fokus der Edition nicht darauf liegt.



### Besonderheiten in Bezug auf Personen- und Ortsnamen

- Als digitale Edition, die sich anhand der Auswertung von Geburts- und Lehrbriefen mit Mobilität in der Frühen Neuzeit beschäftigt, kommt dem Encoding von Personen und Orten eine besondere Bedeutung zu.


- Um Referenzierungen zu Personen mit verschiedenen Schreibweisen in einem Dokument oder über Dokumentengrenzen hinaus zu ermöglichen, sind den Personen IDs zugewiesen, die in eigenen Tabellen festgehalten werden.

- Im Encoding werden die Personen über das *people*-Element erfasst, dem bis zu vier Attribute zugewiesen werden können: *name*, also der Name der Person, was als die angesprochene ID fungiert; *gender*; *confession* und schließlich *role*, um die Rolle der Person im Dokument zu beschreiben (*recipient*; *issuer*; *witness*; *kin*).

- In anderen Editionen können Personen zusätzlich durch die Verlinkung mit Normdaten (z.B. GND, VIAF) referenziert werden, insofern diese vorliegen. Dies war im Rahmen unserer Edition allerdings nicht möglich.

- Anderes gilt für die Erfassung von Orten, die in den Dokumenten unterschiedlich bezeichnet sind. Zwar wird auch hier mit der Vergabe von IDs gearbeitet und in einer Tabelle verschiedene Bezeichungen desselben Ortes erfasst, gleichzeitig konnten die Orte aber in den meisten Fällen mit bestehenden Gazetteers verknüpft werden (Wikidata, World Historical Gazetteer).

Da wir innerhalb unseres Projektes insbesondere an der Bedeutung der Orte im Zusammenhang mit den behandeltenen Personen interessiert sind, müssen diese zudem über das Attribut *type* als Geburtsort (*place_of_birth*), Zielort (*destination*), Ausstellungsort (*place_of_issue*) oder anderer Ort (*other*) kenntlich gemacht werden.

(Im Ort-Element enthalten geographische Information über jeweiligen Ort. Zusätzlich werden Ortsnamen mit Normdatensätzen (Wikidata, World Historical Gazetteer) abgegliechen, so dass man beispielwese um die geographsiche Koordinaten (longitude latitude) ergänzen kann. )



### Schwierigkeiten bei Orts- und Personennamen

- Schwierigkeiten traten insbesondere bei Identifizierung von Ortsnamen in den lateinischen Briefen auf, da keine Lateinexpert\*innen dabei waren und teilweise dialektale Bezeichnungen aus der Region verwendet wurden. Ein gutes Beispiel ist de Geburtsbrief von Remigius Meletta. Als Geburtsort Melettas ist "Loci Vallis Lusarnonnensis" genannt. Zunächst wurde angenommen, dass "Loci" von lat. "locus" (Ort) kommt, allerdings stellt sich heraus, dass damit der Ort Loco im Onsernone-Tal im schweizerischen Tessin gemeint war. Dass "Lusarn" bzw. "Vallis Lusarnonnensis" die dialektale Bezeichung für dieses Tal war, konnte unter Mithilfe der Archive *Centro studi “Nicolò Rusca”*, *Archivio storico della Città di Lugano* und *Archivio Diocesano Lugano* herausgefunden werden.
- Weitere Schwierigkeiten gab es beispielsweise bei der Nennung von Ortsnamen, die bisher noch nicht im *World Historical Gazetteer* (WHG) vertreten waren und deswegen nicht eindeutig einem bestehenden Ort zugeordnet werden konnten. Die Grafschaft Franchimont im heutigen Belgien, die in Jeanne le Pourceaus Geburtsbrief genannt ist, existiert beim WHG zudem nur als einzelne Siedlung, nicht als größeres Territorium
- Als Personennamen wurden in allen Fällen die eingedeutschten Schreibweisen übernommen (z. B. Jacob statt Jacobus oder Johannes statt Joannis)




