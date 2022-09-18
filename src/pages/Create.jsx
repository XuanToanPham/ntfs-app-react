import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../Components/UI/Common-section/CommonSection";
import NftCard from "../Components/UI/Nft-card/NftCard";
import img from "../asset/images/img-01.jpg";
import avatar from "../asset/images/ava-01.png";
import "../style/create.css";
import { useDispatch, useSelector } from "react-redux";
import {
  validateFileInputAction,
  validatePriceInputAction,
  validateMiniumBidAction,
} from "../redux/ValidateForm/validateForm";
const Create = () => {
  const dispatch = useDispatch();
  const isValidInputFile = useSelector((state) => state.inputFile.isValid);
  const messageInputPrice = useSelector(
    (state) => state.inputPrice.messageError
  );
  const messageMiniumBidInput = useSelector(
    (state) => state.inputMiniumBid.messageError
  );
  const item = {
    id: "04",
    title: "Guard",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
    imgUrl: img,
    creator: "Trista Francis",
    creatorImg: avatar,
    currentBid: 7.89,
  };

  const inputFileChangeHandle = (e) => {
    const tyleFile = e.target.files[0].type;
    const sizeFile = e.target.files[0].size;

    dispatch(validateFileInputAction.isValidFile(tyleFile));
    dispatch(validateFileInputAction.isSizeFile(sizeFile));
  };

  const inputPriceChangeHandle = (e) => {
    const price = e.target.value;
    dispatch(validatePriceInputAction.isValidPrice(price));
  };
  const inputMiniumBidChangeHandle = (e) =>{
    const miniumBid = e.target.value;
    dispatch(validateMiniumBidAction.isValidMediumBid(miniumBid));
  }
  return (
    <>
      <CommonSection title={"Create Item"} />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <NftCard item={item} />
            </Col>

            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form>
                  <div className="form__input">
                    <label htmlFor="">Upload File</label>

                    <input
                      type="file"
                      className="upload__input"
                      accept="image/*"
                      onChange={inputFileChangeHandle}
                    />
                    {!isValidInputFile ? (
                      <span className="input__error">Check Error</span>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input
                      type="number"
                      placeholder="Enter price for one item (ETH)"
                      onChange={inputPriceChangeHandle}
                    />
                    {messageInputPrice ? (
                      <span className="input__error">{messageInputPrice}</span>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Minium Bid</label>
                    <input
                      type="number"
                      placeholder="Enter minium bid"
                      min={0}
                      onChange={inputMiniumBidChangeHandle}
                    />
                      {messageMiniumBidInput ? (
                      <span className="input__error">{messageMiniumBidInput}</span>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="d-flex">
                    <div className="form__input w-50">
                      <label htmlFor="">Starting Date</label>
                      <input type="date" />
                    </div>
                    <div className="form__input w-50">
                      <label htmlFor="">Expiration Date</label>
                      <input type="date" />
                    </div>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="Enter title" />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Description</label>
                    <textarea
                      name=""
                      id=""
                      rows="7"
                      placeholder="Enter Description"
                      className="w-100"
                    ></textarea>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
