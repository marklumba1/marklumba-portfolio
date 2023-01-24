import createReact from 'react-dom/client'
import App from './App'
import './styles/global.css'
const root = createReact.createRoot(document.getElementById("root"))
root.render(<App />)