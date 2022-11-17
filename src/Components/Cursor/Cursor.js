import React from 'react'
import AnimateCursor from 'react-animated-cursor'

const Cursor = () => {
  return (
    <> <AnimateCursor
    innerSize={10}
    outerSize={14}
    color='193, 11, 111'
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={4}
    trailingSpeed= {15}
    clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </>
  )
}

export default Cursor