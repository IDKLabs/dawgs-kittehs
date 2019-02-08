# Dawgs and Kittehs

### Before you begin
First of all, thank you for spending the time to work on this takehome project. We know your time is valuable — which is why we're using a service called [Takehome.io](http://takehome.io). You should have received an email from Takehome after you cloned this repo that informs you how everything works, but just in case you missed it:
 - You have 2 hours from the time you cloned the repo to make your last `git push`
 - You may commit as many times as you like until the time limit
 - After the time limit, you'll be unable to `git push` as the repo will be closed 

*Why use this method?* We know candidates often feel the need to spend more than the suggested time on takehome projects - this is completely natural considering other candidates may be doing the same! This system prevents that from happening, so please just do what you can in the alotted time - we'll assess whatever work gets submitted.


### What we're looking for
This project assesses some of the practical skills we are looking for in a [Fullstack Engineer at Resource](https://angel.co/resource-io/jobs/190489-senior-fullstack-engineer).

 - React component design, lifecycle and state management
 - Basic UX and layout code
 - Basic API design
 - Ability to balance output with quality

Bonus if you have time
 - Unit tests (run `yarn test` to run your tests, which use `jest`)

We don't expect you to complete all the project requirements! Feel free to focus on areas you find more interesting/challenging. Have fun with it!

### Your Assignment

You've been hired by Dawgs and Kittehs Inc. to improve their web application. They currently have a database of pets with `name`, `breed`, and `petType`, and a simple site that prints the list. 

They have provided both the frontent (a React app) and a backend API. You'll need to use your imagination - we've simulated an API with some javascript in the `api` folder. Your "database" is a javascript Array in `src/api/data.js` *We fully expect that you will modify the code in the `api` folder, but please do not modify the `data.js file`*

Improve the Dawgs and Kittehs web app with the following new features:
 - <strong>*required*</strong> Pagination (any style you are most comfortable with - eg. Previous/Next/Page # or Inifite scroll/Load More)
 - Sort by `name` or `breed`
 - Filter by Pet Type (Cat or Dog)
 - Handle errors from the API gracefully (see commented code in `src/api/index.js` to simulate errors)
 - Click on any pet breed to display information about the breed
   - You'll have a list of pets but no breed information, so you'll need to use an api to fetch information about a specific breed. Start by signing up for an api key [here](https://thedogapi.com/). View documentation [here](https://documenter.getpostman.com/view/4016432/the-dog-api/RW81vZ4Z).

### Important details
- You should not need to install any additional packages. The [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) package can be used to make network requests, and anything else you need will be included.

### Instructions
1. Please install `yarn`
1. From the project directory, run `yarn install` then `yarn start` and open [http://localhost:3000](http://localhost:3000)
1. Complete what you can within 2 hours, making commits as you make progress on chunks of work
1. `git push` to the repository remote - we'll be notified when it's done!

----

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
