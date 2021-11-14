# PacMan Read Me File
## About
PacMan simulator - bounces between left and right borders of page width. Responsive. 

## How it Works
This repo consists of several images which are placed in an array and are then switched through each time the Run function is called. 

To set the pacman image to flip when it gets to the end the window, I had to determine what type of value was being returned by img.style.left.
To my suprise this value was a string, compared to the windows innerWoidth which is a number. So to make those comparable, i converted the returned string
into an array split by the string 'px' and then converted the first element of the array into a number. 

## About Eric Roldan
Eric Roldan is a father, trader, developer, and musician. With a background in heavy pattern recognition through music, learning how to forecast patterns on price charts became a natural path to take. From that path, came the exercise of algorithmic trading and developing mechanical trading systems with MQL4 and Pine Script. Eric is now a student at MIT xPro for Full Stack Web Development and is excited to see what this knowledge can bring. 

As a gift to the readers of this file, I have attached a link to a free trading indicator which you can use to identify well confirmed price swings on any financial instrument and any time frame. 

[RSI SIMPLE AND SMOOTH OSCILLATOR](https://www.tradingview.com/script/cPCSMDFg-RSI-Simple-and-Smooth/)
