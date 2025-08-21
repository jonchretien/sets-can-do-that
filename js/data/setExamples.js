import { CONFIG } from '../config/constants.js';

export function getSetExamplesData() {
  return {
    [CONFIG.SET_METHODS.DIFFERENCE]: {
      code: `<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Chocolate'</span>, <span class="string">'Neapolitan'</span>, <span class="string">'Strawberry'</span>, <span class="string">'Vanilla'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Cookies and Cream'</span>, <span class="string">'Neapolitan'</span>, <span class="string">'Pistachio'</span>, <span class="string">'Rocky Road'</span>, <span class="string">'Vanilla'</span>]);
setA.<span class="method">difference</span>(setB);`,
      description:
        'Which ice cream flavors are in the first set, but not in the second one?',
      emoji: '🍦',
      image: 'set_illustrations/difference.jpeg',
      output: `<span class="set">Set</span>(2) {<span class="string">'Chocolate'</span>, <span class="string">'Strawberry'</span>}`,
    },
    [CONFIG.SET_METHODS.INTERSECTION]: {
      code: `<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Toyota'</span>, <span class="string">'Honda'</span>, <span class="string">'Ford'</span>, <span class="string">'Chevrolet'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'BMW'</span>, <span class="string">'Honda'</span>, <span class="string">'Kia'</span>, <span class="string">'Ford'</span>, <span class="string">'Chevrolet'</span>]);
setA.<span class="method">intersection</span>(setB);`,
      description: 'Which cars are in both sets?',
      emoji: '🚗',
      image: 'set_illustrations/intersection.jpeg',
      output: `<span class="set">Set</span>(3) {<span class="string">'Honda'</span>, <span class="string">'Ford'</span>, <span class="string">'Chevrolet'</span>}`,
    },
    [CONFIG.SET_METHODS.IS_DISJOINT_FROM]: {
      code: `<span class="keyword">const</span> setA = <span class="keyword">new</span> Set([<span class="string">'Lions'</span>, <span class="string">'Tigers'</span>, <span class="string">'Bears'</span>, <span class="string">'Eagles'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> Set([<span class="string">'Panthers'</span>, <span class="string">'Tigers'</span>, <span class="string">'Wolves'</span>, <span class="string">'Hawks'</span>, <span class="string">'Eagles'</span>]);
setA.<span class="method">isDisjointFrom</span>(setB);`,
      description:
        'Check if the first set has no NFL mascots in common with the second set.',
      emoji: '🏈',
      image: 'set_illustrations/isDisjointFrom.jpeg',
      output: '<span class="boolean">false</span>',
    },
    [CONFIG.SET_METHODS.IS_SUBSET_OF]: {
      code: `<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Superman'</span>, <span class="string">'Batman'</span>, <span class="string">'Wonder Woman'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Superman'</span>, <span class="string">'Batman'</span>, <span class="string">'Wonder Woman'</span>, <span class="string">'Flash'</span>, <span class="string">'Green Lantern'</span>]);
setA.<span class="method">isSubsetOf</span>(setB);`,
      description:
        'Check if all superheroes in the first set are also in the other set.',
      emoji: '🦸🏽‍♀️',
      image: 'set_illustrations/isSubsetOf.jpeg',
      output: '<span class="boolean">true</span>',
    },
    [CONFIG.SET_METHODS.IS_SUPERSET_OF]: {
      code: `<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Yellowstone'</span>, <span class="string">'Yosemite'</span>, <span class="string">'Grand Canyon'</span>, <span class="string">'Zion'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Acadia'</span>, <span class="string">'Yosemite'</span>, <span class="string">'Glacier'</span>, <span class="string">'Rocky Mountain'</span>, <span class="string">'Zion'</span>]);
setA.<span class="method">isSupersetOf</span>(setB);`,
      description:
        'Check if all national parks in the second set are also in the first set.',
      emoji: '🏞️',
      image: 'set_illustrations/isSupersetOf.jpeg',
      output: '<span class="boolean">false</span>',
    },
    [CONFIG.SET_METHODS.SYMMETRIC_DIFFERENCE]: {
      code: `<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Miles Davis'</span>, <span class="string">'John Coltrane'</span>, <span class="string">'Thelonious Monk'</span>, <span class="string">'Charles Mingus'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Herbie Hancock'</span>, <span class="string">'John Coltrane'</span>, <span class="string">'Wayne Shorter'</span>, <span class="string">'Ornette Coleman'</span>, <span class="string">'Charles Mingus'</span>]);
setA.<span class="method">symmetricDifference</span>(setB);`,
      description: 'Which jazz musicians are in either set, but not in both?',
      emoji: '🎷',
      image: 'set_illustrations/symmetricDifference.jpeg',
      output: `<span class="set">Set</span>(5) {<span class="string">'Miles Davis'</span>, <span class="string">'Thelonious Monk'</span>, <span class="string">'Herbie Hancock'</span>, <span class="string">'Wayne Shorter'</span>, <span class="string">'Ornette Coleman'</span>}`,
    },
    [CONFIG.SET_METHODS.UNION]: {
      code: `<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Air Jordan'</span>, <span class="string">'Air Max'</span>, <span class="string">'Blazer'</span>, <span class="string">'Cortez'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Dunk'</span>, <span class="string">'Air Max'</span>, <span class="string">'Air Force 1'</span>, <span class="string">'React'</span>, <span class="string">'Cortez'</span>]);
setA.<span class="method">union</span>(setB);`,
      description: 'Which Nike sneakers are in either or both of the sets?',
      emoji: '👟',
      image: 'set_illustrations/union.jpeg',
      output: `<span class="set">Set</span>(7) {<span class="string">'Air Jordan'</span>, <span class="string">'Air Max'</span>, <span class="string">'Blazer'</span>, <span class="string">'Cortez'</span>, <span class="string">'Dunk'</span>, <span class="string">'Air Force 1'</span>, <span class="string">'React'</span>}`,
    },
  };
}
