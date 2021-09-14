import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/restaurants-loading.json';

export default() => {
    const defaultOpitions = {
      loop: true,
      autoplay: true, 
      animationData,
      rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
      },
    };

    return <Lottie options={defaultOpitions} />;
};