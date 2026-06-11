
// src/components/RegistrationDet.jsx
import React from "react";

function RegistrationDet() {
  return (
    <section className="section">
      <div className="container">

        {/* -------- HEADER -------- */}
        <div className="section-header">
          <h2>Registration</h2>
          <p className="section-sub">
            Registration details for ICMAAM 2026. Participants are requested to
            complete the payment process before submitting the registration form.
          </p>
        </div>

        {/* -------- FEES -------- */}
        <div className="reg-grid">

          {/* International */}
          <div className="reg-card">
            <h3>International Participants</h3>
            <ul>
              <li>Faculty Members <span>$200</span></li>
              <li>Faculty (Developing Countries) <span>$150</span></li>
              <li>Students / Research Scholars <span>$100</span></li>
              <li>Students (Developing Countries) <span>$75</span></li>
            </ul>
          </div>

          {/* Indian */}
          <div className="reg-card highlight-card">
            <h3>Indian Participants</h3>
            <ul>
              <li>Faculty Members <span>₹4000</span></li>
              <li>Students / Research Scholars <span>₹3000</span></li>
            </ul>
          </div>

          {/* JU */}
          <div className="reg-card">
            <h3>Jadavpur University Participants</h3>
            <ul>
              <li>Faculty Members <span>₹3000</span></li>
              <li>Students / Research Scholars <span>₹2000</span></li>
            </ul>
          </div>

        </div>

        {/* -------- GST NOTICE -------- */}
        <div className="gst-notice">
          <strong>Important Notice</strong>
          <br />
          An additional <strong>18% GST</strong> is applicable on all
          registration categories.
          <br />
          Accommodation charges, if required, will be collected separately in
          offline mode during the conference.
        </div>

        {/* -------- PAYMENT -------- */}
        <div className="reg-bank creative-bank">

          <h3>Online Payment Portal</h3>

          <p>
            Participants may pay the registration fee securely through the
            official Jadavpur University SBI Collect portal.
          </p>

          <a
            href="Payment link will be paste here"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Pay Registration Fee
          </a>

          <p className="payment-note">
            After successful payment, kindly save the transaction receipt and
            upload the payment proof while completing the registration form.
          </p>

        </div>

        {/* -------- REGISTRATION PROCESS -------- */}
        <div className="registration-process">

          <h3>Registration Process</h3>

          <div className="process-grid">

            <div className="process-step">
              <strong>Step 1</strong>
              <p>Pay Registration Fee</p>
            </div>

            <div className="process-step">
              <strong>Step 2</strong>
              <p>Save Transaction Receipt</p>
            </div>

            <div className="process-step">
              <strong>Step 3</strong>
              <p>Complete Registration Form</p>
            </div>

            <div className="process-step">
              <strong>Step 4</strong>
              <p>Receive Confirmation</p>
            </div>

          </div>

        </div>

        {/* -------- NOTES -------- */}
        <div className="reg-notes">
          <ul>
            <li>
              Registration fees are waived for plenary and invited speakers.
            </li>
            <li>
              Accommodation charges are separate and payable offline.
            </li>
            <li>
              An additional 18% GST is applicable on all registration fees.
            </li>
            <li>
              Please retain the payment receipt for verification.
            </li>
          </ul>
        </div>

        {/* -------- REGISTRATION FORM -------- */}
        <div
          style={{
            textAlign: "center",
            marginTop: "2.5rem",
          }}
        >
          <h3>Conference Registration Form</h3>

          <p className="section-sub">
            After completing the payment process, kindly fill out the official
            registration form and upload the payment receipt.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf5a7p6wTBzcPMdRKa077_8w5yri26YEmBD2IYgFAGn9kcrVw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Complete Registration Form
          </a>

          <p
            style={{
              marginTop: "0.8rem",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
            }}
          >
            You will be redirected to the official ICMAAM 2026 registration form.
          </p>
        </div>

        {/* -------- STATUS -------- */}
        <div className="reg-banner">
          ICMAAM 2026 Registration Portal Open
        </div>

      </div>
    </section>
  );
}

export default RegistrationDet;

