# <p align="center">Testing for [Greener Homes](https://karzuin.github.io/First-milestone-project/)<p>

Used [W3C HTML validator](https://validator.w3.org/#validate_by_input) website via the direct input path. 

1. Index.html validator results.

<p align="center"><img width="350" height="300" src="readme-images/htmlvalid-index.png"></p>

2. Resources.html validator results.

<p align="center"><img width="350" height="300" src="readme-images/htmlvalid-resources.png"></p>

3. Contact.html validator results.

<p align="center"><img width="350" height="300" src="readme-images/htmlvalid-contact.png"></p>

Used [Jigsaw](https://jigsaw.w3.org/css-validator/#validate_by_input) via the direct input path. 

4. Style.css validator results.

<p align="center"><img width="350" height="300" src="readme-images/cssvalidator-ms1.png"></p>

## User stories:

- As a user, I want a simple and clean looking website as messy, busy pages with lots of information overwhelms me.

  - User views the homepage and sees that the colour scheme and layout is very clean and simple, the images and content is well spaced out.
With 3 pages all with the same consistent style, with quality images and brief descriptions throughout so not to overwhelm users with 
too much information.

- As a user, I want an easy to navigate website to save time and not get frustrated or lost.

  - User goes to the website and on the home page, resource page and contact us page there is a simple navigation bar fixed on the top of the page. Wherever they scroll down to on each page the navigation menu bar is there for them to click and go to another page. 
  
  - When you hover over the words the colour of the text goes a darker grey colour.

- As a user, I want to be able to use it on desktop, tablet and mobile devices.

  - Users who are browsing with Chrome, Safari, Firefox and IE can use the website on desktop, tablet and mobile views with full responsiveness.

- As a user, I want to find out what eco homes are.

  - Go to the home page and scroll down to underneath the ‘About Us’ section is ‘Why live in an eco home?’ This section gives an explanation of the benefits and what eco homes are.

- As a user, I am interested in one of the three eco home concepts introduced and would like to know more.

  - Go to the home page and scroll down to the section underneath the ‘Why live in an eco home?’ And there are three cards each introducing a different eco home concept with a corresponding image. 
  
  - When you hover over the ‘More Info’ green buttons they turn a darker green colour. To find out more click on the green button ‘More Info’ and it will open a new tab to an external website, the green button also stays a dark green with a light green border around it, to indicate it has been clicked.

- As a user, I want to find out more about one of the three related interests introduced on the home page.

  - Go to the home page and scroll down to the ‘Related Interests’ section where there are three cards introducing ‘Off Grid Living’, or ‘Zero Waste Living’ or ‘Eco Home Products’ with a corresponding image. 
  
  - When you hover over the green buttons they turn a darker green colour. To find out more click on the green button ‘More Info’ and it will open a new tab to an external website, the green button also stays a dark green with a light green border around it, to indicate it has been clicked.

- As a user, I would like to sign up to Greener Homes latest news.

  - Go to the bottom of the home page by scrolling down and there is a green form labelled ‘Receive the latest news from Greener Homes’.

  - If user hovers over the ‘Sign Up!’ button it goes a darker green colour but does not stay dark green. This does not happen in iPad or phone view it only goes a darker green when it is clicked on and it stays dark green until you click another area of the screen.

  - If user clicks on the ‘Sign Up!’ button without filling in the form it will indicate with a message to ‘Please fill in this field’ indicating the area to type into.

  - If the form has been filled in but with an invalid email address and you click the ‘Sign Up!’ Button then another message comes up ‘Please include a ‘@‘ in the email address ‘___’ is missing a ‘@‘.

  - If the form has been partly filled in with half the email address and you click the ‘Sign Up!’ Button then another message comes up ’Please enter a part following ‘@‘, ‘___@‘ is incomplete’.

  - If the form has been filled correctly with a full email address and you click the ‘Sign Up!’ Button then the page goes to the top and the form clears.

- As a user, I want to know even more information about one of the eco homes introduced on the home page.

  - Go to navigation menu bar and click on ‘More Resources’. Under the ‘Website Links’ There are three lists corresponding to the three eco home concepts, each list has five links which open up a new tab to an external link giving more information. 
  
  - All links open up into a new tab so the user doesn’t forget Greener Homes website and can go back to it easily.

  - **Bug**: The last link of the three lists has a blue border once it has been clicked which is useful for the user to know when they come back from the external link which was the last link they clicked. But the other links do not do that.

  - **Debugged**: Added the same code from the last link to the rest of the links. Now they all show a blue border when the link has been clicked.

  - **Bug**: The other three white background links go light grey when it has been clicked and the green background link does not indicate anything when clicked.

  - **Debugged**: Changed all the background colour links to light green and added the border code to all the links. Now when user hovers over the link it goes a darker green and when clicked shows a blue border to indicate it was the last link clicked.

- As a user, I want to watch an informative video of one of the eco home concepts.

  - Go the resource page and scroll down to the section ‘Video Links’ there are three short YouTube videos introducing each of the three eco home concepts.

  - **Bug**: The left and middle videos are unable to go to full screen within the website, only if you click ‘YouTube’ to watch via the Youtube website. 
  
  - **Debugged**: Moved the `>` to the end of `allowfullscreen` 

  - All videos play on the website when you click on them.

- As a user, I want to know what kind of resources are available to help them know more about eco homes.

  - Go to the resource page and when you scroll down you will find three types: Website Links, Video Links and Book Resources.

- As a user, I want to find out more information, so would like to contact Greener Homes via the contact page.

  - Go to the navigation menu bar and click on ‘Contact Us’

  - Scroll down to the form.

  - Fill in the ‘Full Name’ field, ‘Email Address’ field and ‘Message’ field, if the form has been filled in correctly and click on the ‘Submit’ green button, then it goes to the top of the page and the form clears.

  - **Bug**: The ‘Full Name’ field is accepting all characters and numbers and just one name. So would like to validate it so it only accepts letters and two names at least.

  - If the ‘Full Name’ field is not filled and user clicks 'Submit' then the message ‘Please fill in this field’ appears.

  - If the ‘Email Address’ field is not filled and user clicks 'Submit' then the message ‘Please fill in this field’ appears.

  - If the ‘Email Address’ field is not valid and you click the ‘Submit’ button then the message ‘Please include a ‘@‘ in the email address ‘___’ is missing a ‘@‘ appears.

  - If the ‘Email Address’ field has been partly filled in with half the email address and you click the ‘Submit’ Button then another message comes up ’Please enter a part following ‘@‘, ‘___@‘ is incomplete’.

  - **Bug**: After the form is correctly filled and the'Submit' button is clicked, the form goes to the top of the page and the form clears.

  - The ‘Submit’ button goes a darker green when you hover over it and when you click it and then goes back to the previous green colour.

- As a user, I have read through the information on the home page and feel this is too much change in my life but I still want to change a small part of my lifestyle, so I want to know what eco products to buy.

  - Go to the navigation menu bar and click on ‘Home’, scroll down to the ‘Related Interests’ section and click on ‘More Info’ in the ‘Eco Home Products’ card.

- As a user, I want to know the cost of an earthship, tiny house or shipping container home in the UK.

  - There are many factors to consider to find out the cost such as land price, size of house, energy resources, water supply, modern conveniences and technologies. Go to the resources page and in the website links there is information for how much it would cost for these factors.

# Responsiveness of website

## [Home.html](https://karzuin.github.io/First-milestone-project/index.html) in Desktop view.
In desktop mode, the navigation menu bar on the top is fixed and the words are clearly displayed. The screen shows the hero image displaying the full width of the browser. The main heading ‘Greener Homes’ and sub-headings ‘About Us’ and ‘Why live in an eco home?’ and the horizontal dividers and its content are centred on the page.

The three cards displaying the three eco homes are in a row neatly spaced and in line, the content is justified and centred within the border. The green buttons are on the bottom of the card within the border.

The next heading ‘Related Interests’ and the horizontal divider are centred on the page.

The three cards displaying ‘Off Grid Living’, ‘Zero Waste Living’ and ‘Eco Home Products’ are in a neat row equally spaced and in line, the content is centred within the border of the card. The green buttons are on the bottom of the card also within the border.

The green form ‘Receive the latest news from Greener Homes’ at the bottom of the page is centred on the page. All the text and text box area is equally spaced and within the border of the form.

The horizontal divider and social links are centred at the bottom of the page. The social media links are equally spaced and in a row.

## [Home.html](https://karzuin.github.io/First-milestone-project/index.html) in iPad/iPad Pro view.

In iPad mode, the navigation menu bar on the top is fixed and the words are clearly displayed. The ‘Home’, ‘More Resources’ and ‘Contact Us’ text, once clicked the font colour goes a dark grey and then goes back to the original light grey and the page opens. The hero image displays the full width of the browser with no distortions just trimmed on either side of the image. The main heading ‘Greener Homes’ and sub-headings ‘About Us’ and ‘Why live in an eco home?’ and the horizontal dividers and its content are centred on the page. The fonts have decreased in size to adjust to the smaller size and looks in proportion to each other.

- **Bug**: When you scroll up the top of the words are hidden on the navigation bar but still clickable. For the top margin to appear user has to scroll down.

The three cards displaying the three eco homes are in a row neatly spaced and in line, the content is justified and centred within the border. The green buttons are on the bottom of the card within the border. The shape of the cards adjust to the narrower width and then go from three cards in iPad pro into a single column of cards in iPad view.

The next heading ‘Related Interests’ and the horizontal divider are centred on the page. The font size and length of the horizontal divider have decreased and are in proportion to each other.

The three cards displaying ‘Off Grid Living’, ‘Zero Waste Living’ and ‘Eco Home Products’ are in a neat row equally spaced and in line, the content is centred within the border of the card. The green buttons are on the bottom of the card also within the border. The shape of the cards adjust to the narrower width and then go from three cards in iPad pro into a single column of cards in iPad view.

The green form ‘Receive the latest news from Greener Homes’ at the bottom of the page is centred on the page. All the text and text box area is equally spaced and within the border of the form. Everything has decreased in size and is still in proportion to each other.

The horizontal divider and social links are centred at the bottom of the page. The social media links are equally spaced and in a row.

## [Home.html](https://karzuin.github.io/First-milestone-project/index.html) in iPhone X, 5, 6, 7, 8 view.

In mobile phone mode, the navigation menu bar on the top is fixed and the burger icon appears. When clicked the drop down menu appears with the ‘Home’, ‘More Resources’ and ‘Contact Us’, when you click on them the font colour goes a dark grey and then goes back to the original light grey.

- **Bug**: When you scroll up the top of the burger icon are hidden on the navigation bar but still clickable. For the top margin to appear user has to scroll down.

The hero image displays the full width of the browser with no distortions just trimmed on either side of the image. The main heading ‘Greener Homes’ and sub-headings ‘About Us’ and ‘Why live in an eco home?’ and the horizontal dividers and its content are centred on the page. The fonts have decreased in size to adjust to the smaller size and looks in proportion to each other.

The three cards displaying the three eco homes are now displaying the full width of the screen one at a time, one after another, the content is centred within the border. The green buttons are on the bottom of the card within the border.

The next heading ‘Related Interests’ and the horizontal divider are centred on the page. The font size and length of the horizontal divider have decreased and are in proportion to each other.

The three cards displaying ‘Off Grid Living’, ‘Zero Waste Living’ and ‘Eco Home Products’ are in a neat single column equally spaced and in line, the content is centred within the border of the card. The green buttons are on the bottom of the card also within the border. The shape of the cards have adjusted to the narrower width but still looks good.

The green form ‘Receive the latest news from Greener Homes’ at the bottom of the page is centred on the page. All the text and text box area is equally spaced and within the border of the form. Everything has decreased in size and is still in proportion to each other.

The horizontal divider and social links are centred at the bottom of the page. The social media links are equally spaced and in a row.

## [Resources.html](https://karzuin.github.io/First-milestone-project/resources.html) in Desktop view.

In desktop mode, the navigation menu bar on the top is fixed and the words are displayed. The ‘Home’, ‘More Resources’ and ‘Contact Us’ text, once clicked the font colour goes a dark grey and then goes back to the original light grey and the page opens.

The screen shows the hero image displaying the full width of the browser. The main heading ‘Greener Homes’ and sub-heading ‘More Resources’ and the horizontal dividers and its content are centred on the page.

The next heading ‘Website Links’ and the horizontal divider are centred on the page.

The three group lists displaying the website links are in three columns, each with five rows of clickable text. The three containers are neatly spaced and in line, the content is centred within the border.

All links open up to an external website in a new tab so the user doesn’t forget Greener Homes website and can go back to it easily.

- **Bug**: The last link of the three lists has a blue border once it has been clicked which is useful for the user to know when they come back from the external link which was the last link they clicked. But the other links do not do that.

- **Debugged**: Added the same code from the last link to the rest of the links. Now they all show a blue border when the link has been clicked.

- **Bug**: The other three white background links go light grey when it has been clicked and the green background link does not indicate anything when clicked.

- **Debugged**: Changed all the background colour links to green and added the border code to all the links. Now when user hovers over the link it goes a darker green and when clicked shows a blue border to indicate it was the last link clicked.

The next heading ‘Video Links’ and the horizontal divider are centred on the page.

The three embedded videos are neatly in line and in a row, equally spaced apart. Only the right video can go to full screen when you click the full screen icon.

- **Bug**: The left and middle videos are unable to go to full screen within the website, only if you click ‘YouTube’ to watch via the Youtube website. 

- **Debugged**: Rectified by moving the `>` at the end of `allowfullscreen`

The next heading ‘Book Resources’ and the horizontal divider are centred on the page.

The five cards displaying the five recommended books: ‘Zero Waste Home’, ‘Tiny House Living’, ‘Building with Cob’ ‘Zero Waste’ and ’How to Live Off Grid’, are in a neat row equally spaced and in line, the content is centred within the border of the card.

- **Bug**: There is too much white space between the text and the card footer. 

- **Debugged**: Added media queries to change the height of the card footer for desktop and tablet screens.

The green text links are in the card footer also within the border. 

- **Bug**: Needs to be centred. 

- **Debugged**: Added text-center class.

The horizontal divider and social links are centred at the bottom of the page. The social media links are equally spaced and in a row.

## [Resources.html](https://karzuin.github.io/First-milestone-project/resources.html) in iPad/iPad Pro view.

In iPad mode, the navigation menu bar on the top is fixed and the words are clearly displayed. The ‘Home’, ‘More Resources’ and ‘Contact Us’ text, once clicked the font colour goes a dark grey and then goes back to the original light grey and the page opens.

- **Bug**: When you scroll up the top of the words are hidden on the navigation bar but still clickable. For the top margin to appear user has to scroll down.

The hero image displays the full width of the browser with no distortions just trimmed on either side of the image. The main heading ‘Greener Homes’ and sub-headings ‘More Resources’, its content, ’Website Links’ and the horizontal dividers and its content are centred on the page. The fonts have decreased in size to adjust to the smaller size and looks in proportion in relation to each other.

The three group lists displaying the website links are in three columns, each with five rows of clickable text. The three containers are neatly spaced and in line, the content is centred within the border, although the height sizes differ due to the text.

All links open up to an external website in a new tab so the user doesn’t forget Greener Homes website and can go back to it easily.

- **Bug**: The last link of the three lists has a yellow border once it has been clicked which is useful for the user to know when they come back from the external link which was the last link they clicked. But the other links do not do that. The other three white background links go light grey when it has been clicked and the green background link does not indicate anything when clicked.

- **Debugged**: Added the same code from the last link to the rest of the links. Now they all show a blue border when the link has been clicked so it's easier for the user to know which link they last clicked on. The background of the links go a darker green when you hover over them.
 
The next heading ‘Video Links’ and the horizontal divider are centred on the page.

The three embedded videos are neatly in line and in a row, equally spaced apart in iPad Pro view. The shape of the videos adjust to the narrower width and then go from one row into two rows in iPad view, with two videos on the top and one video on the bottom, centered on the page. All videos play but only the right video can go to full screen when you click the full screen icon.

- **Bug**: The left and middle videos are unable to go to full screen within the website, only if you click ‘YouTube’ to watch via the Youtube website.

- **Debugged**: Rectified by moving the `>` at the end of `allowfullscreen`

The next heading ‘Book Resources’ and the horizontal divider are centred on the page.

The five cards displaying the five recommended books: ‘Zero Waste Home’, ‘Tiny House Living’, ‘Building with Cob’ ‘Zero Waste’ and ’How to Live Off Grid’, are in a neat row equally spaced and in line, the content is centred within the border of the card.
The shape of the cards adjust to the narrower width and then go from five cards in iPad pro into two rows of cards in iPad view with three cards on the top row and two cards on the bottom row and centred in the page.

All links opens up a new tab to the external website.

- **Bug**: There is too much white space between the text and the card footer.

- **Debugged**: Added media queries to change the height of the card footer for desktop and tablet screens.

The green text links are in the card footer are within the border. 

- **Bug**: Needs to be centred.

- **Debugged**: Added text-center class.
 
The horizontal divider and social links are centred at the bottom of the page. The social media links are equally spaced and in a row. All links opens up a new tab to the external website.

## [Resources.html](https://karzuin.github.io/First-milestone-project/resources.html) in iPhone X, 5, 6, 7, 8 view.

In mobile phone mode, the navigation menu bar on the top is fixed and the burger icon appears. When clicked the drop down menu appears with the ‘Home’, ‘More Resources’ and ‘Contact Us’, when you click on them the font colour goes a dark grey and then goes back to the original light grey.

- **Bug**: When you scroll up the top part of the burger icon is hidden on the navigation bar but still clickable. For the top margin to appear user has to scroll down.

The hero image displays the full width of the browser with no distortions just trimmed on either side of the image. The main heading ‘Greener Homes’ and sub-headings ‘More Resources’, the content and ‘Website Links’ and the horizontal dividers are centred on the page. The fonts have decreased in size to adjust to the smaller size and looks in proportion to each other.

The three group lists displaying the website links are in one column displaying the whole width of the screen, each with five rows of clickable text. The three containers are neatly spaced and in line, one after another, the content is centred within the border, and equally spaced in between.

All links open up to an external website in a new tab so the user doesn’t forget Greener Homes website and can go back to it easily.

- **Bug**: The last link of the three lists has a yellow border once it has been clicked which is useful for the user to know when they come back from the external link which was the last link they clicked. But the other links do not do that. 

- **Debugged**: Added the same code from the last link to the rest of the links. Now they all show a blue border when the link has been clicked.

- **Bug**: The other three white background links go light grey when it has been clicked and the green background link does not indicate anything when clicked.

- **Debugged**: Changed all the background colour links to green and added the border code to all the links. Now when user hovers over the link it goes a darker green and when clicked shows a blue border to indicate it was the last link clicked.
  
The next heading ‘Video Links’ and the horizontal divider are centred on the page.

The three embedded videos are neatly in one column fitting the width of the screen with margin, equally spaced apart. All videos play but only the right video can go to full screen when you click the full screen icon.

- **Bug**: When in full screen the full screen icon disappears but if you click in that area it goes back to a smaller screen.

- **Bug**: The left and middle videos are unable to go to full screen within the website, only if you click ‘YouTube’ to watch via the Youtube website.

- **Debugged**: Rectified by moving the `>` at the end of `allowfullscreen`
  
The next heading ‘Book Resources’ and the horizontal divider are centred on the page.

The five cards displaying the five recommended books: ‘Zero Waste Home’, ‘Tiny House Living’, ‘Building with Cob’ ‘Zero Waste’ and ’How to Live Off Grid’, are in one column equally spaced and in line, one after another, the content is centred within the border of the card.

All links opens up a new tab to the external website.

The green text links are in the card footer are within the border. 

- **Bug**: Text needs to be centred.

- **Debugged**: Added text-center class.

The horizontal divider and social links are centred at the bottom of the page. The social media links are equally spaced and in a row. All links opens up a new tab to the external website.

## [Contact.html](https://karzuin.github.io/First-milestone-project/contact.html) in desktop view.

In desktop mode, the navigation menu bar on the top is fixed and the words are displayed. The ‘Home’, ‘More Resources’ and ‘Contact Us’ text, once clicked the font colour goes a dark grey and then goes back to the original light grey and the page opens.

The screen shows the hero image displaying the full width of the browser. The main heading ‘Greener Homes’ and sub-heading ‘Let’s Get In Touch’ its content and the horizontal dividers are centred on the page.

The form is centred on the page. All the text and text box areas are equally spaced and within the border of the form.

When user selects a text area a thin blue border appears.

- **Bug**: The ‘Full Name’ field is accepting all characters and numbers and just one name. So would like to validate it so it only accepts letters and two names at least.

If the ‘Full Name’ field is not filled and user clicks 'Submit' then the message ‘Please fill in this field’ appears.

If the ‘Email Address’ field is not filled and user clicks 'Submit' then the message ‘Please fill in this field’ appears.

If the ‘Email Address’ field is not valid and you click the ‘Submit’ button then the message ‘Please include a ‘@‘ in the email address ‘___’ is missing a ‘@‘ appears.

If the ‘Email Address’ field has been partly filled in with half the email address and you click the ‘Submit’ Button then another message comes up ’Please enter a part following ‘@‘, ‘___@‘ is incomplete’.

- **Bug**: The form goes to the top of the page and the form clears when the ‘Full Name’ and ‘Email Address’ fields are filled, even without the ‘Message’ field being filled.

- **Bug**: When the form is filled correctly and the 'Submit' button is clicked the form goes to the top of the page and the form clears.

When you click the ‘Submit’ button it goes a darker green and then goes back to the previous green colour.

The horizontal divider and social links are centred at the bottom of the page. The social media links are equally spaced and in a row. All links open into a new tab to the external website.

## [Contact.html](https://karzuin.github.io/First-milestone-project/contact.html) in iPad/iPad Pro view.

In iPad mode, the navigation menu bar on the top is fixed and the words are displayed. The ‘Home’, ‘More Resources’ and ‘Contact Us’ text, once clicked the font colour goes a dark grey and then goes back to the original light grey and the page opens.

- **Bug**: When you scroll up the top of the words are hidden on the navigation bar but still clickable. For the top margin to appear user has to scroll down.

The hero image displays the full width of the browser with no distortions just trimmed on either side of the image. The main heading ‘Greener Homes’ and sub-heading ‘Let’s Get In Touch!’, its content and the horizontal dividers are centred on the page. The fonts have decreased in size to adjust to the smaller size and looks in proportion in relation to each other.

The form is centred on the page. All the text and text box areas are equally spaced and within the border of the form.

When user selects a text area a thin blue border appears. 

- **Bug**: Border is too thin it's very hard to see.

- **Bug**: The ‘Full Name’ field is accepting all characters and numbers and just one name. So would like to validate it so it only accepts letters and two names at least.

If the ‘Full Name’ field is not filled and user clicks 'Submit' then the message ‘Please fill in this field’ appears.

If the ‘Email Address’ field is not filled and user clicks 'Submit' then the message ‘Please fill in this field’ appears.

If the ‘Email Address’ field is not valid and you click the ‘Submit’ button then the message ‘Please include a ‘@‘ in the email address ‘___’ is missing a ‘@‘ appears.

If the ‘Email Address’ field has been partly filled in with half the email address and you click the ‘Submit’ Button then another message comes up ’Please enter a part following ‘@‘, ‘___@‘ is incomplete’.

- **Bug**: The form goes to the top of the page and the form clears when the ‘Full Name’ and ‘Email Address’ fields are filled, even without the ‘Message’ field being filled.

- **Bug**: When the form is filled correctly and the 'Submit' button is clicked the form goes to the top of the page and the form clears.

When you click the ‘Submit’ button it goes a darker green and stays that colour until you click on another part of the screen.

The horizontal divider and social links are centred at the bottom of the page. The social media links are equally spaced and in a row. All links opens up a new tab to the external website.

## [Contact.html](https://karzuin.github.io/First-milestone-project/contact.html) in iPhone X, 5, 6, 7, 8 view.

In mobile phone mode, the navigation menu bar on the top is fixed and the burger icon appears. When clicked the drop down menu appears with the ‘Home’, ‘More Resources’ and ‘Contact Us’, when you click on them the font colour goes a dark grey and then goes back to the original light grey.

- **Bug**: When you scroll up the top part of the burger icon is hidden on the navigation bar but still clickable. For the top margin to appear user has to scroll down.

The hero image displays the full width of the browser with no distortions just trimmed on either side of the image. The main heading ‘Greener Homes’ and sub-headings ‘Let’s Get In Touch’, the content the horizontal dividers are centred on the page. The fonts have decreased in size to adjust to the smaller size and looks in proportion to each other.

The form is centred on the page. All the text and text box areas are equally spaced and within the border of the form. There are no margins on either side of the form but looks good, it is consistent with the hero image.

When user selects a text area a thin blue border appears. 

- **Bug**: The border is too thin it's very hard to see.

- **Bug**: The ‘Full Name’ field is accepting all characters and numbers and just one name. So would like to validate it so it only accepts letters and two names at least.

If the ‘Email Address’ field is not filled and user clicks 'Submit' then the message ‘Please fill in this field’ appears.

If the ‘Full Name’ field is not filled and user clicks 'Submit' then the message ‘Please fill in this field’ appears.

If the ‘Email Address’ field is not valid and you click the ‘Submit’ button then the message ‘Please include a ‘@‘ in the email address ‘___’ is missing a ‘@‘ appears.

If the ‘Email Address’ field has been partly filled in with half the email address and you click the ‘Submit’ Button then another message comes up ’Please enter a part following ‘@‘, ‘___@‘ is incomplete’.

- **Bug**: The form goes to the top of the page and the form clears when the ‘Full Name’ and ‘Email Address’ fields are filled, even without the ‘Message’ field being filled.

- **Bug**: When the form is filled correctly and the 'Submit' button is clicked the form goes to the top of the page and the form clears.

When you click the ‘Submit’ button it goes a darker green and stays that colour until you click on another part of the screen.

The horizontal divider and social links are centred at the bottom of the page. The social media links are equally spaced and in a row. All links opens up a new tab to the external website.

# Responsiveness on different browsers:

[Google Chrome](https://google.com) all the testing information has been tested on Chrome browser using DevTools.

[Mozilla Firefox](https://www.mozilla.org/en-GB/firefox/new/) and [Internet Explorer](https://www.microsoft.com/en-gb/download/internet-explorer.aspx) browsers responsiveness is good on desktop, tablet and phone. Only difference found 
is the website links on the 'Resources page' where the blue border does not appear but when clicked the cell is a darker shade of green and stays that way when the user come back the Greener Homes site.

[Safari](https://www.apple.com/uk/safari/) browser responsiveness is the same as Chrome browser, no bugs.

## Bugs whilst creating the website:

Navbar code was copied from [Bootstrap 4](https://getbootstrap.com/), I found the dropdown menu wouldn’t work and searched on [CI](https://codeinstitute.net/) slack channel and found I had to change the script order of bootstrap to JS, JQuery, CSS.

Changed the height size of the card decks on the home page with bootstrap card custom css sizing, but undid the code for this as the content was coming out of the box when the screen was reduced.

Used a card element for sign up form and added a form element inside and changed the width with grid size.

Font was different on one of the three pages, so had to re-copy and paste the code again.

My images weren’t showing up in preview or GitHub but a tutor saw that I had `../` in front of the pathway and by deleting them it worked.

A tutor helped clarify what code to use when with col sizes and directed me to [W3 Schools](https://www.w3schools.com/cssref/pr_background-image.asp) to help with background image responsiveness. So updated all the hero images on 4 pages.

Used codes from [CSS Tricks](https://css-tricks.com/books/fundamental-css-tactics/scale-typography-screen-size/) to help with font-size responsiveness.


Also got advice from a tutor advising me on what options I had for image responsiveness. With [this link](https://code-institute-a61370e921d3.intercom-attachments-1.com/i/o/210427055/093851c6c8c5e651e89f9cbc/ex.png) to help me decide how I wanted it to look.

Mentor shared a link to [Stack Overflow](https://stackoverflow.com/questions/34284976/blank-space-right-side-screen-on-small-device-or-window/34285689#34285689?newreg=609753b69d114fe8855ce8929c156ee3) to help rectify the white space appearing on the right side, on mobile devices. 
I checked each parent element on DevTools, and found I had to put zero to the margin and padding of body in CSS.

Horizontal divider line on resource page was going across the width of page so I had to move the container end tag div to the end of the section so the padding would apply to all the child elements.

Responsiveness of card decks on all screen sizes was rectified by using code from [Bootstrap Creative](https://bootstrapcreative.com/pattern/responsive-card-deck-example/).

## Bugs to be fixed:

When in video full screen on a phone device, the small screen icon disappears but if you click in that area it goes back to a smaller screen.

When you scroll up the top part of the burger icon is hidden on the navigation bar but still clickable. For the top margin to appear user has to scroll down.

The blue border in the form fields when they are clicked are too thin it's very hard to see in tablet or phone view.

The ‘Full Name’ field is accepting all characters and numbers and just one name. So would like to validate it so it only accepts letters and two names at least.

The form goes to the top of the page and the form clears when the ‘Full Name’ and ‘Email Address’ fields are filled, even without the ‘Message’ field being filled.

When the form is filled correctly and the 'Submit' button is clicked the form goes to the top of the page and the form clears.
