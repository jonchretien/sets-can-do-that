# Sets Can Do That? 😮

**Site URL:** https://jonchretien.github.io/sets-can-do-that

I had mainly used Sets in JavaScript when I needed to make sure I had an object with unique values (ex: removing duplicate items from an Array). It wasn't until I stumbled on this video from [@syntaxfm](https://youtu.be/De6JOU9yaGM) that I found out about its [composition methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set_composition), which are really handy when you need to handle certain types of data manipulation. I made this resource to showcase how useful they can be when you move beyond the basics.

## Quick Reference

| Method | Summary | Return Value |
|--------|---------|--------------|
| [difference](#difference-) | Elements in the first set but not in the second | `Set` |
| [intersection](#intersection-) | Elements common to both sets | `Set` |
| [isDisjointFrom](#isDisjointFrom-) | Checks if two sets have no elements in common | `Boolean` |
| [isSubsetOf](#isSubsetOf-) | Checks if all elements of the first set are in the second set | `Boolean` |
| [isSupersetOf](#isSupersetOf-) | Checks if all elements of the second set are in the first set | `Boolean` |
| [symmetricDifference](#symmetricDifference-) | Elements in either set but not in both | `Set` |
| [union](#union-) | All elements from both sets | `Set` |

## Static Examples

### difference 🍦

Which ice cream flavors are in the first set, but **not** in the second one? – [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference)

Usage
```javascript
const setA = new Set([
    'Chocolate',
    'Neapolitan',
    'Strawberry',
    'Vanilla',
]);

const setB = new Set([
    'Cookies and Cream',
    'Neapolitan',
    'Pistachio',
    'Rocky Road',
    'Vanilla'
]);

setA.difference(setB);
```

Output
```javascript
Set(2) {'Chocolate', 'Strawberry'}
```

### intersection 🚗

Which cars are in **both sets**? – [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection)

Usage
```javascript
const setA = new Set([
    'Toyota',
    'Honda',
    'Ford',
    'Chevrolet',
]);

const setB = new Set([
    'BMW',
    'Honda',
    'Kia',
    'Ford',
    'Chevrolet'
]);

setA.intersection(setB);
```

Output
```javascript
Set(3) {'Honda', 'Ford', 'Chevrolet'}
```

### isDisjointFrom 🏈

Check if the first set has **no NFL mascots** in common with the second set. Returns `true` if yes, `false` if no.  – [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom)

Usage
```javascript
const setA = new Set([
    'Lions',
    'Tigers',
    'Bears',
    'Eagles',
]);

const setB = new Set([
    'Panthers',
    'Tigers',
    'Wolves',
    'Hawks',
    'Eagles'
]);

setA.isDisjointFrom(setB);
```

Output
```javascript
false
```

### isSubsetOf 🦸🏽‍♀️

Check if **all superheroes** in the first set **are also** in the other set. Returns `true` if yes, `false` if no. – [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf)

Usage
```javascript
const setA = new Set([
    'Superman',
    'Batman',
    'Wonder Woman',
]);

const setB = new Set([
    'Superman',
    'Batman',
    'Wonder Woman',
    'Flash',
    'Green Lantern'
]);

setA.isSubsetOf(setB);
```

Output
```javascript
true
```

### isSupersetOf 🏞️

Check if **all national parks** in the second set **are also** in the first set. Returns `true` if yes, `false` if no. – [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf)

Usage
```javascript
const setA = new Set([
    'Yellowstone',
    'Yosemite',
    'Grand Canyon',
    'Zion',
]);

const setB = new Set([
    'Acadia',
    'Yosemite',
    'Glacier',
    'Rocky Mountain',
    'Zion'
]);

setA.isSupersetOf(setB);
```

Output
```javascript
false
```

### symmetricDifference 🎷

Which jazz musicians are in either set, but **not** in both? – [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference)

Usage
```javascript
const setA = new Set([
    'Miles Davis',
    'John Coltrane',
    'Thelonious Monk',
    'Charles Mingus',
]);

const setB = new Set([
    'Herbie Hancock',
    'John Coltrane',
    'Wayne Shorter',
    'Ornette Coleman',
    'Charles Mingus'
]);

setA.symmetricDifference(setB);
```

Output
```javascript
Set(5) { 'Miles Davis', 'Thelonious Monk', 'Herbie Hancock', 'Wayne Shorter', 'Ornette Coleman' }
```

### union 👟

Which Nike sneakers are in **either or both** of the sets? – [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union)

Usage
```javascript
const setA = new Set([
    'Air Jordan',
    'Air Max',
    'Blazer',
    'Cortez',
]);

const setB = new Set([
    'Dunk',
    'Air Max',
    'Air Force 1',
    'React',
    'Cortez'
]);

setA.union(setB);
```

Output
```javascript
Set(7) { 'Air Jordan', 'Air Max', 'Blazer', 'Cortez', 'Dunk', 'Air Force 1', 'React' }
```

## Development

### Local Development
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
npm run preview
```

### Deployment
This site is automatically deployed to GitHub Pages via GitHub Actions. The deployment workflow:

1. Triggers on pushes to the `main` branch
2. Builds the project using Vite
3. Deploys the built files to the `gh-pages` branch

**Manual Deployment:**
```bash
npm run deploy
```

## Inspiration

- [Does it mutate](https://doesitmutate.xyz)
- [JavaScript Array Explorer](https://codepen.io/sdras/full/gogVRX/)
