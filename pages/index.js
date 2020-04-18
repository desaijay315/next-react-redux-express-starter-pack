// import Fetch from 'isomorphic-unfetch';
import {connect} from 'react-redux';
import React from 'react'

import Layout from '../components/Layout';

import {fetbizPrice} from '../redux/actions/bitprice';

import Prices from '../components/Prices';


const Index = (props) => {
    // useEffect(() => {
    //     props.fetbizPrice();
    //   },[]);

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
    // console.log(store);
    await store.dispatch(fetbizPrice())
    return {}
}

const mapStateToProps = state => ({
    bizData: state.bitprice.bizpricedata
});

export default connect(mapStateToProps, null)(Index);