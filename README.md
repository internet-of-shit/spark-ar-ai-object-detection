# AI Object Detection Filter
<img src="https://github.com/internet-of-shit/spark-ar-ai-object-detection/blob/master/filtericon.png" height="140">

Instagram AR-Filter, which mimics real AI object detection / recognition. Users can change the label via tapping on the frame.
Tapping on the percentage value of detection probabillity changes the value behavior (100%'ish, 0%'ish, 0%, 100%) 

### Handy Links
[Spark AR Docs](https://sparkar.facebook.com/ar-studio/learn/documentation/guides/)

### Quickstart

#### I don't need to script

OK then. You'll find a nice folder structure for your project, already filled with the original Spark AR Assets! 
Just save your Spark Project inside "/spark-project/" and have fun!

#### I actually want to script

1. ```npm install``` to install the depencies. 
Use npm to install other plugins. 

2. Do your magic in ```/scripts/script.js```.

3. ```npm run dev``` will watch for changes and copy automagical to ```/spark-project/scripts/```

4. ```npm run build``` will bundle your script, minimize it and paste it to ```/spark-project/scripts/```
