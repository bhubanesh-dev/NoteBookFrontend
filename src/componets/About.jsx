import React from "react";

const About = () => {

  const openLinkInNewWindow = (url) => {
    window.open(url, '_blank');
  };
  return (
    <>
      <div className="setCointainer">
        <div className="cointainer row">
          <div className="col-12 col-md-8 mx-auto my-auto p-3 ">
            <div class="accordion glassmorphism " id="accordionExample">
              <div class="accordion-item bg-transparent">
                <h2 class="accordion-header ">
                  <button
                    class="accordion-button  text-light bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    About App
                  </button>
                </h2>
                <div
                  id="collapse1"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body  ">
                    <strong>
                      Welcome to NoteCraft: Crafting Your Notes, Your Way
                    </strong>
                    NoteCraft is your digital workshop for crafting and
                    organizing notes like never before. We empower you to take
                    control of your ideas, thoughts, and information, providing
                    a versatile and creative space to do it.
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-transparent ">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed bg-transparent  text-light "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Your Notes, Anywhere
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>
                      {" "}
                      Access your crafted notes from anywhere, at any time.
                    </strong>{" "}
                    NoteCraft synchronizes seamlessly across devices, allowing
                    you to pick up where you left off whether you're on your
                    computer, tablet, or smartphone.
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-transparent ">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed bg-transparent  text-light "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapse3"
                  >
                    Secure and Private
                  </button>
                </h2>
                <div
                  id="collapse3"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>We take your privacy seriously.</strong> NoteCraft
                    offers robust security features to protect your notes. With
                    our advanced encryption, your notes are safe and sound,
                    accessible only to you.
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-transparent ">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed bg-transparent text-light  "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded="false"
                    aria-controls="collapse4"
                  >
                    Your Feedback Matters:
                  </button>
                </h2>
                <div
                  id="collapse4"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body ">
                    <strong>We value your input.</strong>We value your input.
                    Your feedback plays a pivotal role in shaping the future of
                    NoteCraft. Have a feature idea in mind? Let us know! We're
                    here to listen and make NoteCraft even better for you.
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-transparent  ">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed bg-transparent  text-light  "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                    aria-expanded="false"
                    aria-controls="collapse5"
                  >
                    Stay Tuned for What's Next
                  </button>
                </h2>
                <div
                  id="collapse5"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>
                      Be part of our journey as we continue to evolve and craft
                      new ways to elevate your note-taking.
                    </strong>{" "}
                    Keep an eye on our updates, announcements, and release notes
                    to see how NoteCraft becomes an even more indispensable part
                    of your digital life.We are planning for a better user
                    interface having more features for profiles and many more..
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-transparent ">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed bg-transparent text-light "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse6"
                    aria-expanded="false"
                    aria-controls="collapse6"
                  >
                    Source code 
                  </button>
                </h2>
                <div
                  id="collapse6"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body  ">
                    
                
                    <div className="cointainer-fluid">
                      <strong> Source code for backend:</strong>
                      <a  className=" text-decoration-none text-light pointer "  onClick={() => openLinkInNewWindow('https://github.com/root-sky/NoteBookFrontend')}>
                        Click here..
                      </a>
                    </div>
                    <div className="cointainer-fluid">
                      <strong> Source code for frontend:</strong>
                      <a className=" text-decoration-none text-light pointer"   onClick={() => openLinkInNewWindow('https://github.com/root-sky/NoteBookFrontend')}>
                        Click here..
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
