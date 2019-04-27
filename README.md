# Instructions / To-do:

1. Reggie

   ~~a. Home/Index:~~

   - ~~Reformat page structure to load content from Netlify CMS.~~
   - ~~Have Banner component toggle from visible/invisble from Netlify CMS~~
   - ~~Banner content can be edited from the back-end.<br/>~~

   b. Videos:

   - ~~Create basic page to hold two or more Youtube videos.~~
   - (Optional) Redesign to have video(s) load from a playlist based on schema from CMS.<br/>

   c. Create Paypal Button component

   - Used by Events + Contact pages
   - Conditional rendering for Fundraiser component based currentPage === "Contact"<br/>

   d. Singers

   - ~~Populate page with 2 singers~~
   - ~~Singer Details can be edited from the back-end~~

   e. Footer component editable from CMS

   - ~~Company information editable~~
   - ~~Social icons should appear based on Enable/Disable conditions~~

   f. Once Aaron completes Contact form component, make it editable from CMS

   ~~- Email, Phone and Address editable as "Contact Information"~~

   g. Make Navigation component editable from CMS

   - ~~logo uploadable from CMS~~
   - Optional: Enable/Disable pages

2) Phil

   a. Events

   - Newest / Upcoming / More Info (per event) nested links

   ~~b. Create Pages for Donate, Singers, About and Events~~
   ~~- Template pages~~
   ~~- index.md for Netlify CMS~~

3) Aaron

   a. Contact
   Let's use Netlify's own form handling ([https://www.netlify.com/docs/form-handling/](https://www.netlify.com/docs/form-handling/)) to produce a better version.<br/>

   ~~- Create basic form + error checking and response on inputs and submit~~
   ~~- Feedback upon submission (i.e. message was sent!)~~

   - Integrate Captcha if possible

   ~~b. Add Scrollable Anchor animation for Contact component in index from "Contact" in Nav.~~

# CMS Features

1. ### use this [link](https://github.com/netlify-templates/gatsby-starter-netlify-cms/blob/master/static/admin/config.yml) for yml features

2. Editable Homepage Banner

   - Enable/Disable banner on homepage

3. Editable Company information

   - Company Logo for Nav
   - Company Name for Footer

4. Editable Social Media Icons

   - Enable/Disable Social Media Icons

5. Dynamic List: Videos + Events

# gatsby-starter-forty

**This is a starter for Gatsby.js V2.**

**The older V1 version of this starter can be found on the v1 branch**

Gatsby.js V2 starter based on the Forty site template, designed by HTML5 UP. Check out https://codebushi.com/gatsby-starters/ for more Gatsby starters and templates.

## Preview

https://gatsby-forty.surge.sh

## Installation

Install this starter (assuming Gatsby is installed) by running from your CLI:
<br/>
`gatsby new gatsby-starter-forty https://github.com/codebushi/gatsby-starter-forty`

Run `gatsby develop` in the terminal to start the dev site.

## CSS Grid

The grid on this site was replaced with a custom version, built using CSS Grid. It's a very simple 12 column grid that is disabled on mobile. To start using the grid, wrap the desired items with `grid-wrapper`. Items inside the `grid-wrapper` use the class `col-` followed by a number, which should add up to 12.

Here is an example of using the grid, for a 3 column layout:

```
<div className="grid-wrapper">
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
</div>
```

## Notes for Recapcha + Gatsby (with .dotEnv) + Netlify

1. Custom Recaptcha component _required_ with Gatsby + Netlify
2. Signup for Recaptcha Site + Secret Keys
3. Install dotenv + .env files.
4. Define identical keynames in both .env file and Netlify's Build Environment settings.
5. Configure form

- add "data-netlify-recaptcha="true" to <form>
- define handleChange, handleRecaptcha and onSubmit functionality

## Plugins Used

**eslint-config-react-app**

Linting tool for Gatsby Projects

`npm install --save-dev eslint-config-react-app`

**gatsby-plugin-netlify-cms**

[gatsby-plugin-netlify-cms](https://www.gatsbyjs.org/packages/gatsby-plugin-netlify-cms/)Automatically generates an admin/index.html with a default [Netlify CMS](https://www.netlifycms.org/) implementation.

`npm install --save-dev gatsby-plugin-netlify-cms`

**gatsby-plugin-google-analytics**

Add Google Analytics by using [gtag.js](https://developers.google.com/analytics/devguides/collection/gtagjs/)

`npm install --save gatsby-plugin-gtag`

**react-scrollable-anchor**

Lightweight library for smooth scrolling anchors in React, tied to URL hash.

`npm install --save react-scrollable-anchor`
