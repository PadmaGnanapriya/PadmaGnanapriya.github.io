import './index.css'
import { ViteReactSSG } from 'vite-react-ssg/single-page'
import App from './App'

// Renders to static HTML at build time and hydrates on the client.
export const createRoot = ViteReactSSG(<App />)
