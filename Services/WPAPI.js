import WPAPI from 'wpapi'
import { AppConfig } from '@common'
var wpApi = new WPAPI({
  endpoint: AppConfig.Website.url + '/wp-json',
})