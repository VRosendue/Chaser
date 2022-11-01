

class mainScene {

  preLoad() {
    this.load.setBaseURL('http://127.0.0.1:5500');
    this.load.image('gylle', 'public/assets/gylle.png');
    this.load.image('dragon' , 'GameProject\assets\gylle.png');
    
    

  }

  create() {

    this.gylle = this.physics.add.image(300, 300, 'gylle');
    this.dragon = this.physics.add.image(300, 300, 'dragon');

    this.score = 0;
    let style = {font: '20px Arial', fill: '#fff'};
    this.scoreText = this.add.text(20, 20, 'score:' + this.score, style);


    //input keyboard arrows for controlling sprite

    this.arrow = this.input.keyboard.createCursorKeys();


  }

  update() {

  if (this.physics.overlap(this.gylle, this.dragon)) {
    this.hit();
  }

  if(this.arrow.right.isDown) {
      this.gylle.x +=3;
    } else if (this.arrow.left.isDown) {
      this.gylle.x -=3;
    }

  if(this.arrow.down.isDown) {
    this.gylle.y +=3;
    } else if (this.arrow.up.isDown) {
    this.gylle.y -=3;
    }

  }

  hit() {
    this.dragon.x = Phaser.Math.Between(100, 600);
    this.dragon.y = Phaser.Math.Between(100, 300);
  
    this.score +=10;
  
  
    this.scoreText.setText('score: ' + this.score);
  }
  


  

}



new Phaser.Game({
  width: 1000, // Width of the game in pixels
  height: 600, // Height of the game in pixels
  backgroundColor: '#3498db', // The background color (blue)
  scene: mainScene, // The name of the scene we created
  physics: { default: 'arcade' }, // The physics engine to use
  parent: 'game', // Create the game inside the <div id="game"> 
});






