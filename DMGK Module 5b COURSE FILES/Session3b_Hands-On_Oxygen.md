# Text encoding with the Oxygen XML editor

## Find and open a sample XML file

Go to the directory with sample XML files and find the [St. Valentine's letter of 1916](https://gitlab.rlp.net/teaching-dhlab/dmgk-modul-5b-xml/-/blob/master/Session%201%20-%20XML%20files%20and%20sources/Letter_1916-02-14_Valentine.xml) that we have shared with you.

This file corresponds to the following web deployment: [Letter from Nannie Beazley (née Hickey) to Piaras Béaslaí, 14 February 1916](http://letters1916.maynoothuniversity.ie/item/1067).

Download the XML file and open it in your Oxygen editor. You will see that the actual letter in this file is very short.

Please note that the file also includes a link to an externally stored schema, which triggers the following notification:

> The application tried to connect to https://raw.githubusercontent.com/bleierr/Letters-1916-sample-files/master/plain%20corresp%20templates/template.rng. Der Host raw.githubusercontent.com:443 befindet sich nicht in der Liste der vertrauenswürdigen Hosts.
Möchten Sie die Verbindung zu diesem Host zulassen?

Please **ACCEPT** access to the host.

## Questions about the encoding process

Try to answer these questions about the encoding process:

1. What is the first extensive section of the XML file called and why is it longer than the content of the original source? What kind of information is stored in this section of the XML file?

2. What is the section of the XML file called that contains the actual letter? Check the tags in Oxygen carefully to find the right answer.

3. What elements of the encoding are also *visible* in the [web deployment](http://letters1916.maynoothuniversity.ie/item/1067)? Which aspects of the encoding are *invisible*, and why?

4. At the bottom of the web deployment, you can see an editorial text with background information on the correspondents and the context of the letter. Where is this information stored in the XML file? What is the tag called that "embraces" this information?

Discuss these questions with the other students in your break-out room.

## Editing the XML file

In order to get used to working with Oxygen, you should play around with the sample file and try the following:

1. Delete a random closing tag, e.g. `</p>`, and see what happens in the interface. Does the file still parse? Why or why not?
2. Delete a random opening tag, e.g. `<date>`, and see what happens in the interface. Does the file still parse? Why or why not?
3. Try to delete a line break tag `<lb/>`. What happens now and why is this tag different from the closing and opening tags? Try to find out what this type of tag is called.
4. The tag `<revisionDesc>` tells you WHEN and BY WHOM the file was last updated. Try to find this tag via the search option in Oxygen and put in today's date and your name. Please note that an ISO date format is required. If you need help with this time format, consult the [UTC Time website](https://www.utctime.net).
5. Use the `<note>` tag to add a random (marginal) note in GERMAN at the bottom of the existing transcription and pretend that this is part of the letter. Make sure that the note is properly nested within the XML structure. Oxygen will alert you if there is a mistake. Moreover, you need to be careful when using special characters such as "ü", "ä", "&" or "ß". You will need numeric encoding for these. Consult [this table of the most common German *Umlaute*](https://www.designerinaction.de/tipps-tricks/web-development/html-umlaute-sonderzeichen/) to get it right.

Discuss your problems and solutions with your break-out group.

