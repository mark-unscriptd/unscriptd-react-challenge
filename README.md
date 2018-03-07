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
