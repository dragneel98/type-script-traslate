/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'
import { SectionTypes, type FromLanguage, type Language } from '../types.d'

type Props =
| { type: SectionTypes.from, value: FromLanguage, onChange: (Language: FromLanguage) => void }
| { type: SectionTypes.to, value: Language, onChange: (Language: Language) => void }

export const LanguageSelector = ({ onChange, value, type }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <Form.Select aria-label='seleccione el idioma' onChange={handleChange} value={value}>
        {type === SectionTypes.from && <option value={AUTO_LANGUAGE}>detectar idioma</option>}
        { Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
            <option key={key} value={key}>
                {literal}
            </option>
        ))}
    </Form.Select>
  )
}
