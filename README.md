# Demo Links

Live: [http://storeytime.netlify.com](http://storeytime.netlify.com)<br/>
Admin: [http://storeytime.netlify.com/admin/](http://storeytime.netlify.com/admin/)

_Notes to access Netlify CMS:_

- User must have a Github account and a Contributor to project repo
  <br/>
  or
  <br/>
- User has a gmail account and requires an invite from Netlify owner/admin

# CMS Features

1. ### use this [link](https://github.com/netlify-templates/gatsby-starter-netlify-cms/blob/master/static/admin/config.yml) for yml features

2. Editable Homepage

   - Banner: Enable/Disable banner on homepage
   - Company information: Logo for Navigation and Company Name for Footer
   - Updatable HomeNav component: Headline, text and Image upload
   - Social Media Icons: Enable/Disable Social Media Icons

3. Paypal ID for "Donate" on the following pages:

   - Events
   - Donate

4. Dynamic List: Videos + Events

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

## Notes for Developing with Gatsby + Github + Netlify CMS

1. Link github repo to Netlify CMS for Continuous Deployment
2. Local repo "searches" for CMS data in Netlify deployment based on branch defined in config.yml (if none is defined, it defaults to _master_)
3. Edits made in CMS must be pulled to local branch

## Notes for Recapcha + Gatsby + Netlify

This assumes forms built in Gatsby are received in Netlify's Form collection.

1. Custom Recaptcha component _required_ with Gatsby + Netlify
2. Signup for Recaptcha Site + Secret Keys
3. Add .env.development file to project root.
4. Define _SITE_RECAPTCHA_KEY_ and/or _SITE_RECAPTCHA_SECRET_ keynames in both .env.development file and Netlify's Build Environment settings.
5. Configure form

   - import navigateTo from gatsby-link
   - add "data-netlify-recaptcha="true" to as form attribute
   - define handleChange, handleRecaptcha and onSubmit functionality in component

6. After Preview on Branch deploy on Netlify, add Deploy Preview URL to Recapcha console to test

7. Change Build command in Netlify to:<br/>
   `echo SITE_RECAPTCHA_KEY=$SITE_RECAPTCHA_KEY >> .env.production && gatsby build`

## Plugins Used

**eslint-config-react-app**

Linting tool for Gatsby Projects

`npm install --save-dev eslint-config-react-app`

**gatsby-plugin-netlify-cms** <br/>

[gatsby-plugin-netlify-cms](https://www.gatsbyjs.org/packages/gatsby-plugin-netlify-cms/)Automatically generates an admin/index.html with a default [Netlify CMS](https://www.netlifycms.org/) implementation.

`npm install --save-dev gatsby-plugin-netlify-cms`

**gatsby-plugin-google-analytics**

Add Google Analytics by using [gtag.js](https://developers.google.com/analytics/devguides/collection/gtagjs/)

`npm install --save gatsby-plugin-gtag`

**react-scrollable-anchor**

Lightweight library for smooth scrolling anchors in React, tied to URL hash.

`npm install --save react-scrollable-anchor`

**react-google-recaptcha**

React component for Google reCAPTCHA v2. Custom Component used by Contact Form

`npm install --save react-google-recaptcha`
