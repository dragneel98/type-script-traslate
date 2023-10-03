/* eslint-disable no-useless-return */
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'
import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from './components/Icons'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { AUTO_LANGUAGE, VOICE_FOR_LANGUAGE } from './constants'
import { LanguageSelector } from './components/LanguageSelector'
import TextArea from './components/TextArea'
import { SectionTypes } from './types.d'
import { useEffect } from 'react'
import { translate } from './components/traslate'
import useDebounce from './hooks/useDebounce'

function App () {
  const {
    toLanguage, fromLanguage, fromText, result, loading,
    interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResult
  } = useStore()

  const debouncedText = useDebounce(fromText, 250)

  useEffect(() => {
    if (debouncedText === '') return
    translate({ fromLanguage, toLanguage, text: debouncedText })
      .then(result => {
      // se usa == por que compara null y undefined
        if (result == null) return
        setResult(result)
      })
      .catch(() => { setResult('error') })
  }, [debouncedText, fromLanguage, toLanguage])

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => {})
  }
  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = VOICE_FOR_LANGUAGE[toLanguage]
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }
  return (
    <Container fluid>
      <h1>translate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
          <LanguageSelector
           type={SectionTypes.from}
           value={fromLanguage}
           onChange={setFromLanguage}/>

            <TextArea
           placeHolder='introduce tu texto'
           type={SectionTypes.from}
           value={fromText}
           onChange={setFromText}
           ></TextArea>
           </Stack>
        </Col>

        <Col xs="auto">
         <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={ interchangeLanguages} > <ArrowsIcon></ArrowsIcon> </Button>
        </Col>

        <Col>
        <Stack gap={2}>
        <LanguageSelector
         type={SectionTypes.to}
         value={toLanguage}
         onChange={setToLanguage}></LanguageSelector>
         <div style={{ position: 'relative' }}>
         <TextArea
           type={SectionTypes.to}
           value={result}
           onChange={setResult}
           loading={loading}
           ></TextArea>
           <div style={{ position: 'absolute', left: 0, bottom: 0, display: 'flex' }}>
            <Button
              variant='link'
              onClick={handleClipboard}>
                <ClipboardIcon />
            </Button>
            <Button
              variant='link'
              onClick={handleSpeak}>
                <SpeakerIcon />
            </Button>
            </div>
            </div>
        </Stack>
        </Col>
      </Row>

    </Container>
  )
}

export default App
