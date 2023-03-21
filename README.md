# Friends App
## Description
This system is described as a simple friends manager. It has two main pages, the Home, in charge of showing all friends who are available on the database with some first info of each one, and the second page, the Details, who will show more detailed info about one specific friend selected in Home and the friend’s photo gallery.

## Requirements
You need Node 14.x.x LTS version as Storybook build requirement.
> Note: Storybook 7 will no longer use webpack, so this requirement won't be neccesary any more

## Selected Technologies

The tech stack used in this project is:

- [Vite + React + Typescript](https://vitejs.dev/guide/)
- [Eslint](https://eslint.org/)
- [Styled-Components](https://styled-components.com/)
- [React Router-DOM](https://reactrouter.com/en/main)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Storybook](https://storybook.js.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React icons](https://react-icons.github.io/)

## Available scripts

After cloning this repo, and installed all dependencies, the following scripts will be available:
(*You can use any package manager*)

To start vite in dev mode, using dev .env variables:
```sh
yarn dev
```
To build the project with dev .env variables:
```sh
yarn build:dev
```
To start chromatic build: 
(_Note_: you need to add your project token at the end to work, see this [link](https://www.chromatic.com/docs/setup) for more detailed info)
```sh
yarn chromatic
```
To open Storybook: 

```sh
yarn storybook
```
Build storybook:
```sh
yarn build-storybook
```
To open the test runner at storybook:
(*Note*: You need your Storybook instance to be running)
```sh
yarn test-storybook
```
To open the code coverage:
(*Note*: You need your Storybook instance to be running)
```sh
yarn coverage
```
To open the code coverage report:
```sh
yarn coverage-report
```
## Available custom hooks

You can find the available custom hooks in the [/shared/hooks](src/shared/hooks) path, they are:

### useGalleryModal
This C-Hook is used to manage the Gallery Modal after clicking a friend's photo on the Details path, it returns an object with 3 keys: 

- setPhoto: this is a function that accept two params, source and description, this will set the src and the alt values via setState of the react's useState hook.
- onClose: this function will reset the src and alt values and close the Galley Modal.
- renderModal: is a cached function who will return the react-dom's createPortal method or null, based on current src and alt values

### useHandleTabs
This C-Hook is used to manage the click event on a tab of the Details path, it recieves an object via params with a key named tabsChildren, this key is an Array with all the childrens to render in order by tabs. This hook returns and object with 3 keys: 

- activeTab: this is the index of the current children and active tab , who start at 0
- handleTab: is a function that accepts 1 param called id, the id of the tab clicked, and sets this id as the current activeTab index.
- renderNode: is the memoized value of the tabsChildren array at the current active tab index.

