xquery version "3.1";
declare namespace tei = "http://www.tei-c.org/ns/1.0";

for $change in fn:doc("32.xml")/tei:TEI/tei:teiHeader/tei:revisionDesc/tei:change
where ($change/@who="#Ciaranwallace")
return $change