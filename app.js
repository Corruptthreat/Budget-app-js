//budget_controller
var budgetController = (function(id, description, value) {
  var Expense = function() {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var totalexp = [];
  var data = {
    allItems: {
      expData: [],
      incData: []
    },
    totals: {
      exp : 0,
      inc : 0
    }
  };
  return{
    addItem : function(type,des,val){
      var newItem,ID; 
      if(data.allItems[type].length>0)
      ID = data,allItems[type][data.allItems[type].length - 1].id + 1;
      else{
        ID = 0;
      }
      if(type=='exp'){
        newItem = new Expense(ID,des,value);
      }
      else if(type=='inc'){
        newItem = new Income(ID,des,value);
      }
      data.allItems[type].push(newItem);
      return newItem;
      
    },
    testing : function(){
      console.log(data);
    }
  };
})();

//UI_controller
var UIController = (function() {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, //inc 0r exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

//global_module_controller
var controller = (function(budgetContrlr, UIContrl) {
  var eventLisetener = function() {
    var DOM = UIContrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function() {
    var input, newItem;
    input = UIContrl.getInput();
    newItem = budgetContrlr.addItem(input.type,input.description,input.value);
  };
  return {
    init: function() {
      console.log("run");
      eventLisetener();
    }
  };
})(budgetController, UIController);
controller.init();
