var price ,crust_price,tropping_price;
var total=0;
function findPizza(name,size,crust,topping,total){
    this.name= name;
    this.size=size;
    this.crust=crust;
    this.topping=topping;
    this.total =total;
}
$(document).ready(function(){
    $("button.submit").click(function(event){
        var sname = $(".name option:selected").val();
        var ssize = $("#size option:selected").val();
        var scrust = $("#crust option:selected").val();
        var stopping=[];


    });

});
