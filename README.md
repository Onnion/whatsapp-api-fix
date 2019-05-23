# whatsapp firefox fix
## This repository implement solution for firefox whatsapp break link 

### Hot to use

1. `Import script`

```
<script src="PATH_TO_SCRIPT"></script>
```

2. `Use funcion only number`
```javascript
// ...
const redirect_whatsapp_link = generate(123456789);
// ...

// > http://web.whatsapp.com/send?phone=123456789&text=
```



3. `Use funcion number and text`
```javascript
// ...
const redirect_whatsapp_link = generate(123456789, 'text');
// ...

// > http://web.whatsapp.com/send?phone=123456789&text=text
```