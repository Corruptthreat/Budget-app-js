//budget_controller
var budgetController = (function() {
   //code
})();

//UI_controller
var UIController = (function() {
  var DOMstrings = {
        inputType : '.add__type',
        inputDescription : 'add__description',
        inputValue : '.add__value',
  };
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, //inc 0r exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    }
  };
})();

//global_module_controller
var controller = (function(budgetContrlr, UIContrl) {
  var ctrlAddItem = function() {
    //get_data
    var input = UIContrl.getInput();
    console.log(input);
    
  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
}})(budgetController, UIController);
