/**
 * (c) geckse
 */

const Scene = require('Scene');
export const Diagnostics = require('Diagnostics');
const Patches = require('Patches');
const Time = require('Time');

let percMode = Patches.getScalarValue('aiDetectionRange');
const texts = Scene.root.findFirst('percent');

const intervalTimer = Time.setInterval(()=>{
  texts.then((label)=>{
  let mode = percMode.pinLastValue();
  if(mode == 0){
    label.text = (100-(Math.random()*3)).toPrecision(3)+"%";
  } else if(mode == 1){
    label.text = (0+(Math.random())).toPrecision(3)+"%";
  } else if(mode == 2){
    label.text = "0%";
  } else if(mode == 3){
    label.text = "100%";
  }
  });
}, 360);
