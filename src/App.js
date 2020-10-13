import React from 'react';
import './App.css';

function App() {
  return (
    <div class="root">
      <header class="border-header">
        <div class="p">
          <a class="home" href="www.google.fr">Les joies du code ();</a>
          <a href="www.google.fr">Random</a>
          <a href="www.google.fr">Jobs</a>
          <input type="text" placeholder="Rechercher"/>
          <button type="button">Propose un post</button>
        </div>
      </header>
      <div class="border-content">
        <div class="container">
          <div id="cadre1">
            <p>Quand je suis en visioconférence et que j’entends quelqu’un prononcer mon nom</p>
            <p> Les Joies du Code, commit du 26 Mar 2020</p>
            <video controls={false} autoPlay>
              <source src="gif/first.webm" type="video/webm"/>
            </video>
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
              <div class="info">
                <a class="cine1" href="www.google.fr">Quand on nous demande d'ajouter une fonctionnalité dans une appli veille de 15 ans</a>
                <a class="cine2" href="www.google.fr">Quand je revert accidentellement tous mes changements</a>
                <a class="cine3" href="www.google.fr">Quand aucun de mes tests ne passe</a>
                <a class="cine4" href="www.google.fr">Quand je réalise que je viens de supprimer le trunk du projet et que mon collègue me demande si je veux un café</a>
              </div>
            </div>
          </div>
          <div id="cadre2">
            <div class="search">
              <input type="text" placeholder="Rechercher"/>
            </div>
            <div class="info">
              <div>
                <p>La sélection des Joies du Code</p>
              </div>
              <div>
                <img class="centre" src="https://lesjoiesducode.fr/wp-content/uploads/2020/09/Sans-titre-12-150x150.jpg"/><br />
                <p>Quand je découvre combien je suis facturé au client</p>
              </div>
              <div>
                <img class="centre" src="https://lesjoiesducode.fr/wp-content/uploads/2020/08/Sans-titre-16-150x150.jpg"/><br />
                <p>Quand le commercial dit qu'il n'y a pas de base de données pour le projet car le client a dit "NoSQL"</p>
              </div>
              <div>
                <img class="centre" src="https://lesjoiesducode.fr/wp-content/uploads/2020/09/Sans-titre-7-150x150.jpg"/><br />
                <p>Quand je m'apprête à quitter le bureau àprès une dernière compilation et que la console me renvoie plein d'erreurs</p>
              </div>
              <div>
                <img class="centre" src="https://lesjoiesducode.fr/wp-content/uploads/2020/08/Sans-titre-26-150x150.jpg"/><br />
                <p>Mon cerveau quand j'ai déjà utilisé i,j et k pour mes variables d'incrémentation</p>
              </div>
            </div>
            <div class="twit">
              <div>
                <div>
                  <p>Twitter</p>
                </div>
                <div>
                  <p>Rejoins la communauté des Joies du Code sur Twitter</p>
                  <button type="button">Suivre @lesjoiesducode</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div>
        <a href="www.google.fr">The coding Love [EN]</a>
        <a href="www.google.fr">Contact</a>
        <a href="www.google.fr">CGU</a>
        <p>Les Joies du Code © 2012-2020 Nicolas Lecointre, tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
