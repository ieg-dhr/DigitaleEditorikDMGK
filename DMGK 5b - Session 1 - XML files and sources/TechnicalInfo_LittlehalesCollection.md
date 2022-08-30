# Technical information on the digital edition of the Edward B. Littlehales collection, 2017-2018

## Aim of the project

The aim of the Inside Dublin Castle project was to create a digital edition based on a selection of correspondence from the Littlehales archive held by Maynooth University Library. The selection mainly consists of correspondence between Edward Baker Littlehales, Charles Kendal Bushe and John Beckett written from August through December in 1808.

## Image Processing

Individual folios of the correspondence were captured using a high resolution camera mounted on a tripod. Care was taken to avoid hanging shadows over a folio. The captured images were then processed using GIMP software. GIMP is an acronym for GNU Image Manipulation Program, and is available to download for free @ http://www.gimp.org/. Some images were slightly edited with the GIMP perplex tool for better alignment in the presentation window, and some images were slightly altered for brightness. Many of the letters also included a type of wrapping sheet envelope with a written summary of the letter contents, an example of same can be seen in the image opposite. These folio images were cropped for presentation purposes.

## Transcription and Encoding

Most of the transcription was based on work done by Jacqueline Crowley and Hugh Murphy of Maynooth University Library, who we give special thanks to. Additional transcribing and all of the encoding was done as part of the project work. Spelling and punctuation has been captured as much as possible as it appears in the original. Text symbols are provided for illegible text […], unclear text {text}? and deleted text. For encoding and proofing we used **Oxygen XML Author 19.1**. We thank **Syncro Soft**[https://www.sync.ro/] for providing the course with licences for the duration of the project. 

## Video Interviewing

The team decided that a video clip would enhance the users experience of the online edition. A video interview with Hugh Murphy, Head of Collections and Content in Maynooth University Library was recorded by James Byrne and Sinéad Greene. An introduction to filming video was given to the team by Angelica Litsiou who showed the team how to use the equipment and conduct an interview. It was important for us to build a rapport with the library staff so the interview took place in the Special Collections Reading Room where the Littlehales Collection is housed. Visiting the archive and getting the opportunity to talk with the archivists working on the collection gave us a better understanding of the letters and the key correspondents. The video provides extra context to the online collection by showcasing the archive, the archivists working on the collection and also the letters themselves. The interview was shot using a Canon 60D and the audio was recorded externally with a lapel microphone.

## More Information - TEI Header - Element Tags - Named Entities and Annotations

### TEI Header

<?xml version=”1.0″ encoding=”utf-8″?>
<?oxygen RNGSchema=”../schemas/littlehales4.rng” type=”xml”?>
<TEI xmlns=”http://www.tei-c.org/ns/1.0″ xml:id=”{LetterID}”>/*The letter ID will be derived from the picture ID*/
<teiHeader>
<fileDesc>
<titleStmt>
<title>Letter from {author} to {recipient}</title><!–Title is given on most letters. If not given, it is to be composed of type, author, recipient and date. This will be the headline of the page–>
<author>{author}</author><!–Author is, if possible, to be expressed as Name(not title) and Lastname, Firstname–>
<!– Example: Letter from Charles Bushe to Edward Littlehales, 22 August 1812 –>
<!–The citation will be generated from <author>. “<title>”. [Collection Name]. [Names of Editors]. Maynooth University: 2018. [URL]–>
<!– For the automatic generation of the citation, title and author must be consistent. Final–>
<respStmt>
<resp>Transcribed by </resp>
<name>Jacqueline Crowley, Hugh Murphy</name><!–Transcriber’s name, final–>
</respStmt>
<respStmt>
<resp>Encoded by</resp>
<name>{Encoder’s name}</name><!–Actual Encoder’s name, Final–>
</respStmt>
</titleStmt>
<publicationStmt>
<publisher>Maynooth University Library</publisher>
<publisher>An Foras Feasa</publisher>
<address>
<addrLine>Maynooth</addrLine>
<addrLine>Co Kildare</addrLine>
<addrLine>Ireland</addrLine>
</address>
<availability>
<p>Reproduction rights owned by Maynooth University Library.</p><!–Final–>
</availability>
<date>2017</date>
</publicationStmt>
<notesStmt>
<note>This document was created as part of a class project in Autumn 2017 for the Digital Scholarly Editing module under the direction of Professor Susan Schreibman. This module is a component of the MA in Digital Humanities at Maynooth University. Team members were assigned to create a digital scholarly edition from a selection of correspondence in the Littlehales Archive collection at Maynooth University. The team members involved in the creation of the final edition are Monika Barget, James Byrne, Sinead Greene, Sharon Healy, Michael Kurzmeier, and Lauren Tracy.</note>
</notesStmt>
<sourceDesc>
<p>The correspondence processed for this digital edition is part of a larger collection, being the Littlehales Archive collection at Maynooth University. The correspondence is dated to 1808, and was written by Edward B. Littlehales, J. Beckett and Charles Bushe.</p>
</sourceDesc>
</fileDesc>
<profileDesc>
<creation><date when=”YYYY-MM-DD”>22 August 1808</date></creation>
</profileDesc>
</teiHeader>

### Element Tags
To facilitate the nature of the collection, we decided to use the following tags and attributes within the body:<div type=”letter”> / <div type=”envelope”>
As some of the letters come with their original envelope, we had to find a way to reflect that in our tags.
<note type=”private”>
Most letters have a note on them describing either their content or confidentiality. This was expressed through the <note> tag.
pb facs=”1812-08-22-20-1-19a,b,c,…”/>
Within the <div> element, we can mark up page breaks and link to the respective picture of the letter.
We further used <p> to indicate a new paragraph and <lb/> to indicate the beginning of a new line within the paragraph. As paragraphs tend to span multiple pages, it was important to allow <pb facs =”{facsID} within them.
<orgName key = “org01″>Dublin Castle</orgName>
To be able to display annotations, we decided to use <orgName>,  <persName>, <roleName>, <placeName> and <rs> to mark up organizations, persons, roles, places and events within the text. Assigned an ID, they are connected to a list of named entities.
Censored and illegible words
Illegible words were described with the <gap/> tag, words that were partially readable were given <unclear>{suggested meaning}</unclear>. Words censored by the authors were given <gap rend=”censored”/> while words crossed out are marked as <del rend=”strikethrough”>{original word}</del>

### Named Entities and Annotations
The Named Editor (James Byrne) went through each letter and compiled a list of entities which represent people, roles, organisations, events, and places, this amounted to more than 80 entities, and it was decided that this should be narrowed down. Then, the process of deciding what should be included as an entity for annotation was decided in terms of relevance to the selection of correspondence in the edition. The Annotations Editor (Lauren Tracey) then had the task of researching and compiling brief annotations for each of the entities.
The Named entities and Annotations included in this online edition are outlined below.

### Persons

<element id=’per01′><elementId>per01</elementId>
<name>John Beckett (1775-1847)</name><title>Beckett</title>
<annotation>Under-secretary of state for Home affairs from 1806 to 1817. In 1808, in the absence of Sir Arthur Wellesley, Beckett was Acting Chief Secretary.</annotation></element>

<element id=’per02′><elementId>per02</elementId>
<name>Charles Kendal Bushe (1767-1843)</name><title>Solicitor General</title>
<annotation>An Irish lawyer and judge. He served as Solicitor General for Ireland from 1805 to 1822. He was heavily involved in the court trials which followed the outrages in Ireland.</annotation>

</element><element id=’per03′><elementId>per03</elementId>
<name>Edward Baker Littlehales (1764-1825)</name><title>Littlehales</title>
<annotation>Sir Edward Littlehales was Under-Secretary for the Military from 1801-1819. His role was two-pronged: he was was responsible for the defence of Ireland and the smooth running of the military stationed in the country.</annotation></element>

<element id=’per04′><elementId>per04</elementId>
<name>Joseph-Napoléon Bonaparte (1768-1844)</name><title>Joseph Bonaparte</title>
<annotation>A French diplomat and nobleman. In 1808, he was crowned King of Spain by his brother, Emperor Napoleon Bonaparte.</annotation></element>

<element id=’per05′><elementId>per05</elementId>
<name>Napoléon Bonaparte (1769-1821)</name><title>Bonaparte</title>
<annotation>A soldier and statesman who rose to power during the French Revolution. In 1808 he was the Emperor of France and expanded his empire to neighbouring countries.</annotation></element>

<element id=’per06′><elementId>per06</elementId>
<name>Henry Alexander Campbell (1767-1808)</name><title>Henry Alexander Campbell</title>
<annotation>During the period of ths correspondence, Major Campbell was tried and condemned for the murder of fellow officer Captain Alexander Boyd in a duel. He was executed in August 1808 by hanging.</annotation></element>

<element id=’per07′><elementId>per07</elementId>
<name>Mrs. Campbell</name><title>Mrs.Cambell</title>
<annotation>Wife of Major Henry Alexander Campbell. Campbell was charged and hanged for murder in 1808.</annotation></element>

<element id=’per08′><elementId>per08</elementId>
<name>Lord Harrington (1753-1829)</name><title>Lord Harrington</title>
<annotation>General Charles Stanhope, 3rd Earl of Harrington. He was Commander-in-Chief of the regular Irish troops between 1806 and 1812.</annotation></element>

<element id=’per10′><elementId>per10</elementId>
<name>Lord Hawkesbury (1770-1828)</name><title>Lord Hawkesbury</title>
<annotation>Robert Banks Jenkinson, Earl of Liverpool. In 1808 he was Home Secretary responsible for national security and policing in England and Wales along with immigration and citizenship in the United Kingdom.</annotation></element>

<element id=’per11′><elementId>per11</elementId>
<name>King George III (1738-1820)</name><title>King George III</title>
<annotation>George William Frederick, King of Great Britain and Ireland. It was under his rule that the Acts of Union, uniting the Kingdom of Ireland and the Kingdom of Great Britain, came into force. He ruled till his death in 1820.</annotation>

</element><element id=’per12′><elementId>per12</elementId>
<name>Duke of Richmond (1764-1819)</name><title>Duke of Richmond</title>
<annotation>Charles Lennox, 4th Duke of Richmond and Lennox. He was a colonial administrator and in April 1807 was appointed Lord Lieutenant of Ireland.</annotation></element>

<element id=’per15′><elementId>per15</elementId>
<name>James Ryan</name><title>Ryan</title>
<annotation>Ryan was arrested and convicted alongside Matthew Kearinge for arson and the murder of David Bourke (possibly an official in County Tipperary) in 1808.</annotation></element>

<element id=’per16′><elementId>per16</elementId>
<name>Lord Norbury (1745-1831)</name><title>Toler</title>
<annotation>John Toler, 1st Earl of Norbury. An Irish judge who entered Parliament as member for Tralee in 1776. In 1789 he became Solicitor General, and in 1798 Attorney General. He was present at the assize that comdemned Major Campbell in 1808.</annotation></element>

<element id=’per17′><elementId>per17</elementId>
<name>James Trail (1745-1808)</name><title>James Trail</title>
<annotation>Counterpart in the Civil Department. During the time of this correspondence he occupied the role of Under-Secretary in this office, mentioning an illness from which he soon died.</annotation></element>

<element id=’per18′><elementId>per18</elementId>
<name>Arthur Wellesley (1769-1852)</name><title>Arthur Wellesley</title>
<annotation>1st Duke of Wellington, Chief Secretary of Ireland (Chief Secretary to the Lord Lieutenant), sat in the Cabinet of the United Kingdom, a leading military and political figure of 19th century Britain. Defeated Napoleon at the Battle of Waterloo in 1815.</annotation></element>

<element id=’per19′><elementId>per19</elementId>
<name>Colonel John Wolfe (1753-1816)</name><title>Colonel Wolfe</title>
<annotation>Heavily involved in the Kildare militia and opposed the United Irishmen Rebellion within the County. Corresponded with members of the Dublin Castle administration about the social and political unrest throughout parts of the country.</annotation></element>

<element id=’per21′><elementId>per21</elementId>
<name>Colonel Joseph Hanson (1774-1811)</name><title>Colonel</title>
<annotation>In early letters Colonel Hanson was mistakenly referred to as Harrison. Hanson, born in Manchester, became a middle-class radical. In 1808 Hanson was found guilty of aiding and abetting rioters in Manchester who were protesting a scarcity of work and low wages. He was fined £100 and imprisoned for six months.</annotation></element>

### Roles

<element id=’role01′><elementId>role01</elementId>
<name>Attorney General</name><title>Attorney General</title>
<annotation>The Attorney General is the most senior legal advisor to the British Government and the chief law officer of the State. During the time of this correspondence, William Plunket, 1st Baron Plunket, (1764-1854) occupied the role.</annotation></element>

<element id=’role02′><elementId>role02</elementId>
<name>Lord Chief Justice of Ireland</name><title>Chief Justice</title>
<annotation>The Lord Chief Justice was the most senior civil judge in the court in Ireland, and under the Acts of Union, the second most senior judge in Ireland and the United Kingdom. In 1808 the position was held by William Downes (1762-1826), who later became 1st Baron Downes.</annotation></element>

<element id=’role03′><elementId>role03</elementId>
<name>Crown Solicitor</name><title>Crown Solicitor</title>
<annotation>As the most senior office in Crown Law, the Crown Solicitor is responsible for handling the most difficult legal matters and providing independent legal advice to the Attorney General. During the time of this correspondence, Joseph Pollock was the role holder.</annotation></element>

<element id=’role04′><elementId>role04</elementId>
<name>Lord Chancellor of Great Britain</name><title>Lord Chancellor</title>
<annotation>John Scott, 1st Earl of Eldon (1751-1838). Scott served as Lord Chancellor of Great Britain from 1801-1806, and 1807-1827. The Lord Chancellor is a senior member of the Cabinet heading the Ministry of Justice as the Secretary of State for Justice. During 1808, Scott was frequently updated on civil affairs in Ireland.</annotation></element>

<element id=’role05′><elementId>role05</elementId>
<name>Lord Lieutenant of Ireland</name><title>Lord Lieutenant</title>
<annotation>The Lord Lieutenant was the representative for the King in Ireland, and as such, was the ranking governor from the Williaminite Wars (1690) until Irish independence (1921). Charles Lennox, 4th Duke of Richmond held the role from 1807-1813.</annotation></element>

<element id=’role06′><elementId>role06</elementId>
<name>Solicitor General</name><title>Solicitor General</title>
<annotation>The Solicitor General of Ireland was the senior advisor and deputy of the Attorney General, advising the Crown on Irish legal matters. Charles Kendal Bushe occupied this role from 1805-1822.</annotation></element>

### Organisations

<element id=’org01′><elementId>org01</elementId>
<name>Dublin Castle</name><title>Dublin Castle</title>
<annotation>Dublin Castle was, until 1922, the centre of the United Kingdom’s government and a potent symbol of British rule. It was home to the administrative branch of the Irish government under the Lord Lieutenant of Ireland.</annotation></element>

<element id=’org03′><elementId>org03</elementId>
<name>Yeomanry</name><title>Yeomanry forces</title>
<annotation>Forces raised from the civilian population across the United Kingdom to free the regular army and militia from peacekeeping and to augment forces in the case of a French invasion. In Ireland the Yeomanry were raised in 1798 and were instrumental in putting down the 1798 Rebellion. Although meant to be an interdenominational force, they were substantially Protestant. Their tasks included home defence and riot control.</annotation></element>

<element id=’org04′><elementId>org04</elementId>
<name>Militia</name><title>Militia</title>
<annotation>The Irish Militia, originally established in 1661, was by 1776 largely defunct. It was re-established in 1793 due to the threat of an invasion from France, with each county having its own battalions or regiments. The militia was raised from the civilian population to augment the regular army in times of civil unrest or for national emergencies.</annotation></element>

### Events

<element id=’event01′><elementId>event01</elementId>
<name>Manchester Riots</name><title>Manchester</title>
<annotation>In May and June 1808 there were large demonstrations in Manchester protesting the rejection of the fixing of the minimum wage bill in parliament. Joseph Hanson, a local middle class merchant and radical thinker, spoke to the crowd, despite orders by the military to stand down. He was tried in the spring 1909 assizes in Lancaster. But in the meantime, the Irish authorities were fearful that he had travelled to Dublin to incite the local population.</annotation></element>

<element id=’event02/03′><elementId>event02/03</elementId>
<name>Outrages in Limerick & Kerry</name><title>KerryLimerick</title>
<annotation>Particularly after the Act of Union in 1800, rural unrest flared up regularly. Described at the time as outrages or disturbances, these tended to be local in nature and against the landed classes. In summer 1808 there were a number of such events in North Kerry and West Limerick. The shifting position on these events as evidenced from the correspondence from Dublin Castle demonstrates how difficult it was officials in Dublin to get a handle on the severity and expanse of these events.</annotation></element>

<element id=’event03′><elementId>event03</elementId>
<name>Outrages in Limerick & Kerry</name><title>KerryLimerick</title>
<annotation>Particularly after the Act of Union in 1800, rural unrest flared up regularly. Described at the time as outrages or disturbances, these tended to be local in nature and against the landed classes. In summer 1808 there were a number of such events in North Kerry and West Limerick. The shifting position on these events as evidenced from the correspondence from Dublin Castle demonstrates how difficult it was officials in Dublin to get a handle on the severity and expanse of these events.</annotation></element>

<element id=’event04′><elementId>event04</elementId>
<name>Down Outrages</name><title>Down</title>
<annotation>Orangemen serving in the Irish yeomanry fired into a crowd of celebrating Catholics in Corinshiga near Newry in June 1808. Local magistrates could only apprehend one offender because Dublin Castle procrastinated. Disappointed with legal procedures all over the country, influential Catholics convened at Clonmell in August 1808 to pass a formal resolution to the Lord Lieutenant.</annotation></element>

<element id=’event05′><elementId>event05</elementId>
<name>Banishment Act of 1697</name><title>Banishment Act</title><annotation>Passed to protect the Church of Ireland, the Act required the banishment of all regular clergy, bishops and others exercising ecclesiastical jurisdiction. Other clergy were permitted to remain, but an act of 1704 required registration with authorities, limited their number and forbade further entry into the kingdom. The Banishment Act directly affected the practice of the catholic religion in Ireland.</annotation></element>

<element id=’event06′><elementId>event06</elementId>
<name>Insurrections</name><title>Insurrections</title>
<annotation>In the British legal system, the classification of popular unrest was controversially debated throughout the early modern period. The term “disturbance” was often used for trespasses on property. “Outrages” were acts of violence committed by larger groups of people. If a formal Riot Act or Insurrection Act was read in a region of unrest, offenders faced severe punishment in a criminal trial.</annotation></element>

### Places

<element id=’pla01′><elementId>pla01</elementId>
<name>Europe under Napoleon Bonaparte</name><title>Europe under Napoleon Bonaparte</title>
<annotation>In response to Portugal’s alliance with Britain, French troops invaded the Iberian peninsula in 1807. Charles IV of Spain was replaced by Napoleon’s brother in 1808. Britain supported anti-Napoleonic forces in Spain and Skandinavia.</annotation></element>
<element id=’pla02′><elementId>pla02</elementId>

<name>France during the reign of Napoleon</name><title>France during the reign of Napoleon</title>
<annotation>Under Emperor Napoleon Bonaparte, France became exceedingly powerful and established a vast empire of dependent states. The Napoleonic Wars fought between 1803 and 1815 were a continuation of the French Revolutionary Wars. Britain was France’s major opponent at sea.</annotation></element>

## Schema

The schema for the Littlehales project was written in .rng format. This stands for **RELAX NG FILE".
The .rng format ist used for validating .XML documents. It uses a simple schema language for XML that focuses on the description and validation of the structure and content of an XML document.
