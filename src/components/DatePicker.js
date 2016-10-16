import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import { rangeDay } from '../AC/filters'
import 'react-day-picker/lib/style.css';

class DatePicker extends Component {

    handleDayClick = (e, day) => {
      const { rangeDay, range } = this.props

      const newRange = DateUtils.addDayToRange(day, range)
      rangeDay(newRange)
    }

    render() {
        const { from, to } = this.props.range;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }
}

export default connect(state => ({
  range: state.range
}), {rangeDay})(DatePicker)
