# Gallery

An angular project for overview of a photo album and photos.
Generated with

> Angular CLI: 9.1.15
> Node: 14.17.5

## Development server

Use an IDE of choice to open the project and use below commands to get started.
npm i
ng serve OR ng serve --port=`<port of your choice if desired>`

## Usage

Application that allows a user to navigate photo albums.

1. List albums with titles.
2. As someone interested in a particular album, show thumbnails of the photos in an album along with their titles.
3. As a user, this application allows search by photo titles for a specific string. Results returned to have the entire word italicized that matches the search parameter. Consider only single word search use cases and assume no special characters beyond just alphabetical characters. For example:
   1. If searchText = "accu", the results would show the entire word "_accusamus_" as italicized.
   2. If searchText = "fun", if there's a title with "refunds are not a fun time", the title would be displayed as "_refunds_ are not a _fun_ time". Both the word "refunds" and the word "fun" would be italicized.
   3. If searchText = "fun", a string with the following substring would **not** be italicized "...fu n..."

### API

- List of albums for a particular user: `https://jsonplaceholder.typicode.com/users/1/albums`
- Photos in an album: `https://jsonplaceholder.typicode.com/albums/:ALBUM_ID/photos`. Note that **:ALBUM_ID** is a parameter.

For more information see [JSONPlaceholder](https://jsonplaceholder.typicode.com)

## Testing

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng test --code-coverage` to check code coverage by unit tests.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
