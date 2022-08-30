## Displaying a digital edition on the web

Look at the [original HTML source file](https://gitlab.rlp.net/teaching-dhlab/dmgk-modul-5b-xml/-/blob/master/Session%208%20-%20HTML%20&%20CSS%20files/v-machine_prophecy_of_merlin.html) of the "Prophecy of Merlin" displayed in the *Versioning Machine* and try to find the HTML tags where the editor's information on certain aspects of the text are hidden.

The website looks like this: http://v-machine.org/samples/prophecy_of_merlin.html

1. What are these tags called and what different types of information do they contain? 
2. What are the tags called that contain the actual content of the three manuscripts?
3. How is the visual diplay of the texts defined in the HMTL file?
4. How are the logo, the header background or buttons integrated?

## Manipulating HTML with CSS

Download the following [shortened HTML document](https://gitlab.rlp.net/teaching-dhlab/dmgk-modul-5b-xml/-/blob/master/Session%208%20-%20HTML%20&%20CSS%20files/Merlin_shortened.html) which only contains one short paragraph of the poem and is styled according to [the "Merlin" CSS file](https://gitlab.rlp.net/teaching-dhlab/dmgk-modul-5b-xml/-/blob/master/Session%208%20-%20HTML%20&%20CSS%20files/Merlin.css). Put both the HTML doc and the CSS file in the same folder on your local drive and open both files in Oxygen. Use the **display on the web** button to open the HTML file as it appears in a web browser. Try to manipulate the appearance of the HTML file through changes in one of the two files.

You might want to try at least some of the following operations:

**1. Adjust headline colours**

Note that this can be done in both HTML and CSS but that it is definitely better to do it in CSS!

If you need help selecting valid color codes, look at this tutorial: https://www.w3schools.com/colors/colors_picker.asp

**2. Adjust padding**

Look at this tutorial: https://www.w3schools.com/cssref/pr_padding.asp

**3. Insert an from the web:**

Try and embed the image "Vivien and Merlin" (file URL: https://upload.wikimedia.org/wikipedia/commons/8/81/Vivien_and_Merlin%2C_by_Julia_Margaret_Cameron%2C_M197400870004.jpg) somewhere in your HTML file. You can go back to question 3 above to find the right tags in the original HTML file.

**4. Try and turn the website link in the HTML file into an active hyperlink:**

The HTML file contains a website URL that is currently not "clickable". Try and transform this URL into a proper hyperlink.

This tutorial will help: https://www.w3schools.com/html/html_links.asp

**4. Put the text of the poem into a box with a coloured frame**

If you want to enclose text or pictures in a box, you can use a `<div> `:

```
    <div class="boxed">
      This text is enclosed in a box.
    </div>
```

I gave the DIV block a class of "boxed" but you can of course use some other valid CSS class name. Replace my dummy content with your actual text and/or images. Next, you will need to style the DIV box by adding a border. In your CSS section, or external CSS file, add the following code:

```
.boxed {
      border: 1px solid green ;
    }
```

The CSS code above specifies a 1 pixel border for the class "boxed". The box will have a solid green border. An example of a box using this code can be seen above. I use the exact same code, "border: 1px solid green", to enclose most of the code examples on thesitewizard.com (at the time I write this). 

## Share your results

Please **take a screenshot of your final HTML display** and paste it in our mattermost chat so that we can all enjoy each other's unique digital edition!



