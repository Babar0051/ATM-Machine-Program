import inquirer from "inquirer";

let myBalance = 10000; // Dollars
let myPin = 12345;

let pinAnswer = await inquirer.prompt([
        {
            name : "pin",
            message : "Enter Your Pin Code",
            type : "number"
        }
    ])
if (pinAnswer.pin === myPin){
    console.log("Pin Code is correct, login successfully!!!"); 
///////////////////////////////////////// 
//    console.log (`Your Current Account Balance is ${myBalance}`)

let operationAns = await inquirer.prompt ([
        {
            name :"operation",
            message: "Please Select Option",
            type : "list",
            choices : ["Withdraw Amount", "check balance"]
        },
]);

if (operationAns.operation === "Withdraw Amount"){
    let withdrawAns = await inquirer.prompt([
        {
            name: "withdrawMethod",
            type: "list",
            message: "Select a withdrawal method",
            choices: ["Fast Cash", "Enter Amount"]
        }
    ])
    
    if (withdrawAns.withdrawMethod === "Fast Cash"){
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "Select Amount",
                choices: [1000, 2000, 5000, 10000]
            }
    ])
    if(fastCashAns.fastCash > myBalance){
        console.log("insuficiant Balance");
    }
    else {
        myBalance -= fastCashAns.fastCash
        console.log(`${fastCashAns.fastCash} withdraw sucessfully`);
        console.log(`Your Remaining Balance is : ${myBalance}`);
    }
}

    else if (withdrawAns.withdrawMethod === "Enter Amount") {

        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",  
                message: "Enter the amount to withdraw:",
            }
        ])

           if (amountAns.amount > myBalance) {
            console.log ("Insufficient Balance");
        } 
        else {myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} Withdraw Sucessfully`);
        console.log(`Your Remaining Balance is :  ${myBalance}`)
        }

    }
    

}    
else if (operationAns.operation === "check balance") {
    console.log(`Your Account Balanc is : ${myBalance}`);
}
} 

else { console.log("Incorrect Pin Code...."); }

// else{
//     console.log("Pin is incorrect, Try Again!");
// }
