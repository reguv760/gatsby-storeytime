import CMS from 'netlify-cms'
import BannerPreview from './preview-templates/BannerPreview'
import VideoListPreview from './preview-templates/VideoListPreview'
import siteStyle from './../assets/scss/main.scss'

CMS.registerPreviewTemplate('banner', BannerPreview)
CMS.registerPreviewTemplate('videoList', VideoListPreview)
CMS.registerPreviewStyle(siteStyle)
