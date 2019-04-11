import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from './../components/layout'
import { Banner } from './../components/banner'

import HomeNav from './../components/HomeNav'
import HomeContent from './../components/HomeContent'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Gatsby Starter - Forty"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Banner />
        <div id="main">
          <HomeNav />
          <HomeContent />
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
