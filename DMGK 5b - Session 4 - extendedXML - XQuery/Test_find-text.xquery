xquery version "3.1";
declare namespace tei = "http://www.tei-c.org/ns/1.0";

for $v in fn:doc("32.xml")/tei:TEI/tei:text
return data($v)
