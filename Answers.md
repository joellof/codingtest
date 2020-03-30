Joel Löfving

Svar på frågorna:

1. Jag skulle uppskatta att jag lagt ~20 timmar på det här projektet. Mycket av den tiden har gått åt till att förstå Javascript och HTML, eftersom jag aldrig använt mig av något av dessa språken tidigare. När jag väl kom igång så gick det fort att utveckla huvudfunktionerna, men de sista ~5 timmarna har jag lagt på att finslipa olika funktioner och försöka strukturera upp koden på olika sätt.

2. Jag har försökt abstrahera koden så mycket som möjligt, och låta olika funktioner kalla på varandra för att göra koden mer läslig. Tre olika event styr vad som händer i main.js; när en ny fil laddas upp i <form>-objektet i HTML-filen triggas change-eventet och texten läses in och processas. De två olika varianterna av texten (foobar och foobar med highlight) läggs på varsin plats i localStorage. När den sedan är redo att visas väljer användaren om hen vill se texten i som vanligt eller om foobar-orden ska highlightas (jag tyckte själv det var så jobbigt att sitta och leta efter alla orden, så jag tyckte det var lika bra att slänga med den funktionen), varpå de olika click-eventen triggar huruvida vanlig eller highlightad foobar ska presenteras. När sidan laddas om rensas click-eventen, och då visas en "vänt-text" tills en fil processats.

Är filen tom säger programmet det till användaren, och om fler än ett ord förekommer flest gånger hanteras det genom att dessa läggs i en array, varpå alla förekomster av dessa ord behandlas. Ett ord kan inte vara ett mellanslag och måste minst innehålla ett bokstavstecken eller en siffra för att räknas som mostCommon. När filerna skickas in är endast filtyperna .txt, .md och .rtf tillåtna.

Layouten hanteras i HTML med import från Bootstrap.

3. Om jag hade mer tid hade jag försökt utveckla backend-delen av projektet. Eftersom jag aldrig har gjort något av varken back- eller frontend förut tyckte jag det kändes bäst att fokusera bara på frontend, och göra något som jag blev riktigt nöjd med. Så det hade varit kul att lära sig backend med!

Men om vi tittar på vad som saknas i applikationen jag har utvecklat, så hade jag velat modulärisera den mer. Jag har skapat många funktioner, och att kunna anropa dem från olika filer hade gjort min kod mycket mer lättförstådd. Vi fick också ut en testfil av typen .file, och det hade varit coolt att se om jag kunde lyckas hantera den också.

Jag har försökt att skapa ett någorlunda generellt sätt att återinföra snygga radbrytningar efter att strängen varit en array, men har bara lyckats för vissa texter och inte heller där med särskilt gott resultat.

I övrigt antar jag att min kod inte är skriven enligt konstens alla regler, eftersom jag under min tid arbetandes på projekt ihop med folk som är mer bevandrade inom kod har förstått att det ofta finns en viss kotym för hur man bör skriva, så att saker inte bara fungerar utan också blir både lättläst och välfungerande. Det är mer sånt jag hoppas på att lära mig om hos er!

4. Jättekul uppgift! Den gav mig en bra utgångspunkt för att börja lära mig Javascript och HTML. Hoppas resultatet är givande för er med!
