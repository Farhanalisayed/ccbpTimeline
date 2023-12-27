import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {projectTitle, description, duration, imageUrl, projectUrl} =
    projectDetails

  return (
    <div className="card">
      <img className="image" src={imageUrl} alt={projectTitle} />
      <div className="head-cont">
        <h1>{projectTitle}</h1>

        <div className="cal-cont">
          <AiFillCalendar className="calendar" />
          <p className="duration">{duration}</p>
        </div>
      </div>

      <p className="description">{description}</p>
      <a className="anchor" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
