# ReactMovie_project

## Wire frame
![alt text](https://github.com/hong710/ReactMovie_project/blob/main/wireframe.jpg)
## User Story / Deliverables

As a user, I will see a list view of movie cards that include the movie title, score out of 10, an image of the movie poster, score out of 10, and button with the text “More details”. This will be the main page that can be routed to from a few different places in the app, including the "React Movies" icon in the top left corner of the header, as well as others, which will be explained further down.

As a user, there will be a carousel of movie images displaying the title of the movie, running on a loop, or a next or previous buttons to click to the next movie image

As a user, I will be able to search for movies in the search bar and have only the movies that I search for show up in the movie list

As a user, I will click on the "More details" button, which will route me to a page where I can see more details about the movie, such as, genre, rating, run time, description of the movie, while also still showing the title, score out of 10 and the image of the movie. This movie card will also have two buttons: "Add to favorites" and "Back to home". 

As a user, I will be able to click on the "Add to favorites" button to add that movie to a favorites list, which will route me to a separate favorites page once clicked. Movie cards on this page will have a button that will say "Added to favorites". I can also click the "Back to home" button and that will route me back to the main movie list page with the header, search bar, and list of movies

As a user, on the main page there will be two buttons on the header: a "Your favorites" button and a "Add new movie" button. I can click on the "Your favorites" button and that will route me to the favorites page, where I will see what movies I have added to my favorites list by clicking the "Add to favorites button". These movies will not persist once page is refreshed. I can also click on the "Add new movie" button, which will open up a show view of a form where I can add all of the details to create a new movie card that will persist in the database, as well as in the main movie list. Clicking on the "Submit" button will close the show view, refresh the page, route me back to the main movie list page, and show the newly created movie at the bottom of the main movie list. The "Close" button and the "X" button will route me back to the main movie list page.



## Pitch:

We will be creating the ability for users to create their own movie library where users can choose which movies to add and remove from their library. 


Main Tasks:
* [DONE] Display movies in popular movies section limit 8 with show more button.
* [DONE] Search bar using partial matches. 
* 3 routers for:
    * [DONE]Movie Details - css styling
    * [DONE] Watch list using post request set favorite to "true" - css styling
    * [DONE] home page with movie list

Minor tasks
* [DONE] complete carousel
* genre orders
* [DONE]css styling





