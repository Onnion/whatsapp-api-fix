# Whatsapp api fix
## This repository implement solution for firefox whatsapp break link 

### 1. How to import
1. Use gulp
```javascript
gulp.task("whatsappFix", function () {
  gulp.src('./node_modules/whatsapp-api-fix/index.js')
    .pipe(gulp.dest("dist/"));
});
```

2. Use gulp
```html
<script async src="./node_modules/whatsapp-api-fix/index.js"></script>
```

3. Or any other...

### 2. How to use

1. Use funcion only number
```javascript
var $wppFix = new WhatsappFix();

var params =  { number: 123456789 };
var redirect_whatsapp_link = $wppFix.getRedirect(params);

// > http://web.whatsapp.com/send?phone=123456789&text=
// > http://api.whatsapp.com/send?phone=123456789&text=
```

2. Use funcion number and text
```javascript
var $wppFix = new WhatsappFix();

var params =  { number: 123456789, text: 'text' };
var redirect_whatsapp_link = $wppFix.getRedirect(params);

// > http://web.whatsapp.com/send?phone=123456789&text=text
// > http://api.whatsapp.com/send?phone=123456789&text=text
```

3. Use funcion to search in `stackoverflow` in case of error
    ##### IN THIS CASE, A NEW TAB IS OPEN IN STACKOVERFLOW

```javascript
var $wppFix = new WhatsappFix();

var params = { number: 123456789, text: 'text', search: true };
var redirect_whatsapp_link = $wppFix.getRedirect(params);
```
