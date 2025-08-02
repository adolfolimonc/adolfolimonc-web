"use client";
import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (err) {
      setStatus('An error occurred. Please try again.');
    }
    setLoading(false);
  };

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a href="tel:+526692898058">+52 669 289 8058</a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Location</h6>
                <p>Mazatlan, Sinaloa, Mexico </p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <p>adolfolimonc@gmail.com</p>
              </div>

              <div className="social-icon mt-50">
                <a href="https://github.com/adolfolimonc" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.behance.net/adolfolimonc" target="_blank">
                  <i className="fab fa-behance"></i>
                </a>
                <a href="https://www.linkedin.com/in/adolfolimonc/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Let&lsquo;s Chat</h6>
                <h3 className="text-u ls1">
                  Send a <span className="fw-200">message</span>
                </h3>
              </div>
              <form
                id="contact-form"
                className="form2"
                onSubmit={handleSubmit}
              >
                <div className="messages">
                  {status && <div>{status}</div>}
                </div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                        value={form.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                        disabled={loading}
                      >
                        <span className="text">{loading ? 'Sending...' : "Let's Talk"}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
