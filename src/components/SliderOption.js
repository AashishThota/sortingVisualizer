import React from 'react'
import Slider from '@material-ui/core/Slider';

import applyHeapSort from '../SortingAlgorithms/HeapSort'
import { withStyles } from '@material-ui/core/styles';
const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

 

const IOSSlider = withStyles({
    root: {
      color: '#5B2C6F',
      height: 2,
      width: 100,
      padding: '15px 0',
      
        },
    thumb: {
      height: 20,
      width: 20,
      backgroundColor: '#5B2C6F',
      boxShadow: iOSBoxShadow,
      marginTop: -10,
      marginLeft: -14,
      '&:focus,&:hover,&$active': {
        boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: iOSBoxShadow,
        },
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 11px)',
      top: -22,
      '& *': {
        background: 'transparent',
        color: '#000',
      },
    },
    track: {
      height: 2,
    },
    rail: {
      height: 2,
      opacity: 0.5,
      backgroundColor: '#bfbfbf',
    },
    
   
  })(Slider);



function SliderOption() {
  let x=0;
 const onValueChange=(event,value)=>{
    x=value;
    
    console.log(x);
   applyHeapSort(x)
  }
  return (
        <div>
            <IOSSlider aria-label="ios slider" onChange={onValueChange} defaultValue={0} valueLabelDisplay="on" />
        </div>
    )
}

export default SliderOption
