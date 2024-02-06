

export default function checkCode(userInput) {
  let codex
  userInput.find((code) => {  //write a function that looks through userInput with .find
    userInput.find((code) => {  //write a function that looks through userInput with .find
      switch (code) {
        case 'help':
          // Run code below
          codex = true;
          console.log(codex)
          return true;
        case 'all':
          // Run code below

          return true;
        case 'projects':
          // Run code below

          return true;
        case 'projects 1':
          // Run code below

          return true;
        case 'projects 2':
          // Run code below

          return true;
        case 'projects 3':
          // Run code below

          return true;
        case 'about me':
          // Run code below

          return true;
        case 'npm i':
          // Run code below

          return true;
        case 'hire me':
          // Run code below

          return true;
        case 'clear':
          // Run code below

          return true;
        default:
          codex = false;
          console.log(codex)
          return false;
      }
    });
    return false
  })
}