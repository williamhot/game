controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    ned = false
    op = true
    venstre = false
    højre = false
})
function Changelevel (num: number) {
    let Level_number = 0
    if (Level_number == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
    } else if (Level_number == 2) {
        tiles.setCurrentTilemap(tilemap`level3`)
    } else if (Level_number == 3) {
        tiles.placeOnRandomTile(Karakter, sprites.swamp.swampTile16)
    }
}
// Hvordan player skyder
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        if (højre == true) {
            projectile = sprites.createProjectileFromSprite(assets.image`myImage`, Karakter, 100, 0)
        } else if (venstre == true) {
            projectile = sprites.createProjectileFromSprite(assets.image`myImage`, Karakter, -100, 0)
        } else {
            if (op == true) {
                projectile = sprites.createProjectileFromSprite(assets.image`myImage`, Karakter, 0, -100)
            } else if (ned == true) {
                projectile = sprites.createProjectileFromSprite(assets.image`myImage`, Karakter, 0, 100)
            }
        }
    }
    pause(1000)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    ned = false
    op = false
    venstre = true
    højre = false
})
function changelevel (bool: boolean) {
	
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    ned = false
    op = false
    venstre = false
    højre = true
})
function doSomething (list: any[]) {
	
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    ned = true
    op = false
    venstre = false
    højre = false
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    Current_level += 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.confetti, 500)
    sprites.destroy(projectile, effects.rings, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(Karakter)
    game.gameOver(false)
    game.setGameOverMessage(false, "GAME OVER!")
})
let højre = false
let venstre = false
let op = false
let ned = false
let projectile: Sprite = null
let Karakter: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
tiles.setWallAt(tiles.getTileLocation(0, 0), true)
Karakter = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
Karakter.setPosition(0, 0)
controller.moveSprite(Karakter)
projectile = sprites.create(assets.image`myImage`, SpriteKind.Projectile)
let myEnemy = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
let Current_level = 1
game.onUpdateInterval(2000, function () {
    myEnemy.follow(Karakter, 25)
    myEnemy = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    myEnemy.setPosition(randint(0, 160), randint(0, 160))
})
forever(function () {
    scene.cameraFollowSprite(Karakter)
})
forever(function () {
    if (true) {
    	
    }
})
