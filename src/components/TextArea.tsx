import { Form } from 'react-bootstrap'
import { SectionTypes } from '../types.d'

interface Props {
  type: SectionTypes
  placeHolder: string
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const GetPlaceHolder = ({ type, loading }: { type: SectionTypes, loading?: boolean }) => {
  if (SectionTypes.from === type) return 'introducir texto'
  if (loading === true) return 'cargando'
  return 'traduccion'
}

export default function TextArea ({ type, loading, value, onChange }: Props) {
  const TextAreaStyle = {
    border: 0,
    height: '200px',
    with: '100%'
  }
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }
  const Styles = type === SectionTypes.from
    ? TextAreaStyle
    : { ...TextAreaStyle, backgroundColor: '#f5f5f5' }

  return (
    <Form.Control
    as= "textarea"
    disabled={SectionTypes.to === type}
    placeholder={GetPlaceHolder({ type, loading })}
    autoFocus={ type === SectionTypes.from}
    style={Styles}
    onChange={handleChange}
   ></Form.Control>
  )
}
