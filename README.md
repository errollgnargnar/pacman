# PacMan Read Me File

This repo consists of several images which are placed in an array and are then switched through each time the Run function is called. 

To set the pacman image to flip when it gets to the end the window, I had to determine what type of value was being returned by img.style.left.
To my suprise this value was a string, compared to the windows innerWoidth which is a number. So to make those comparable, i converted the returned string
into an array split by the string 'px' and then converted the first element of the array into a number. 
