# Train To The Beat

## Description

Train to the Beat is a music search tool that allows tracks to be filtered by tempo and then by genre 
to create playlists that are tailored to a user’s specific training

##Functions
WHEN I load the page <br/>
THEN showing the main page, there are navigate bar can lead you to each page and a information box ask you to input a number <br/>
WHEN I input a number and clicked the search button <br/>
THEN it showing the genera generated based on getsongbpm API and 250 songs with the BPM number or the nearest possible BPM in the API database <br/>
WHEN I clicked onto the "view songs" button <br/>
THEN it will scroll to view the song list <br/>
WHEN I click onto one of the genera button <br/>
THEN it filtered to the song with the BPM number i put as well as the genera i choose <br/>
WHEN I clicked the "Add to list" button near each song<br/>
THEN that song will add to my local storage <br/>
WHEN I click onto the "Return to top" button <br/>
THEN it will bring you to the top of the webpage <br/>
WHEN I clicked onto the "song list" in the navigate bar <br/>
THEN it will bring me to the song list page<br/>
WHEN I input the first digit of the address / or the city name in the "Check the weahter" input area <br/>
THEN it showing the weather of current city including : current temperature, feel like temperature adn precipitation based on weatherapi API. <br/>
AND at the bottom will showing the map of the city or street (if use postal code) based on GoogleMap API <br/>
WHEN you input a name in "Create Playlist" input box and click onto "Add Playlist" button <br/>
THEN it will create a playlist named the same as your input<br/>
WHEN there is no input in the "Create Playlist" input box and click the "Add Playlist" button <br/>
THEN there will showing an error message <br/>
AFTER you create the playlist <br/>
THEN it will show at the bottom of the box <br/>
WHEN you click onto the "delete playlist" button<br/>
THEN it will delete the playlist as well as all the songs inside of it<br/>
AFTER you create at least one playlist int the "Create PLaylist" <br/>
THEN you can add songs from the "Unorganized songlist" area<br/>
WHEN you clicked the "Add to playlist" button near the song inside the "Unorganized songlist"<br/>
THEN it will add to the playlist you choose based on the dropdown list <br/>
WHEN you clicked the "Remove song" button <br/>
THEN it will removed from the playlist <br/>
WHEN you clicked onto the playlist name at the bottom of "Create Playlist" box <br/>
THEN it will lead you to the playlist page<br/>
WHEN you at the playlist page<br/>
THEN you can see the songs only inside this playlist <br/>
WHEN you drag and drop each song <br/>
THEN you can change the order of the songs <br/>
WHEN you click onto the "delete" button <br/>
THEN it will delete from the playlist <br/>
WHEN you click onto the "About" from the navigate bar <br/>
THEN it showing the reason why we want to create this website and more details <br/>
## Built with

* JavaScript
* HTML
* CSS

## Third-Party APIs

* getsongbpm
* weatherapi
* GoogleMap

## Website

https://ScalexanderB.github.io/activity-music/

## Screenshots
Main page (BPM input and add song)<br/>
![Train to the bea](https://user-images.githubusercontent.com/39717428/136639037-129d7805-8c19-4066-b4cb-97d6c14251e7.png)<br/>

Song List (check weather and map, create/delete playlist, delete song and add to the playlist)<br/>
![Song Organize](https://user-images.githubusercontent.com/39717428/136639044-b2edde0e-7720-4d90-b0b9-d4a61d7f7fc3.png)<br/>

Playlist page (drag and drop order changing, delete song)
![Song Detail List](https://user-images.githubusercontent.com/39717428/136639040-adeb1520-6538-419b-a88e-5ddada48b829.png)<br/>

About page (mroe information about the page)
![About This Proje](https://user-images.githubusercontent.com/39717428/136639338-14431851-fb1b-4506-94f6-10d533b45325.png)
 
