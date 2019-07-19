//budget_controller
var budgetController = (function(){

})();


//UI_controller
var UIController = (function(){
   //code
})();

//global_module_controller 
var controller = (function(budgetContrlr, UIContrl){
     var ctrlAddItem = function(){
            //get_data
           //add item to budget-ctrl
           //update UI
           //Calculate the budget
           //display the budget
        }
            document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);
       
        document.addEventListener('keypress',function(event){
          if(event.keyCode===13 || event.which===13){
              ctrlAddItem();
          }
        });
})(budgetController,UIController);