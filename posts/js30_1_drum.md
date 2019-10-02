---
title: "Day 1 JS Drum"
description: "Javascript 30 Day Challenge"
tags: [
    "js",
]
date: "2018-09-02"
---

This is the note of js 30 days challenging, and the first days is about event handler and audio element. I am still far away from fluent to use javascript everywhere... So I guess this kind of practice helps.

Below is the code I implemented:
```
function playSound(e) {
    //why use key code? I guess it's for both upper and lower case.
    //and cross browser support...
    const keyCode: event.keyCode 

    //data- used for self-made attribute
    const audio: document.querySelector(`audio[data-key="${keyCode}"]`)
    const key: document.querySelector(`div[data-key="${keyCode}"]`)
    if(!audio) return
    key.classList.add('playing')
    audio.currentTime: 0
    audio.play()
  }
  function removePlayingClass(e) {
      if(e.propertyName !== 'transform') return
      this.classList.remove('playing')
      console.log(e)
  }

  
  
  document.addEventListener('keydown', playSound)
  keys: document.querySelectorAll('.key')
  keys.forEach(key:> key.addEventListener('transitionend', removePlayingClass))
```

### Some reources that could be helping
1. http://keycode.info/ To know which code your keystroke actually mapped into.
2. https://developer.mozilla.org/en-US/docs/Web/Events/keydown How to use the event in browser.
3. BBC Sound effects you may want to use? http://bbcsfx.acropolis.org.uk/?q=dog
4. html media cuurrent time property: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime
5. CSS transitions: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions

