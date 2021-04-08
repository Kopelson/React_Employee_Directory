# React Employee Directory : 

This application is an employee directory that was built using React. I learned how to break up the application's UI into components, manage component state, and respond to user events. When the application loads it pulls in a 100 random users from randomuser.me API. The table can be sorted alphabetically, actively search by name, phone number, and location, and each employee can be clicked on to display more a modal with information. 

## Table of Contents

* [Overview](#overview)
* [React](#react)
* [Credits](#credits)

## Overview 

![main](https://user-images.githubusercontent.com/57735283/106030228-cf9b2b80-6082-11eb-885e-13683e0f09da.PNG)

Project Link: https://kopelson.github.io/React_Employee_Directory/


### Modal
![modal](https://user-images.githubusercontent.com/57735283/106030023-92369e00-6082-11eb-810f-e218313bc026.gif)

<p>When a user clicks on an employee's name a modal opens with more details about the employee.</p>

### Active Search
![search](https://user-images.githubusercontent.com/57735283/106030026-92cf3480-6082-11eb-9b83-d7a05e874dc9.gif)

<p>User's can activly search through the table by name, phone number, or location.</p>

### Sort
![sort](https://user-images.githubusercontent.com/57735283/106030027-92cf3480-6082-11eb-912c-75ddffd763a7.gif)

<p>The table can be alphabetically be sorted by first name</p>

### Documentation 
<ul>
  <li>React - https://reactjs.org/docs/getting-started.html</li>
  <li>Components and Props - https://reactjs.org/docs/components-and-props.html</li>
  <li>Constructors - https://reactjs.org/docs/react-component.html#constructor</li>
  <li>State - https://reactjs.org/docs/faq-state.html#gatsby-focus-wrapper</li>
  <li>useState() - https://reactjs.org/docs/hooks-reference.html#usestate</li>
  <li>setState() - https://reactjs.org/docs/faq-state.html#what-does-setstate-do</li>
  <li>componentDidMount() - https://reactjs.org/docs/react-component.html#componentdidmount</li>
  <li>render() - https://reactjs.org/docs/rendering-elements.html</li>
  <li>ReactDOM.render() - https://reactjs.org/docs/rendering-elements.html#updating-the-rendered-element</li>
</ul>

### Extras
<ul>
  <li>Fontawesome - for the sort icon</li>
  <li>Axios - to make ajax get request to randomuser.me/api</li>
  <li>Bootstrap - for css styling</li>
  <li>React-Bootstrap - to create bootstrap modal and button component</li>
</ul>

## User Story

* As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Acceptance Criteria

Given a table of random users generated from the [Random User API](https://randomuser.me/), when the user loads the page, a table of employees should render. 

The user should be able to:

  * Sort the table by at least one category

  * Filter the users by at least one property.

## Credits
* Trilogy Education Services for project setup

## React
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
