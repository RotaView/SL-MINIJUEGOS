//----------DECLARAR VARIABLES----------
var Fondo;
var Nubes;
var Nubes2;
var Agua;
var Agua2;
var Plataforma;
var player1;
var player2;
var bala1;
var bala2;
var p1pos;
var p2pos;
var mantener1;
var mantener2;
var Time1;
var Time2;
var Interfaz;

var text1;
var timeS;

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

var PlataformaSound;
var DispararSound;
var DispararSound2;

var Minigame2=
{

    preload:function () //----------LOAD----------
    {
        //----------INICIALIZAR VARIABLES--------------
        p1pos=2;            //valor inicial 2
        p2pos=2;            //valor inicial 2
        mantener1=0;
        Time1=0;
        mantener2=0;
        Time2=0;
        text1=null;
        timeS=30;           //Valor inicial 30
        jugando=0;
        EmpezarMusica=0;
        //----------FIN INICIALIZAR VARIABLES----------
        game.load.spritesheet('Fondo', './AssetsMinigame2/Fondo.png',960,960);
        game.load.image('Nubes', './AssetsMinigame2/Nubes.png');
        game.load.image('Agua', './AssetsMinigame2/Agua.png');
        game.load.image('Plataforma', './AssetsMinigame2/Plataforma.png');
        game.load.spritesheet('player1', './AssetsMinigame2/spritesheetplayer1.png', 960, 960);
        game.load.spritesheet('player2', './AssetsMinigame2/spritesheetplayer2.png', 960, 960);
        game.load.spritesheet('bala1', './AssetsMinigame2/bala1.png', 960, 960);
        game.load.spritesheet('bala2', './AssetsMinigame2/bala2.png', 960, 960);

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
        game.load.audio('DispararSound', './Sounds/Disparar.mp3');

    }
    ,
    create:function() //----------CREATE----------
    {
        Fondo = game.add.image(0,0,'Fondo');

        //nubes
        Nubes = game.add.image(0,0,'Nubes');
        Nubes2 = game.add.image(-960,0,'Nubes');
        //Agua
        Agua = game.add.image(0,0,'Agua');
        Agua2 = game.add.image(-960,0,'Agua');

        //Plataforma
        Plataforma = game.add.image(0,0,'Plataforma');

        game.physics.startSystem(Phaser.Physics.ARCADE); //Inicial Fisicas

        //bala1
        bala1 = game.add.sprite(0,0,'bala1');
        game.physics.enable(bala1, Phaser.Physics.ARCADE); //Ponerle Fisicas de Phaser
        bala1.body.setSize(40, 80, 290, 190);//Collider
        //bala2
        bala2 = game.add.sprite(0,0,'bala2');
        game.physics.enable(bala2, Phaser.Physics.ARCADE); //Ponerle Fisicas de Phaser
        bala2.body.setSize(40, 80, 590, 190);//Collider

        //Jugador1
        player1 = game.add.sprite(0, 0, 'player1'); //Agregar al jugador
        //Animaciones jugador
        player1.animations.add('Disparo', [0,1], 10, true);
        game.physics.enable(player1, Phaser.Physics.ARCADE); //Ponerle Fisicas de Phaser al jugador
        player1.body.setSize(50, 170, 150, 160);//Collider Jugador
        //Jugador2
        player2 = game.add.sprite(0, 0, 'player2'); //Agregar al jugador
        //Animaciones jugador
        player2.animations.add('Disparo', [0,1], 10, true);
        game.physics.enable(player2, Phaser.Physics.ARCADE); //Ponerle Fisicas de Phaser al jugador
        player2.body.setSize(50, 170, 720, 150);//Collider Jugador

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
        text1 = game.add.text(480-20, 80, timeS,style);

        //Timer
        game.time.events.loop(1000, this.Contador, this);

        //--sonidos
        MusicGame = game.add.audio('MusicGame');
        MusicMenu.loop = true;
        ClickSound= game.add.audio('ClickSound');
        GanarSound= game.add.audio('GanarSound');
        PlataformaSound= game.add.audio('BarraSound');
        DispararSound= game.add.audio('DispararSound');
        DispararSound2= game.add.audio('DispararSound');
        
    }
    ,
    update:function() //----------UPDTE----------
    {
        //console.log(mantener1);

        if(EmpezarMusica==0){
            MusicGame.play();
            EmpezarMusica=1;
        }

        //Colisiones
        if(jugando==0){
        game.physics.arcade.overlap(player2, bala1, this.p1win, null, this);
        game.physics.arcade.overlap(player1, bala2, this.p2win, null, this);
        //Actualizar Textos
        text1.text = timeS;
        }

        
        if(timeS==0){
            GanarSound.play();
            botonMenu.visible = true;
            botonRetry.visible = true;
            Empate.visible=true;
            jugando=1;
            text1.text = "0";
            timeS=1;
        }

        //Nubes y agua
        Nubes.position.x=Nubes.position.x+0.2;
        Nubes2.position.x=Nubes2.position.x+0.2;
        if(Nubes.position.x>=960){
            Nubes.position.x=-960;
        }
        if(Nubes2.position.x>=960){
            Nubes2.position.x=-960;
        }
        Agua.position.x=Agua.position.x+0.7;
        Agua2.position.x=Agua2.position.x+0.7;
        if(Agua.position.x>=960){
            Agua.position.x=-960;
        }
        if(Agua2.position.x>=960){
            Agua2.position.x=-960;
        }

        //bala1
        if(bala1.position.x>960){
            bala1.body.velocity.x=0;
            bala1.position.y=player1.position.y;
            bala1.position.x=0;
        }
        //bala2
        if(bala2.position.x<-960){
            bala2.body.velocity.x=0;
            bala2.position.y=player2.position.y;
            bala2.position.x=0;
        }
        if(jugando==0){
            //Controles Player1
            if (game.time.now > Time1)
            {
            if (game.input.keyboard.isDown(Phaser.Keyboard.W)&&p1pos==2&&mantener1==0)
            {
                //player1.position.y=530;
                mantener1=1;
            }else if(game.input.keyboard.isDown(Phaser.Keyboard.W)&&p1pos==1&&mantener1==0){
                if(bala1.body.velocity.x==0){bala1.position.y=0;}
                player1.position.y=0;
                p1pos=2;
                mantener1=1;
                PlataformaSound.play();
            }else if(game.input.keyboard.isDown(Phaser.Keyboard.W)&&p1pos==0&&mantener1==0){
                if(bala1.body.velocity.x==0){bala1.position.y=270;}
                player1.position.y=270;
                p1pos=1;
                mantener1=1;
                PlataformaSound.play();
            }else if (game.input.keyboard.isDown(Phaser.Keyboard.S)&&p1pos==2&&mantener1==0)
            {
                if(bala1.body.velocity.x==0){bala1.position.y=270;}
                player1.position.y=270;
                p1pos=1;
                mantener1=1;
                PlataformaSound.play();
            }else if(game.input.keyboard.isDown(Phaser.Keyboard.S)&&p1pos==1&&mantener1==0){
                if(bala1.body.velocity.x==0){bala1.position.y=530;}
                player1.position.y=530;
                p1pos=0;
                mantener1=1;
                PlataformaSound.play();
            }else if(game.input.keyboard.isDown(Phaser.Keyboard.S)&&p1pos==0&&mantener1==0){
                //player1.position.y=270;
                //p1pos=1;
                mantener1=1;
            }else if(mantener1==1){ 
                mantener1=0;         
            }
            Time1 = game.time.now + 100;
            }
            if (game.input.keyboard.isDown(Phaser.Keyboard.D))
            {
                player1.frame = 1;
                setTimeout(function(){player1.frame=0;}, 200);
                bala1.body.velocity.x=800;
                DispararSound.play();
            }
            //Controles Player2
            if (game.time.now > Time2)
            {
            if (game.input.keyboard.isDown(Phaser.Keyboard.UP)&&p2pos==2&&mantener2==0)
            {
                //player1.position.y=530;
                mantener2=1;
            }else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)&&p2pos==1&&mantener2==0){
                if(bala2.body.velocity.x==0){bala2.position.y=0;}
                player2.position.y=0;
                p2pos=2;
                mantener2=1;
                PlataformaSound.play();
            }else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)&&p2pos==0&&mantener2==0){
                if(bala2.body.velocity.x==0){bala2.position.y=270;}
                player2.position.y=270;
                p2pos=1;
                mantener2=1;
                PlataformaSound.play();
            }else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)&&p2pos==2&&mantener2==0)
            {
                if(bala2.body.velocity.x==0){bala2.position.y=270;}
                player2.position.y=270;
                p2pos=1;
                mantener2=1;
                PlataformaSound.play();
            }else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)&&p2pos==1&&mantener2==0){
                if(bala2.body.velocity.x==0){bala2.position.y=530;}
                player2.position.y=530;
                p2pos=0;
                mantener2=1;
                PlataformaSound.play();
            }else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)&&p2pos==0&&mantener2==0){
                //player1.position.y=270;
                //p1pos=1;
                mantener2=1;
            }else if(mantener2==1){ 
                mantener2=0;         
            }
            Time2 = game.time.now + 100;
            }
            if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
            {
                player2.frame = 1;
                setTimeout(function(){player2.frame=0;}, 200);
                bala2.body.velocity.x=-800;
                DispararSound2.play();
            }
        }
    }
    ,
    //----------OTRAS FUNCIONES----------
    render:function()
    {
        /*game.debug.body(player1);
        game.debug.body(player2);
        game.debug.body(bala1);
        game.debug.body(bala2);*/
    },
    p1win:function()
    {
        GanarSound.play();
        botonMenu.visible = true;
        botonRetry.visible = true;
        PlayerWin1.visible=true;
        player2.body.velocity.y=800;
        bala2.body.velocity.y=800;
        jugando=1;
    },
    p2win:function()
    {
        GanarSound.play();
        botonMenu.visible = true;
        botonRetry.visible = true;
        PlayerWin2.visible=true;
        player1.body.velocity.y=800;
        bala1.body.velocity.y=800;
        jugando=1;
    },
    Contador:function()
    {
        if(jugando==0){
            timeS=timeS-1;
        }
    },
    Retry:function (){
        ClickSound.play();
        MusicGame.stop();
        game.state.start("Minigame2",Minigame2);         
    }
    ,
    IrMenu:function (){
        ClickSound.play();
        MusicGame.stop();
        game.state.start("Menu",Menu);
    }
}
