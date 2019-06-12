import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { Button, Parallax } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiSchool, mdiForum, mdiFactory, mdiGooglePhysicalWeb } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Base from 'components/Base/Base'
import { Redirect } from 'react-router-dom'
import Spinner from 'components/Spinner/Spinner'
import Destinatari from './Destinatari/Destinatari'
import FeatureCard from 'components/FeatureCard/FeatureCard'
import SlideAnim from 'react-reveal/Slide'
import ZoomAnim from 'react-reveal/Zoom'

import withWordpress from 'hoc/withWordpress'

const RicercaSviluppo = ({ t, page, loading }) => {
  const Content = () => {
    if (page) {
      const featuredImage = page._embedded['wp:featuredmedia']

      return (
        <>
          {featuredImage && (
            <Parallax
              image={
                <img
                  src={featuredImage[0].source_url}
                  alt=""
                  style={{
                    background: 'rgba(0, 0, 0, 0.25)',
                  }}
                />
              }
            />
          )}

          <Base
            content={
              <div
                dangerouslySetInnerHTML={{
                  __html: page.content.rendered,
                }}
              />
            }
          />
        </>
      )
    } else {
      if (loading) {
        return <Spinner />
      } else {
        return <Redirect to="/" />
      }
    }
  }

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Educabile Srl si propone referente affidabile nel gestire scenari complessi ad alto contenuto tecnologico ed offre servizi mirati ad Aziende, Professionisti ed Istituzioni Scolastiche."
        />
        <meta
          name="keyword"
          content="educazione, azienda, didattica, professionisti, digitale, innovazione, startup"
        />
      </Helmet>

      <Content />

      <Destinatari
        button={
          <Link to="/contatti">
            <Button className="amber grey-text hoverable text-darken-3" large waves="light">
              {t('contattiBtn')}
              <Icon path={mdiForum} size="1.3rem" />
            </Button>
          </Link>
        }>
        <SlideAnim left>
          <a href="#area-industria">
            <FeatureCard
              icon={mdiFactory}
              className="area-industria"
              title="Area Industria"
              content="Partecipiamo attivamente in progetti di ricerca e sviluppo attraverso consulenza tecnico scientifica per
progetti industriali...."
              style={{
                maxHeight: 330,
                minHeight: 330,
              }}
            />
          </a>
        </SlideAnim>

        <ZoomAnim>
          <a href="#didattica-digitale">
            <FeatureCard
              icon={mdiSchool}
              title="Didattica Digitale"
              className="didattica-digitale"
              content="La Scuola Digitale 2.0 , basata essenzialmente sulla necessità di digitalizzare l’istituzione scolastica....."
              style={{
                maxHeight: 330,
                minHeight: 330,
              }}
            />
          </a>
        </ZoomAnim>

        <SlideAnim right>
          <a href="#data-technology">
            <FeatureCard
              icon={mdiGooglePhysicalWeb}
              className="data-technology"
              title="Data Technology"
              content="L’Internet of Things ( IoT ) e la recente rivoluzione di Industria 4.0, stanno proponendo nuovi modelli di
business basati sul valore del “dato” ....."
              style={{
                maxHeight: 330,
                minHeight: 330,
              }}
            />
          </a>
        </SlideAnim>
      </Destinatari>

      <Base
        id="area-industria"
        title="Area Industria"
        showTitleOnLarge
        content={
          <div className="flow-text left-align">
            <p>
              Partecipiamo attivamente in progetti di ricerca e sviluppo attraverso consulenza
              tecnico scientifica per progetti industriali relativi al modo delle Smart Cities e
              Smart Environment implementando in maniera proattiva un link tra il mondo della
              ricerca e quello delle aziende con innovative soluzioni di trasferimento tecnologico.
              L'offerta è caratterizzata dalla proposta di soluzioni i cui risultati sono garantiti
              dal raggiungimento degli obiettivi prefissati adattandosi a rispondere alle esigenze
              di ogni tipologia di organizzazione, sia essa privata, pubblica, di medie o grande
              dimensioni. La sistematica sperimentazione in nuove tecnologie permette di garantire
              un'elevata competenza tecnica che insieme alla grande motivazione e dinamicità
              professionali garantiscono innovazione, qualità e completezza in tutte le soluzioni
              offerte. Supportiamo il cliente in tutte le fasi di Ricerca Industriale attraverso la
              consulenza per la creazione di Hardware, Software ed applicazioni web innovative ad
              alto valore tecnologico anche nell’ambito dell’Internet of Things (IoT)
            </p>
          </div>
        }
      />

      <Base
        id="didattica-digitale"
        title="Didattica Digitale"
        showTitleOnLarge
        content={
          <div className="flow-text left-align">
            <h3>Lo Scenario</h3>

            <p>
              La Scuola Digitale 2.0 , basata essenzialmente sulla necessità di digitalizzare
              l’istituzione scolastica dal punto di vista delle infrastrutture (Laboratori
              multimediali, LIM, Smart response…) e degli strumenti (software per LIM, App e video
              per l’apprendimento), è ormai una realtà ampiamente superata. E’ necessario spostare
              il focus di strategie didattiche e metodologie. Il nuovo obiettivo deve essere “la
              fruizione collettiva e individuale del web e di contenuti, per l’interazione di
              aggregazioni diverse in gruppi di apprendimento, in collegamento wired o wireless, per
              una integrazione quotidiana del digitale nella didattica” PON - Programma Operativo
              Nazionale (FSE-FESR) 2014-2020.
            </p>

            <h3>Il nostro approccio </h3>

            <p>
              L’aggiornamento e la formazione in servizio degli insegnanti cambia in maniera
              radicale; diviene un processo volto a garantire un intervento “su misura”, rispondente
              puntualmente ai bisogni formativi dei Docenti e in linea con il piano generale della
              Istituzione Scolastica. Risulta indispensabile integrare le risorse disponibili per i
              docenti (carta del docente) e i finanziamenti (PON, FESR) per alunni, docenti e
              infrastrutture. La formazione diventa, allora, un “percorso di innovazione globale”
              dell’istituzione scolastica che può essere supportato da Educabile in tutte le sue
              fasi (progettazione, sviluppo, implementazione, verifica, monitoraggio) e in tutte le
              sue componenti (formazione, infrastrutture di rete, piattaforme, dotazioni d’aula).
              Per ottenere la piena efficacia di un intervento formativo oggi non basta più
              definirne obiettivi e contenuti. Diventa necessario garantire una infrastruttura di
              rete interna (Lan/Wlan) sicura ed efficiente, predisporre strumenti semplici e veloci
              per la conservazione e l’utilizzo dei materiali didattici da parte di docenti e
              alunni, sperimentare dotazioni d’aula alternative per semplicità d’uso nella lezione e
              efficacia nella didattica
            </p>
          </div>
        }
      />

      <Base
        id="data-technology"
        title="Data Technology"
        showTitleOnLarge
        content={
          <div className="flow-text left-align">
            <h3>Lo Scenario</h3>

            <p>
              L’ Internet of Things ( IoT ) e la recente rivoluzione di Industria 4.0, stanno
              proponendo nuovi modelli di business basati sul valore del “dato” che diventa un
              prodotto/servizio, che permette di migliorare i processi di business, di stimolare la
              propria capacità di adattarsi a contesti in veloce mutazione, di definire le
              “migliori“ decisioni strategiche, di comprendere e prevedere comportamenti, trend e
              possibili “influencer” di mercato. In questo scenario di riferimento, Educabile è una
              azienda di Data Technology (DT) che, con i suoi esperti ed i suoi ricercatori,
              garantisce un supporto specialistico all’avanguardia su tutto lo spettro dell’IoT:
            </p>

            <ul>
              <li>comprendere e prevedere comportamenti</li>
              <li>analizzare trend e possibili “influencer” di mercato</li>
              <li>
                aiutare i propri partner a sviluppare la capacità di adattarsi a contesti in veloce
                mutazione per definire le “migliori” decisioni strategiche.
              </li>
            </ul>

            <h3>Il nostro Approccio</h3>
            <p>
              Educabile ha come punto di forza la capacità di declinare le diverse azioni di Data
              Technology in ambienti complessi con approcci altamente innovativi. Le nostre
              metodologie prevedono:
            </p>

            <ul>
              <li>
                l’integrazione di strumenti di intelligenza artificiale pervasiva mediante
                tecnologie avanzate di Machine Learning e Data Mining.
              </li>
              <li>
                lo sviluppo di strumenti di Speech interactions, ovvero riconoscimento vocale,
                associati all’interpretazione del contesto e delle emozioni che consentono una
                interazione fluida e più naturale.
              </li>
              <li>
                implementazione di Sistemi collaborativi geograficamente distribuiti, ovvero
                ecosistemi digitali dinamici i cui membri collaborano su reti di comunicazione
                decentralizzate basate su uno scambio aperto di informazioni ad alto impatto sulle
                dinamiche sociali.
              </li>
            </ul>
          </div>
        }
      />
    </>
  )
}

RicercaSviluppo.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withWordpress(withNamespaces('common')(RicercaSviluppo), 'ricerca-e-sviluppo')
