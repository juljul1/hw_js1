
calculate.onclick = function(){
	var userBirthYear = parseFloat(inputDate.value); //id Инпута
    var currentYear = new Date().getFullYear();
	
    if (userBirthYear <= currentYear - 2000) {
               userBirthYear += 2000;
        }
    if (100 > userBirthYear && userBirthYear > currentYear - 2000) {
               userBirthYear += 1900;
        }
        
    if (isNaN(userBirthYear) || userBirthYear <= 1900 || userBirthYear >= currentYear){
           alert("Please check the year and try again");
           }
    else {
        userage.innerHTML = currentYear - userBirthYear;
           }
}

findMaxNumb.onclick = function(){
	var firstNumb = parseFloat(first.value); 
    var secondNumb = parseFloat(second.value);
	
    if (isNaN(firstNumb) || isNaN(secondNumb)){
           alert("Введите два числа.");
           max.innerHTML = '';
           }
    else if (firstNumb > secondNumb){
    	max.innerHTML = firstNumb;
    }
    else if (secondNumb > firstNumb){
    	max.innerHTML = secondNumb;
    }
    else {
        max.innerHTML = 'Numbers are equal';
           }
}

findEntranceNumb.onclick = function(){
	var entranceNumb = parseFloat(entrance.value); 
	
    if (isNaN(entranceNumb) || entranceNumb <= 0 || entranceNumb >= 81){
    	alert("Check the number from 1 till 80!");
    	entranceRes.innerHTML = "";
    }
    else if (entranceNumb > 0 && entranceNumb <= 20) {
    	entranceRes.innerHTML = 1;
    }
    else if (entranceNumb > 20 && entranceNumb < 65) {
    	entranceRes.innerHTML = 2;
    }
    else /*if (entranceNumb > 64 || entranceNumb <= 80)*/ {
    	entranceRes.innerHTML = 3;
    }
}

checkLogin.onclick = function(){
	var lodId = enterLogin.value; 
	var lodPass = enterPass.value; 
	
   if(lodId == 'ivan' && lodPass == '333' || lodId == 'ssss' && lodPass == '666' || lodId == 'gibs' && lodPass == '0000') {
   		checkUser.innerHTML = 'Welcome!';
   }
   else{
   	checkUser.innerHTML = "Login or Password is not defined!";
   }
}

findMaxNumber.onclick = function(){
	var firstNum = parseFloat(firstNumb.value); 
	var secondNum = parseFloat(secondNumb.value); 
	var thirdNum = parseFloat(thirdNumb.value); 
	
   if(isNaN(firstNum) || isNaN(secondNum) || isNaN(thirdNum)){
   		alert('Please enter correct numbers');
   		maxNumb.innerHTML = '';
   }
   else if(firstNum > secondNum && firstNum > thirdNum){
   		maxNumb.innerHTML = firstNum;
   }
   else if(secondNum > thirdNum){
   		maxNumb.innerHTML = secondNum;
   }
   else {
   		maxNumb.innerHTML = thirdNum;
   }
}