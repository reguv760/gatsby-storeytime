import CMS from 'netlify-cms'

import AboutPreview from './preview-templates/AboutPreview'
import DonatePreview from './preview-templates/DonatePreview'
import EventPreview from './preview-templates/EventPreview'
import HomePreview from './preview-templates/HomePreview'
import SingerListPreview from './preview-templates/SingerListPreview'
import VideoListPreview from './preview-templates/VideoListPreview'
import siteStyle from './../assets/scss/main.scss'

CMS.registerPreviewStyle(siteStyle)

//preview template names has to match names in config.yml
CMS.registerPreviewTemplate('about', AboutPreview)
CMS.registerPreviewTemplate('donate', DonatePreview)
CMS.registerPreviewTemplate('eventsList', EventPreview)
CMS.registerPreviewTemplate('home', HomePreview)
CMS.registerPreviewTemplate('singerList', SingerListPreview)
CMS.registerPreviewTemplate('videoList', VideoListPreview)
