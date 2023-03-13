function saturdayFun(activity = "roller-skate") {
   return `This Saturday, I want to ${activity}!`;
}

function mondayWork(task = "go to the office") {
   return `This Monday, I will ${task}.`;
}

function outer(greeting, msg = "It's a fine day to learn") {
   // 2
   const innerFunction = function (name, lang = "Python") {
      // 3
      return `${greeting}, ${name}! ${msg} ${lang}`; // 4
   };
   return innerFunction("student", "JavaScript"); // 5
}

// console.log(outer("Good morning", "let's learn"));

function wrapAdjective(symbol = "*") {
   return function inner(param = "special") {
      return `You are ${symbol}${param}${symbol}!`;
   };
}
const encouragingPromptFunction = wrapAdjective();

console.log(encouragingPromptFunction("a dedicated programmer"));
