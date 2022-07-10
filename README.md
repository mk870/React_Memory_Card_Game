# React Memory Card Game (monstercardgame) 
<img src="https://i.ibb.co/VxVzgH4/Card-game-App.png" alt="Card-game-App" border="0">
This is a memory card game, to try to match 12 card monsters every turn.

## **Project Summary**
* Created single page application.
* Created 2 modals using reactDom.createPortal method. 
* Used css styles to flip the cards using different css properties.
* Also used useEffect and useState hooks to keep track of the flipped and matched cards.
* Finally used styled-components to style the entire application.

### **Resources Used**
***
**React Version**: 17.0.2  
**Languange used**: Javascript

**Packages**: react and styled-components    
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)

**Run app locally (Run)**: git clone (the url to the GitHub repo) then  npm install

**APIs**: none.

### **Cards Display**
***
Used  6 monster images from Google and displayed them using html and css after duplicating them to a total of 12.  
Used a single black card image as the backside of all the monster cards.  
Used conditional classnames and css to flip the cards every click event on unmatched cards.  
CSS properties applied for card flipping were:
* Rotate
* Transform
* Position
* Transition

Used 3 useEffect hooks to keep track of the card states like matched,flipped,cardpicks(firstpick and secondpick),gamestatus(if user has won or not) and turns played.
### **Modals**
***
After the game is won, a modal is used to show a congraturatory message using reactDom method called createPortal. Also another modal is used to show the user the rules of the game.

<img src="https://i.ibb.co/6nzpzQP/Card-game-App-1.png" alt="Card-game-App-1" border="0">

### **Productionization**
***
In this step, I ran the npm run build command to build the application for production and deployed it on netlify.  
**Live Application**: [MemoryMonsterCardGame](https://monstercardgame.netlify.app)

