import React from 'react'
import {Keyframes} from 'react-spring/renderprops'

const Elements = Keyframes.Spring(async next => {
    while (true) {
      await next({
        from: {top: '20%',transform: 'rotate(0deg)'},
        config: {duration:3000},
        color: 'transparent',
        top: '26%',
        borderRadius: 12,
        border: '17px solid #0CA8D9',
        transform: 'rotate(180deg)',

      })
      await next({
        from: {top: '26%', transform: 'rotate(180deg)'},
        top: '30%',
        config: {duration:3000},
        transform: 'rotate(0deg)',
      })
      await next({
        from: {top: '30%', transform: 'rotate(0deg)'},
        top: '26%',
        config: {duration:3000},
        transform: 'rotate(180deg)',
      })
      await next({
        from: {top: '26%', transform: 'rotate(180deg)'},
        top: '35%',
        config: {duration:3000},
        transform: 'rotate(0deg)',
      })
      await next({
        from: {top: '35%', transform: 'rotate(0deg)'},
        top: '26%',
        config: {duration:3000},
        transform: 'rotate(180deg)',
      })
    }
  })
export default Elements;
