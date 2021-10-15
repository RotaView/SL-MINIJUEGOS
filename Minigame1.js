//----------DECLARAR VARIABLES----------
var Fondo;
var Tronco;

var player1;
var player1c;
var player2;
var player2c;

var estadoP1;
var contadorP1;
var estadoP2;
var contadorP2;

var Interfaz;
var Hojitas;
var Hojitas2;

var text1;
var text2;
var text3;

var timeS;
var timeM;

var PlayerWin1;
var PlayerWin2;
var Empate;
var botonMenu;
var botonRetry;

var jugando;

var MusicGame;
var ClickSound;
var EmpezarMusica;
var GanarSound;

var BarraSound;

var Minigame1=
{

    preload:function () //----------LOAD----------
    {
        //----------INICIALIZAR VARIABLES--------------
        estadoP1=0;
        contadorP1=0;
        estadoP2=0;
        contadorP2=0;
        text1 = null;
        text2 = null;
        text3 = null;
        timeS=15;           //Valor inicial 15
        timeM=0; 
        jugando=0;
        EmpezarMusica=0;
        //----------FIN INICIALIZAR VARIABLES----------
        game.load.spritesheet('Fondo', './AssetsMinigame1/spritesheetFondo.png',960,960);
        game.load.image('Tronco', './AssetsMinigame1/TroncoArbol.png');
        game.load.spritesheet('player1', './AssetsMinigame1/spritesheetCuerpoPlayer1.png', 960, 960);
        game.load.spritesheet('player1c', './AssetsMinigame1/spritesheetCabezaPlayer1.png', 960, 960);
        game.load.spritesheet('player2', './AssetsMinigame1/spritesheetCuerpoPlayer2.png', 960, 960);
        game.load.spritesheet('player2c', './AssetsMinigame1/spritesheetCabezaPlayer2.png', 960, 960);
        game.load.image('Hojitas', './AssetsMinigame1/Hojitas.png');

        //Varios
        game.load.image('Interfaz', './AssetsVarios/Interfaz.png');
        game.load.image('PlayerWin1', './AssetsVarios/PlayerWin1.png');
        game.load.image('PlayerWin2', './AssetsVarios/PlayerWin2.png');
        game.load.image('Empate', './AssetsVarios/Empate.png');
        game.load.spritesheet('botonMenu', './AssetsVarios/spritesheetMenu.png', 230, 116);
        game.load.spritesheet('botonRetry', './AssetsVarios/spritesheetRetry.png', 290, 116);

        game.load.audio('MusicGame', './Sounds/MusicGame.mp3');
        game.load.audio('ClickSound', './Sounds/ClickBoton.mp3');
        game.load.audio('GanarSound', './Sounds/Win.mp3');

        game.load.audio('BarraSound', './Sounds/Barra.mp3');

    }
    ,
    create:function() //----------CREATE----------
    {
        Fondo = game.add.sprite(0,0,'Fondo'); //Imagen de Fondo
        Fondo.animations.add('Default', [0, 1], 2, true);
        Fondo.animations.play('Default');

        //Hojitas
        Hojitas = game.add.image(0,0,'Hojitas');
        Hojitas2 = game.add.image(0,-960,'Hojitas');

        //CabezaPlayer1
        player1c = game.add.sprite(0, 0, 'player1c');
        player1c.frame = 0;

        //CabezaPlayer2
        player2c = game.add.sprite(0, 0, 'player2c');
        player2c.frame = 0;

        //Tronco
        Tronco = game.add.image(0,0,'Tronco');

        //CuerposPlayer1
        player1 = game.add.sprite(0, 0, 'player1');
        player1.frame = 0;

        //CuerposPlayer2
        player2 = game.add.sprite(0, 0, 'player2');
        player2.frame = 0;


        //Interfaz
        Interfaz = game.add.image(0,0,'Interfaz');

        //Letreros
        PlayerWin1 = game.add.image(0,0,'PlayerWin1');
        PlayerWin1.visible = false;
        PlayerWin2 = game.add.image(0,0,'PlayerWin2');
        PlayerWin2.visible = false;
        Empate = game.add.image(0,0,'Empate');
        Empate.visible = false;

        //Botones
        botonMenu = game.add.button(480+30+100, 750, 'botonMenu', this.IrMenu, this, 1, 0, 2);
        botonRetry = game.add.button(480-290+30-100, 750, 'botonRetry', this.Retry, this, 1, 0, 2);
        botonMenu.visible = false;
        botonRetry.visible = false;

        //Textos
        var style = {font : "60px Arial", fill : "#FFCC00", stroke : "#333", strokeThickness : 5, 
        align : "center"}; //Estilo chido

        text1 = game.add.text(480-50-300, 70, contadorP1,style);
            text1.fontSize = 80;
        text2 = game.add.text(480+300, 70, contadorP2,style);
            text2.fontSize = 80;
        text3 = game.add.text(480-20, 80, timeS,style);

        //Timer
        game.time.events.loop(1000, this.Contador, this);

        //--sonidos
        MusicGame = game.add.audio('MusicGame');
        MusicMenu.loop = true;
        ClickSound= game.add.audio('ClickSound');
        GanarSound= game.add.audio('GanarSound');
        BarraSound= game.add.audio('BarraSound');

    }
    ,
    update:function() //----------UPDTE----------
    {
        //console.log(timeS);

        if(EmpezarMusica==0){
            MusicGame.play();
            EmpezarMusica=1;
        }

        Hojitas.position.y=Hojitas.position.y+0.5;
        Hojitas2.position.y=Hojitas2.position.y+0.5;
        if(Hojitas.position.y>=960){
            Hojitas.position.y=-960;
        }
        if(Hojitas2.position.y>=960){
            Hojitas2.position.y=-960;
        }

        if(timeS==0){
            this.Ganar();
            jugando=1;
            timeS=1;
            text3.text = "0";
        }


        if(jugando==0){
            //Actualizar Textos
            text1.text = contadorP1;
            text2.text = contadorP2;
            text3.text = timeS;

            //Controles Player1
            if (game.input.keyboard.isDown(Phaser.Keyboard.W)&&estadoP1==0)
            {
                estadoP1=estadoP1+1;
                player1.frame = 1;
                player1c.frame = 1;
            }else if(game.input.keyboard.isDown(Phaser.Keyboard.S)&&estadoP1==1){
                estadoP1=0;
                contadorP1=contadorP1+1;
                BarraSound.play();
                player1.frame = 0;
                player1c.frame = 0;
            }

            //Controles Player2
            if (game.input.keyboard.isDown(Phaser.Keyboard.UP)&&estadoP2==0)
            {
                estadoP2=estadoP2+1;
                player2.frame = 1;
                player2c.frame = 1;
            }else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)&&estadoP2==1){
                estadoP2=0;
                contadorP2=contadorP2+1;
                BarraSound.play();
                player2.frame = 0;
                player2c.frame = 0;
            }
        }

        if(jugando==1){
            botonMenu.visible = true;
            botonRetry.visible = true;
            if(contadorP1>contadorP2){
                PlayerWin1.visible=true;
            }
            if(contadorP2>contadorP1){
                PlayerWin2.visible=true;
            }
            if(contadorP1==contadorP2){
                Empate.visible=true;
            }
        }
    },
    //----------OTRAS FUNCIONES----------
    Contador:function()
    {
        if(jugando==0){
            timeS=timeS-1;
        }
    }
    ,
    Retry:function (){
        ClickSound.play();
        MusicGame.stop();
        game.state.start("Minigame1",Minigame1);         
    }
    ,
    IrMenu:function (){
        ClickSound.play();
        MusicGame.stop();
        game.state.start("Menu",Menu);
    },
    Ganar:function(){
        GanarSound.play();
    }
}