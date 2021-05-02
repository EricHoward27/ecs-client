import React from 'react'

const About = ({ aboutLink }) => {
  return (
    <section className="page-section" id="about">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">About Our Studio</h2>
                <h3 className="section-subheading text-muted">Learn more about ECS.</h3>
            </div>
              {  aboutLink && aboutLink.map(({ year, heading, body, link, invert_year, invert_heading, invert_body, invert_link }, index) =>
                <ul className="timeline">
                  <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={ link } alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>{ year }</h4>
                                <h4 className="subheading">{ heading }</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">{ body }</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={ invert_link } alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>{ invert_year }</h4>
                                <h4 className="subheading">{ invert_heading }</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">{ invert_body }</p></div>
                        </div>
                    </li>
                </ul>
              )}
        </div>
    </section>
  )
}
export default About