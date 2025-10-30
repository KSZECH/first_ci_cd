import { useState } from 'react'
import './App.css'

function App() {
  const [poids, setPoids] = useState('')
  const [taille, setTaille] = useState('')
  const [imc, setImc] = useState(null)
  const [categorie, setCategorie] = useState('')

  const calculerIMC = (e) => {
    e.preventDefault()
    
    if (poids && taille) {
      const tailleEnMetres = parseFloat(taille) / 100
      const imcCalcule = (parseFloat(poids) / (tailleEnMetres * tailleEnMetres)).toFixed(2)
      setImc(imcCalcule)
      
      // Déterminer la catégorie
      if (imcCalcule < 18.5) {
        setCategorie('Insuffisance pondérale')
      } else if (imcCalcule >= 18.5 && imcCalcule < 25) {
        setCategorie('Poids normal')
      } else if (imcCalcule >= 25 && imcCalcule < 30) {
        setCategorie('Surpoids')
      } else {
        setCategorie('Obésité')
      }
    }
  }

  const reinitialiser = () => {
    setPoids('')
    setTaille('')
    setImc(null)
    setCategorie('')
  }

  return (
    <div className="app">
      <h1>🏃‍♂️ Calculateur d'IMC</h1>
      
      <form onSubmit={calculerIMC}>
        <div className="input-group">
          <label>Poids (kg)</label>
          <input
            type="number"
            value={poids}
            onChange={(e) => setPoids(e.target.value)}
            placeholder="Ex: 70"
            required
          />
        </div>

        <div className="input-group">
          <label>Taill (cm)</label>
          <input
            type="number"
            value={taille}
            onChange={(e) => setTaille(e.target.value)}
            placeholder="Ex: 175"
            required
          />
        </div>

        <div className="buttons">
          <button type="submit">Calculer</button>
          <button type="button" onClick={reinitialiser}>Réinitialiser</button>
        </div>
      </form>

      {imc && (
        <div className="resultat">
          <h2>Votre IMC : {imc}</h2>
          <p className="categorie">{categorie}</p>
        </div>
      )}
    </div>
  )
}

export default App