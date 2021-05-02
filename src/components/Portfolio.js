import React from 'react'

const Portfolio = ({ portfolioLinks }) => {
  return (
    <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Take a look at ECS lastest projects.</h3>
                </div>
                <div className="row">
                  { portfolioLinks && portfolioLinks.map(({ title, caption, link }, index) => 
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href={ link }>
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="ECSLOGO.png" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">{ title }</div>
                                <div className="portfolio-caption-subheading text-muted"> { caption }</div>
                            </div>
                        </div>
                    </div>
                    )
                  }
                </div>
            </div>
        </section>
  )
}
export default Portfolio