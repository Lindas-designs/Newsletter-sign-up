# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Newsletter sign-up form with success message solution](#frontend-mentor---newsletter-sign-up-form-with-success-message-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Setting size for flexbox items in %](#setting-size-for-flexbox-items-in-)
    - [Min-width usage in flex items](#min-width-usage-in-flex-items)
    - [Centering container in a page](#centering-container-in-a-page)
    - [Creating linear gradient for buttons](#creating-linear-gradient-for-buttons)
    - [Using input's value later in html](#using-inputs-value-later-in-html)
    - [Changing order of flexbox items](#changing-order-of-flexbox-items)
    - [Filling whole flexbox container with image](#filling-whole-flexbox-container-with-image)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Lindas-designs/Newsletter-sign-up.git)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow

### What I learned

### Setting size for flexbox items in %

When setting size for flexbox items in % the value specified in % will take available space from flex item container(and not the parent element`s size)

### Min-width usage in flex items

Using min-width:0 on a flexbox item allows flexbox to shrink the element below its minimum content size.

### Centering container in a page

Defining containers height to min-height:100vh and displaying content as flex items (there is 1 item) and centering it.

```css
.outside-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Creating linear gradient for buttons

Using background-image property instead of background-color.

```css
.btn:active {
  background-image: linear-gradient(
    to right,
    hsl(4, 100%, 67%),
    hsl(25, 100%, 70%)
  );
}
```

### Using input's value later in html

```js
element.innerHTML = input.value;
```

### Changing order of flexbox items

Using order property.

```css
.info-section {
  order: 2;
}
```

### Filling whole flexbox container with image

Using object-fit: cover

```css
.container-img {
  flex: none;
  height: 40vh;
  width: 100%;
  object-fit: cover;
}
```

### Continued development

Substituting images for different media queries by using css background-image property.

## Author

- Frontend Mentor - [@Lindas-designs](https://www.frontendmentor.io/profile/Lindas-designs)
