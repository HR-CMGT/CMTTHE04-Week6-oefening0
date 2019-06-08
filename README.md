# CMTTHE04 Week6 oefening 1

Oefenen met het verwijderen van objecten. Je moet zowel DOM elementen als instances verwijderen.

## Ball klikbaar maken

 - De ball maakt zijn eigen div klikbaar met `addEventListener`. 
 - De listener roept een `removeMe()` functie van de ball aan. Test of dit werkt met `console.log()`


## Ball moet zijn Div element uit de DOM verwijderen

```
this.div.remove()
```

## De game moet de ball instance uit de array halen

Dit is een lastige opgave, omdat de **ball** tegen de **game** moet zeggen dat hij verwijderd moet worden. Hieronder zie je de functie van game die een ball kan verwijderen:

### Game verwijdert ball uit array

```
public removeFromArray(removedBall: Ball) {

    let i = this.balls.indexOf(removedBall)
    this.balls.splice(i, 1);

}
```

### Ball roept functie van game aan

Omdat de ball een functie van de game moet aanroepen, moet de ball ook weten dat de game bestaat. In dit code voorbeeld zie je hoe we de game aan de ball doorgeven:

**game.ts**
```
new Ball(this)
```

**ball.ts**
```
class Ball {
    game:Game
    constructor(g:Game){
        this.game = g
    }
}
```

## Array Explorer

[https://sdras.github.io/array-explorer/](https://sdras.github.io/array-explorer/)
