import "pixi.js";
import pixiManager from "graphics/pixi-manager";
import { Signal } from "signals";

var box = new PIXI.Graphics;
var box2 = new PIXI.Graphics;
var stage = pixiManager.stage;
var boxes;
var boxes2;
var padding;
var boxX = 0;
var boxY = 0;
var boxY2 = 50;
var boxX2 = 0;


for(boxes = 0; boxes <5; boxes++)
{
    var colour;

    for (colour = 0; colour <5; colour++)
    {
        var rand = Math.floor(Math.random() * 0xFFFFFF) + 1;
        box.beginFill(rand);
    }
    
    box.lineStyle(5, 0xFF0000);
    box.drawRect(boxX, boxY, 50,50);

    boxX += 50;
}

for(boxes2 = 0; boxes2 <5; boxes2++)
{
    var colour2;

    for (colour2 = 0; colour2 <5; colour2++)
    {
        var rand = Math.floor(Math.random() * 0xFFFFFF) + 1;
        box2.beginFill(rand);
    }

    box2.beginFill(rand);
    box2.lineStyle(5, 0xFF0000);
    box2.drawRect(boxX2, boxY2, 50,50);

    boxX2 += 50;
}


stage.addChild(box);
stage.addChild(box2);