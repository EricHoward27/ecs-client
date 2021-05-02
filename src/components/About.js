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
                {/* <li>
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>2009-2011</h4>
                            <h4 className="subheading">Our Humble Beginnings</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>March 2011</h4>
                            <h4 className="subheading">An Agency is Born</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li>
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>December 2015</h4>
                            <h4 className="subheading">Transition to Full Service</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>July 2020</h4>
                            <h4 className="subheading">Phase Two Expansion</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image">
                        <h4>
                            Be Part
                            <br />
                            Of Our
                            <br />
                            Story!
                        </h4>
                    </div>
                </li>
            </ul> */}
        </div>
    </section>
  )
}
export default About