import { CONFIG } from '../config/constants.js';

export function getSetExamplesData() {
  return {
    [CONFIG.SET_METHODS.DIFFERENCE]: {
      code: `<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Chocolate'</span>, <span class="string">'Neapolitan'</span>, <span class="string">'Strawberry'</span>, <span class="string">'Vanilla'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Cookies and Cream'</span>, <span class="string">'Neapolitan'</span>, <span class="string">'Pistachio'</span>, <span class="string">'Rocky Road'</span>, <span class="string">'Vanilla'</span>]);
setA.<span class="method">difference</span>(setB);`,
      description: `The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference" target="_blank" rel="noopener noreferrer"><strong>difference()</strong></a> method returns a new set containing only the elements that are in the first set but not in the second one.`,
      example:
        'Which ice cream flavors are in the first set, but not in the second one?',
      emoji: '🍦',
      output: `<span class="set">Set</span>(2) {<span class="string">'Chocolate'</span>, <span class="string">'Strawberry'</span>}`,
    },
    [CONFIG.SET_METHODS.INTERSECTION]: {
      code: `<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Toyota'</span>, <span class="string">'Honda'</span>, <span class="string">'Ford'</span>, <span class="string">'Chevrolet'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'BMW'</span>, <span class="string">'Honda'</span>, <span class="string">'Kia'</span>, <span class="string">'Ford'</span>, <span class="string">'Chevrolet'</span>]);
setA.<span class="method">intersection</span>(setB);`,
      description: `The <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection" target="_blank" rel="noopener noreferrer"><strong>intersection()</strong></a> method returns a new set containing only the elements that are present in both the original set and a second set.`,
      example: 'Which cars are in both sets?',
      emoji: '🚗',
      output: `<span class="set">Set</span>(3) {<span class="string">'Honda'</span>, <span class="string">'Ford'</span>, <span class="string">'Chevrolet'</span>}`,
    },
    [CONFIG.SET_METHODS.IS_DISJOINT_FROM]: {
      code: `<span class="keyword">const</span> setA = <span class="keyword">new</span> Set([<span class="string">'Lions'</span>, <span class="string">'Tigers'</span>, <span class="string">'Bears'</span>, <span class="string">'Eagles'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> Set([<span class="string">'Panthers'</span>, <span class="string">'Tigers'</span>, <span class="string">'Wolves'</span>, <span class="string">'Hawks'</span>, <span class="string">'Eagles'</span>]);
setA.<span class="method">isDisjointFrom</span>(setB);`,
      description: `The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom" target="_blank" rel="noopener noreferrer"><strong>isDisjointFrom()</strong></a> method checks whether two sets share no elements in common and returns true if they don’t overlap, otherwise it returns false.`,
      example:
        'Check if the first set has no NFL mascots in common with the second set.',
      emoji: '🏈',
      output: '<span class="boolean">false</span>',
    },
    [CONFIG.SET_METHODS.IS_SUBSET_OF]: {
      code: `<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Superman'</span>, <span class="string">'Batman'</span>, <span class="string">'Wonder Woman'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Superman'</span>, <span class="string">'Batman'</span>, <span class="string">'Wonder Woman'</span>, <span class="string">'Flash'</span>, <span class="string">'Green Lantern'</span>]);
setA.<span class="method">isSubsetOf</span>(setB);`,
      description: `The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf" target="_blank" rel="noopener noreferrer"><strong>isSubsetOf()</strong></a> method returns true if every element in the original set also exists in the provided set; otherwise, it returns false.`,
      example:
        'Check if all superheroes in the first set are also in the other set.',
      emoji: '🦸🏽‍♀️',
      output: '<span class="boolean">true</span>',
    },
    [CONFIG.SET_METHODS.IS_SUPERSET_OF]: {
      code: `<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Yellowstone'</span>, <span class="string">'Yosemite'</span>, <span class="string">'Grand Canyon'</span>, <span class="string">'Zion'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Acadia'</span>, <span class="string">'Yosemite'</span>, <span class="string">'Glacier'</span>, <span class="string">'Rocky Mountain'</span>, <span class="string">'Zion'</span>]);
setA.<span class="method">isSupersetOf</span>(setB);`,
      description: `The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf" target="_blank" rel="noopener noreferrer"><strong>isSupersetOf()</strong></a> method checks if a set includes all the items from another set, meaning the second set’s items are fully contained within the first one.`,
      example:
        'Check if all national parks in the second set are also in the first set.',
      emoji: '🏞️',
      output: '<span class="boolean">false</span>',
    },
    [CONFIG.SET_METHODS.SYMMETRIC_DIFFERENCE]: {
      code: `<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Miles Davis'</span>, <span class="string">'John Coltrane'</span>, <span class="string">'Thelonious Monk'</span>, <span class="string">'Charles Mingus'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Herbie Hancock'</span>, <span class="string">'John Coltrane'</span>, <span class="string">'Wayne Shorter'</span>, <span class="string">'Ornette Coleman'</span>, <span class="string">'Charles Mingus'</span>]);
setA.<span class="method">symmetricDifference</span>(setB);`,
      description: `The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference" target="_blank" rel="noopener noreferrer"><strong>symmetricDifference()</strong></a> method returns a new set containing only the elements that are in either set, but not in both.`,
      example: 'Which jazz musicians are in either set, but not in both?',
      emoji: '🎷',
      output: `<span class="set">Set</span>(5) {<span class="string">'Miles Davis'</span>, <span class="string">'Thelonious Monk'</span>, <span class="string">'Herbie Hancock'</span>, <span class="string">'Wayne Shorter'</span>, <span class="string">'Ornette Coleman'</span>}`,
    },
    [CONFIG.SET_METHODS.UNION]: {
      code: `<span class="keyword">const</span> setA = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Air Jordan'</span>, <span class="string">'Air Max'</span>, <span class="string">'Blazer'</span>, <span class="string">'Cortez'</span>]);
<span class="keyword">const</span> setB = <span class="keyword">new</span> <span class="set">Set</span>([<span class="string">'Dunk'</span>, <span class="string">'Air Max'</span>, <span class="string">'Air Force 1'</span>, <span class="string">'React'</span>, <span class="string">'Cortez'</span>]);
setA.<span class="method">union</span>(setB);`,
      description: `The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union" target="_blank" rel="noopener noreferrer"><strong>union()</strong></a> method returns a new set containing all elements from both sets.`,
      example: 'Which Nike sneakers are in either or both of the sets?',
      emoji: '👟',
      output: `<span class="set">Set</span>(7) {<span class="string">'Air Jordan'</span>, <span class="string">'Air Max'</span>, <span class="string">'Blazer'</span>, <span class="string">'Cortez'</span>, <span class="string">'Dunk'</span>, <span class="string">'Air Force 1'</span>, <span class="string">'React'</span>}`,
    },
  };
}
