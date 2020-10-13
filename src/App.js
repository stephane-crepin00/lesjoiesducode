import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="root">
      <header class="header" class="border-header">
        <div class="p">
          <a class="home" href="#">Les joies du code ();</a>
          <a href="#">Random</a>
          <a href="#">Jobs</a>
          <input type="text" placeholder="Rechercher"/>
          <button type="button">Propose un post</button>
        </div>
      </header>
      <div class="border-content">
       
          <div id="cadre1">
            <p>Quand je suis en visioconférence et que j’entends quelqu’un prononcer mon nom</p>
            <p> Les Joies du Code, commit du 26 Mar 2020</p>
            <img class="centre" src="gif/first.webm" alt="image" /><br />
            <div class="sociaux">
              <button type="button">Facebook</button>
              <button type="button">Twitter</button>
              <button type="button">E-mail</button>
              <button type="button">logo</button>
            </div>
            <div class="change">
              <button type="button">Propose un post</button>
              <button type="button">Propose un post</button>
            </div>
            <div class="posts">
              <p>Plus de posts</p>
              <a class="cine" href="#">Quand on nous demande d'ajouter une fonctionnalité dans une appli veille de 15 ans</a>
              <a class="cine" href="#">Quand je revert accidentellement tous mes changements</a>
              <a class="cine" href="#">Quand aucun de mes tests ne passe</a>
              <a class="cine" href="#">Quand je réalise que je viens de supprimer le trunk du projet et que mon collègue me demande si je veux un café</a>
            </div>
          </div>
          <div id="cadre2">
            <input type="text" placeholder="Rechercher"/>
            <div>
              <div>
                <p>La sélection des Joies du Code</p>
              </div>
              <div>
                <img class="centre" src="gif/first.webm" alt="image" /><br />
                <p>Quand je découvre combien je suis facturé au client</p>
              </div>
              <div>
                <img class="centre" src="gif/first.webm" alt="image" /><br />
                <p>Quand le commercial dit qu'il n'y a pas de base de données pour le projet car le client a dit "NoSQL"</p>
              </div>
              <div>
                <img class="centre" src="gif/first.webm" alt="image" /><br />
                <p>Quand je m'apprête à quitter le bureau àprès une dernière compilation et que la console me renvoie plein d'erreurs</p>
              </div>
              <div>
                <img class="centre" src="gif/first.webm" alt="image" /><br />
                <p>Quand je découvre combien je suis facturé au client</p>
              </div>
            </div>
          </div>
        
      </div>
      <footer class="footer" class="border-footer">
        <div>
        <a href="#">The coding Love [EN]</a>
        <a href="#">Contact</a>
        <a href="#">CGU</a>
        <p>Les Joies du Code © 2012-2020 Nicolas Lecointre, tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
