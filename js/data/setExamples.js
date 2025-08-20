import { CONFIG } from '../config/constants.js';

export function getSetExamplesData() {
  return {
    [CONFIG.SET_METHODS.DIFFERENCE]: {
      code: `const setA = new Set(['Chocolate','Neapolitan','Strawberry','Vanilla']);
const setB = new Set(['Cookies and Cream','Neapolitan','Pistachio','Rocky Road','Vanilla']);
setA.difference(setB);`,
      description:
        'Which ice cream flavors are in the first set, but not in the second one?',
      image: 'set_illustrations/difference.jpeg',
      output: "Set(2) {'Chocolate', 'Strawberry'}",
    },
    [CONFIG.SET_METHODS.INTERSECTION]: {
      code: `const setA = new Set(['Toyota','Honda','Ford','Chevrolet']);
const setB = new Set(['BMW','Honda','Kia','Ford','Chevrolet']);
setA.intersection(setB);`,
      description: 'Which cars are in both sets?',
      image: 'set_illustrations/intersection.jpeg',
      output: "Set(3) {'Honda','Ford','Chevrolet'}",
    },
    [CONFIG.SET_METHODS.IS_DISJOINT_FROM]: {
      code: `const setA = new Set(['Lions','Tigers','Bears','Eagles']);
const setB = new Set(['Panthers','Tigers','Wolves','Hawks','Eagles']);
setA.isDisjointFrom(setB);`,
      description:
        'Check if the first set has no NFL mascots in common with the second set.',
      image: 'set_illustrations/isDisjointFrom.jpeg',
      output: 'false',
    },
    [CONFIG.SET_METHODS.IS_SUBSET_OF]: {
      code: `const setA = new Set(['Superman','Batman','Wonder Woman']);
const setB = new Set(['Superman','Batman','Wonder Woman','Flash','Green Lantern']);
setA.isSubsetOf(setB);`,
      description:
        'Check if all superheroes in the first set are also in the other set.',
      image: 'set_illustrations/isSubsetOf.jpeg',
      output: 'true',
    },
    [CONFIG.SET_METHODS.IS_SUPERSET_OF]: {
      code: `const setA = new Set(['Yellowstone','Yosemite','Grand Canyon','Zion']);
const setB = new Set(['Acadia','Yosemite','Glacier','Rocky Mountain','Zion']);
setA.isSupersetOf(setB);`,
      description:
        'Check if all national parks in the second set are also in the first set.',
      image: 'set_illustrations/isSupersetOf.jpeg',
      output: 'false',
    },
    [CONFIG.SET_METHODS.SYMMETRIC_DIFFERENCE]: {
      code: `const setA = new Set(['Miles Davis','John Coltrane','Thelonious Monk','Charles Mingus']);
const setB = new Set(['Herbie Hancock','John Coltrane','Wayne Shorter','Ornette Coleman','Charles Mingus']);
setA.symmetricDifference(setB);`,
      description: 'Which jazz musicians are in either set, but not in both?',
      image: 'set_illustrations/symmetricDifference.jpeg',
      output:
        "Set(5) {'Miles Davis','Thelonious Monk','Herbie Hancock','Wayne Shorter','Ornette Coleman'}",
    },
    [CONFIG.SET_METHODS.UNION]: {
      code: `const setA = new Set(['Air Jordan','Air Max','Blazer','Cortez']);
const setB = new Set(['Dunk','Air Max','Air Force 1','React','Cortez']);
setA.union(setB);`,
      description: 'Which Nike sneakers are in either or both of the sets?',
      image: 'set_illustrations/union.jpeg',
      output:
        "Set(7) {'Air Jordan','Air Max','Blazer','Cortez','Dunk','Air Force 1','React'}",
    },
  };
}
