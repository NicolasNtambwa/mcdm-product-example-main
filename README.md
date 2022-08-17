# MCDM BOILER 

```
En opgave der samler op på det vi har arbejdet med i denne første uge.
```

## Vi har installeret software.

Vi har ikke benyttet alle værktøjer endnu, men det kommer vi til.

* [Postman](https://www.postman.com/)
* [MongoDB](https://www.mongodb.com/try/download/community)
* [MongoDBCompass](https://www.mongodb.com/try/download)
* [NodeJS](https://nodejs.org/en/)
* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)

Vi benytter visual code og der har vi fået installeret følgende plugins.
 * [eslint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
 * [JSON plugin](https://marketplace.visualstudio.com/items?itemName=ZainChen.json)

Vi har lært om formatet.
* [JSON](https://www.json.org/json-en.html)

Og javascript metoderne.
* [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
* [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

Vi kan i det hele taget finde en masse materiale via. [MDN](https://developer.mozilla.org/en-US/)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* [insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

Også noget om hvordan vi kan skrive dokumentation i ```markdown``` filnavn```.md``` filer.

* [Markdown](#markdown)

Og selvfølgelig terminalen.

* [Terminal](#terminal)

Og nå ja, cheetsheets.

* [Git](#git-cheatsheet)
* [Terminal](#terminal-cheatsheet)
* [Markdown](#markdown-cheatsheet)

Og i forhold til at selvstudere og ansvar for egen læring. Så kan følgende anbefales.

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).


## Teste version i terminalen.

Derudover har vi har lært, at hvis vi skal teste, hvilke versioner vi har af disse værktøjer, så kan vi i terminalen benytte kommandoer.

Hvis vi vil tjekke ```nodejs``` versionen, kan vi i terminalen skrive.

```
node -v
```
Og få et resultat der ligner dette, v16.13.0 men det behøver ikke være det samme.

Og vil vi tjekke om vi har ```git``` og hvilken version.
```
git --version
```

## Igang med Projektet.

### NPM, package.json og node_modules.

Vi har lært om ```package management```.

I vores tilfælde [NPM](https://www.npmjs.com/).

```NPM``` er en del af node, men skal stadig vedligeholdes.
Du vil som oftest, få en besked i terminalen, hvis den trænger til en opdatering.

Tjek ```NPM``` version.
```
npm -v
```

Vi benytter ```NPM``` til at installere pakker vi skal benytte til udvikling.

### Package.json
I første omgang skal vi gøre det muligt at installere pakker det gør vi ved at tilføje en ```package.json``` fil til roden af vores site.

Vi benytter en kommando i terminalen.

```
npm init -y
```

Vi benytter ```-y parameteret``` til at hurtigt at oprette filen, vi kan altid bagefter gå ind og rette til.

Nu har vi en ```package.json``` fil i roden af projektet.

### Eslint
I første omgang (boiler) er vi kun interesseret i at få pakker installeret der hjælper os under programmeringen og ikke tilføjer andet til projektet.

En [Eslint](https://eslint.org/) pakke som skal hjælpe os med at skrive bedre kode.

Vi ```initialisere``` pakken med en kommando i terminalen.

```
npm init @eslint/config
```
Herefter skal vi svare på en række spørgsmål.

Første spørgsmål ser således ud:

```
@eslint/create-config(y):
```

**Tryk RETURN for at sige JA (y)es** - *Vil du sige NEJ, så tykker du "n" og return*.

Husk i kan afbryde ved at trykke ```ctrl-c``` for at afbryde og starte forfra.

Nu skal i svare på spørgsmålene i forhold til det projekt i arbejder med.
*NB: jeg anbefaler at i tilsidst vælger, JS eller JSON, configurations filen når i bliver spurgt om det*.

Tilsidst installere guiden ```eslint@latest``` latest pakken. Altså den *nyeste* udgave af eslint.

Kig i ```package.json``` og se at der nu er en ```eslint``` entry under ```devDependencies```.

Kig også i roden af projektet, og se der er kommet en mappe der hedder ```node_modules```. Denne mappe indeholder den ```eslint``` pakke vi har installeret. Og den indeholder også  alle de pakker ```eslint``` benytter for at fungere.

Der er også kommet en ```.eslinttrc``` fil i roden af projektet. Denne fil benyttes til at configurere eslint til dette projekt. Det plugin vi har installeret i visuale code, ser vores fil og udføre sin opgave.
Det er muligt at oprette regler i ```.eslinttrc``` filen, således at alle der skriver i dette projekt, får samme retningslinjer.

**Fremover kan i genbruge** jeres ```.eslinttrc``` fil til ligende projekter, og nøjes med at installere eslint ved hjælp af ```eslint@latest``` kommandoen.

```
npm install eslint@latest --save-dev
```

Bemærk at vi benytte ```--save-dev parameteret```, dette gør vi for at få pakken, til at være under ```devDependencies``` i ```package.json``` filen.

Vi kommer til at arbejde **meget** mere med ```package.json``` og ```NPM```.


## Api, JSON.

Vi har være MEGET hurtigt over dette emne, og i er kastet i ilden.
Men vi har fået etableteret nogle gode byggesten til at arbejde med javascript og de ```objekter``` vi modtager enten via api eller vores egen configurations data. Og den data vil næsten altid være i form a ```JSON```.

### Fetch
Vi har arbejde med en simpel fetch.

```JavaScript

fetch('/data/profileList.json')
.then((response) => response.json())
.then((response) => {

    console.log('Data', response);

})
.catch((e) => {

    console.log('Her fanger vi eventuelle fejl. Prøv, at ændre filnavnet. udskriver selve fejlbeskeden. ->', e)

})

```

Her henter vi vores ```JSON``` data fra vores ```profileList.json``` fil.

### Json

Bruger:
```JSON

{
    "name" : "username",
    "surname" : "surname",
    "age" : 25,
}

```

```JSON``` skal være ```valid``` og derfor er det vigtigt at objekt ```attributterne``` er angivet med anførselse tegn ```"name":```
Værdien kan være et tal, eller streng eller endnu et array af objecter.

Produkt:
```JSON

{
    "title" : "nice shirt",
    "price" : 100,
    "colors" : ["red", "blue", "green"]
}

```

Og den data du modtager fra din fil kan være et array af ```objekter```.

Produkter:
```JSON

[
    {
        "title" : "Shirt",
        "price" : 100,
        "colors" : ["red", "blue", "green"]
    },
    {
        "title" : "Dress",
        "price" : 100,
        "colors" : ["red", "blue", "green"]
    }
]

```

Vi så hvordan man vedhjælp af [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) kunne returnere et stykke HTML med indsatte ```værdier/values```.

```JavaScript
let userTmpl = (profile) => `
    <div>
        <h1>${profile.name} ${profile.lastname}</h1>
        <img src="/assets/profileimages/${profile.avatar}" />
    </div>
`
```

Vi lærte lidt om at fordele ```ansvar/responsibility``` til forskellige funktioner.


```JavaScript
const getProfileList = () => {

    return fetch('/data/profileList.json')
    .then((response) => response.json())
    .catch((e) => {

        console.log('Her fanger vi eventuelle fejl. Prøv, at ændre filnavnet. udekriver selve fejlbeskeden. ->', e)

    })
}

getProfileList().then((profileList) => {
    console.log('2. Modtager Data og kalder funktionen "renderProfileList(profileList)" for at udskrive vores data/html')
    
    renderProfileList(profileList)
})

```

Ved at returnerer ```return fetch``` i ```getProfileList``` funktionen kan vi kalde den vedhjæp af  ```getProfileList()``` heri kan vi så rendere hele listen ved hjælp af en anden funktion ```renderProfileList(profileList)``` hvor vi sender resultatet ```profileList``` med som ```parameter```.

* document.querySelector
* document.querySelectorAll

Er det to metoder vi benytter til at få fat i et eller flere elementer(All).

Her får vi fat i det ```HTML``` element, der har ```id="prfileList"```.
```JavaScript
let profileListContainer = document.querySelector('#profileList')
```

Html
```HTML
<div id="profileList"></div>
```

Til sidst benyttede vi ```insertAdjacentHTML``` til at indsætte vores ```Template Literal``` html.

```JavaScript
profileListContainer.insertAdjacentHTML('beforeend', userTmpl(profile));
```

Som i primcippet er:

```JavaScript
    profileListContainer.insertAdjacentHTML('beforeend', `
        <div>
            <h1>${profile.name} ${profile.lastname}</h1>
            <img src="/assets/profileimages/${profile.avatar}" />
        </div>
    `);
```

Og som ender med at blive.
```HTML
    <div>
        <h1>Anders Christensen</h1>
        <img src="/assets/profileimages/avatar.jpg" />
    </div>
```

















