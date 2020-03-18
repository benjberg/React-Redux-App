import React from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/actions';


export const QuoteForm= props =>{
    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }
    return(
        <div>
          
            
            {props.isFetchingData ? (
        <div>getting quote...</div>
      ) : (
        <button onClick={handleGetData}>Get Random Quote</button>
      )}
               
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
      isFetchingData: state.isFetchingData
    };
  };

export default connect(
    mapStateToProps,{getData})(QuoteForm);