import React, { useEffect, useState } from "react";
import axios from "axios";

function Speakers() {
  const [international, setInternational] = useState([]);
  const [national, setNational] = useState([]);

  useEffect(() => {
    axios
      .get(
        "google sheet link should be added here"
      )
      .then((res) => {
        const data = res.data;

        setInternational(
          data.filter(
            (s) =>
              s.Category === "International" &&
              s.Status === "Confirmed"
          )
        );

        setNational(
          data.filter(
            (s) =>
              s.Category === "National" &&
              s.Status === "Confirmed"
          )
        );
      })
      .catch((err) => {
        console.error("Error loading speakers:", err);
      });
  }, []);

  return (
    <section className="section">
      <div className="container">

        <div className="section-header">
          <h2>Distinguished Invited Speakers</h2>

          <p className="section-sub">
            Researchers and invited speakers representing leading
            universities and research institutes across multiple countries.
          </p>
        </div>

        {/* INTERNATIONAL */}

        <div className="speaker-section-title">
          International Speakers
        </div>

        <div className="speaker-grid">

          {international.map((speaker, index) => (
            <div className="speaker-card" key={index}>

              <div className="speaker-image-wrap">
                <img
                  src={speaker.Image}
                  alt={speaker.Name}
                  className="speaker-image"
                />
              </div>

              <div className="speaker-content">

                <h3>{speaker.Name}</h3>

                <p className="speaker-title">
                  {speaker.Title}
                </p>

                <p className="speaker-inst">
                  {speaker.Institution}
                </p>

                <div className="speaker-country">
                  {speaker.Country}
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* NATIONAL */}

        <div
          className="speaker-section-title"
          style={{ marginTop: "4rem" }}
        >
          National Speakers
        </div>

        {national.length === 0 ? (
          <div className="speaker-coming">
            Speaker announcements will be made periodically upon
            confirmation by the organising committee.
          </div>
        ) : (
          <div className="speaker-grid">

            {national.map((speaker, index) => (
              <div className="speaker-card" key={index}>

                <div className="speaker-image-wrap">
                  <img
                    src={speaker.Image}
                    alt={speaker.Name}
                    className="speaker-image"
                  />
                </div>

                <div className="speaker-content">

                  <h3>{speaker.Name}</h3>

                  <p className="speaker-title">
                    {speaker.Title}
                  </p>

                  <p className="speaker-inst">
                    {speaker.Institution}
                  </p>

                  <div className="speaker-country">
                    {speaker.Country}
                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}

export default Speakers;
