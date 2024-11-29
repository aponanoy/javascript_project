                                                      // problem 1
function fixWeightMachne(a) {
  const result = [];

  if (!Array.isArray(a)) return "invalid input";
  if (a.length <= 0) return [];
  for (let i = 0; i < a.length; i++) {
    const item = a[i];

    if (typeof item === "number") {
      if (item >= 1) result.push(item);
      
    }
  }
  return result;
}
console.log(fixWeightMachne([10,-5,"apon",50,null]));


                                                      // problem 2


function countVowels(args){
  let vowels="aeiouAEIOU";
  let jokfol=0;
  if(typeof(args)==="string"){

  
  for(let b =0; b < args.length;b++){
      let Index=args[b];
     
      if(vowels.includes(Index)){
          jokfol= jokfol+1
      }
  }
 return jokfol;
}
else{
  console.log("Invalid Input");
  
}

  };
 

console.log(countVowels("Bangladesh"));



                                                          // problem 3



function evaluateResult(args) {
  let folafol = [];

  if (!Array.isArray(args)) return "invalid input";

  for (let i = 0; i < args.length; i++) {
      let array = args[i];
      if (typeof array !== "number") {
          folafol.push("Invalid");
          continue; 
      }
      if (array < 50) {
          folafol.push("F");
      } 
      if (array >= 50 && array <= 59) {
          folafol.push("D");
      } 
       if (array >= 60 && array <= 69) {
          folafol.push("C");
      }
       if (array >= 70 && array <= 79) {
          folafol.push("B");
      }
      if (array >= 80 && array <= 89) {
          folafol.push("A");
      } 
      
      if (array >= 90) {
          folafol.push("A+");
      }
  }

  return folafol;
}

console.log(evaluateResult([66,70,80,95,null]));

                                                                // problem 4


function createParfectPassword(args) {
  let password = "";
  
  if (typeof args !== "object" || args === null || !args.name || !args.year) {
      return "Invalid Input";
  }
  
  if (typeof args.name !== "string" || args.name.trim() === "") {
      return "Invalid Input";
  }
  
  if (typeof args.year !== "number" || args.year < 1000 || args.year > 9999) {
      return "Invalid Input";
  }
  
  for (let i = 0; i < args.name.length; i++) {
    let b= args.name[i];
      if (i === 0) {
          password = password + b.toUpperCase();  
      } else {
          password = password + b;
      }
  }
  
  password = password + args.year;  
  return password;
}
console.log(createParfectPassword({name:"apon",year:2024}));



                                                                        // problem 5 



function calculateMonthlyExpenses(sav, expense) {
  let totalAmmount = 0;
  if(Array.isArray(sav) && typeof(expense)==="number"){

  for (let i = 0; i < sav.length; i++) {
      let array=sav[i];
    totalAmmount = totalAmmount + array;
  }
  const baay = totalAmmount - expense;
  if (baay <= 0) {
    return "Some more money";
  }
  return baay;
}
else{
  return "invalid input";
}
}
console.log(calculateMonthlyExpenses([4000,60,7000], 11000));
