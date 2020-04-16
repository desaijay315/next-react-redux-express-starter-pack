import Fetch from 'isomorphic-unfetch';
import {connect} from 'react-redux';
import React, { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'



import Layout from '../components/Layout';

import {fetbizPrice} from '../redux/actions/bitprice';

import Prices from '../components/Prices';


const Index = (props) => {
    useEffect(() => {
        props.fetbizPrice();
      },[]);

        return(
            <Layout>
            <div>
                <h1>Welcome to Bitzprize</h1>
                <p>Check current Bitcoin rate</p>
               {props.bizData.bpi ? <Prices bpi={props.bizData}/> : null }
                {/* {formData} */}
            </div>
            </Layout>
        )
}

Index.getInitialProps = async ({ store }) => {
    store.dispatch(fetbizPrice())
}

const mapStateToProps = state => ({
    bizData: state.bitprice.bizpricedata
});  

const mapDispatchToProps = dispatch => {
    return {
      fetbizPrice: bindActionCreators(fetbizPrice, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Index);