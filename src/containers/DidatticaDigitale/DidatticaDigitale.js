import React from 'react'
import { Row } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiSchool, mdiLifebuoy, mdiServerNetwork, mdiBank } from '@mdi/js'
import Col from '../../components/Col/Col'
import Container from '../../components/Container/Container'
import Parallax from '../../components/Parallax/Parallax'
import {
  supportoAiProgettiJpg as SupportoAiProgetti,
  piattaformeAmbientiJpg as PiattaformeAmbienti,
  infrastruttureDiReteJpg as InfrastruttureDiRete,
  ctaJpg as CTA,
} from '../../assets/img'

const DidatticaDigitale = () => {
  return (
    <div>
      <Row>
        <Col s={12} xl={6}>
          <Container>
            <h2 className="center blue-text text-darken-3">Formazione</h2>
            <p className="flow-text grey-text">
              Le metodologie fanno riferimento a quelle già ampiamente condivise dalla ricerca a
              livello Internazionale nell’ambito della ricerca-azione e della sperimentazione
              didattica. <br /> <br />
              Le azioni partono dall&apos;esame delle criticità e confronto delle metodologie per
              passare alla ricerca di strategie di risoluzione delle criticità e realizzazione di
              materiale operativo. Seguono test di efficacia sottoposto a gruppi di lavoro
              collaborativo per completarsi con attività di monitoraggio e valutazione dell’azione.{' '}
              <br /> <br />I partecipanti collaborano con il mentore , nella preparazione dei
              materiale didattico e nella scelta delle strategie d’insegnamento. I corsi realizzati
              da Educabile sono di tipo laboratoriale ed i partecipanti sono coadiuvati da
              specifiche figure terze (Mentori) che sono responsabili della qualità del lavoro
              prodotto e della disseminazione dei contenuti
            </p>
          </Container>
        </Col>

        <Col s={12} xl={6}>
          <Parallax imageSrc={CTA}>
            <Icon path={mdiSchool} size={5} color="white" />
          </Parallax>
        </Col>
      </Row>

      <Row>
        <Col s={12} xl={6}>
          <Parallax imageSrc={SupportoAiProgetti}>
            <Icon path={mdiLifebuoy} size={5} color="white" />
          </Parallax>
        </Col>

        <Col s={12} xl={6}>
          <h2 className="center">
            Supporto ai <span className="blue-text text-darken-3">Progetti</span>
          </h2>

          <p className="grey-text flow-text">
            Per progetti finanziati ( PON , FESR, fondi MIUR specifici) e per l’Alternanza Scuola
            Lavoro, Educabile supporta l’Istituzione Scolastica nella progettazione degli interventi
            e nella valutazione e divulgazione dei risultati; mette a disposizione, per tutte le
            aree disciplinari , esperti , dotazioni tecnologiche innovative, piattaforme open source
            specializzate per la didattica. Educabile è in grado di fornire un supporto
            specialistico per la promozione e la divulgazione dei risultati e delle attività
            progettuali svolte dalla istituzione scolastica: pubblicazione di libri ed e-book
            realizzazione di seminari e convegni sviluppo di servizi web e relative applicazioni
          </p>
        </Col>
      </Row>

      <Row>
        <Col s={12} xl={6}>
          <h2 className="center">
            <span className="blue-text text-darken-3">Piattaforme</span> ed Ambienti per la
            Didattica
          </h2>

          <p className="flow-text grey-text">
            Educabile ha sviluppato software e ha specializzato piattaforme open source volte a
            semplificare: l’archiviazione e la fruizione di lezioni e materiali didattici da parte
            di docenti e allievi l’uso di terminali per la sperimentazione dell’inchiostro digitale
            e sistemi di fruizione Video wireless nell’ambito di una lezione la progettazione di
            lezioni su piattaforma di e-learning per le attività di potenziamento e recupero
          </p>
        </Col>

        <Col s={12} xl={6}>
          <Parallax imageSrc={PiattaformeAmbienti}>
            <Icon path={mdiBank} size={5} color="white" />
          </Parallax>
        </Col>
      </Row>

      <Row>
        <Col s={12} xl={6}>
          <Parallax imageSrc={InfrastruttureDiRete}>
            <Icon path={mdiServerNetwork} size={5} color="white" />
            test
          </Parallax>
        </Col>

        <Col s={12} xl={6}>
          <h2 className="center">
            Infrastruttura di <span className="blue-text text-darken-3">Rete</span>
          </h2>

          <p className="flow-text grey-text">
            La dematerializzazione (protocollo informatico, registro elettronico, mercato elettonico
            della PA) , la diffusione di piattaforme con tecnologia cloud e l’utilizzo sempre più
            diffuso di Internet nella didattica, richiede per le Istituzioni Scolastica una
            Infrastruttura di rete interna (Lan/WLan) veloce, affidabile e sicura. Educabile per
            quest’area fornisce supporto per: Progettazione e la gestione delle reti Implementazione
            di adeguate politiche di sicurezza Monitoraggio continuo e da remoto degli apparati di
            rete per una rapida individuazione e risoluzione dei guasti (manutenzione predittiva)
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default DidatticaDigitale
