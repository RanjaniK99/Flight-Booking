import React from "react";
import { NavLink } from "react-router-dom";
import flt1 from "../assets/flight1.jpg";
import "../App.css";

function About() {
  return (
    <div class="about">
      <div>
        <h5 class="text-center pt-5 fw-bold fs-3">About Us</h5>
      </div>
      <section class="p-5">
        <div class="container">
          <div class="row g-6">
            <div class="col-8">
              <div>
                <h4>
                  We are one of the most extensive flight service provider in
                  India.
                </h4>
                <p class="p-3">
                  <ul>
                    <li>
                      leading travel correlation web portal that gives you a
                      chance to discover cheap flights tickets on the web.
                      Regardless of whether you're going is just a tick away!
                      You can look at flight tolls, from all the best web travel
                      destinations in a single area. Finding cheap flights has
                      never been less demanding.
                    </li>
                    <br />
                    <li>
                      Spare time, set aside some cash; there's no compelling
                      reason to visit a great many websites to discover cheap
                      flight tickets or the best deal. It's everything here for
                      you in one area Travolook-we'll get you where you need to
                      go.
                    </li>
                    <br />
                    <li>
                      We are the leading travel site, a place where individuals
                      are enlivened to plan and book straightforwardly from us
                      with a significant number of flight ticket choices at the
                      best costs. We are impartial and free, which implies that
                      a million individuals who use us consistently can confide
                      in our numerous scope of flight, alternatives.
                    </li>
                    <br />
                    <li>
                      Our mystery is in our best exclusive innovation that
                      associates individuals straightforwardly to everything the
                      travel business brings to the table.
                    </li>
                    <br />
                  </ul>
                </p>

                <div class="row">
                  <div class="col-6">
                    <p class="fw-bold">Personalized Service</p>
                    <p class="mb-2 text-muted"> 24x7 Support</p>
                  </div>
                  <div class="col-6">
                    <p class="text-muted">Best Price</p>
                    <p class=" mb-2">Trusted Company</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="container">
                <img
                  src={flt1}
                  class="img-ico mb-2"
                  alt="flight"
                  style={{ width: "20rem", height: "23rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
