/*
Function createElemWithText

1.The function createElemWithText should exist.
2. The function should create and return the requested HTML element.
3. The function should apply the correct textContent to the returned element.
4. The function should create an element with the default tag name 'p' if no tag name is specified.
5. The function should create an element with an empty string as text content if no text is provided.
6. The function should not apply a class to the element if className parameter is not provided.
7. The function should apply a class to the element if className parameter is provided.
*/

function createElemWithText(tagName = 'p', text = '', className) {
    // Create the element using tagName
    const element = document.createElement(tagName);
    // set the text content
    element.textContent = text;

    // If className is provided, set it
    if (className) {
        element.className = className;
    }

    //return element
    return element;
}

/*
Function createSelectOptions

1. Function CreateSelectOptions should exist
2. The function should return undefined if no parameter is provided.
3. The function should return an array.
4. The function should return an array of options with the same length as the users array
5. The function should return an array of option elements
6. The function should assign the related user id to the value attibute of the options elements
7. The function should assign the related user name to the textContent attribute of the options elements
*/

function createSelectOptions(users) {
    // If called without passing a parameter, return undefined
    if (users === undefined) {
        return undefined;
    }

    // if user gave a non-array, return an empty array
    if (!Array.isArray(users)) {
        return [];
    }

    const options =[];

    // Loop trhrough each user object provided
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.textContent = user.name;
        options.push(option);
    });

    // Return the array of generated option elements
    return options;
}

/*
Function toggleCommentSection

1. The function toggleCommentSection should exist
2. The function should return undefined if postId parameter is not provided
3. The function should return null if passed a parameter that does not match a postId
4. The function should select and return the correct section element.
5. The function should toggle the 'hide' class on the section element.
*/

function toggleCommentSection(postID) {
    if (postID === undefined) {
        return undefined;
    }

    const section = document.querySelector(`section[data-post-id="${postID}"]`);

    if (!section) {
        return null;
    }

    section.classList.toggle('hide');

    return section;
}

/*
Function toggleCommentButton

1. The function toggleCommentButton should exist
2. The function should return undefined if not passed a postId parameter.
3. The function should return null if passed a parameter that does not match a post id
4. The function should select and return the correct button element
5. The function should change textContent to 'Hide comments" if it had "Show comments".
*/

function toggleCommentButton(postID) {
    if (postID === undefined) {
        return undefined;
    }

    const button = document.querySelector(`button[data-post-id="${postID}"]`);

    if (!button) {
        return null;
    }

    if (button.textContent === "Show Comments") {
        button.textContent = "Hide Comments";
    } else {
        button.textContent = "Show Comments";
    }
    return button;
}

/*
Function deleteChildElements

1. The function deleteChildElements should exist.
2. The function should return undefined if an HTML element is not received as a parameter.
3. The function should return the same HTML element it receives as parameter.
4. The function should return the HTML element with all child elements deleted.
*/

/*
Function addButtonListeners

1. The function addButtonListeners should exist.
2. The function should return an empty NodeList if there are no buttons found within the main element.
3. The function should select and return all button elements found within the main element
4. The function should skip adding a click event listener to a button without postId data attribute.
5. The function should add a click listener that calls the toggleComments function to each button element found within the main element.
*/

/*
Function removeButtonListeners

1. The function removeButtonListeners should exist.
2. The function should return an empty NodeList if there are no buttons found within the main element.
3. The function should select and return all button elements found within the main element.
4. The function should remove all click listeners that call the toggleComments function for all button elements found within the main element.
*/

/*
Function createComments

1. The function createComments should exist.
2. The function should return undefined if it does not receive a parameter.
3. The function should create and return a document fragment.
4. The function should create and append one article element to the fragment for each comment.
5. The function should create one h3 element and two paragraph elements and append them to their article parent element.
6. The function should assign accurate data to the h3 (name) and paragraph elements (body and From: email.)
*/

/*
Function populateSelectMenu

1. The function populateSelectMenu should exist.
2. The function should return undefined if it does not receive a parameter with JSON users data.
3. The function selects and returns the select menu.
4. The function receives the option elements from createSelectOptions and appends them to the select element
*/

/*
Function getUsers

1. The function getUsers should exist
2. The function should use async / await to retrieve and return users data.
3. The function should return accurate JSON users data.
*/

/*
Function getUserPosts

1. The function getUserPosts should exist
2. The function should return undefined if no user ID parameter is provided.
3. The function should use async / await to retrieve and return user posts data.
4. The function should return accurate JSON user posts data.
*/

/*
Function getUser

1. The function getUser should exist.
2. The function should return undefined if no user ID parameter is provided.
3. The function should use async / await to retrieve and return data for a specific user ID.
4. The function should return accurate JSON user data.
*/

/*
Function getPostComments

1. The function getPostComments should exist.
2. The function should return undefined if no post ID parameter is provided.
3. The function should use async / await to retrieve and return data for a specific post ID.
4. The function getPostComments should return accurate JSON post comment data.
*/

/*
Function displayComments

1. The function displayComments should exist.
2. The function should return undefined if no postId parameter is provided.
3. The function should create and return a section element.
4. The function should return a section element with the postId as dataset attribute.
5. The function should return a section element with 'comments' and 'hide' classes when postId is provided.
6. The function should create and return a section element with all comments for the given post ID appended.
*/

/*
Function createPosts

1. The function createPosts should exist.
2. The function should return undefined if no posts data parameter is provided.
3. The function should create and return a document fragment.
4. The function should create an article element for each post and append each to the document fragment.
5. The function should create an h2, 4 paragraphs, a button, and a section element, and then append each element to the parent article element in that specific order.
6. The function should create an h2, 4 paragraphs, a button, and a section element, and assign the desired textContent and attributes per the project instructions.
*/

/*
Function displayPosts

1. The function displayPosts should exist.
2. The function should return a paragraph element with the default-text class if no posts data is provided.
3. The function should return a document fragment if posts data is provided.
4. The function should append a document fragment containing article elements (the posts) to the main element.
*/

/*
Function toggleComments

1. The function toggleComments should exist.
2. The function should return undefined if it does not receive the required event and postId parameters.
3. The function should return an array containing the section element returned by toggleCommentSection and the button element returned by toggleCommentButton.
*/

/*
Function refreshPosts

1. The function refreshPosts should exist.
2. The function should return undefined if it does not receive a posts data parameter.
3. The function should return an array of the results from the functions it calls.
4. The function should return an array of results with accurate data.
*/

/*
Function selectMenuChangeEventHandler

1. The function selectMenuChangeEventHandler should exist.
2. The function should return undefined if it does not receive a change event parameter.
3. The function should return an array.
4. The function should contain the userId, the posts array and the refreshPostsArray.
5. The function should return arrays with accurate data.
*/

/*
Function initPage

1. The function initPage should exist.
2. The function should return an array.
3. The function should return an array that contains the users data.
4. The function should return an array that contains a select element.
*/

/*
Function initApp

1. The function initApp should exist.
*/