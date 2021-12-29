# This is the task split into steps that are easier to go through and help learn how to build your GraphQL server. If you wish to challenge yourself you can choose to avoid reading these steps, and just work with the `README.md` file

# Step one

## go over the presentation and the lesson and first create a working GraphQL server.

### Testing that your server is working:

- Create the server: remember, a GraphQL-express server consists of an `index.js/ts` file to launch it using Apollo, typeDefs and resolvers.

  - [For hints on creating a basic GraphQL server](https://youtu.be/0OvDumPYiSs)

- Create a new query definition in `typeDefs` and a new resolver in `resolvers` called `queryTest`. Let it return some string like `test passed!`

- Go to `localhost:YOUR_PORT_NUMBER/graphql`, and using the Apollo Studio send a query to your server and see if it returns correctly!
  - [For more info about how to use Apollo Studio](https://youtu.be/0OvDumPYiSs?t=456)

# Step two

## Now that your server is working, create a React app to support displaying a bunch of books with images, book titles etc. Feel free to design it as you wish, but even something [as basic as this](./assets/demo.PNG) will do.

### About the UI and what you should have by now

By now you should have a working GQL server that does nothing and a frontend UI that can potentially display books. You still don't know what the data will look like so at this point you probably just have components with props that are more or less unkown.

# Step three

### Setting up UI requests and defining queries and mutations in the server to resolve those requests.

#### Important: please take a look at [`assets/data-mock.js`]() - this is your "database", this is how your data will look.

- Create a type definition for the object you'll be dealing with
- Create a type definition for a book - what does it look like according to the `data-mock.js` mock file?
- Create a type definition for an author
- Create a new query in your `typeDefs` file to support reading all books - something like `getAllBooks`.
- Create a new resolver in your `resolvers` file to support resolving this query.
- Go to `localhost:YOUR_PORT_NUMBER/graphql` and test this query - ask your GraphQL server for an array of book objects that contains a title and a cover image each.

### What you should expect to receive:

![](https://github.com/KorenEzri/GraphQL-lesson/blob/master/assets/res_example_getallbooks.PNG)

If you got this response then you are golden! If you didn't - keep trying! GraphQL can be annoying in the beginning, but it's so cool once you get the hang of it :)

# Step four

### Connecting your graph service to your frontend.

- [Follow this guide](https://youtu.be/NwA2vkDQmwY) to learn how to connect a React app to a GraphQL server using ApolloClient
- Connect your server and create a query that fetches all the book data to the client
- Display all the books from the server in your app. It should look like [this](./assets/step4demo.PNG)

# Step five

### Expanding functionality and adding features

- For each book, now also display it's author's name.
- For each book, now also display a list of books that the author has written (see [this](./assets/demo.PNG) for an example: `stephen king, has published books: [list of books]`
- Add a server-side search (search the DB (the mock) in the server - don't send the whole block of data to the client and then filter it there) for books according to title - some query like `getBooksByTitle`
- Create a new mutation in your server - `deleteBook` - that will delete a book by ID **from the server**. Add this functionality to your client either by using double click on a book to delete it or by adding some button.
