# Whatsapp api fix
## This repository implement solution for firefox whatsapp break link 

### Hot to use

1. Use funcion only number
```javascript
var whatsappFix = require('whatsapp-api-fix');

var params = {number: 123456789};
var redirect_whatsapp_link = whatsappFix.generate(params);

// > http://web.whatsapp.com/send?phone=123456789&text=
// > http://api.whatsapp.com/send?phone=123456789&text=
```

2. Use funcion number and text
```javascript
var whatsappFix = require('whatsapp-api-fix');

var params = {number: 123456789, text: 'text'};
var redirect_whatsapp_link = whatsappFix.generate(params);

// > http://web.whatsapp.com/send?phone=123456789&text=text
// > http://api.whatsapp.com/send?phone=123456789&text=text
```

3. Use funcion to search in `stackoverflow` in case of error
    ##### IN THIS CASE, A NEW TAB IS OPEN IN STACKOVERFLOW

```javascript
var whatsappFix = require('whatsapp-api-fix');

var params = {number: 123456789, text: 'text', search: true};
var redirect_whatsapp_link = whatsappFix.generate(params);
```
