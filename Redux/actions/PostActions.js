/** @format */
import { WPAPI, Api } from '@services'
import { Constants, AppConfig } from '@common'
import User from '@services/User'
import ApiClient from '@services/apiClient'
import fetch from './fetch'
const ApiFromClient = new ApiClient({
  baseUrl: AppConfig.Website.url,
})

import {
    POST_FETCH_SUCCESS,
    FETCH_PENDING,
    POST_FETCH_MORE,
  } from '@redux/types'

export const fetchPostRecent = (page = 1) => {
    const limit = Constants.PagingLimit
    const component = Constants.Components.listing
    // Constants.Debug && console.log('start fetching post...');
    let api = WPAPI.getJobListing()
      .per_page(limit)
      .page(page)
      .embed()
  
    return (dispatch) => {
      dispatch({ type: FETCH_PENDING })
      if (page === 1) {
        return fetch(dispatch, api, POST_FETCH_SUCCESS, { component })
      }
      return fetch(dispatch, api, POST_FETCH_MORE, { component })
    }
  }