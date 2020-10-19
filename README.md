IBS Healtheeker
=============
IBS Healtheeker project is a website with WordPress. The project aims to help the single parents with IBS to get better life with low cost. This project helps single parents with IBS who fail to identify the relationship between food and their symptoms by providing comprehensive information and quick guides including determination of IBS types, FODMAP food details and nutritional food recommendation.

Motivation
==========
There is no website or application provides help for the IBS patient who is single parent. The existing advices are designed for all the IBS patients but not just for our audiences. The single parent have no time and money to concern on themselves but they are suffering IBS symptoms. This project is trying to help them get customized recommendations quickly and with a low cost.

Screenshots
===========
![image](https://raw.githubusercontent.com/wendytys/Healtheeker/master/home%20page.jpg)

Tech Used
=============
Built with EC2 instance and WordPress AMI,  using phpMyAdmin as database server.
### Plugin
1. WPFront Scroll Top: this plugin is used to realise the "back to top" function in our all existing interfaces.
2. Quiz And Survey Master: this plugin is used to design and build our IBS type quiz in the IBS Type page.
3. Flipbox: this plugin is used to display information with the ability to reverse the card to get more information, which can keep the page simple while helping users learn more if they  want.
4. Hot Random Image: this plugin is used to provide uses with random food recommendations in Food Recommendation page.
5. Visualizer: this plugin is used to display data visualizations that support user interaction with data in IBS Type page.
6. Shortcodes Ultimate: this plugin, with a function of tooltip, is used to show a prompt when the user clicks the mouse over the text.
7. ImageLinks: this plugin is used to create a user interactive process flow in the homepage to help users learn the project logic. It shows a picture with clickable sequential buttons and the buttons are linked to the pages of this website.
8. Insert PHP Code Snippet: this plugin using shortcodes to insert and run PHP code in the pages.
9. Frontend Checklist: this plugin is used to create a checklist for users to select and generate a correspondent PDF file.
### Codebase structure
The codebase of IBS Healtheeker consists of around 1000 files and directories. At the root directory, there are some initial bootstrap files, such as index.pxp, wp-config.php, wp-load.php, wp-setting.php. The remaining files are divided into three distinct directories: wp-admin, wp-content and wp-includes.
Following is the top level of the codebase structure:
├── wp-admin
├── wp-content
├── wp-includes
├── index.php
├── wp-activate.php
├── wp-blog-header.php
├── wp-config.php
├── wp-load.php
├── wp-setting.php
├── wp-trackback.php
└── ...

Features
=========
**Display FODMAP:** provide the top 10 foods to avoid in six categories, including processed foods, cereals, protein foods, fruits, vegetables, and dairy products.

**IBS Type evaluation:** provide a quiz to evaluate IBS type and show some statistic graph based on world IBS percentage, IBS rate based on gender and IBS rate based on IBS types.

**Random Food Recommendation:** provide a quick food recommendation based on 5 food categories with random function.

**Food Shopping List:** provide a list of safe and healthy food for user to select and download according to the user IBS type.

**Show Existing Treatment:** provide 4 sections, such as "Food", "Drink", "Stress Management" and "Medication", so that users can get useful information directly.

How to use?
============
Please visit healtheeker.com in your web browser.
