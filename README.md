# CMTTHE04 Week6 oefening 0

## Objecten verwijderen

 - Maak de ball klikbaar
 - De game verwijdert de bal
 - De game speed gaat omhoog
 - De ballen krijgen een nieuwe snelheid

## Object uit array verwijderen

```
public removeFromArray(removeMe: Apple) {

    for (let i = 0;i< this.apples.length ;i++) {

        if (this.apples[i] === removeMe) {

            this.apples.splice(i, 1);

        }
    }
}
```

## Array Explorer

[https://sdras.github.io/array-explorer/](https://sdras.github.io/array-explorer/)