import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('funciona', async () => {
  const user = userEvent.setup()
  const app = render(<App></App>)
  const textArea = app.getByPlaceholderText('introduce tu texto')

  await user.type(textArea, 'hola mundo')
  const result = await app.findAllByDisplayValue(/hello world/i, {}, { timeout: 5000 })

  expect(result).toBeTruthy()
})
