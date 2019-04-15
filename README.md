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

2) Phil

   a. Events

   - Where's the data for these events really coming from or are these just reformatted "blog posts"?
   - Newest / Upcoming / More Info (per event) nested links

   ~~b. Create Pages for Donate, Singers, About and Events~~
   ~~- Template pages~~
   ~~- index.md for Netlify CMS~~

3) Aaron

   a. Contact
   Let's use Netlify's own form handling ([https://www.netlify.com/docs/form-handling/](https://www.netlify.com/docs/form-handling/)) to produce a better version.<br/>

   - Create basic form + error checking and response on inputs and submit
   - Integrate Captcha if possible
   - Feedback upon submission (i.e. message was sent!)
   - (Optional) Toggle button to send a copy of form submission to sender.
   - Once working, let me know if Contact should be a section in the index or it's own route/page.

# CMS Features

- Editable Homepage Banner

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
