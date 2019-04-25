import CMS from 'netlify-cms'

import AboutPreview from './preview-templates/AboutPreview'
import HomePreview from './preview-templates/HomePreview'
import SingerListPreview from './preview-templates/SingerListPreview'
import VideoListPreview from './preview-templates/VideoListPreview'
import siteStyle from './../assets/scss/main.scss'

CMS.registerPreviewStyle(siteStyle)

CMS.registerPreviewTemplate('about', AboutPreview)
CMS.registerPreviewTemplate('home', HomePreview)
CMS.registerPreviewTemplate('singerList', SingerListPreview)
CMS.registerPreviewTemplate('videoList', VideoListPreview)
