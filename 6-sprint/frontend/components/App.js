import React from 'react'
import axios from 'axios'
import Character from './Character'
import { useEffect } from 'react'
import { useState } from 'react'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [people, setPeople] = useState([]);
  console.log(people);
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    getDataAndUpdateState();
  }, [])

  const getDataAndUpdateState = async () => {
    const [peopleResponse, planetResponse] = await Promise.all([
      axios.get(urlPeople),
      axios.get(urlPlanets)
    ]);
    const people = peopleResponse.data;
    const planets = planetResponse.data;
    const peopleWithPlantName = people.map(person => {
      return {
        name: person.name,
        homeworld: planets.find(planet => planet.id === person.homeworld).name
      }
    })
    setPeople(peopleWithPlantName);
  };
  
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {people.map((person, index) => (<Character key={index} person={person} />))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
