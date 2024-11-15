function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code herelet result = '';
let roman = ""
	for(let key in obj){
		while(num >== obj[key][1]){
			roman += obj[key][0]
			roman -= obj[key][0]
		}
		if(num == 0)
			return ans
			
		
	}
      
module.exports = convertToRoman
