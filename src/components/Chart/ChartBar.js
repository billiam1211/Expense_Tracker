import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {

    // console.log(`props => `, props);

    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    // console.log(`Bar fill height; ${barFillHeight}`);

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                {/* inline styles need double curly braces because the first {} is for dynamic rendering and the second set is because inline styles in React are added as objects */}
                <div className='chart-bar__fill' style={{height:barFillHeight}}></div>
            </div>
            <div className='char-bar__label'>{props.label}</div>
        </div>
    )
};

export default ChartBar;