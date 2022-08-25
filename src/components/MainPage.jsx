import React, { useState } from "react";
import { ReactDOM } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Button, Collapse } from "react-bootstrap";
import MainPage_css from "./MainPage.css";
import image_2 from "../assets/images/image_2.png";
import image_3 from "../assets/images/image_3.png";
import image_1svg from "../assets/images/image_1.svg";
import image_4svg from "../assets/images/image_1.svg";
import image_5svg from "../assets/images/image_1.svg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function MainPage() {
  const [t, i18n] = useTranslation("global");
  const [open, setOpen] = useState(true);
  const [openf1, setOpenf1] = useState(false);
  const [openf2, setOpenf2] = useState(false);

  return (
    <Container fluid>
      <Row id="firstPage">
        <img src={image_1svg} id="label_image"></img>
        <Col>
          <Row>
            <h1 xl={6} lg={1} md={1} sm={6} md={6} id="title">
              {t("MainPage.mainTitle")}
              <p id="lineTitle"> - </p> {t("MainPage.mainTitle2")}
            </h1>
          </Row>
          <Row>
            <Col>
              <div id="containerParagraph" md={6} sm={6}>
                <p id="paragraph" md={6} sm={6}>{t("MainPage.paragraph1")}</p>
                <p id="paragraph3" md={6} sm={6}>{t("MainPage.paragraph2")}</p>
                <p id="learnMore" md={6} sm={6}>{t("MainPage.learnMore")}</p>
              </div>
            </Col>
            <Col xl={6} lg={6} sm={6}>
              <img src={image_2} id="image_1"></img>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row id="SecondPage">
        <Container id="secondPageLabel">
          <Row>
            <Col xl={6} lg={6}>
              <h2 id="subtitle">{t("MainPage.subTitle")}</h2>
              <p id="paragraph_page2">{t("MainPage.paragraph3")}</p>
              <Button id="button_label">{t("MainPage.getStarted")}</Button>
              <p id="button_legend">{t("MainPage.startinAt")}</p>
            </Col>
            <Col xl={6} lg={6}>
              <img id="image_3" src={image_3}></img>
            </Col>
          </Row>
        </Container>
      </Row>

      <Row id="thirdPage">
        <Col xl={4} lg={12} sm={12}>
          <h1 id="titlePage3">{t("MainPage.faq")}</h1>
        </Col>
        <Col xl={6} lg={12} id="faqQuestions">
          <Row>
            <hr id="separator1"></hr>
            <h3 onClick={() => setOpen(!open)} id="subtitlePage3">
              {t("MainPage.faq1")}
              {!open && <AiOutlinePlus id="collapsibleIcon" />}
              {open && <AiOutlineMinus id="collapsibleIcon" />}
            </h3>
          </Row>
          <Row>
            <Collapse in={open}>
              <div id="example-collapse-text">
                <p id="paragraphPage3">{t("MainPage.aFaq1")}</p>
              </div>
            </Collapse>
          </Row>
          <Row>
            <hr id="separator"></hr>
            <h3 onClick={() => setOpenf1(!openf1)} id="subtitlePage3">
              {t("MainPage.faq2")}
              {!openf1 && <AiOutlinePlus id="collapsibleIcon" />}
              {openf1 && <AiOutlineMinus id="collapsibleIcon" />}
            </h3>
          </Row>
          <Row>
            <Collapse in={openf1}>
              <div id="example-collapse-text">
                <p id="paragraphPage3">{t("MainPage.aFaq2")}</p>
              </div>
            </Collapse>
          </Row>
          <Row>
            <hr id="separator"></hr>
            <h3 onClick={() => setOpenf2(!openf2)} id="subtitlePage3">
              {t("MainPage.faq3")}
              {!openf2 && <AiOutlinePlus id="collapsibleIcon" />}
              {openf2 && <AiOutlineMinus id="collapsibleIcon" />}
            </h3>
          </Row>
          <Row>
            <Collapse in={openf2}>
              <div id="example-collapse-text">
                <p id="paragraphPage3">{t("MainPage.aFaq3")}</p>
              </div>
            </Collapse>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
