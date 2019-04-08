# Instructions / To-do:

1. Reggie

   - Home/Index:

   1. Reformat page structure to load content from Netlify CMS.
   2. Have Banner component toggle from visible/invisble from Netlify CMS
   3. Banner content can be edited from the back-end.

   - Videos:

   1. Create basic page to hold two or more Youtube videos.
   2. (Optional) Redesign to have video(s) load from a playlist based on schema from CMS.

   - Create Paypal Button component

   1. Used by Events + Contact pages
   2. Conditional rendering for Fundraiser component based currentPage === "Contact"

2) Phil

   - Events

   1. Where's the data for these events really coming from or are these just reformatted "blog posts"?
   2. Newest / Upcoming / More Info (per event) nested links

3) Aaron

   - Donate

   1. Create page with one state { currentPage: ''}

   - Contact
     Let's use Netlify's own [form handling](https://www.netlify.com/docs/form-handling/) to produce a better version.

   1. Create basic form + error checking and response on inputs and submit
   2. Integrate Captcha if possible
   3. Feedback upon submission (i.e. message was sent!)
   4. (Optional) Toggle button to send a copy of form submission to sender.
   5. Once working, let me know if Contact should be a section in the index or it's own route/page.

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
