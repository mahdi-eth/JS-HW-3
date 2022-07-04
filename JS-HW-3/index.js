const calculator = {
 result:0,
  operator: {
    jam: function(num1,num2) {
       result = parseFloat(num1) + parseFloat(num2);
       console.log(result);
    },
    zarb: function(num1,num2) {
      result = parseFloat(num1) * parseFloat(num2);
      console.log(result);
     },
     taghsim: function(num1,num2) {
      result = parseFloat(num1) / parseFloat(num2);
      console.log(result);
     },
     menha: function(num1,num2) {
      result = parseFloat(num1) - parseFloat(num2);
      console.log(result);
     }
  },
};

calculator.operator.jam(5,4);
calculator.operator.menha(15,6);
calculator.operator.zarb(5,6);
calculator.operator.taghsim(8,2);


