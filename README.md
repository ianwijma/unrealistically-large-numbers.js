# unrealistic-large-numbers.js
For when you need unrealistic large numbers. Heavily inspired by the game Adventure Capitalist

## Disclaimer

This package should not be used for production applications. Its just written for fun, and a future adVenture Capitalist clone written for browser use.

## Intro
 
While playing the game adVenture Capitalist, 
I got quite interested in how they implemented such a big number, 
of course they could not use the straight numbers, 
because this would hit the number limit really quick.

So I decided to try to make a similar system myself written in TypeScript.
 
## Research

I started with doing some research, 
quickly I hit a fandom wiki page with some more information about the number system.
The [Money](https://adventure-capitalist.fandom.com/wiki/Money) page looked quite probable.
After looking at the number table I noticed their system is not 100% infinite, 
or further was not explored yet.

I wanted my system to be infinite,
so there needed to have some form of repetition.
Looking at the system adVenture Capitalist uses it looks like they use some form of self made up system with some logic to it.

I started with looking a way to describe 1 to 9 with a string that looks realistic.
After a bit of searching I found some [wiki page of large number](https://en.wikipedia.org/wiki/Names_of_large_numbers).

When looking at some of the number names I saw the starts where quite repetitive. So I stared noting them down from 1 to 9:
So I stared to note them down:
- 1 |   Starts with `Un, Non`
- 2 |   Starts with `Duo, Dec`
- 3 |   Starts with `Tres`
- 4 |   Starts with `Quat, Quad`
- 5 |   Starts with `Quin`
- 6 |   Starts with `Ses, Sex`
- 7 |   Starts with `Sept`
- 8 |   Starts with `Octo`
- 9 |   Starts with `Noven, Novem, Noven, Nona, Nona, Non`

As you can see they can be quite random from time to time, 
but luckily the page also have some handy unit chart with 1 till 9, for units, tens and hundreds. 
Which makes making a system easier.  

Here is a copy paste of the table:

|number|Units|Tens|Hundreds|
|:---------------|:---------------|:---------------|:---------------|
|1|Un|Deci|Centi|
|2|Duo|Viginti|Ducenti|
|3|Tre|Triginta|Trecenti|
|4|Quattuor|Quadraginta|Quadringenti|
|5|Quin|Quinquaginta|Quingenti|
|6|Se|Sexaginta|Sescenti|
|7|Septe|Septuaginta|Septingenti|
|8|Octo|Octoginta|Octingenti|
|9|Nove|Nonaginta|Nongenti|


As you can see there is not really a consistency, 
Which makes it quite hard to make it infinite. 

So now I have an idea 

## Design

So I needed to make a system that generates realistic looking numbers,
But looking at the research material, there is not really a consistency.
So I need to make my own "prefix" 
