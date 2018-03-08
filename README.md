#From Hariram Nandagopal

How to use test the application


1) Please open a new terimal and type `npm run start`
2) Fire up second terminal and type `npm run dev`, you can open the UI using the url mentioned on the terminal, mostly it will be `http://localhost:1234`

How to use the UI

1) Please use the header search box to search the image based on the {caption}, Message "No records available" will be display if there is no match found.
2) Select on the Items image to view the large pic and edit the Title and caption of the selected item.
3) Change the title and caption and press save to update the new title and caption. Modal will close automatically.
4) Select the item(s) (not on the image) to delete. A tiny delete button will show up at bottom of the screen to select the asserts from the json. screen will refresh post successfull deletion. Reduced the items opacity to differentiate between selected and unselected items.

What I have used,

1) Used vanila javascript for everything including for Ajax calls.
2) used components to split the application for easy maintaince.
3) Create SASS for CSS and for easy maintaince.
4) Used `display: grid` for creating the layout.
5) Used `display: flex` for inner DOM elements.
6) App is RWD (60 to 70%)

# Unscriptd React Coding Challenge

Seems like you're trying out for a position at
[Unscriptd](https://www.unscriptd.com) or you've found this and would like to
apply. Fork this repo and go at it ;)

Your goal is to set up a React application, where users can view and edit image information. A Once you are done with the challenge, please fire up a
Pull Request and we will get in touch.

## Brief

I am a user of the app and I want to view images and provided info about them.

1. Show a list of images using thumbnails
2. Choose one. View more information, and a larger version of the image
3. Edit the title or caption of that image.

If you have time!

1. Add a search that finds images using words contained in the caption
1. Enable a select mode in the list view, and when one or more images are selected, enable the user to delete them.

## Requirements

* You can use whatever libraries, task runners and build processes you
  like. React and plain JavaScript are the only requirements (ES6
  encouraged, but no TypeScript, CoffeeScript, etc). Redux is optional.

## API Usage

API can be launched using `npm start`. You will need to run `npm install` once starting working on the project to install dependencies.

| Endpoint                   | Result                                     |
| -------------------------- | ------------------------------------------ |
| /images                    | Lists all images                           |
| /images/928305966          | Get image with id 928305966                |
| /images/?caption_like=Wade | List images with a caption containing Wade |

---

More info about API usage can be found at the [json-server
repo](https://github.com/typicode/json-server).
