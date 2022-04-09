console.log("Welcome to Javascript!");
// creating an array
var array =["name", 50,"designation","salary"];


// displaying array 
console.log("=======================Method 1=======================");
var iterater = array.values();

for(let elements of iterater){
    console.log(elements);
}
console.log("=======================Method 2========================");
array.forEach(function(arrayValues){
    console.log(arrayValues)
})

console.log("=======================Method 3========================");

for(let i=0; i<array.length;i++)
{
    document.write((i+1)+ " : " + array[i]);
}

// insert an element in array
// 
console.log("=======================Adding three elements========================");
array.push("success","error","jug");
console.log(array);

console.log("=======================removing element in last index array.pop()========================");
array.pop();
console.log(array);

console.log("=======================removing element in last index array.pop()========================");
array.pop();
console.log(array);

console.log("=======================removing element in last index array.pop()========================");
array.pop();
console.log(array);
console.log("======================= method 1 convert array to object using {array} ========================");

console.log({array});
console.log("======================= method 2 convert array to objectusing {...array}  console.log({...array}); ========================");

console.log({...array});
console.log("====================== Is string comparison is possible?  console.log(poorani >arul); ========================");
console.log("poorani" >"arul"); // true 

console.log("====================== console.log('1'+5);   ========================");
console.log('1'+5);  

console.log("====================== console.log('1'>5); ========================");
console.log('1'>5);  

console.log("====================== console.log('1'===1); Strict equality ========================");
console.log('1'===1);

console.log("====================== console.log(true===1);  Strict equality ========================");
console.log(true===1); 
console.log("====================== console.log('1'==1);  Loss  equality ========================");
console.log("1"==1);

console.log("====================== console.log('1'==1); double equal equality ========================");
console.log('1'==1);

console.log("====================== console.log('1'==1);   double equal  equality ========================");
console.log("1"==1);
console.log("====================== console.log(true==1);  Strict equality ========================");
console.log(true==1); 

console.log("====================== TERNARY OPERATOR ========================");
let age = 24;

console.log("====================== age >18 ? adult : child ========================");

let type= age>18?"adult":"child";
console.log("====================== logical operator && || ! ========================");
var newAge =40;
let height = 160;
let weight = 100;

let eligiblePerson = height<=160 && weight<=100 && newAge<=50;
let statusResult = eligiblePerson;

console.log("======================  let eligiblePerson = height<=160 && weight<=100 && newAge<=50; console.log(eligiblePerson); ========================");
console.log(eligiblePerson);

console.log("======================eligiblePerson  console.log(statusResult); ========================");
console.log(statusResult);

console.log("======================eligiblePerson using not operator console.log(!statusResult); ========================");
console.log(!statusResult);

console.log("====================== logical and non boolean values ========================");
console.log("====================== Falsy statement : // null //undefined //0 //false //Nan //'' -> with in double quotes === =====================");
console.log("====================== Anything that is not falsy is truthy ========================");
console.log("====================== console.log (false || true); ========================");
console.log (false || true);

console.log("====================== console.log (false || 'Arul'); ========================");
console.log (false || "Arul");

console.log("====================== console.log (false || 4); ========================");
console.log (false || 4);


console.log("====================== console.log (false || false ||4 ); // 1st return false so check 3rd variable . o/p is 4 ========================");
console.log (false || false ||4 );


console.log("====================== console.log (true || false ||4 );   1st two statement is true so it does not consider second statement ========================");
console.log (true || false ||4 );

console.log("====================== console.log (false || 4); ========================");
console.log (false || 4);


console.log("************************************** create a object (with nested object ) **************************************");

// object 
let oldPerson = {

    name :"poorani",
    age : 24,
    degree : "ECE",
    isAlive : true,
    hobbies : ["numestics","watching films","painting"],
    address :{
        street : "Koyambedu",
        city : "Chennai",
        state : "Tamilnadu",
    },
  

};

console.log("====================== display object with key and values ========================");
console.log({...oldPerson});
console.log("========== display key and values using function - user()--> console.log({...person}) ===============");
function user(){
    console.log({...oldPerson});
}

console.log("********************************* OOP - object, nested object and create a function in obj *********************************");

// object 
let person = {

    name :"poorani",
    age : 24,
    degree : "ECE",
    isAlive : true,
    hobbies : ["numestics","watching films","painting"],
    address :{
        street : "Koyambedu",
        city : "Chennai",
        state : "Tamilnadu",
    },
    sex : "female",
    newUser: function(){
        let msg = `Hi, my name is ${this.name}, I completed ${this.age} I am staying ${this.address.street} at ${this.address.city}`;
        console.log(msg);
        
    },

};
person.newUser();

console.log("********************************* FACTORY FUNCTION - created *********************************");

function createUser(newUserName) // camelCase 
{
    return {
        newUserName, // name : name // to overcome this we used directly the variable name 
        
        greeting()
        {
            let msg= `hi this is ${this.newUserName}`;
            console.log(msg);
        }
      };
}

console.log("********************************* FACTORY FUNCTION - user poorani *********************************");
let poorani = createUser("poorani");
poorani.greeting();

console.log("********************************* FACTORY FUNCTION - user vijay *********************************");
let vijay = createUser("vijay");
vijay.greeting();


console.log("********************************* CONSTRUCTOR  FUNCTION (using pascal case for readabilty ) *********************************");

function Newuserfunction(name)
{
    this.name= name;
    this.hi = function()   {
        console.log(`Hi, I'am ${this.name}`);
    }
}
// constructor creater
let Newperson = new Newuserfunction("poorani");
Newperson.hi();
debugger;
console.log(Newperson.constructor);

console.log("********************** delete.username // it delete username in the array ******************");

console.log("*********** array ************");

const Array = ["tomato rice","curd rice", "chicken biryani", "tomato rice"];

console.log("*********** console.log(Array); displaying array ************");
console.log(Array);

console.log("*********** console.log(Array); displaying array ************");

Array.push('1).Sambar rice','2).Rasam');

console.log("*********** add sambar rice and rasam in end of the array  -- Array.push() ************");
console.log(Array);

console.log("*********** add biryani and ice cream in begining the array --  Array.unshift() ************");
Array.unshift("3. Biryani","4. Ice cream");
console.log(Array);

console.log("****************** add snacks inbetween the array Array.splice(position number, deleted- 0, item name)***************");
Array.splice(2,0,"Snacks-splice method ");
console.log(Array);

console.log("****************** finding in array - indexOf(tomato rice) - place 3 **********");
console.log(Array.indexOf("tomato rice"));

console.log("****************** finding in array - lastIndexOf(tomato rice) - place 6th **********");
console.log(Array.lastIndexOf("tomato rice"));

console.log("*********** how to check the array value if contain or not Array.indexOf(Grapes)!==-1 / grapes is not contain in the Array / and case senstive (tomato rice) =! (Tomato rice)*************");

console.log(Array.indexOf("tomato rice")!==-1);

console.log("=====================console.log(Array.include() --> which it is include or not ============= Array.includes('Banana')");

console.log(Array.includes("Banana"));

console.log("=====================finding an element in Array =============");


