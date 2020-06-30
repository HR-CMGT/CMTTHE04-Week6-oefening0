# CMTTHE04 Week6 oefening 1

Pak alle pokéballs op voordat de tijd op is! Oefenen met het verwijderen van objecten. Je moet zowel DOM elementen als instances verwijderen.

 - Start Typescript compilatie met CMD/CTRL + SHIFT + B
 - Start de Live Server extensie of open je eigen localhost server

## Ball klikbaar maken

 - Voeg een `removeMe()` method toe aan de ball class. Zet hier een `console.log` in.
 - De ball class maakt zijn eigen `div` klikbaar met een `addEventListener`. 
 - Luister naar het `mouseDown` event, en roep dan de `removeMe()` method aan.
 - Test of de console werkt als je op de bal klikt!
 - Nu kan je verder met het verwijderen van de ball uit de DOM en uit de Array

## Ball moet na Click zijn Div element uit de DOM verwijderen

```
this.div.remove()
```
Let op, de ball instance zit nog wel in de array! Je hebt alleen het plaatje uit de HTML pagina verwijderd!

## De ball uit de array halen

Dit is een lastige opgave, omdat de **ball** tegen de **game** moet zeggen dat hij verwijderd moet worden. De opdracht bestaat dus uit twee delen:

- De ball moet de Game kunnen aanspreken
- De game moet een specifieke ball uit `this.balls` kunnen verwijderen

Je kan beginnen met het aanmaken van een `removeBallFromArray()` method in de game class.
Deze method verwacht een ball argument, dit is de ball die verwijderd moet worden: `removeBallFromArray(b:Ball)`

Probeer met onderstaande voorbeeldcode de opdracht af te maken:

### Een functie in een andere class aanroepen

Omdat de ball een functie van de game moet aanroepen, moet de ball ook weten dat de game bestaat. Je kan dit doen door de game via de constructor aan de ball te geven. Let op dat je bij het aanroepen van `new Ball()` hier gebruik van maakt!

**ball.ts**
```typescript
class Ball {
    game:Game
    constructor(g:Game){
        this.game = g
    }
}
```

### Object uit array verwijderen

- Gebruik de **filter** functie om objecten uit een array te verwijdern

```typescript
this.balls = this.balls.filter(b => b!==removedBall)
```

In ES5 kan je **indexof** en **splice** gebruiken:

- Vind de plek van het object in een array, gebruik `splice` om de array op die plek aan te passen:

```typescript
const index = this.balls.indexOf(ball)
this.balls.splice(index, 1);
```

## Array Explorer

[https://sdras.github.io/array-explorer/](https://sdras.github.io/array-explorer/)
