import React from 'react'
import { useState } from 'react'
import moment from 'moment'

function UpcomingEvents({ events }) {
  const [selected, setSelected] = useState('All')
  const departmentHeaders = [
    'All',
    'OET',
    'OSG',
    'COMMS',
    'eServices',
    'Events',
    'HR',
    'Marketing',
  ]

  // display current month and filter events by month
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const currentMonthName = months[currentMonth]

  // put clusters into finalClusters attribute
  events = events.map((e) => {
    let finalClusters = []
    for (let i = 0; i < e.clusters.length; i++) {
      finalClusters.push(e.clusters[i].name)
    }

    return {
      ...e,
      finalClusters: finalClusters,
    }
  })

  // sort by date, ascending
  events = events.sort((a, b) => {
    return new Date(a.date) - new Date(b.date)
  })

  let finalEvents = []
  let datesChecker = []

  // group data by date
  for (let i = 0; i < events?.length; i++) {
    if (!datesChecker.includes(events[i].date)) {
      datesChecker.push(events[i].date)
      finalEvents.push({
        date: events[i].date,
        events: [],
      })
    }
  }

  for (let i = 0; i < finalEvents?.length; i++) {
    for (let j = 0; j < events?.length; j++) {
      if (moment(finalEvents[i].date).isSame(events[j].date)) {
        finalEvents[i].events.push(events[j])
      }
    }
  }

  // sort events of dates by time, ascending
  for (let i = 0; i < finalEvents?.length; i++) {
    finalEvents[i]?.events.sort((a, b) => {
      return new Date(a.startTime) - new Date(b.startTime)
    })
  }

  const eventsInMonth = finalEvents.filter((event) => {
    return new Date(event.date).getMonth() === currentMonth
  })

  // filter data based on the selected department
  const filteredData = eventsInMonth.map((element) => {
    return {
      ...element,
      events: element.events.filter((event) =>
        selected === 'All' ? true : event?.finalClusters?.includes(selected)
      ),
    }
  })

  // this function is used to determine if
  // a department has no events at all
  // if none, it will display "No events"
  const checkIfEmpty = filteredData.map((data) => {
    return data.events.length
  })

  return (
    <div className="mx-12 md:mx-24">
      <h2 className="text-4xl font-extrabold mt-24">
        Upcoming{' '}
        <div>
          <span className="text-[#2097A2]">{currentMonthName}</span> Events
        </div>
      </h2>
      <div className="flex gap-4 my-4 flex-wrap">
        {departmentHeaders.map((header, index) => {
          return (
            <div
              className={`${
                selected === header
                  ? 'bg-[#2096A1] text-white'
                  : 'text-[#2096A1] bg-[#D9E8EC]'
              } py-2 px-4 rounded-xl hover:cursor-pointer hover:bg-[#2096A1] hover:text-white duration-200`}
              onClick={() => setSelected(header)}
              key={index}
            >
              {header}
            </div>
          )
        })}
      </div>
      {!checkIfEmpty.includes(1) && <div>No events</div>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-16 gap-y-12">
        {filteredData?.map((day, index) => {
          const { date, events } = day
          const weekday = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ]
          const d = new Date(Date.parse(date))

          // display nothing if there are no events for this date
          if (events.length === 0) return null

          return (
            <div key={index}>
              <div className="flex justify-between items-center border-b-4 border-[#279DA7] pb-2">
                <p className="text-[#2096A1] font-bold text-4xl">
                  {d.getDate()}
                </p>
                <p className="font-thin">{weekday[d.getDay()]}</p>
              </div>
              {events?.map((event, index) => {
                const { title, location, finalClusters, link } = event

                let { startTime, endTime } = event
                let time
                let startTimeTester = moment(startTime).format('h:mm a')
                let endTimeTester = moment(endTime).format('h:mm a')

                if (
                  (startTimeTester.includes('am') &&
                    endTimeTester.includes('am')) ||
                  (startTimeTester.includes('pm') &&
                    endTimeTester.includes('pm'))
                ) {
                  time = `${moment(startTime).format('h:mm')} - ${moment(
                    endTime
                  ).format('h:mm a')}`
                } else {
                  time = `${startTimeTester} - ${endTimeTester}`
                }

                return (
                  <div
                    className="grid grid-cols-[2fr_1fr] my-4 relative"
                    key={index}
                  >
                    <div className="grid gap-2">
                      <h3>{title}</h3>
                      <div className="text-[#4995A0]">
                        <p>{location}</p>
                        <p className="font-thin">{time}</p>
                      </div>
                      <div className="flex gap-2">
                        {finalClusters.map((department, index) => {
                          return (
                            <div
                              className="font-thin rounded-xl border-[#2097A2] text-[#2097A2] border-[1px] max-w-max py-1 px-3"
                              key={index}
                            >
                              {department}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <a
                      href={link}
                      target="_blank"
                      className="w-8 h-8 absolute right-0 hover:scale-125 duration-150"
                    >
                      <img src="/external-link.svg" alt={`Link to ${title}`} />
                    </a>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UpcomingEvents
