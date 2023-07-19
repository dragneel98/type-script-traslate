import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constants'

interface Props {
  onChange: (language: string) => void
}
export default function LanguageSelector ({ onChange }: Props) {
  return (
    <Form.Select aria-label='seleccione el idioma'>
        {
          Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
            <option key={key} value={key}>
                {literal}
            </option>
          ))}
    </Form.Select>
  )
}
