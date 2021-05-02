import React from 'react'

const Team = ({ teamLinks }) => {
  return (
    <section className="page-section bg-light" id="team">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">The ECS Team</h2>
                <h3 className="section-subheading text-muted">Meet our ECS team.</h3>
            </div>
            <div className="row">
              { teamLinks && teamLinks.map(({ name, role, image}, index) =>
                <div className="col-lg-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src={ image } alt="..." />
                        <h4>{ name }</h4>
                        <p className="text-muted">{ role }</p>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
              )}
            </div>
            <div className="row">
                <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Meet our amazing ECS Team who all have a part in this amazing journey.</p></div>
            </div>
        </div>
    </section>
  )
}
export default Team