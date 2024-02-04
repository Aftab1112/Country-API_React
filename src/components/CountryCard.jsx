import React from 'react'

export default function CountryCard({name,flag,population,region,capital}) {

  return (
    <a className="country-card" href="country.html?name=Andorra">
    <img src={flag} alt={name +"Flag"}/>
    <div className="card-text">
      <h3 className="card-tittle">{name}</h3>
      <p><b>Population: </b>{population}</p>
      <p><b>Region: </b>{region}</p>
      <p><b>Capital: </b>{capital}</p>
    </div>
</a>
  )
}
