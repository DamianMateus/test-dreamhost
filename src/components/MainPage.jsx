import React from "react";
import { ReactDOM } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Button } from "react-bootstrap";
import image_2 from "../assets/images/image_2.png";
import image_3 from "../assets/images/image_3.png";
import image_1svg from "../assets/images/image_1.svg";
import image_4svg from "../assets/images/image_1.svg";
import image_5svg from "../assets/images/image_1.svg";

export default function MainPage() {
  const [t, i18n] = useTranslation("global");
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col>
              <img src={image_1svg}></img>
            </Col>
            <Col>
              <h1>{t("MainPage.mainTitle")}</h1>
            </Col>
          </Row>
          <p>{t("MainPage.paragraph1")}</p>
          <p>{t("MainPage.paragraph2")}</p>
          <p>{t("MainPage.learnMore")}</p>
        </Col>
        <Col>
          <img src={image_2}></img>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>{t("MainPage.subTitle")}</h2>
          <p>{t("MainPage.paragraph3")}</p>
          <Row>
            <Col>
              <Button>{t("MainPage.getStarted")}</Button>
            </Col>
            <Col>
              <p>{t("MainPage.startinAt")}</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <img src={image_3}></img>
        </Col>
      </Row>
      <Row>
        <hr></hr>
        <Col>
          <h1>{t("MainPage.faq")}</h1>
        </Col>
        <Col>
          <Row>
            <h3>{t("MainPage.faq1")}</h3>
          </Row>
          <Row>
            <p>{t("MainPage.aFaq1")}</p>
          </Row>
          <Row>
            <h3>{t("MainPage.faq2")}</h3>
          </Row>
          <Row>
            <p>{t("MainPage.aFaq2")}</p>
          </Row>
          <Row>
            <h3>{t("MainPage.faq3")}</h3>
          </Row>
          <Row>
            <p>{t("MainPage.aFaq3")}</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
