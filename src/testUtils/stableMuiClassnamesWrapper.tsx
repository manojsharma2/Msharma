import { StylesProvider } from '@material-ui/core'
import React from 'react'

// Material UI adds counters as suffix to the class names that mess up jest snapshot testing because these suffixes can change
// this is a way to reset the counters so snapshots are consistent
// taken from: https://github.com/mui-org/material-ui/issues/9492
const generateClassName = () => {
  let counter = 0
  return (rule: any, styleSheet: any) =>
    `${styleSheet.options.classNamePrefix}-${rule.key}-${counter++}`
}

export default function StableMuiClassnamesWrapper(children: any) {
  return (
    <StylesProvider generateClassName={generateClassName()}>
      {children}
    </StylesProvider>
  )
}
