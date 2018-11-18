import React from 'react'
import { Row, Section } from 'react-materialize'
import Col from '../../components/Col/Col'
import Parallax from '../../components/Parallax/Parallax'
import Icon from '@mdi/react'
import {
  mdiAccount,
  mdiHeartPulse,
  mdiBriefcase,
  mdiAccountGroup,
  mdiChartLineStacked,
} from '@mdi/js'
import {
  supportoAiProgettiJpg as SupportoAiProgetti,
  piattaformeAmbientiJpg as PiattaformeAmbienti,
  infrastruttureDiReteJpg as InfrastruttureDiRete,
} from '../../assets/img'

const DataTechnology = () => {
  return (
    <div>
      <Row>
        <Col s={12} xl={3}>
          <Icon path={mdiAccount} />
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
          <Parallax imageSrc={SupportoAiProgetti}>
            <Icon path={mdiChartLineStacked} size={5} color="white" />
          </Parallax>
        </Col>

        <Col s={12} xl={6}>
          <h2 className="center">
            Piattaforme <span className="blue-text text-darken-3">Innovative</span>
          </h2>

          <p className="grey-text flow-text">
            Sviluppo di piattaforme e infrastrutture in ambienti di Data Science, ovvero soluzioni
            basate su strumenti che permettono di analizzare dati al fine di influenzare i processi
            decisionali attraverso innovative metodologie di inferenza.
          </p>

          <p className="grey-text flow-text">
            Implementazione di Sistemi collaborativi geograficamente distribuiti attraverso
            ecosistemi digitali dinamici i cui membri collaborano su reti di comunicazione
            decentralizzate basate su uno scambio aperto di informazioni ad alto impatto sulle
            dinamiche sociali.
          </p>
        </Col>
      </Row>

      <Row>
        <Col s={12} xl={6}>
          <h2 className="center">
            <span className="blue-text text-darken-3">Healthcare</span> Management System
          </h2>

          <p className="flow-text grey-text">
            In questo ambito Educabile ha acquisito il know-how per sviluppare Applicazioni WEB e
            Mobile di monitoring basati su tecniche di Intelligenza artificiale implementate in
            framework innovativi; queste soluzioni forniscono il supporto al sistema decisionale
            basato su Big Data provenienti da ambiti sanitari, quali cartelle cliniche, da fonti
            bibliografiche, da database condivisi e/o distribuiti; integrano interrogazioni
            semantiche basate su linguaggio naturale
          </p>
        </Col>

        <Col s={12} xl={6}>
          <Parallax imageSrc={PiattaformeAmbienti}>
            <Icon path={mdiHeartPulse} size={5} color="white" />
          </Parallax>
        </Col>
      </Row>

      <Row>
        <Col s={12} xl={6}>
          <Parallax imageSrc={InfrastruttureDiRete}>
            <Icon path={mdiBriefcase} size={5} color="white" />
          </Parallax>
        </Col>

        <Col s={12} xl={6}>
          <h2 className="center">
            Digital <span className="blue-text text-darken-3">Cultural Heritage</span> Framework
          </h2>

          <p className="flow-text grey-text">
            Educabile offre soluzioni personalizzate basate su Intelligent Interaction Technology;
            utilizza Tecnologie 3D per lo scanning, la digitalizzazione e la riproduzione di
            contenuti multimediali anche in realtà aumentata; rende disponibile una soluzione di
            assistente virtuale avanzato adattabile alle più svariate aree applicative:
            giurisprudenza, sanità, istruzione, moda, retail
          </p>
        </Col>
      </Row>

      <Row>
        <Col s={12} xl={6}>
          <h2 className="center">
            Servizi di <span className="blue-text text-darken-3">Consulenza Strategica</span>
          </h2>

          <p className="flow-text grey-text">
            Educabile si interessa di progetti di ricerca e di consulenza tecnico scientifica in
            progetti industriali e di ricerca e sviluppo che richiedono tecniche di Analisi
            predittiva, Machine Learning e DataMinig. La nostra azienda partecipa attivamente a
            progetti di ricerca relativi al mondo della Smart Cities e Smart Environments.
            Esperienze sono state sviluppate in diversi scenari applicativi: Sistemi predittivi in
            Finanza. Tecnologie e sistemi innovativi basati su algoritmi predittivi in ambienti e
            contesti ad alta volatilità ed incertezza. Reputation System Sistemi oggettivi di
            valutazione individuali e collettive basate su sistemi intelligenti di raccolta dati e
            di interazione semantica (Chatbot, Social Networking, Open Data….).
          </p>
        </Col>

        <Col s={12} xl={6}>
          <Parallax imageSrc={PiattaformeAmbienti}>
            <Icon path={mdiAccountGroup} size={5} color="white" />
          </Parallax>
        </Col>
      </Row>
    </div>
  )
}

export default DataTechnology
