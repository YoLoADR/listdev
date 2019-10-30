/** @format */

'use strict'
import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

export default {
  Debug: true,
  useReactotron: true,

  // for right to left language
  RTL: false,

  fontFamily: 'Montserrat',
  fontFamilyLight: 'MontserratLight',
  fontFamilyBold: 'MontserratBold',

  firebaseEnable: true,

  PagingLimit: 10,

  WordPress: {
    defaultDateFormat: 'YYYY-MM-DD HH:mm:ss',
  },

  Dimension: {
    ScreenWidth(percent = 1) {
      return Dimensions.get('window').width * percent
    },
    ScreenHeight(percent = 1) {
      return Dimensions.get('window').height * percent
    },
  },

  Photo: {
    media_type: 'image',
    mime_type: 'image/jpeg', // you can add custom mime_type more and more ,
    // they're be seperator with comma, ex "image/jpeg, image/png"...
  },

  logo: true,

  Themes: {
    Classic: 'classic',
    Restaurant: 'restaurant',
  },

  PostImage: {
    small: 'small',
    medium: 'medium',
    large: 'large',
  },

  listingTypes: {
    jobListing: 'job_listing',
    listing: 'listing',
  },

  CategoryImage: {
    small: 'small',
    medium: 'medium',
    large: 'large',
  },

  Animate: {
    bounce: 'bounce',
    flash: 'flash',
    jello: 'jello',
    pulse: 'pulse',
    rotate: 'rotate',
    rubberBand: 'rubberBand',
    shake: 'shake',
    swing: 'swing',
    tada: 'tada',
    wobble: 'wobble',
    flipInY: 'flipInY',
    flipInX: 'flipInX',
    zoomIn: 'zoomIn',
    fadeIn: 'fadeIn',
    bounceIn: 'bounceIn',
  },
  HomeLayout: {
    horizontal: 1,
    vertical: 2,
    mansory: 3,
  },
  Layout: {
    card: 1,
    cardTrend: 2,
    banner: 3,
    column: 4,
    twoColumn: 5,
    threeColumn: 6,
    flexColumn: 7,
    list: 8,
    listRight: 9,
    bannerSlider: 10,
    bannerImage: 11,
    adMob: 12,
    cardVertical: 13,
  },

  Tags: {
    top: 'Top',
    headlight: 'Headlight',
    photo: 'Photos',
    video: 'Videos',
  },

  Menu: {
    Scale: 0,
    Flat: 1,
    FullSize: 2,
    MenuRightBlack: 3,
  },

  Window: {
    width: width,
    height: height,
    bannerHeight: 0.4 * height,
    headerHeight: 0.8 * height,
    profileHeight: 0.25 * height,
    listingBanner: height,
  },
  Header: {
    HEADER_MIN_HEIGHT: 40,
    HEADER_SCROLL_DISTANCE: (35 * height) / 100 - 40,
  },

  Key: {
    email: '_Email',
    user: '_User',
    posts: '_Post',
  },

  fontText: {
    size: 14,
    fontSizeMin: 12,
    fontSizeMax: 20,
  },

  EmitCode: {
    Toast: 'toast',
  },
  booking: {
    maxLengthPerson: 4,
  },

  Components: {
    map: 'map',
    news: 'news',
    listing: 'listing',
    homeHeader: 'homeHeader',
    categoryLinks: 'categoryLinks',
    categoryIcons: 'categoryIcons',
    categoryShadow: 'categoryShadow',
    admob: 'admob',
    search: 'search',
  },

  OrderCalendar: {
    markingType: 'simple', //period, simple, multi-dot
    hideKnob: false,
    formatMonth: 'MM - yyyy',
    //for day
    minDate: '2012-05-10',
    maxDate: '2020-12-31',
  },

  LeftMenu: {
    scale: 0,
    overlay: 1,
    small: 2,
    wide: 3,
  },
  storageName: {
    settingFontSize: '@setting_fontSize',
    switchRTL: '@switchRTL',
  },
  GGAnalytics: {
    TrackingId: 'UA-126795760-1',
  },

  LimitAddToCart: 1,

  //Your User with role Administrator for update/create booking
  UserNoDelete: {
    username: 'test_chat@gmail.com',
    password: '123456',
  },

  //set status for Toast App
  Toast: {
    success: 'success',
    error: 'error',
    warning: 'warning',
    info: 'info',
  },

  //set default status for create a new listing
  NewListing: {
    status: 'draft', // published, pending
  },
}
