---
title: "iman 2 Build a simple web map: part 1"
description: ""
date: "2019-10-02"
author: "Michael Chen"
tags: [
    "ironman",
]
---

# Build a simple web map: part 1
 
 # Prologue
 In this episode we will start building a small web map, and then improve it in the following 28 days. It looks like I already failed on post an article 30 days consecutively.. I will keep post it as practice anyway.
 
 # Three Pillars of Web App: HTML, CSS, Javascript
 What browser does is somehow similar to document processing softwares like LibreOffice、 Excel. Open a file, display the content in the app window. While the those software mainly used for files like `.csv, .doc` stored in our disk, browser focused on a file format `.html` and the files are mostly fetched from shared by one of the computer in the Internet. Here is an example html file content:
```html
<html>
    <head>
        <meta charset="UTF-8">
        <title>Example</title>
    </head>
    <body>
        <h1>Prologue</h1>
        <p>Prologues are general <b>...</b></p>
    </body>
</html>
```
And it will look like below on the browser:

![](https://i.imgur.com/WuRagK3.png)

[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) is from HyperText Markup Language, it has the structure and content of an webpage. You can find a lot of`<` and`>` in the above html, those `<>, </>` defins a html element, we can build a hierachy of the elements by putting an element into another.(It might be easier to think the `html` as `human`: a human has a head and body!). This kind of format helps both human who crafted the document to read and also allows browser to interpret into a tree structure like below.
![](https://i.imgur.com/uL4chQG.png)

For the functions of different elements please have a look at the [HTML document by Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML). For a brief intro, `head` stores some information about this ducument, while `body` has the actual contents need to be displayed.

Then here comes the other two pillars: CSS, JavaScript. Our webpage will be more usable with them.
With the content and stucture from HTML, what we are going to do next is to use CSS to beautify the document and add interaction of the document by JavaScript. For example, first we build a HTML puppy, then we make it looks like more like puppy by adding CSS, then give it the ability to bark when we click by JavaScript.
![](https://i.imgur.com/1YMsybi.png)

For the detailed CSS, JavaScript syntax ~~please Google~~, we will deal with them tomorrow.


## codepen, DNS, IP, HTTP?
[google.com](https://google.com)  provides an service of returning a list of webpages related to some "keywords". We are going to use another webpage https://codepen.io to make our map. Codepen provides a service of sharing "web app" for everyone。
One thing happened under the hood is that when we click on the link above, our browser also helps us to look up the actual IP address of `codepen.io`.
IP,  Internet Protocol is similar to the address we send parcel with, It is nearly guaranteed that you can find an unique computer which is sharing the webpage we would like to visit in the Internet by filling the right address.
Imagine remembering all the phone numbers in your phonebook.. Apparently it would be inconvenient for most of us. And since remembering all the IP addresses is a overwhelming job, there's protocol called DNS to lookup the address.
Below is the packet of my computer sending DNS request captured by [wireshark](https://www.wireshark.org/).
![](https://i.imgur.com/YCUN8d0.png)
Have you heard of computers are consisted of 0s and 1s？ In the bottom part of the image `00 4d ...` is the hexdecimal encoding of `00000000 01001101 ...` If you were doing a computer network interface card's job, you would act like someone druming some Morse code at a underpass. Someone at the other end of the underpass will understand what you are druming about and return the message in a similar way at a speed of millions hit per second. Computer chips will send message in this extremely fast manner to IP address of 8.8.8.8(Google's public DNS server), after received the message 8.8.8.8 will return the IP address of `www.example.com` is 93.184.216.34 to you.

The three pillars of Web page are all transfered in a similar way, only difference is in a more complicated protocol HTTP.

## codepen example

https://codepen.io/owlfox/full/KKPGBEP

open the codepen link, you can find three boxes marked with HTML, JS and CSS. This webpage will show you the result of the threee pillars onto the box below and it will looks like this
![](https://i.imgur.com/FIp9aS0.png)

You can make this map visible by clicking the image and click more to show your love to Taiwan.
You might say this is not really a web map, but I reckon the web map is doing the similar thing.

For more about CSS and JavaScript, we will leave them for tomorrow

# Preview of future episodes...
* Introduce the common data format in web map
* replace the image in today's example to common tile service
* Intro to CSS and JavaScript.
* how to develop/debug on your computer
* some usages of chrome developer tool
* how to deploy web app to Github Pages, Heroku, AWS(?), GCP(?)

## Reference
[Introduction to Web Cartography: Part 1](https://www.edx.org/course/introduction-to-web-cartography-part-1-1)