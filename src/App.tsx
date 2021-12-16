import {useState} from 'react'
import logo from './logo.svg'
import styles from './App.module.less'
import {Layout} from "./layout";
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className={styles.App} >
      <Layout></Layout>
    </div>
  )
}

export default App
