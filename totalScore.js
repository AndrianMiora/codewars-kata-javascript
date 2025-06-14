function points(games) {

    let totalPoints = 0; 

    for (let result of games) {
        const [x, y] = result.split(':').map(Number); 
        if (x > y) {
            totalPoints += 3; 
        } else if (x === y) {
            totalPoints += 1; 
        }
    }

    return totalPoints;
}

/*

### Ce que fait le code :
Il calcule le **score total** (ou "points") obtenu dans une série de matchs de football en fonction des résultats des matchs. Chaque résultat indique combien chaque équipe a marqué (équipe `x` et équipe `y`). Voici la règle :
- Si l'équipe `x` marque **plus** que l'équipe `y`, elle gagne **3 points**.
- Si les deux équipes marquent **la même chose** (match nul), elle obtient **1 point**.
- Sinon, `x` ne reçoit aucun point (ce cas n'est pas traité directement, mais il n'ajoute rien).

### Détaillons pas à pas :
1. **La fonction s'appelle `points`** et elle attend une liste (`games`) contenant les résultats des matchs. Chaque résultat est une chaîne de texte comme `"3:2"` ou `"1:1"`, où le score de `x` (avant les deux-points) et le score de `y` (après les deux-points) sont écrits.

2. **On commence avec un score total de zéro** :
   ```javascript
   let totalPoints = 0;
   ```
   On part de 0 parce qu'on n'a encore ajouté aucun point.

3. **On parcourt tous les résultats des matchs** :
   ```javascript
   for (let result of games) { ... }
   ```
   Ici, chaque score est extrait de la liste `games`, un par un.

4. **On divise le score (`"3:2"`) en deux parties (`3` et `2`)** :
   ```javascript
   const [x, y] = result.split(':').map(Number);
   ```
   - `result.split(':')` divise la chaîne là où il y a un `:`, donc `"3:2"` devient `[3, 2]`.
   - `.map(Number)` transforme chaque élément en un nombre, donc `[3, 2]` reste `[3, 2]`, mais sous forme de nombres au lieu de texte.

   Maintenant, `x = 3` et `y = 2` (les scores des équipes).

5. **On vérifie qui a gagné ou si c'est un match nul** :
   ```javascript
   if (x > y) {
       totalPoints += 3;
   } else if (x === y) {
       totalPoints += 1;
   }
   ```
   - **Si `x` marque plus que `y`** (`x > y`), on ajoute **3 points** à `totalPoints`.
   - **Si `x` et `y` marquent la même chose** (`x === y`), on ajoute **1 point**.
   - **Sinon**, rien ne se passe (on ignore les cas où `x < y`).

6. **On retourne le score total après avoir parcouru tous les matchs** :
   ```javascript
   return totalPoints;
   ```

### Exemple d'utilisation :
Disons qu'on donne les résultats suivants à la fonction :
```javascript
let matches = ["3:2", "1:1", "0:4"];
console.log(points(matches)); // Résultat : 4
```

**Explication du calcul** :
- `"3:2"` : `x` a gagné (3 points).
- `"1:1"` : match nul (1 point).
- `"0:4"` : `x` a perdu (aucun point).

Total : **3 + 1 + 0 = 4 points**.

Voilà, ce code est comme une calculatrice pour les scores des matchs. Clair comme de l'eau de roche, non ? 😊
*/