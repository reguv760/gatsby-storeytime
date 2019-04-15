import CMS from 'netlify-cms'
import BannerPreview from './preview-template/BannerPreview'
import VideoListPreview from './preview-template/VideoListPreview'

CMS.registerPreviewTemplate('banner', BannerPreview)
CMS.registerPreviewTemplate('videoList', VideoListPreview)
