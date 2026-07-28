import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  // Prefix must stay 'VITE_' so host-provided variables (Netlify/Vercel/Pages) are seen,
  // not just those in a local .env file.
  // '.' rather than process.cwd() — same directory, but avoids needing @types/node.
  const env = loadEnv(mode, '.', 'VITE_')

  if (!env.VITE_WEB3FORMS_KEY) {
    const message =
      'VITE_WEB3FORMS_KEY is not set. The booking form would build successfully but silently ' +
      'fail to deliver any request.\n' +
      'Local: create a .env file containing VITE_WEB3FORMS_KEY=<key from https://web3forms.com>\n' +
      "Deploy: set the variable in your host's environment settings."
    // Fail the build rather than ship a form that drops bookings without any visible error.
    if (command === 'build') throw new Error(message)
    console.warn(`\n[booking form] ${message}\n`)
  }

  return { plugins: [react()] }
})
