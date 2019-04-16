import CMS from 'netlify-cms'
import BannerPreview from './preview-templates/BannerPreview'
import VideoListPreview from './preview-templates/VideoListPreview'

CMS.registerPreviewTemplate('banner', BannerPreview)
CMS.registerPreviewTemplate('videoList', VideoListPreview)
