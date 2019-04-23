## TP RESULTS

> La corrección del tp se debe hacer en un branch del repo llamado tp-results

- clonar el repo dentro de la carpeta del TP a evaluar.
- `rm -rf .git` dentro de la carpeta tp-results para evitar posibles conflictos (también borrar el readme)
- inlcluir el `CSS` y el `JS` en el head del index de la siguiente manera:
```
<link rel="stylesheet" href="tp-results/result.css">
<script src="tp-results/result.js" type="text/javascript"></script>
```
- Modificar la propiedad `score` de cada objeto en el arreglo `observations` dentro de `results.js` según corresponda
```
let observations = [
  {label:'Identación', score:4},
  {label:'Maquetado', score:6},
  {label:'Css', score:7},
  {label:'Responsive', score:6},
  {label:'Interacciones', score:8},
  {label:'Consigna', score:8},
  {label:'Apresiativa', score:9}
]
```
