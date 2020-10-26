# Tech Blog

## Discription
Class project to create a CMS-style blogging website following the MVC paradigm.

## Acceptance Criteria
 - GIVEN a CMS-style blog site
 - WHEN I visit the site for the first time
 - THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
 - WHEN I click on the homepage option
 - THEN I am taken to the homepage
 - WHEN I click on any other links in the navigation
 - THEN I am prompted to either sign up or sign in
 - WHEN I choose to sign up
 - THEN I am prompted to create a username and password
 - WHEN I click on the sign-up button
 - THEN my user credentials are saved and I am logged into the site
 - WHEN I revisit the site at a later time and choose to sign in
 - THEN I am prompted to enter my username and password
 - WHEN I am signed in to the site
 - THEN I see navigation links for the homepage, the dashboard, and the option to log out
 - WHEN I click on the homepage option in the navigation
 - THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
 - WHEN I click on an existing blog post
 - THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
 - WHEN I enter a comment and click on the submit button while signed in
 - THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
 - WHEN I click on the dashboard option in the navigation
 - THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
 - WHEN I click on the button to add a new blog post
 - THEN I am prompted to enter both a title and contents for my blog post
 - WHEN I click on the button to create a new blog post
 - THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
 - WHEN I click on one of my existing posts in the dashboard
 - THEN I am able to delete or update my post and taken back to an updated dashboard
 - WHEN I click on the logout option in the navigation
 - THEN I am signed out of the site
 - WHEN I am idle on the page for more than a set time

## Built With
- node js
- bcrypt 5.0.0
- connect-session-sequelize 7.0.4
- dotenv 8.2.0
- express 4.17.1
- express-handlebars 5.1.0
- express-session 1.17.1
- jest 26.6.0
- mysql2 2.2.5
- sequelize 6.3.5

## Installation
To run this program you will need to run the commands
init npm
and
npm install bcrypt connect-session-sequelize dotenv express express-handlebars express-session jest mysql2 sequelize

# link to site
https://aqueous-cove-36566.herokuapp.com/

## Author
* [Ann-Marie Orozco](ann760.github.io/myportfolio/) - 
* [Git Repository](https://github.com/ann760/tech-blog)