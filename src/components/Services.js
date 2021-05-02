import React from 'react'

const Services = () => {
  return (
    <section className="page-section" id="services">
    <div className="container">
        <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">ECS creates effective web applications for small businesses that are focused on results.</h3>
        </div>
        <div className="row text-center">
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">E-Commerce</h4>
                <p className="text-muted">ECS creates dynamic e-commerce applications that includes your choice of a custom built API and  provides Content Management System to manage your content over API.</p>
            </div>
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Responsive Design</h4>
                <p className="text-muted">ECS believes it is vital for web applications in todays time be responsive for the billions of mobile devices out there. ECS optimize all web applications to be reponsive and  top notch performance on any device no matter the size.</p>
            </div>
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Single-Page Applications</h4>
                <p className="text-muted">ECS can create a single-page application that will be focused on your company's goal. ECS design single-page application using powerful front-end technology and uses APIs to power the back-end of the application.</p>
            </div>
        </div>
    </div>
  </section>
  )
}
export default Services