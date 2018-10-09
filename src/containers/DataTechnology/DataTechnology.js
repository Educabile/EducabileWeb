import React from "react";
import { Row, Section } from "react-materialize";
import Col from "../../components/Col/Col";
import Container from "../../components/Container/Container";
import Parallax from "../../components/Parallax/Parallax";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";

const DataTechnology = () => {
  return (
    <div>
      <Row>
        <Col s={12} xl={3}>
          <Icon path={mdiAccount}>w</Icon>
        </Col>

        <Col s={12} xl={3}>
          <Section>w</Section>
        </Col>

        <Col s={12} xl={3}>
          <Section>w</Section>
        </Col>
        <Col s={12} xl={3}>
          <Section>w</Section>
        </Col>
      </Row>

      <Row>
        <Col s={12} xl={6}>
          <Parallax imageSrc="http://www.educabile.it/img/supporto-ai-progetti-1920.jpg">
            test
          </Parallax>
        </Col>

        <Col s={12} xl={6}>
          <h2 className="center">
            Piattaforme{" "}
            <span className="blue-text text-darken-3">Innovative</span>
          </h2>

          <p className="grey-text flow-text">
            Sviluppo di piattaforme e infrastrutture in ambienti di Data
            Science, ovvero soluzioni basate su strumenti che permettono di
            analizzare dati al fine di influenzare i processi decisionali
            attraverso innovative metodologie di inferenza.
          </p>
        </Col>
      </Row>

      <Row>
        <Col s={12} xl={6}>
          <h2 className="center">
            <span className="blue-text text-darken-3">Healthcare</span>{" "}
            Management System
          </h2>

          <p className="flow-text grey-text">
            In questo ambito Educabile ha acquisito il know-how per sviluppare
            Applicazioni WEB e Mobile di monitoring basati su tecniche di
            Intelligenza artificiale implementate in framework innovativi;
            queste soluzioni forniscono il supporto al sistema decisionale
            basato su Big Data provenienti da ambiti sanitari, quali cartelle
            cliniche, da fonti bibliografiche, da database condivisi e/o
            distribuiti; integrano interrogazioni semantiche basate su
            linguaggio naturale
          </p>
        </Col>

        <Col s={12} xl={6}>
          <Parallax imageSrc="http://www.educabile.it/img/piattaforme-ambienti-1920.jpeg">
            test
          </Parallax>
        </Col>
      </Row>

      <Row>
        <Col s={12} xl={6}>
          <Parallax imageSrc="http://www.educabile.it/img/infrastrutture-di-rete-1920.jpeg">
            test
          </Parallax>
        </Col>

        <Col s={12} xl={6}>
          <h2 className="center">
            Digital{" "}
            <span className="blue-text text-darken-3">Cultural Heritage</span>{" "}
            Framework
          </h2>

          <p className="flow-text grey-text">
            Educabile offre soluzioni personalizzate basate su Intelligent
            Interaction Technology; utilizza Tecnologie 3D per lo scanning, la
            digitalizzazione e la riproduzione di contenuti multimediali anche
            in realtà aumentata; rende disponibile una soluzione di assistente
            virtuale avanzato adattabile alle più svariate aree applicative:
            giurisprudenza, sanità, istruzione, moda, retail
          </p>
        </Col>
      </Row>

      <Row>
        <Col s={12} xl={6}>
          <h2 className="center">
            Servizi di{" "}
            <span className="blue-text text-darken-3">
              Consulenza Strategica
            </span>
          </h2>

          <p className="flow-text grey-text">
            Educabile si interessa di progetti di ricerca e di consulenza
            tecnico scientifica in progetti industriali e di ricerca e sviluppo
            che richiedono tecniche di Analisi predittiva, Machine Learning e
            DataMinig. La nostra azienda partecipa attivamente a progetti di
            ricerca relativi al mondo della Smart Cities e Smart Environments.
            Esperienze sono state sviluppate in diversi scenari applicativi:
            Sistemi predittivi in Finanza. Tecnologie e sistemi innovativi
            basati su algoritmi predittivi in ambienti e contesti ad alta
            volatilità ed incertezza. Reputation System Sistemi oggettivi di
            valutazione individuali e collettive basate su sistemi intelligenti
            di raccolta dati e di interazione semantica (Chatbot, Social
            Networking, Open Data….).
          </p>
        </Col>

        <Col s={12} xl={6}>
          <Parallax imageSrc="http://www.educabile.it/img/piattaforme-ambienti-1920.jpeg">
            test
          </Parallax>
        </Col>
      </Row>
    </div>
  );
};

export default DataTechnology;
