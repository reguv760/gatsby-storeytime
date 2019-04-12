import CMS from 'netlify-cms'
import { Banner } from './../components/banner'
import BannerPreview from './preview-template/BannerPreview'

//CMS.registerPreviewTemplate('bannerComponent', BannerPreview)
CMS.registerWidget('bannerComponent', Banner, BannerPreview)
