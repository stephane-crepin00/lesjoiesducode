import React from 'react'

function Navbar() {
    return (
        <header class="border-header">
        <div class="p">
          <a class="home" href="www.google.fr">Les joies du code ();</a>
          <a href="www.google.fr">Random</a>
          <a href="www.google.fr">Jobs</a>
          <input type="text" placeholder="Rechercher"/>
          <button type="button">Propose un post</button>
        </div>
      </header>
    )
}

export default Navbar