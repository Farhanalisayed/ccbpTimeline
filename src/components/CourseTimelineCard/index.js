import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="card">
      <div className="head-cont">
        <h1>{courseTitle}</h1>

        <div className="days-cont">
          <AiFillClockCircle className="clock" />
          <p className="duration">{duration}</p>
        </div>
      </div>

      <p className="description">{description}</p>
      <div className="tags-cont">
        {tagsList.map(each => (
          <div className="tag">{each}</div>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
