/** @format */

import { StyleSheet, Platform, Dimensions } from 'react-native'
import { Constants } from '@common'
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  flatWrap: {
    flex: 1,
    paddingLeft: 0,
    marginTop: 0,
    // paddingTop: 20,
    marginBottom: 4,
    backgroundColor: '#FFF',
  },
  hList: {
    flexDirection: 'row',
  },
  vList: {
    flexWrap: 'wrap',
    paddingTop: 44,
  },
  isListing: {
    marginTop: 60,
  },
  more: {
    width: width,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  spinView: {
    width: width,
    backgroundColor: '#fff',
    flex: 1,
    height: height,
    paddingTop: 20,
  },
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 9999,
    backgroundColor: 'transparent',
    // borderBottomColor: 'none',
    // borderBottomWidth: 1,
    height: 40,
    justifyContent: 'center',
  },
  contentContainer: {
    paddingTop: 40,
  },
  title: {
    color: '#333333',
  },
  row: {
    height: 300,
    width: null,
    marginBottom: 1,
    padding: 16,
    backgroundColor: 'transparent',
  },
  rowText: {
    color: 'white',
    fontSize: 18,
  },
  transparentTop: {
    backgroundColor: 'transparent',
  },

  header: {
    marginTop: 20,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 10,
  },
  headerRight: {
    justifyContent: 'flex-start',
  },
  headerRightText: {
    fontSize: 10,
    marginRight: 0,
    marginTop: Platform.OS == 'android' ? 0 : 4,
    color: '#343434',
    fontFamily: Constants.fontFamily,
  },
  icon: {
    marginRight: 3,
    marginLeft: 3,
    marginTop: 4,
    backgroundColor: 'transparent',
  },
  headerText: {
    fontSize: 22,
    color: '#333',
    letterSpacing: 0.5,
    fontFamily: Constants.fontFamilyBold,
  },
  rowItem: {
    marginBottom: 20,
  },
  vList: {
    flexWrap: 'wrap',
    paddingTop: 44,
  },

  header: {
    marginTop: 20,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 10,
  },
  headerRight: {
    justifyContent: 'flex-start',
  },
  headerText: {
    fontSize: 22,
    color: '#333',
    letterSpacing: 0.5,
    fontFamily: Constants.fontFamilyBold,
  },
})
