This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Unscriptd React Coding Challenge

To start the client, run `npm start` within the client folder. Launch the API using `npm start` from the unscriptd-react-challenge folder.

## The Brief

Set up a React application where users can view and edit image information. Data for images is stored in this parent folder as a JSON server. The app should do the following:

1. Show a list of images using thumbnails
2. Choose one. View more information, and a larger version of the image
3. Edit the title or caption of that image.

Extra

1. Add a search that finds images using words contained in the caption
2. Enable a select mode in the list view, and when one or more images are selected, enable the user to delete them.

## API Usage

API Methods and Endpoints used:

* 'GET' /images
* 'GET' /images/$id
* 'GET' /images/?caption_like=$words
* 'PATCH' /images/$id
* 'DELETE' /images/$id

## Libraries and Tools Used

* Create React App boilerplate
* Material-UI: React Components that implement Google's Material Design
* Google Material Icons

## Development Decisions

* I initially decided to keep the client and API as 2 separate applications. That is the reason for the client folder.
* The Delete API method could only delete 1 image ID at a time. I used a toggle to give all images the ability to delete by ID.
* Used a Material-UI Snackbar to show confirmation when an image title or caption is updated.
* Typing in the search box and pressing the enter key will utilize the API to search the captions and filter the images. Once the search box is empty, all images from the API will be displayed.
* I used the Delete method to remove images from the JSON database. I decided to do this over storing and deleting from app state because it is a permanent change. I have included a copy of the original JSON database in the parent folder. 

## Testing

I've added a single test case to check for data when making the API call. The test is using Jest which comes prepackaged in Create-React-App. 

## Outcomes

I have developed a React app that retrieves image data from a JSON server API and lists them as thumbnails. When a thumbnail is clicked, a view with a larger image and editable title and caption is shown. A toggle on the home page gives the user the option to delete images from the database.