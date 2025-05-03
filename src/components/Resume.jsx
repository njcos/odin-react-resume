export function Resume({ info, isActive }) {
  return (
    <div className={`resume-wrapper ${isActive ? "blurred" : ""}`}>
      <div className="resume">
        <div className="basic-info">
          <h1>{info.name}</h1>
          <h5 className="resume-h5">{info.email}</h5>
          <h5 className="resume-h5">{info.phone}</h5>
        </div>
        <div className="education">
          <h1>Education</h1>
          <div className="education-info">
            <div className="line-element">
              <h4>School</h4>
              <h5 className="resume-h5">{info.school}</h5>
            </div>
            <div className="line-element">
              <h4>Degree</h4>
              <h5 className="resume-h5">{info.degree}</h5>
            </div>
            <div className="line-element">
              <h4>Date</h4>
              <h5 className="resume-h5">{info.date}</h5>
            </div>
          </div>
        </div>
        <div className="work">
          <h1>Work History</h1>
          <div className="work-info">
            <div className="work-details">
              <div className="work-line-element">
                <h4>Company</h4>
                <h5 className="resume-h5">{info.company}</h5>
              </div>
              <div className="work-line-element">
                <h4>Position</h4>
                <h5 className="resume-h5">{info.role}</h5>
              </div>
              <div className="work-line-element">
                <h4>Start Date</h4>
                <h5 className="resume-h5">{info.startDate}</h5>
              </div>
              <div className="work-line-element">
                <h4>End Date</h4>
                <h5 className="resume-h5">{info.endDate}</h5>
              </div>
            </div>
            <div className="work-duties">
              <h4 className="duty-title">Responsibilites</h4>
              <h5 className="resume-h5">{info.responsibilities}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
