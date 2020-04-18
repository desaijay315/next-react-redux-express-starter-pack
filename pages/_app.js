import React from 'react'
import { Provider } from 'react-redux'
import App from 'next/app'
import withReduxStore from '../lib/with-redux-store';
import withRedux from "next-redux-wrapper";


class MyApp extends App {

  static async getInitialProps(appContext) {
    // Executing getInitialProps of page you are navigated to
    const appProps = await App.getInitialProps(appContext)
    return { ...appProps }
  }
  
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)