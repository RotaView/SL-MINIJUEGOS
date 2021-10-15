//----------DECLARAR VARIABLES----------
var Fondo;
var Creditos;
var Escoger;
var InsM1;
var InsM2;
var InsM3;
var InsM4;

var botonJugar;
var botonCreditos;
var botonMenu;
var botonInsM1;
var botonInsM2;
var botonInsM3;
var botonInsM4;
var botonJugarM1;
var botonJugarM2;
var botonJugarM3;
var botonJugarM4;

var MusicMenu;
var ClickSound;
var EmpezarMusicaMenu;

var Menu=
{

    preload:function () //----------LOAD----------
    {
        //----------INICIALIZAR VARIABLES--------------
        EmpezarMusicaMenu=0;
        //----------FIN INICIALIZAR VARIABLES----------
        game.load.image('Fondo', './AssetsMenus/FondoMenu.png');
        game.load.image('Creditos', './AssetsMenus/Creditos.png');
        game.load.image('Escoger', './AssetsMenus/Escoger.png');
        game.load.image('InsM1', './AssetsMenus/InsM1.png');
        game.load.image('InsM2', './AssetsMenus/InsM2.png');
        game.load.image('InsM3', './AssetsMenus/InsM3.png');
        game.load.image('InsM4', './AssetsMenus/InsM4.png');

        game.load.spritesheet('botonJugar', './AssetsMenus/spritesheetPlay.png', 230, 115);
        game.load.spritesheet('botonCreditos', './AssetsMenus/spritesheetCreditos.png', 308, 117);
        game.load.spritesheet('botonMenu', './AssetsVarios/spritesheetMenu.png', 230, 116);
        game.load.spritesheet('botonM1', './AssetsMenus/spritesheetPlayM1.png', 301, 99);
        game.load.spritesheet('botonM2', './AssetsMenus/spritesheetPlayM2.png', 301, 99);
        game.load.spritesheet('botonM3', './AssetsMenus/spritesheetPlayM3.png', 301, 99);
        game.load.spritesheet('botonM4', './AssetsMenus/spritesheetPlayM4.png', 301, 99);

        game.load.audio('MusicMenu', './Sounds/MusicMenu.mp3');
        game.load.audio('ClickSound', './Sounds/ClickBoton.mp3');
    }
    ,
    create:function() //----------CREATE----------
    {
        //Fondo Menu
        Fondo = game.add.image(0,0,'Fondo');
        Creditos = game.add.image(0,0,'Creditos');
        Creditos.visible=false;
        Escoger = game.add.image(0,0,'Escoger');
        Escoger.visible=false;
        InsM1 = game.add.image(0,0,'InsM1');
        InsM1.visible=false;
        InsM2 = game.add.image(0,0,'InsM2');
        InsM2.visible=false;
        InsM3 = game.add.image(0,0,'InsM3');
        InsM3.visible=false;
        InsM4 = game.add.image(0,0,'InsM4');
        InsM4.visible=false;

        //Botones
        botonJugar = game.add.button(480-290+30-100, 750, 'botonJugar', this.IrJugar, this, 1, 0, 2);
        botonCreditos = game.add.button(480+100, 750, 'botonCreditos', this.IrCreditos, this, 1, 0, 2);
        botonMenu = game.add.button(480-450, 820, 'botonMenu', this.IrMenu, this, 1, 0, 2);
        botonMenu.visible = false;
        botonInsM1 = game.add.button(480-290-100 , 100,   'botonM1', this.IrInsM1, this, 1, 0, 2);
        botonInsM2 = game.add.button(480+100     , 100,   'botonM2', this.IrInsM2, this, 1, 0, 2);
        botonInsM3 = game.add.button(480-290-100 , 550,   'botonM3', this.IrInsM3, this, 1, 0, 2);
        botonInsM4 = game.add.button(480+100     , 550,   'botonM4', this.IrInsM4, this, 1, 0, 2);
        botonJugarM1 = game.add.button(480+30+100+80, 820, 'botonJugar', this.IrJugar1, this, 1, 0, 2);
        botonJugarM2 = game.add.button(480+30+100+80, 820, 'botonJugar', this.IrJugar2, this, 1, 0, 2);
        botonJugarM3 = game.add.button(480+30+100+80, 820, 'botonJugar', this.IrJugar3, this, 1, 0, 2);
        botonJugarM4 = game.add.button(480+30+100+80, 820, 'botonJugar', this.IrJugar4, this, 1, 0, 2); 
        botonInsM1.visible = false;
        botonInsM2.visible = false;
        botonInsM3.visible = false;
        botonInsM4.visible = false;
        botonJugarM1.visible = false;
        botonJugarM2.visible = false;
        botonJugarM3.visible = false;
        botonJugarM4.visible = false;

        //--sonidos
        MusicMenu = game.add.audio('MusicMenu');
        MusicMenu.loop = true;
        ClickSound= game.add.audio('ClickSound');
    }
    ,
    update:function() //----------UPDTE----------
    {
        if(EmpezarMusicaMenu==0){
            MusicMenu.play();
            EmpezarMusicaMenu=1;
        }
    }
    //----------OTRAS FUNCIONES----------
    ,
    IrMenu:function (){
        ClickSound.play();
        //lo que se ve
        Fondo.visible=true;
        botonJugar.visible=true;
        botonCreditos.visible=true;
        botonCreditos.frame = 0;
        botonJugar.frame = 0;
        //lo que se oculta
        //img
        Escoger.visible=false;
        Creditos.visible=false;
        InsM1.visible=false;
        InsM2.visible=false;
        InsM3.visible=false;
        InsM4.visible=false;
        //botones
        botonMenu.visible=false;
        botonInsM1.visible = false;
        botonInsM2.visible = false;
        botonInsM3.visible = false;
        botonInsM4.visible = false;
        botonJugarM1.visible = false;
        botonJugarM2.visible = false;
        botonJugarM3.visible = false;
        botonJugarM4.visible = false;
    },
    IrCreditos:function (){
        ClickSound.play();
        //lo que se ve
        Creditos.visible=true;
        botonMenu.visible=true;
        botonMenu.frame = 0;
        //lo que se oculta
        Fondo.visible=false;
        botonJugar.visible=false;
        botonCreditos.visible=false;
    },
    IrJugar:function (){ //Escoger
        ClickSound.play();
        //lo que se ve
        Escoger.visible=true;
        botonMenu.visible=true;
        botonMenu.frame = 0;
        botonInsM1.visible = true;
        botonInsM2.visible = true;
        botonInsM3.visible = true;
        botonInsM4.visible = true;
        botonInsM1.frame = 0;
        botonInsM2.frame = 0;
        botonInsM3.frame = 0;
        botonInsM4.frame = 0;
        //lo que se oculta
        Fondo.visible=false;
        botonJugar.visible=false;
        botonCreditos.visible=false;
    },
    IrInsM1:function (){
        ClickSound.play();
        //lo que se ve
        InsM1.visible=true;
        botonMenu.visible=true;
        botonMenu.frame = 0;
        botonJugarM1.visible=true;
        botonJugarM1.frame = 0;
        //lo que se oculta
        Escoger.visible=false;
        botonInsM1.visible = false;
        botonInsM2.visible = false;
        botonInsM3.visible = false;
        botonInsM4.visible = false;
    },
    IrInsM2:function (){
        ClickSound.play();
        //lo que se ve
        InsM2.visible=true;
        botonMenu.visible=true;
        botonMenu.frame = 0;
        botonJugarM2.visible=true;
        botonJugarM2.frame = 0;
        //lo que se oculta
        Escoger.visible=false;
        botonInsM1.visible = false;
        botonInsM2.visible = false;
        botonInsM3.visible = false;
        botonInsM4.visible = false;
    },
    IrInsM3:function (){
        ClickSound.play();
        //lo que se ve
        InsM3.visible=true;
        botonMenu.visible=true;
        botonMenu.frame = 0;
        botonJugarM3.visible=true;
        botonJugarM3.frame = 0;
        //lo que se oculta
        Escoger.visible=false;
        botonInsM1.visible = false;
        botonInsM2.visible = false;
        botonInsM3.visible = false;
        botonInsM4.visible = false;
    },
    IrInsM4:function (){
        ClickSound.play();
        //lo que se ve
        InsM4.visible=true;
        botonMenu.visible=true;
        botonMenu.frame = 0;
        botonJugarM4.visible=true;
        botonJugarM4.frame = 0;
        //lo que se oculta
        Escoger.visible=false;
        botonInsM1.visible = false;
        botonInsM2.visible = false;
        botonInsM3.visible = false;
        botonInsM4.visible = false;
    },
    IrJugar1:function (){
        ClickSound.play();
        MusicMenu.stop();
        game.state.start("Minigame1",Minigame1);
    },
    IrJugar2:function (){
        ClickSound.play();
        MusicMenu.stop();
        game.state.start("Minigame2",Minigame2);
    },
    IrJugar3:function (){
        ClickSound.play();
        MusicMenu.stop();
        game.state.start("Minigame3",Minigame3);
    },
    IrJugar4:function (){
        ClickSound.play();
        MusicMenu.stop();
        game.state.start("Minigame4",Minigame4);
    }

}