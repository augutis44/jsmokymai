import './App.css'
import Darbuotojas from './components/Darbuotojas'
import EinaPrieLentos from './components/EinaPrieLentos'
import GeriausiasMedis from './components/GeriausiasMedis'
import Laimejimas from './components/Laimejimas'
import LyginisArNe from './components/LyginisArNe'
import Palindromas from './components/Palindromas'
import PrekiuKrepselis from './components/PrekiuKrepselis'
import Sansas from './components/Sansas'
import Skaiciai from './components/Skaiciai'
import Skaicius from './components/Skaicius'
import Tikrinimai from './components/Tikrinimai'
import TrysSkaiciai from './components/TrysSkaiciai'
import ZodzioIlgis from './components/ZodzioIlgis'

function App() {

  return (
    <>
      <ZodzioIlgis />
      <Skaicius />
      <TrysSkaiciai />
      <Darbuotojas />
      <PrekiuKrepselis />
      <Laimejimas />
      <Sansas />
      <Tikrinimai />
      <GeriausiasMedis />
      <Skaiciai />
      <EinaPrieLentos />
      <LyginisArNe />
      <Palindromas />
    </>
  )
}

export default App
