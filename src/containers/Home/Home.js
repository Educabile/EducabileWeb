import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  Button,
  Section,
  Row,
  Divider,
  CardPanel,
  Icon,
  Input
} from "react-materialize";
import Slider from "../../components/Slider/Slider";
import Slide from "../../components/Slide/Slide";
import Caption from "../../components/Capiton/Caption";
import Container from "../../components/Container/Container";
import Carousel from "../../components/Carousel/Carousel";
import Col from "../../components/Col/Col";
import Posts from "./Posts/Posts";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider className="white" options={{ height: 380 }}>
          <Slide image="http://www.educabile.it/img/slide0-1920.jpg">
            <Caption align="left">
              <h3>Piattaforme Innovative</h3>
              <h5 className="light grey-text text-lighten-3">
                Sviluppo di piattaforme e infrastrutture in ambienti di Data
                Science
              </h5>
              <Button className="green" large>
                Leggi di piu'
                <Icon right>arrow_forward</Icon>
              </Button>
            </Caption>
          </Slide>
          <Slide image="http://www.educabile.it/img/cta-1920.jpeg">
            <Caption align="left">
              <h3>Formazione</h3>
              <h5 className="light grey-text text-lighten-3">
                Corsi di tipo laboratoriale con l'ausilio di specifiche figure
                terze (mentori)
              </h5>
              <Button className="orange" large>
                Leggi di piu'
                <Icon right>arrow_forward</Icon>
              </Button>
            </Caption>
          </Slide>
          <Slide image="http://www.educabile.it/img/consulenza-dt-1920.jpeg">
            <Caption align="left">
              <h3>Servizi di Consulenza Strategica</h3>
              <h5 className="light grey-text text-lighten-3">
                Progetti di ricerca e di consulenza tecnico scientifica
              </h5>
              <Button className="green" large>
                Leggi di piu'
                <Icon right>arrow_forward</Icon>
              </Button>
            </Caption>
          </Slide>
          <Slide image="http://www.educabile.it/img/piattaforme-ambienti-1920.jpeg">
            <Caption align="left">
              <h3>Piattaforme ed ambienti per la didattica</h3>
              <h5 className="light grey-text text-lighten-3">
                sperimentare dotazioni d'aula alternative privilegiandone la
                semplicita' d'utilizzo
              </h5>
              <Button className="orange" large>
                Leggi di piu'
                <Icon right>arrow_forward</Icon>
              </Button>
            </Caption>
          </Slide>
        </Slider>

        <Section id="azienda" className="white">
          <Container className="center">
            <h2>
              <span className="blue-text text-darken-3">Educabile</span> una
              Startup Innovativa
            </h2>

            <p className="flow-text grey-text left-align">
              Ci proponiamo come referente affidabile nel gestire scenari
              complessi ad alto contenuto tecnologico, offre un supporto
              specialistico all’avanguardia per una vasta gamma di soluzioni
              basate su piattaforme open source e social network dedicati, rende
              disponibili figure di elevato profilo professionale : Dottori di
              Ricerca, Ricercatori Senior, Professori Universitari e
              Professionisti di decennale esperienza
            </p>

            <HashLink
              to="/#destinatari"
              scroll={el => {
                window.scrollTo({
                  top:
                    el.getBoundingClientRect().top -
                    document.body.getBoundingClientRect().top -
                    64,
                  behavior: "smooth"
                });
              }}
            >
              <Button className="hoverable move-icon-forward" large>
                Scopri di piu'
                <Icon right>arrow_forward</Icon>
              </Button>
            </HashLink>
          </Container>
        </Section>

        <Section id="destinatari" className="grey lighten-4">
          <Container className="center ">
            <h2>
              I <span className="blue-text text-darken-3">Destinatari</span>
            </h2>

            <Row
              style={{
                display: "flex",
                alignItems: "stretch",
                flexWrap: "wrap"
              }}
            >
              <Col s={12} m={6} xl={4} style={{ display: "flex" }}>
                <CardPanel className="feature hoverable rounded">
                  <Icon className="blue-text text-darken-3" medium>
                    business
                  </Icon>
                  <h5>Aziende</h5>

                  <p className="flow-text grey-text">
                    Educabile vede questo ambito non solo come area commerciale
                    ma anche come luogo di ricerca e di sviluppo
                    tecnico-scientifico.
                  </p>
                </CardPanel>
              </Col>

              <Col s={12} m={6} xl={4} style={{ display: "flex" }}>
                <CardPanel className="feature hoverable rounded">
                  <Icon className="blue-text text-darken-3" medium>
                    people
                  </Icon>
                  <h5>Professionisti</h5>

                  <p className="flow-text grey-text">
                    Educabile si propone come partner per promuovere e
                    sviluppare la ricerca anche nel segmento dei professionisti
                    con innovative soluzioni di trasferimento tecnologico.
                  </p>
                </CardPanel>
              </Col>

              <Col s={12} m={12} xl={4} style={{ display: "flex" }}>
                <CardPanel className="feature hoverable rounded">
                  <Icon className="blue-text text-darken-3" medium>
                    school
                  </Icon>
                  <h5>Istituzioni Scolastiche</h5>

                  <p className="flow-text grey-text">
                    I servizi proposti in questa area, riguardano gli ambienti
                    di apprendimento e si qualificano come innovativi e
                    tecnologicamente all’avanguardia.
                  </p>
                </CardPanel>
              </Col>
            </Row>

            <h3>Vuoi saperne di piu'?</h3>

            <HashLink
              to="/#contatti"
              scroll={el => {
                window.scrollTo({
                  top:
                    el.getBoundingClientRect().top -
                    document.body.getBoundingClientRect().top -
                    64,
                  behavior: "smooth"
                });
              }}
            >
              <Button
                className="amber grey-text hoverable text-darken-3"
                large
                waves="light"
                id="go-to-contact"
              >
                Entra in contatto con noi
                <Icon right>question_answer</Icon>
              </Button>
            </HashLink>
          </Container>
        </Section>

        <Section className="white">
          <h2 className="center">
            I Nostri <span className="blue-text text-darken-3">Partner</span>
          </h2>

          <Container>
            <Divider />

            <Carousel
              options={{
                fullWidth: false,
                noWrap: false,
                padding: 200,
                indicators: true
              }}
              images={[
                "http://www.educabile.it/img/logo-geofotogrammetrica-256.png",
                "http://www.educabile.it/img/logo-qequipe-256.png",
                "http://www.educabile.it/img/logo-banat-university-256.png",
                "http://www.educabile.it/img/logo-ict-consulting-256.png"
              ]}
              centerImages
            />

            <Divider />
          </Container>
        </Section>

        <Section id="aree-di-intervento" className="white">
          <Container className="center">
            <h2 className="blue-text text-darken-3">Aree di Intervento</h2>
            <p className="flow-text grey-text left-align">
              Ci proponiamo come referente affidabile nel gestire scenari
              complessi ad alto contenuto tecnologico, offre un supporto
              specialistico all’avanguardia per una vasta gamma di soluzioni
              basate su piattaforme open source e social network dedicati, rende
              disponibili figure di elevato profilo professionale : Dottori di
              Ricerca, Ricercatori Senior, Professori Universitari e
              Professionisti di decennale esperienza
            </p>
          </Container>
        </Section>

        <Section className="grey lighten-4">
          <Container className="center">
            <Row>
              <Link to="/didattica-digitale">
                <Col s={12} m={6} className="didattica-digitale center">
                  <Icon className="orange-text" medium>
                    mode_edit
                  </Icon>
                  <h5>Didattica Digitale</h5>
                  <p className="flow-text grey-text left-align">
                    Educabile vede questo ambito non solo come area commerciale
                    ma anche come luogo di ricerca e di sviluppo
                    tecnico-scientifico.
                  </p>
                </Col>
              </Link>

              <Link to="/data-science">
                <Col s={12} m={6} className="data-science center">
                  <Icon className="green-text" medium>
                    assessment
                  </Icon>
                  <h5>Data Science</h5>
                  <p className="flow-text grey-text left-align">
                    Educabile si propone come partner per promuovere e
                    sviluppare la ricerca anche nel segmento dei professionisti
                    con innovative soluzioni di trasferimento tecnologico.
                  </p>
                </Col>
              </Link>
            </Row>

            <Button large waves="light" className="move-icon-forward hoverable">
              <Icon right>arrow_forward</Icon>
              Consulta i servizi
            </Button>
          </Container>
        </Section>

        <Section id="in-evidenza" className="grey lighten-2 center">
          <Container>
            <h2>
              <span>In</span>{" "}
              <span className="blue-text text-darken-3">Evidenza</span>
            </h2>

            <Posts />

            <Button large waves="light" node={Link} to="/blog">
              Vai all'archivio completo <Icon right>library_books</Icon>
            </Button>
          </Container>
        </Section>

        <Section
          id="contatti"
          className="center"
          style={{ backgroundColor: "#e9eaee" }}
        >
          <Container>
            <h2 className="blue-text text-darken-3">Contatti</h2>

            <Row
              className="z-depth-1-half"
              style={{ display: "flex", flexWrap: "wrap", borderRadius: 30 }}
            >
              <Col id="sedi" s={12} l={5} className="white">
                <h4 className="blue-text text-darken-3">Sede Legale</h4>
                <p
                  className="left-align"
                  style={{ fontSize: "smaller", fontWeight: "bold" }}
                >
                  Via E. Nicolardi, 109 - 80131 - Napoli (NA)
                  <br />
                  P. IVA 08485831211 | educabile@pec.it
                  <br />
                  Cap. Soc. € 10.000,00 | N° REA NA 962304
                  <br />
                  Iscritta nella sezione Startup Innovative
                </p>

                <br />
                <h4 className="blue-text text-darken-3">Sede Operativa</h4>
                <p
                  className="left-align"
                  style={{ fontSize: "smaller", fontWeight: "bold" }}
                >
                  Via Coroglio, 57/d - Città della Scienza 80124 - Napoli (NA)
                  <br />
                  Incubatore Campania Newsteel Srl
                  <br />
                  Tel. +39 081 735 25 16 | +39 081 197 20380
                  <br />
                  Fax +39 081 197 22126
                </p>

                <br />

                <h4 className="blue-text text-darken-3">Ufficio Estero</h4>
                <p
                  className="left-align"
                  style={{ fontSize: "smaller", fontWeight: "bold" }}
                >
                  300645 Timisoara (RO) - 119 Aradului Street
                  <br />
                  Banat’s University of Agricultural Sciences and Veterinary
                  Medicine “King Michael I of Romania”
                </p>
              </Col>

              <Col
                id="form"
                s={12}
                l={7}
                className="grey lighten-4 valign-wrapper"
              >
                <Section>
                  <Input s={6} label="Nome e Cognome" />
                  <Input s={6} type="email" label="Email" />
                  <Input s={12} type="text" label="Oggetto del messaggio" />
                  <Input s={12} type="textarea" label="Corpo del messaggio" />
                  <div>
                    <Button waves="light" large className="right">
                      <Icon right>send</Icon>
                      Invia
                    </Button>
                  </div>
                </Section>
              </Col>
            </Row>
          </Container>
        </Section>
      </React.Fragment>
    );
  }
}

export default Home;
