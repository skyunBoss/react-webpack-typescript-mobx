/*
 * @Author: xuchao 
 * @Date: 2018-07-16 11:24:34 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-17 13:58:02
 */
import * as React from 'react';

const Loading = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
}

export default Loading;