import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import { Row, Col, Section, Button, TextInput, Textarea } from 'react-materialize'
import Checkbox from 'components/Checkbox'
import { Formik, Form } from 'formik'
import Icon from '@mdi/react'
import { mdiSend } from '@mdi/js'

const ContactForm = ({ t }) => {
  const validate = values => {
    let errors = {}

    if (!values.nameSurname) {
      errors.nameSurname = 'Campo richiesto'
    }

    if (!values.email) {
      errors.email = 'Campo richiesto'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Indirizzo email non valido'
    }

    if (!values.object) {
      errors.object = 'Campo richiesto'
    }

    if (!values.message) {
      errors.message = 'Campo richiesto'
    }

    if (!values.trattamentoDati) {
      errors.trattamentoDati = 'Campo richiesto'
    }

    return errors
  }

  return (
    <Row
      className="z-depth-1-half"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: 30,
      }}>
      <Col id="sedi" s={12} xl={5} className="white">
        <h5 className="blue-text text-darken-3 left-align">Sede Legale</h5>
        <p
          className="left-align"
          style={{
            fontSize: 'x-small',
            fontWeight: 'bold',
          }}>
          Via E. Nicolardi, 109 - 80131 - Napoli (NA)
          <br />
          P. IVA 08485831211 | educabile@pec.it
          <br />
          Cap. Soc. € 10.000,00 | N° REA NA 962304
          <br />
          Iscritta nella sezione Startup Innovative
        </p>

        <br />
        <h5 className="blue-text text-darken-3 left-align">Sede Operativa</h5>
        <p
          className="left-align"
          style={{
            fontSize: 'x-small',
            fontWeight: 'bold',
          }}>
          Via Coroglio, 57/d - Città della Scienza 80124 - Napoli (NA)
          <br />
          Incubatore Campania Newsteel Srl
          <br />
          Tel. +39 081 735 25 16 | +39 081 197 20380
          <br />
          Fax +39 081 197 22126
        </p>

        <br />

        <h5 className="blue-text text-darken-3 left-align">Ufficio Estero</h5>
        <p
          className="left-align"
          style={{
            fontSize: 'x-small',
            fontWeight: 'bold',
          }}>
          300645 Timisoara (RO) - 119 Aradului Street
          <br />
          Banat’s University of Agricultural Sciences and Veterinary Medicine “King Michael I of
          Romania”
        </p>
      </Col>

      <Col
        s={12}
        xl={7}
        className="grey lighten-5 valign-wrapper"
        style={{ borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
        <Section>
          <Formik
            initialValues={{
              nameSurname: '',
              email: '',
              object: '',
              message: '',
              trattamentoDati: false,
            }}
            onSubmit={(values, actions) => {
              actions.resetForm()
              actions.setSubmitting(false)

              // wp.contactEmail()
              //   .create(values)
              //   .then(() => {
              //     window.M.toast({
              //       html: t('sendSuccess'),
              //       classes: 'rounded orangeGradient',
              //     })
              //   })
              //   .catch(() => {
              //     window.M.toast({
              //       html: t('sendError'),
              //       classes: 'rounded orangeGradient',
              //     })
              //   })
              //   .finally(() => {
              //     actions.resetForm()
              // actions.setSubmitting(false)
              //     window.M.Modal.getInstance(document.getElementById('course-modal')).close()
              //   })
            }}
            validate={validate}
            render={({ errors, handleChange, handleBlur, values, isSubmitting, isValid }) => (
              <Form>
                <Row>
                  <TextInput
                    s={12}
                    m={6}
                    label="Nome e Cognome"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nameSurname}
                    name="nameSurname"
                    validate
                    required
                    error={errors.nameSurname}
                  />
                  <TextInput
                    s={6}
                    type="email"
                    label={`${t('Indirizzo Email')}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    name="email"
                    validate
                    required
                    error={errors.email}
                  />
                  <TextInput
                    s={12}
                    type="text"
                    label={t('Oggetto')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.object}
                    name="object"
                    validate
                    required
                    error={errors.object}
                  />
                  <Textarea
                    s={12}
                    label="Messaggio"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    name="message"
                    id="message"
                    validate
                    required
                    error={errors.message}
                  />
                  <Col s={12} className="input-field">
                    <Checkbox
                      id="trattamentoDati"
                      label="Consenso al trattamento dei dati"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value="trattamentoDati"
                      checked={values.trattamentoDati}
                      name="trattamentoDati"
                      validate
                      required
                    />
                  </Col>
                </Row>

                <Section className="center">
                  <Button
                    type="submit"
                    waves="light"
                    large
                    className="right hoverable blueGradient"
                    style={{
                      display: 'inline-flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    disabled={!isValid || isSubmitting}>
                    <Icon
                      path={mdiSend}
                      size="1.3rem"
                      color="white"
                      style={{ transform: 'translateX(-35%)' }}
                    />
                    Invia
                  </Button>
                </Section>
              </Form>
            )}
          />
        </Section>
      </Col>
    </Row>
  )
}

ContactForm.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('contatti')(ContactForm)
