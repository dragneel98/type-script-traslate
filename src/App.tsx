/* eslint-disable no-useless-return */
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'
import { ChangeIcon } from './components/Icons'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import { LanguageSelector } from './components/LanguageSelector'
import TextArea from './components/TextArea'
import { SectionTypes } from './types.d'
import { useEffect } from 'react'
import { translate } from './components/traslate'

function App () {
  const {
    toLanguage, fromLanguage, fromText, result, loading,
    interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResult
  } = useStore()

  useEffect(() => {
    if (fromText === '') return
    translate({ fromLanguage, toLanguage, text: fromText })
      .then(result => {
      // se usa == por que compara null y undefined
        if (result == null) return
        setResult(result)
      })
      .catch(() => { setResult('error') })
  }, [fromText])

  return (
    <Container fluid>
      <h1>translate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
          <LanguageSelector
           type={SectionTypes.from}
           value={fromLanguage}
           onChange={setFromLanguage}></LanguageSelector>
            <TextArea
           placeHolder='introduce tu text'
           type={SectionTypes.from}
           value={fromText}
           onChange={setFromText}
           ></TextArea>
           </Stack>
        </Col>

        <Col xs="auto">
         <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={ interchangeLanguages} > <ChangeIcon></ChangeIcon> </Button>
        </Col>

        <Col>
        <Stack gap={2}>
        <LanguageSelector
         type={SectionTypes.to}
         value={toLanguage}
         onChange={setToLanguage}></LanguageSelector>
         <TextArea
           placeHolder='traduccion'
           type={SectionTypes.to}
           value={result}
           onChange={setResult}
           loading={loading}
           ></TextArea>
        </Stack>
        </Col>
      </Row>

    </Container>
  )
}

export default App
