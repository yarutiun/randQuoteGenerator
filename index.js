const beginnings = [
    "Believe in yourself",
    "You are capable of greatness",
    "Dream big",
    "Stay focused",
    "Never give up",
    "Embrace challenges",
    "Keep pushing forward",
    "Seize the day",
    "Find your passion",
    "Create your destiny"
];

const middles = [
    "with determination",
    "and perseverance",
    "against all odds",
    "even when it's hard",
    "with unwavering faith",
    "with a positive mindset",
    "with relentless effort",
    "through adversity",
    "with courage",
    "with resilience"
];

const endings = [
    "and you will succeed",
    "and greatness will follow",
    "and dreams will come true",
    "and nothing can stop you",
    "and you'll conquer all",
    "and you'll achieve your goals",
    "and you'll inspire others",
    "and your future will be bright",
    "and miracles will happen",
    "and the world will be yours"
];

const asciiArt = [
    `_______
    < Keep    >
    < It      >
    < Simple! >
      -------
             \\   ^__^
              \\  (oo)\\_______
                 (__)\\       )\\/\\
                     ||----w |
                     ||     ||
      `,
      `
      _________________
    < Stay simple,     >
    < stay focused.    >
      -----------------
             \\    ^__^
              \\   (oo)\\_______
                 (__)\\       )\\/\\
                     ||----w |
                     ||     ||
      `,
      `
      ____________
    < Simplify!   >
      ------------
             \\   ^__^
              \\  (oo)\\_______
                 (__)\\       )\\/\\
                     ||----w |
                     ||     ||
    `,
    `
      ____________
    < Keep on rolling!   >
      ------------
             \\   ^__^
              \\  (oo)\\_______
                 (__)\\       )\\/\\
                     ||----w |
                     ||     ||
    `,
    `
      ____________
    < You can do it!   >
      ------------
             \\   ^__^
              \\  (oo)\\_______
                 (__)\\       )\\/\\
                     ||----w |
                     ||     ||
    `,
     `     ___________  
    '._==_==_=_.' 
    .-\:      /-. 
   | (|:.     |) | 
    '-|:.     |-' 
      \\::.    /   
       '::. .'    
         ) (      
       _.' '._    
      `];
      
const randomAsciiArt = asciiArt[Math.floor(Math.random() * asciiArt.length)];

function decideOnQuote(phrase) {
    let index = Math.floor(Math.random() * 10);
    return(index);
}


function buildMessage() {
        let begin, mid, end;
        let mesageString;
        begin = decideOnQuote(beginnings);
        mid = decideOnQuote(middles);
        end = decideOnQuote(endings);
        mesageString = `${beginnings[begin]} ${middles[mid]} ${endings[end]}!`;
        return mesageString;
}

function outputMesage() {
    let motivation = buildMessage();
    console.log('You motivational message for today is:\n');
    console.log(motivation);
    console.log('You also deserve a nice ASCII art!');
    console.log(randomAsciiArt);
}

outputMesage();