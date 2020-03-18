import React from 'react';
import {connect} from 'react-redux';

const QuoteList = props =>{
    return(
    <>
    {props.quotes.map(quotes =>(
         <div>{quotes}</div>
         
         ))}
        </> 
        );
    };

const mapStateToProps = state => {
    return {
        quotes: state.quotes
    }
}
export default connect( mapStateToProps,{})(QuoteList)