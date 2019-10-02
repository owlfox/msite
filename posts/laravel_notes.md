---
title: "Lalala.. Laravel!"
description: "Some notes about laravel"
tags: [
    "php",
    "laravel",
]
date: "2018-08-18"
---

I am reviewing concepts of laravel before doing a part-time job.

## routes
What is it?

Defines how laravel do with the routes on our webpage. For example: `https://myawesomesite.org/test`, we can define what laravel should return to this request. Things to be returned can be a `html` or `json` for AJAX request.

Where it is?:

* Before laravel 5.3: `app/Http/routes.php`
* After: `routes/web.php`