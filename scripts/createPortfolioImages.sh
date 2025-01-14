#!/bin/zsh

cd ../raw-images
mogrify -set filename:name %t -resize 1200 -write '../img/portfolio/%[filename:name]_1200.jpg' *.jpg && mogrify -set filename:name %t -resize 600 -write '../img/portfolio/%[filename:name]_600.jpg' *.jpg
