import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mt-3 mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row ">
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src="https://images.vexels.com/media/users/3/135237/isolated/preview/1e3f402b8f6e56a36452cebc2046b634-text-bubble-shadow-icon.png"
              alt="contact us"
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="John Smith"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Question?
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Type your question!"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
