# Dawgs and Kittehs

### What we're looking for
- React component design, lifecycle and state management
- Basic API design
- Basic UX and layout code
- Ability to balance output with quality

### Your Assignment

You've been hired by Dawgs and Kittehs Inc. to improve their web application. They currently have a database of pets with `name`, `breed`, and `petType`, and a simple site that prints the list. They've provided you with the frontend (a React app) and an API simulated with some javascript and sample data. Use your imagination and assume the methods in `api/index.js` will fetch from an actual database eventually. <strong>*Please modify the API to accomplish the following tasks.*</strong>

Dawgs and Kittehs Inc. have requested you add the following new features within the allotted time:

- Pagination (any style - eg. Previous/Next/Page # or Inifite scroll/Load More)
- Handle errors from the API gracefully (see commented code in `src/api/index.js` to simulate errors)

Bonus if you have time:
- Sort by `name` or `breed`
- Filter by `petType`
- Click on any pet breed to display information about the breed
  - You'll have a list of pets but no breed information, so you'll need to use an api to fetch information about a specific breed. Start by signing up for an api key [here](https://thedogapi.com/). View documentation [here](https://documenter.getpostman.com/view/4016432/the-dog-api/RW81vZ4Z).
- Unit tests
