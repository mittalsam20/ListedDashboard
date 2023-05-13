# LISTED SAMAKSH MITTAL

### Deploy Link

https://samakshlisted.netlify.app/

### FOLDER STRUCTURE

- UIComponents:- Dumb Components.
- AppComponents:- Smart and a little more complex components with specific uses across the codeBase.
- Utils:- globally used Utils helperFns.
- Constants:- has constants like colors, strings, magicNumbers.
- styles:- Global scss styles, colors, mixins, and typography.
- SvgComponents:- all the svgIcons
- services:- All helper fns which are related to third party API
- Store:- Redux
- Layouts:- All layouts that are used in app are written here.
  - Partials:- Components which make up a layout are written here.
- Hocs:- all custom Hocs
- Hooks:- all custom hooks

- routes:- so I have decided to go with a nested folder structure for routes/pages instead of a flat structure.
- routes
  - components:- has all the components specific to this route and the main page
  - modules
    - redux reducer file
    - utils specific to this route
    - any other helper fns file
  - routes:- contains the nested routes, which will have the same structure as this.
  - index.js:- return routes config for the current route and its children. {path, element, children}.
