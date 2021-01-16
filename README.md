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

Here is a copy paste of the table I'm going to name the prefix table:

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

Now we have some sort of repetition, 
but its still not 100% infinite.

However, these are mostly just prefixes, so we are missing some suffix.

## Requirements

For numbers from 0 to 1 trillion we will just use the known names:

- 1 - 999.999;
- 1 Million - 999 Million;
- 1 Billion - 999 Billion;
- 1 Billiard - 999 Billiard;
- 1 Trillion - 999 Trillion;
 
After the initial known numbers, we need to switch is up to our custom system. 
Even though there are names, I decide to make my own from here on.

First we need to find some sort of suffix for our name. 
I see `tillion` is a recurring theme. 

So looking at the prefix table combined with the suffix,
we would end up with the following sequence.

- 1 un_tillion - 999 un_tilion
- 1 duo_tillion - 999 duo_tillion
- 1 tre_tillion - 999 tre_tillion
- 1 quattuor_tillion - 999 quattuor_tillion

Now this looks already like some believable word for numbers if you ask me.
The only issue if we get to the end of the prefixes.

But I already have a plan for that, to make it infinite, 
we are just going to start over again with the first prefix.

- 1 nongenti_tillion - 999 nongenti_tillion
- 1 un_nongenti_tillion - 999 un_nongenti_tillion 

As you see with the last item, we started with the first prefix again.
This way we can make it infinite. 

## Number

The number which you see in front of the name is going to be a float,
with max 3 numbers behind the comma.
With the main reason being that ADventure Capitalist also handles its numbers this way.

This also it allows for enough precision for our use-case, again, This is not for precision use.

## Maths

Just having large number doesn't allow you for much without some maths.

Initially we just want to have some basic maths like add, remove, division and multiplication,
but most likely add more methods to do maths with. 

## Functional and Object oriented programming

Because I want this library to work for both use cases, I will make the library support both functional and object oriented programming.

This is done by programming the internals of the framework in a functional way. 
Where the default export is a class that is for object oriented programmers, 
and the internal functions are exposed for functional programming.

This also allows easy testing of the different functions.  
