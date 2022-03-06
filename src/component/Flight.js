import React from "react";
import { NavLink } from "react-router-dom";
import flt1 from "../assets/flight1.jpg";
import "../App.css";

function Flight() {
  return (
    <div>
      <div>
        <h5 class="text-center pt-5 fw-bold fs-3">Available Flights</h5>
      </div>
      <section class="p-5">
        <div class="container">
          <div class="row g-4">
            <div class="col-md">
              <div class="card shadow-lg">
                <img src={flt1} class="card-img-top" alt="flight" />
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <p class="card-title title1 fw-bold">Chennai to Delhi</p>
                      <p class="card-subtitle mb-2 text-muted">Oneway Flight</p>
                    </div>
                    <div class="col-3">
                      <p class=" card-title text-muted">From</p>
                      <p class="card-subtitle mb-2">$600</p>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-8">
                      <NavLink to="/">
                        <p class="btn btn-sm butn rounded-pill">VIEW</p>
                      </NavLink>
                    </div>
                    <div class="col-4">
                      <NavLink to="/">
                        <button class="btn  btn-sm butns rounded-pill">
                          BOOK
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md">
              <div class="card shadow-lg" style={{ width: "18rem" }}>
                <img src={flt1} class="card-img-top" alt="flight" />
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <p class="card-title title1 fw-bold">Chennai to Delhi</p>
                      <p class="card-subtitle mb-2 text-muted">Oneway Flight</p>
                    </div>
                    <div class="col-3">
                      <p class=" card-title text-muted">From</p>
                      <p class="card-subtitle mb-2">$600</p>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-8">
                      <NavLink to="/">
                        <p class="btn btn-sm butn rounded-pill">VIEW</p>
                      </NavLink>
                    </div>
                    <div class="col-4">
                      <NavLink to="/">
                        <button class="btn  btn-sm butns rounded-pill">
                          BOOK
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md">
              <div class="card shadow-lg" style={{ width: "18rem" }}>
                <img src={flt1} class="card-img-top" alt="flight" />
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <p class="card-title title1 fw-bold">Chennai to Delhi</p>
                      <p class="card-subtitle mb-2 text-muted">Oneway Flight</p>
                    </div>
                    <div class="col-3">
                      <p class=" card-title text-muted">From</p>
                      <p class="card-subtitle mb-2">$600</p>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-8">
                      <NavLink to="/">
                        <p class="btn btn-sm butn rounded-pill">VIEW</p>
                      </NavLink>
                    </div>
                    <div class="col-4">
                      <NavLink to="/">
                        <button class="btn  btn-sm butns rounded-pill">
                          BOOK
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    // <div>
    //   <section class="p-5">
    //     <div class="container">
    //       <div class="row text-center g-4">
    //         <div class="col-md">
    //           <div class="card bg-dark text-light">
    //             <div class="card-body text-center">
    //               <div class="h1 mb-3">
    //                 <i class="bi bi-laptop"></i>
    //               </div>
    //               <h3 class="card-title mb-3">Virtual</h3>
    //               <p class="card-text">
    //                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //                 Iure, quas quidem possimus dolorum esse eligendi?
    //               </p>
    //               <NavLink to="/" class="btn btn-primary">
    //                 Read More
    //               </NavLink>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col-md">
    //           <div class="card bg-secondary text-light">
    //             <div class="card-body text-center">
    //               <div class="h1 mb-3">
    //                 <i class="bi bi-person-square"></i>
    //               </div>
    //               <h3 class="card-title mb-3">Hybrid</h3>
    //               <p class="card-text">
    //                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //                 Iure, quas quidem possimus dolorum esse eligendi?
    //               </p>
    //               <NavLink to="/" class="btn btn-dark">
    //                 Read More
    //               </NavLink>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col-md">
    //           <div class="card bg-dark text-light">
    //             <div class="card-body text-center">
    //               <div class="h1 mb-3">
    //                 <i class="bi bi-people"></i>
    //               </div>
    //               <h3 class="card-title mb-3">In Person</h3>
    //               <p class="card-text">
    //                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //                 Iure, quas quidem possimus dolorum esse eligendi?
    //               </p>
    //               <NavLink to="/" class="btn btn-primary">
    //                 Read More
    //               </NavLink>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}

export default Flight;
