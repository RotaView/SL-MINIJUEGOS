//----------DECLARAR VARIABLES----------
var Fondo;
var Nubes;
var Nubes2;
var Tabla1;
var Tabla2;
var players;
var Golpe1;
var Golpe2;
var Interfaz;

var Time1;
var ladoP1;
var puntosP1;

var Time2;
var ladoP2;
var puntosP2;

var text1;
var text2;
var text3;

var PlayerWin1;
var PlayerWin2;
var Empate;
var botonMenu;
var botonRetry;

var disparo;
var ab;

var timeS;
var jugando;

var MusicGame;
var ClickSound;
var EmpezarMusica;
var GanarSound;

var DispararSound;
var DispararSound2;

var Minigame4=
{

    preload:function () //----------LOAD----------
    {
        //----------INICIALIZAR VARIABLES--------------
        Time1=0;
        ladoP1=3;           //valor inicial 3
        puntosP1=0;
        Time2=0;
        ladoP2=3;           //valor inicial 3
        puntosP2=0;
        disparo=0;
        ab=0;            
        text1 = null;
        text2 = null;
        text3 = null;
        timeS=15;           //Valor inicial 15
        jugando=0;
        EmpezarMusica=0;
        //----------FIN INICIALIZAR VARIABLES----------
        game.load.image('Fondo', './AssetsMinigame4/Fondo.png');
        game.load.image('Nubes', './AssetsMinigame4/Nubes.png');
        game.load.image('Tabla1', './AssetsMinigame4/tablaNormal.png');
        game.load.image('Tabla2', './AssetsMinigame4/tablaMala.png');
        game.load.image('players', './AssetsMinigame4/Players.png');
        game.load.image('Golpe1', './AssetsMinigame4/Golpe1.png');
        game.load.image('Golpe2', './AssetsMinigame4/Golpe2.png');

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

        game.load.audio('DispararSound', './Sounds/Mal.mp3');

    }
    ,
    create:function() //----------CREATE----------
    {
        //fondo
        Fondo = game.add.image(0,0,'Fondo');

        //Nubes
        Nubes = game.add.image(0,0,'Nubes');
        Nubes2 = game.add.image(-960,0,'Nubes');

        //tablas normales
        Tabla1 = game.add.image(0,0,'Tabla1');
        //tabla mala
        ab=Math.trunc(Math.random() * (3 - 0) + 0);
        FonTabla2do = game.add.image(0,0,'Tabla2');

        //players
        players = game.add.image(0,0,'players');

        //Golpes
        Golpe1 = game.add.image(0,0,'Golpe1');
        Golpe2 = game.add.image(0,0,'Golpe2');
        Golpe1.visible=false;
        Golpe2.visible=false;

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

        text1 = game.add.text(480-50-300, 70, puntosP1,style);
            text1.fontSize = 80;
        text2 = game.add.text(480+300, 70, puntosP2,style);
            text2.fontSize = 80;
        text3 = game.add.text(480-20, 80, timeS,style);

        //Timer
        game.time.events.loop(1000, this.Contador, this);

        //--sonidos
        MusicGame = game.add.audio('MusicGame');
        MusicMenu.loop = true;
        ClickSound= game.add.audio('ClickSound');
        GanarSound= game.add.audio('GanarSound');
        DispararSound= game.add.audio('DispararSound');
        DispararSound2= game.add.audio('DispararSound');
    }
    ,
    update:function() //----------UPDTE----------
    {
        //console.log("P1:"+ladoP1+" P2:"+ladoP2+" Puntos1:"+puntosP1+" Puntos2:"+puntosP2);

        if(EmpezarMusica==0){
            MusicGame.play();
            EmpezarMusica=1;
        }

        //Nubes
        Nubes.position.x=Nubes.position.x+0.3;
        Nubes2.position.x=Nubes2.position.x+0.3;
        if(Nubes.position.x>=960){
            Nubes.position.x=-960;
        }
        if(Nubes2.position.x>=960){
            Nubes2.position.x=-960;
        }

        if(timeS==0){
            GanarSound.play();
            jugando=1;
            text3.text = "0";
            timeS=1;
        }

        if(jugando==0){
        //Actualizar Textos
        text1.text = puntosP1;
        text2.text = puntosP2;
        text3.text = timeS;
        }

        //Posicion Tabla Mala
        if(ab==0){
            FonTabla2do.position.x=-230;
        }else if(ab==1){
            FonTabla2do.position.x=0;
        }else if(ab==2){
            FonTabla2do.position.x=220;
        }

        //puntos
        if(disparo==1){
            if(ab==ladoP1){
                puntosP1=puntosP1+1; 
                ab=Math.trunc(Math.random() * (3 - 0) + 0);
            }else if(ab!=ladoP1&&ladoP1!=3&&puntosP1>0){
                puntosP1=puntosP1-1; 
            }
            if(ab==ladoP2){
                puntosP2=puntosP2+1; 
                ab=Math.trunc(Math.random() * (3 - 0) + 0);
            }else if(ab!=ladoP2&&ladoP2!=3&&puntosP2>0){
                puntosP2=puntosP2-1; 
            }
            disparo=0;
            ladoP1=3;
            ladoP2=3;
        }

        if(jugando==0){
            //Controles Player1
            if (game.time.now > Time1)
            {
            if (game.input.keyboard.isDown(Phaser.Keyboard.A))
            {
                ladoP1=0;
                disparo=1;
                Golpe1.position.x=0;
                Golpe1.visible=true;
                setTimeout(function(){Golpe1.visible=false;}, 90);
                DispararSound.play();
            }else if(game.input.keyboard.isDown(Phaser.Keyboard.S)){
                ladoP1=1;
                disparo=1;
                Golpe1.position.x=220;
                Golpe1.visible=true;
                setTimeout(function(){Golpe1.visible=false;}, 90);
                DispararSound.play();
            }else if(game.input.keyboard.isDown(Phaser.Keyboard.D)){
                ladoP1=2;
                disparo=1;
                Golpe1.position.x=430;
                Golpe1.visible=true;
                setTimeout(function(){Golpe1.visible=false;}, 90);
                DispararSound.play();
            }
            Time1 = game.time.now + 100;
            }
            //Controles Player2
            if (game.time.now > Time2)
            {
            if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
            {
                ladoP2=0;
                disparo=1;
                Golpe2.position.x=0;
                Golpe2.visible=true;
                setTimeout(function(){Golpe2.visible=false;}, 90);
                DispararSound2.play();
            }else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
                ladoP2=1;
                disparo=1;
                Golpe2.position.x=220;
                Golpe2.visible=true;
                setTimeout(function(){Golpe2.visible=false;}, 90);
                DispararSound2.play();
            }else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
                ladoP2=2;
                disparo=1;
                Golpe2.position.x=430;
                Golpe2.visible=true;
                setTimeout(function(){Golpe2.visible=false;}, 90);
                DispararSound2.play();
            }
            Time2 = game.time.now + 100;
            }
        }
        if(jugando==1){
            botonMenu.visible = true;
            botonRetry.visible = true;
            if(puntosP1>puntosP2){
                PlayerWin1.visible=true;
            }
            if(puntosP2>puntosP1){
                PlayerWin2.visible=true;
            }
            if(puntosP1==puntosP2){
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
        game.state.start("Minigame4",Minigame4);         
    }
    ,
    IrMenu:function (){
        ClickSound.play();
        MusicGame.stop();
        game.state.start("Menu",Menu);
    }
}