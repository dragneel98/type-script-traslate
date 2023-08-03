import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'
import { ChangeIcon } from './components/Icons'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import { LanguageSelector } from './components/LanguageSelector'

function App () {
  const { toLanguage, fromLanguage, interchangeLanguages, setFromLanguage, setToLanguage } = useStore()
  return (
    <Container fluid>
      <h1>translate</h1>
      <Row>
        <Col>
          <LanguageSelector
           type="from"
           value={fromLanguage}
           onChange={setFromLanguage}></LanguageSelector>
           {fromLanguage}
        </Col>

        <Col>
         <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={ interchangeLanguages} > <ChangeIcon></ChangeIcon> </Button>
        </Col>

        <Col>
        <LanguageSelector
         type="to"
         value={toLanguage}
         onChange={setToLanguage}></LanguageSelector>
         {toLanguage}
        </Col>
      </Row>

    </Container>
  )
}

export default App
