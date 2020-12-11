# HastExp





> A simple hastebin package that lets you upload text to hastebin and make a link directly from writing code.




# Methods

<center><h1>makePost</h1></center>


| Name          | type          | DESCRIPTION
| :------------- |:-------------:|:-----------:|
| message | string      | Message to post to hastebin
| extension? | extension | used to define which file extension you want to get the link in: Default is Javascript


<center><h1>getPost</h1></center>


| Name          | type          | DESCRIPTION
| :------------- |:-------------:|:-----------:|
| linkSlug | string      | link slug to get a object contaning info about the haste (Must be 10 characters file extensions excluded)


---
> usage

```js
const { HastExp }  = require('hastexp')

//Instantiating a new HastExp object
const haste = new HastExp()

// makePost(message: string, extension?: Extension): Promise<any>

haste.makePost("This is a test")
.then(link => console.log(link))

// https://hastebin.com/imezuxulon.js


// fetchPost(linkSlug: string): Promise<any>

haste.fetchPost('imezuxulon')
.then(mes => console.log(mes))

// { data: 'This is a test', key: 'imezuxulon' }

```

# Licence 

This module is licensed under the MIT license.


