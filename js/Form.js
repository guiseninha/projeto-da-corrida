class Form {
  constructor() {
    // CRIE OS ELEMENTOS DA CLASSE
this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
this.playButton = createButton("Play");
this.titleImg = createImg("./assets/title.png", "game title");
this.greeting = createElement("h2");
  }

  setElementPosition() {
    // DEFINA A POSIÇÃO DOS ELEMENTOS
this.titleImg.position(120, 160);
this.input.position(width / 2 - 110, height / 2);
this.playButton.position(width / 2 - 90, height / 2 +50);
this.greeting.position(width / 2 - 300, height / 2 + 80);
  }


  hide() {
   // USE A FUNÇÃO PARA DESAPARECER OS ELEMENTOS
   this.input.hide();
    this.playButton.hide()
    this.greeting.hide();
  }

  handleMousePressed() {
   // CRIE A FUNÇÃO DE PRESSIONAMENTO DE TECLA
   this.playButton.mousePressed(() => { this.input.hide(); 
    this.playButton.hide();
     var message = ` Olá ${this.input.value()} </br>espere o outro jogador entrar...`;
      this.greeting.html(message); playerCount += 1;
     player.name = this.input.value();
     player.index = playerCount;
    // lê a entrada do nome do jogador
    player.updateCount(playerCount)
    player.addPlayer();
player.getDistance();



   /* O símbolo usado para escrever a mensagem abaixo (laranja) é a crase. */
  })
}

  display() {
    // CHAME A FUNÇÃO DE POSIÇÃO DOS ELEMENTOS
    this.handleMousePressed();
    this.setElementPosition();
    // CHAME A FUNÇÃO DE PRESSIONAMENTO DE TECLA
  }
}
