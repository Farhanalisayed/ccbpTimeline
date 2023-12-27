import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <div className="cont">
      <h1 className="head">MY JOURNEY OF</h1>
      <h1 className="title">CCBP 4.0</h1>
      <div>
      <Chrono
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
        itemWidth={150}
        theme={{
          primary: '#2b237c',
          secondary: 'white',
          cardBgColor: 'white',
          cardForeColor: '#0967d2',
          titleColor: '#1e293b',
          titleColorActive: '#0967d2',
        }}
      >
        {timelineItemsList.map(each => renderTimelineCard(each))}
      </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
