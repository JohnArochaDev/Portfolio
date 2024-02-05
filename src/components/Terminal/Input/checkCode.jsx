

export default function checkCode(userInput) {

  let codex

  userInput.find((code) => {  //write a function that looks through userInput with .find
    if (code === 'help') {
      // Run code below
      codex = true;
      // console.log(codex)
      return true;
    }else if (code === 'all') {
      // Run code below
      codex = true;
      // console.log(codex)
      return true;
    }else if (code === 'projects') {
      // Run code below
      codex = true;
      // console.log(codex)
      return true;
    }else if (code === 'projects 1') {
      // Run code below
      codex = true;
      // console.log(codex)
      return true;
    }else if (code === 'projects 2') {
      // Run code below
      codex = true;
      // console.log(codex)
      return true;
    }else if (code === 'projects 3') {
      // Run code below
      codex = true;
      // console.log(codex)
      return true;
    }else if (code === 'about me') {
      // Run code below
      codex = true;
      // console.log(codex)
      return true;
    }else if (code === 'npm i') {
      // Run code below
      codex = true;
      // console.log(codex)
      return true;
    }else if (code === 'hire me') {
      // Run code below
      codex = true;
      // console.log(codex)
      return true;
    }else if (code === 'clear') {
      // Run code below
      codex = true;
      // console.log(codex)
      return true;
    }else {
      codex = false;
      console.log(codex)
      return false;
    }
  });
}