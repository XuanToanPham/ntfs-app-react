import React from "react";
import CommonSection from "../Components/UI/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../style/contact.css";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validateInputNameAction } from "../redux/ValidateForm/validateForm";
const Contact = () => {
  const dispatch = useDispatch();
  const messageErrorName = useSelector((state) => state.inputName.messageError);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const inputNameChangleHandle = (e) => {
    const name = e.target.value;
    dispatch(validateInputNameAction.isValid(name));
  };

  return (
    <>
      <CommonSection title={"Contact"} />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="m-auto text-center">
              <h2>Drop a Message</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis, error ea! Ad aut ut voluptatem incidunt optio.
                Mollitia, ullam perspiciatis.
              </p>
              <div className="contact">
                <form onSubmit={handleSubmit}>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      onChange={inputNameChangleHandle}
                      onBlur={inputNameChangleHandle}
                    />
                    {messageErrorName ? (
                      <span className="input__error">
                        {messageErrorName}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form__input">
                    <input type="email" placeholder="Enter your email" />
                  </div>
                  <div className="form__input">
                    <input type="text" placeholder="Enter subject" />
                  </div>
                  <div className="form__input">
                    <textarea rows="7" placeholder="Write message"></textarea>
                  </div>

                  <button type="submit" className="send__btn">
                    Send a Message
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
