import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      notifyFormSuccess();
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: ''
      });
    }, 1500);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="pe-lg-4">
              <h2 className="display-5 fw-bold mb-4">
                Hire the best <span style={{color: '#ea4c89'}}>creative talent</span>
              </h2>
              <p className="lead text-muted mb-4">
                Work with talented designers and agencies from around the world. 
                From logos to websites, our community is ready to bring your vision to life.
              </p>
              
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light rounded p-3 me-3 d-flex align-items-center justify-content-center" style={{width: '48px', height: '48px'}}>
                    <i className="bi bi-people-fill" style={{fontSize: '1.5rem', color: '#ea4c89'}}></i>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">Top Talent</h5>
                    <p className="mb-0 text-muted">Access to world-class designers</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light rounded p-3 me-3 d-flex align-items-center justify-content-center" style={{width: '48px', height: '48px'}}>
                    <i className="bi bi-lightning-fill" style={{fontSize: '1.5rem', color: '#ea4c89'}}></i>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">Fast Turnaround</h5>
                    <p className="mb-0 text-muted">Quick project delivery</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bg-light rounded p-3 me-3 d-flex align-items-center justify-content-center" style={{width: '48px', height: '48px'}}>
                    <i className="bi bi-shield-check-fill" style={{fontSize: '1.5rem', color: '#ea4c89'}}></i>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">Quality Guaranteed</h5>
                    <p className="mb-0 text-muted">Professional results every time</p>
                  </div>
                </div>
              </div>

              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="text-center p-3 bg-white rounded shadow-sm">
                    <h4 className="fw-bold mb-1" style={{color: '#ea4c89'}}>50K+</h4>
                    <small className="text-muted">Active Designers</small>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="text-center p-3 bg-white rounded shadow-sm">
                    <h4 className="fw-bold mb-1" style={{color: '#ea4c89'}}>1M+</h4>
                    <small className="text-muted">Projects Completed</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold mb-4">Start your project</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-medium">
                      Full Name *
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-person-fill text-muted"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control border-start-0"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-medium">
                      Email Address *
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-envelope-fill text-muted"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control border-start-0"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="projectType" className="form-label fw-medium">
                          Project Type
                        </label>
                        <select
                          className="form-select"
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                        >
                          <option value="">Select type</option>
                          <option value="logo">Logo Design</option>
                          <option value="web">Web Design</option>
                          <option value="mobile">Mobile App</option>
                          <option value="branding">Branding</option>
                          <option value="illustration">Illustration</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="budget" className="form-label fw-medium">
                          Budget Range
                        </label>
                        <select
                          className="form-select"
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                        >
                          <option value="">Select budget</option>
                          <option value="500-1000">$500 - $1,000</option>
                          <option value="1000-5000">$1,000 - $5,000</option>
                          <option value="5000-10000">$5,000 - $10,000</option>
                          <option value="10000+">$10,000+</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-medium">
                      Project Description *
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0 align-items-start pt-3">
                        <i className="bi bi-chat-text-fill text-muted"></i>
                      </span>
                      <textarea
                        className="form-control border-start-0"
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Tell us about your project, goals, and timeline..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-lg w-100 rounded-pill ${
                      isFormValid ? '' : 'btn-secondary'
                    }`}
                    style={isFormValid ? {backgroundColor: '#ea4c89', color: 'white'} : {}}
                    disabled={!isFormValid || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send-fill me-2"></i>
                        Get Started
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}