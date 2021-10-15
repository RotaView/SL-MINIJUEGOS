   //----------DECLARAR VARIABLES----------
   var Fondo;
   var panal;
   var ab;

   var escoger1;
   var ladoP1;
   var vida1p1;
   var vida2p1;
   var vida3p1;
   var vidasP1;
   var Time1;

   var escoger2;
   var ladoP2;
   var vida1p2;
   var vida2p2;
   var vida3p2;
   var vidasP2;
   var Time2;

   var exclamacion1;
   var exclamacion2;

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

    var LadoSound;
    var MalSound;

    var ax;

   var Minigame3=
{

    preload:function () //----------LOAD----------
    {
        //----------INICIALIZAR VARIABLES--------------
        ab=0;
        escoger1=0;
        ladoP1=2;           //valor inicial 2
        vidasP1=3;          //valor inicial 3
        Time1=0;
        escoger2=0;
        ladoP2=2;           //valor inicial 2
        vidasP2=3;          //valor inicial 3
        Time2=0;
        jugando=0;
        EmpezarMusica=0;
        ax=0;
        //----------FIN INICIALIZAR VARIABLES----------
        game.load.spritesheet('Fondo', './AssetsMinigame3/spritesheetFondo.png',960,1440);
        game.load.spritesheet('panal', './AssetsMinigame3/Panal.png',960,960);
        game.load.spritesheet('Abeja', './AssetsMinigame3/spritesheetAbeja.png',960,960);
        game.load.image('exclamacion', './AssetsMinigame3/Exclamacion.png');

        //Varios
        game.load.image('PlayerWin1', './AssetsVarios/PlayerWin1.png');
        game.load.image('PlayerWin2', './AssetsVarios/PlayerWin2.png');
        game.load.image('Empate', './AssetsVarios/Empate.png');
        game.load.spritesheet('botonMenu', './AssetsVarios/spritesheetMenu.png', 230, 116);
        game.load.spritesheet('botonRetry', './AssetsVarios/spritesheetRetry.png', 290, 116);

        game.load.audio('MusicGame', './Sounds/MusicGame.mp3');
        game.load.audio('ClickSound', './Sounds/ClickBoton.mp3');
        game.load.audio('GanarSound', './Sounds/Win.mp3');

        game.load.audio('MalSound', './Sounds/Mal.mp3');
        game.load.audio('LadoSound', './Sounds/Idea.mp3');

    }
    ,
    create:function() //----------CREATE----------
    {
        game.physics.startSystem(Phaser.Physics.ARCADE); //Inicial Fisicas
        Fondo = game.add.sprite(0,-480,'Fondo'); //Imagen de Fondo
        Fondo.animations.add('Default', [0, 1], 2, true);
        Fondo.animations.play('Default');
        game.physics.enable(Fondo, Phaser.Physics.ARCADE);

        ab=Math.trunc(Math.random() * (2 - 0) + 0);
        //panal
        panal = game.add.sprite(0,-480,'panal');
        game.physics.enable(panal, Phaser.Physics.ARCADE);

        //vidasP1
        vida1p1 = game.add.sprite(0,0,'Abeja');
        vida2p1 = game.add.sprite(120,0,'Abeja');
        vida3p1 = game.add.sprite(240,0,'Abeja');
        //vidasP2
        vida1p2 = game.add.sprite(550+0,0,'Abeja');
        vida2p2 = game.add.sprite(550+120,0,'Abeja');
        vida3p2 = game.add.sprite(550+240,0,'Abeja');

        //exclamacion
        exclamacion1 = game.add.image(0,0,'exclamacion');
        exclamacion1.visible=false;
        exclamacion2 = game.add.image(480,0,'exclamacion');
        exclamacion2.visible=false;

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

        //--sonidos
        MusicGame = game.add.audio('MusicGame');
        MusicMenu.loop = true;
        ClickSound= game.add.audio('ClickSound');
        GanarSound= game.add.audio('GanarSound');
        MalSound= game.add.audio('MalSound');
        LadoSound= game.add.audio('LadoSound');

    }
    ,
    update:function() //----------UPDTE----------
    {
        //console.log("P1:"+ladoP1+" P2:"+ladoP2+" Panal:"+ab+" Estado:"+jugando);

        if(EmpezarMusica==0){
            MusicGame.play();
            EmpezarMusica=1;
        }

        if(ab==0){
            panal.position.x=0;
        }else if(ab==1){
            panal.position.x=500;
        }

        //si los 2 players escogieron
        if(escoger1==1&&escoger2==1){
            jugando=1;
            Fondo.body.velocity.y=400;
            panal.body.velocity.y=400;

            if(Fondo.position.y>0){
                if(ab==ladoP1){
                    MalSound.play();
                    if(vidasP1==3&&escoger1==1){
                        vida1p1.frame = 1;
                        vidasP1=2;
                        escoger1=0;
                    }else if(vidasP1==2&&escoger1==1){
                        vida2p1.frame = 1;
                        vidasP1=1;
                        escoger1=0;
                    }else if(vidasP1==1){
                        vida3p1.frame = 1;
                        vidasP1=0;
                        escoger1=0;
                    }
                }
                if(ab==ladoP2){
                    MalSound.play();
                    if(vidasP2==3&&escoger2==1){
                        vida1p2.frame = 1;
                        vidasP2=2;
                        escoger2=0;
                    }else if(vidasP2==2&&escoger2==1){
                        vida2p2.frame = 1;
                        vidasP2=1;
                        escoger2=0;
                    }else if(vidasP2==1){
                        vida3p2.frame = 1;
                        vidasP2=0;
                        escoger2=0;
                    }
                }
                Fondo.body.velocity.y=0;
                Fondo.position.y=Fondo.position.y-10;
                panal.body.velocity.y=0;
                panal.position.y=Fondo.position.y-10;
                setTimeout(function(){Fondo.body.velocity.y=-400;panal.body.velocity.y=-400;}, 200);
                escoger1=0;
                escoger2=0;
                this.resetRonda();
            }
        }
        if(Fondo.position.y<-480){
            Fondo.body.velocity.y=0;
            Fondo.position.y=Fondo.position.y+10;
            panal.body.velocity.y=0;
            panal.position.y=Fondo.position.y+10;
            ab=Math.trunc(Math.random() * (2 - 0) + 0);
            jugando=0;
        }

        //ganar o perder
        if(vidasP1==0&&vidasP2==0&&ax==0){
            jugando=1;
            Empate.visible=true;
            botonMenu.visible = true;
            botonRetry.visible = true;
            GanarSound.play();
            ax=1;
        }else if(vidasP2==0&&vidasP1!=0&&ax==0){
            jugando=1;
            PlayerWin1.visible=true;
            botonMenu.visible = true;
            botonRetry.visible = true;
            GanarSound.play();
            ax=1;
        }else if(vidasP2!=0&&vidasP1==0&&ax==0){
            jugando=1;
            PlayerWin2.visible=true;
            botonMenu.visible = true;
            botonRetry.visible = true;
            GanarSound.play();
            ax=1;
        }

        if(jugando==0&&ax==0){
            //Controles Player1
            if (game.time.now > Time1)
            {
            if (game.input.keyboard.isDown(Phaser.Keyboard.A)&&escoger1==0)
            {
                ladoP1=0;
                escoger1=1;
                exclamacion1.visible=true;
                setTimeout(function(){exclamacion1.visible=false;}, 200);
                LadoSound.play();
            }else if(game.input.keyboard.isDown(Phaser.Keyboard.D)&&escoger1==0){
                ladoP1=1;
                escoger1=1;
                exclamacion1.visible=true;
                setTimeout(function(){exclamacion1.visible=false;}, 200);
                LadoSound.play();
            }
            Time1 = game.time.now + 200;
            }
            //Controles Player2
            if (game.time.now > Time2)
            {
            if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)&&escoger2==0)
            {
                ladoP2=0;
                escoger2=1;
                exclamacion2.visible=true;
                setTimeout(function(){exclamacion2.visible=false;}, 200);
                LadoSound.play();
            }else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)&&escoger2==0){
                ladoP2=1;
                escoger2=1;
                exclamacion2.visible=true;
                setTimeout(function(){exclamacion2.visible=false;}, 200);
                LadoSound.play();
            }
            Time2 = game.time.now + 200;
            }
        }   


    }
    //----------OTRAS FUNCIONES----------
    ,
    Retry:function (){
        ClickSound.play();
        MusicGame.stop();
        game.state.start("Minigame3",Minigame3);         
    }
    ,
    IrMenu:function (){
        ClickSound.play();
        MusicGame.stop();
        game.state.start("Menu",Menu);
    }
    ,
    resetRonda:function (){
        ladoP1=2;
        ladoP2=2;
    }
}