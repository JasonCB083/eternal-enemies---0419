'use strict';

function main() {
  

  const mainElement = document.querySelector('main');

  function buildDom(html) {
    mainElement.innerHTML = html
    return mainElement;

  }

  function buildSplashScreen (){
    const plashScreen = buildDom(`
      <section> 
        <h1> Eternal Enemies</h1>
        <button  class= "start-button">start</button>
      </section>

      
      `)
      const startbutton = document.querySelector('.start-button');
      startbutton.addEventListener('click', buildGameScreen);

  }
  function buildGameScreen (){
    const gameScreen = buildDom(`
      <section class="game-container"> 
        <canvas></canvas>
      </section>

      `);

    const gameContainerElement = document.querySelector('.game-container')

    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;

    const canvasElement = document.querySelector('canvas');

    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    const game = new Game(canvasElement);
    game.startLoop();

    setTimeout(buildGameOverScreen, 3000);
  }
  function buildGameOverScreen (){
    const gameOverScreen = buildDom(`
      <section>
        <h1>Game Over</h1>
        <button class="restart-button">Restart</button>
      
      </section>

    `)

    const restartButton =  document.querySelector('.restart-button');

    restartButton.addEventListener('click', buildGameScreen);

    console.log('you are in game over');
  }

  buildSplashScreen();
}


window.addEventListener('load', main)