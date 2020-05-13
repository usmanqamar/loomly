import React from 'react'
import { Calendar, Views } from 'react-big-calendar'
import events from '../../../cal/examples/events'
import * as dates from '../../../cal/src/utils/dates'

let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

let Basic = ({ localizer }) => (
  <Calendar
    events={events}
    defaultDate={new Date(2015, 3, 1)}
    localizer={localizer}
  />
)

export default Basic
