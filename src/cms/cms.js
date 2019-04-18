import CMS from 'netlify-cms'

import AboutPreview from './preview-templates/AboutPreview'
import BannerPreview from './preview-templates/BannerPreview'
import SingerListPreview from './preview-templates/SingerListPreview'
import VideoListPreview from './preview-templates/VideoListPreview'
import siteStyle from './../assets/scss/main.scss'

CMS.registerPreviewStyle(siteStyle)

CMS.registerPreviewTemplate('about', AboutPreview)
CMS.registerPreviewTemplate('banner', BannerPreview)
CMS.registerPreviewTemplate('singerList', SingerListPreview)
CMS.registerPreviewTemplate('videoList', VideoListPreview)
