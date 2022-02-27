# Dawn E Photos

Image resize script:

```
mogrify -set filename:name %t -resize 1200 -write './out/%[filename:name]_1200.jpg' *.jpg && mogrify -set filename:name %t -resize 600 -write './out/%[filename:name]_600.jpg' *.jpg
```

This makes a pile of duplicates and is slower but does preserve the originals
```
convert -set filename:name %t -resize 1200 -write './out/%[filename:name]_1200.jpg' *.jpg && convert -set filename:name %t -resize 600 -write './out/%[filename:name]_600.jpg' *.jpg
```

Then copy/paste all the names of the files into a txt
Add the `{ src: {1} },` to each line and shuffle them (todo a script)
