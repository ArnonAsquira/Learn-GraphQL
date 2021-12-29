# Learn GraphQL - book app

In this project you will create a tiny book app!

This repository includes a basic template for starting the project.

### Setup instructions

- Fork this repository to your account as a **public** repo
- Clone your new repository to your computer 🖥
- Install the NPM dependencies for your server by running `npm install` from the vscode terminal `ctrl + j` (make sure you are in the correct directory - you need to be inside the `/server` dir :) ) 📂
- Use `npx create-react-app` to create your frontend dir!
- [Create a new branch](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/managing-branches) for the development process
- Make changes to the code to meet the project requirements 📝
- [Commit Early, Push Often](https://www.worklytics.co/commit-early-push-often/) - your work will be evaluated by your git flow and overall github usage 🏄‍♂️
- Before submitting, create a pull request from the development branch into the main branch. **Leave the PR open and do not merge the branches**. The open PR will be used to review and mark your code
- Good Luck! 🤘

# Requirements

As a user, I can...

- I have an app with a UI that shows me all of the books from the server's "database" - the database is the `data-mock.js` file.
- I have a GraphQL server that sends the data of these books to the app - this is how the app gets the book data.
- For each book, I can now also see the author's name.
- For each book, I can now see a list of books that the author has written (see [this](./assets/demo.PNG) for an example: `stephen king, has published books: [list of books]`
- I can now perform a server-side search (search the DB (the mock) in the server - don't send the whole block of data to the client and then filter it there) for books according to title - some query like `getBooksByTitle`
- I can now delete a book **from the server** by double-clicking it.

## If you're having a tough time - that's understandable - GraphQL can be confusing at first, you can use the `STEPS.md` file to break the task into smaller, more digestible chunks.

# Bonus

### Made it this far? Still want more?

- Add [debounce](https://medium.com/@jamischarles/what-is-debouncing-2505c0648ff1) to the server-side search you implemented.
- Use a [scalar type](https://graphql.org/learn/schema/#:~:text=ID%3A%20The%20ID%20scalar%20type%20represents%20a%20unique%20identifier%2C%20often%20used%20to%20refetch%20an%20object%20or%20as%20the%20key%20for%20a%20cache.%20The%20ID%20type%20is%20serialized%20in%20the%20same%20way%20as%20a%20String%3B%20however%2C%20defining%20it%20as%20an%20ID%20signifies%20that%20it%20is%20not%20intended%20to%20be%20human%E2%80%90readable) for the ID properties in your graph's schema.
- Add tests to your graph server
- Add anything cool that you want! :)

# Please if you have any questions contact me (Koren) !

GOOD LUCK!
