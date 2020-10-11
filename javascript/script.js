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
        $.each($("input[name='toppings']:checked"), function(){
            stopping.push($(this).val());
        });
        console.log(stopping.join(", "));
        switch(ssize){
            case "0":
              price =0;
            break;
            case "large":
               price = 20,000(RWF);
               console.log(price);
             break;
             case "medium":
               price = 10,000(RWF);
               console.log("The price is "+price);
             break;
             case "small":
               price = 5,000(RWF);
               console.log(price);
            default:
               console.log("error"); 
        }
        switch(scrust){
            case "0":
              crust_price = 0;
            break;
            case "Crispy":
              crust_price = 10,000(RWF);
            break;
            case "Stuffed":
              crust_price = 5,000(RWF);
            break;
            case "Gluten":
              crust_price = 2,500(RWF);
            break;
            default:
              console.log("No price"); 
        }
        var topping_value = stopping.length*50;
        console.log("toppins value" + topping_value);

        if((ssize == "0") && (scrust == "0")){
            console.log("nothing selected");
            $("button.submit").show();
            $("#More-about-delivery").show();
            $("div.make-choice").hide();
            alert(" pizza size and crust"); 
        }else{
            $("button.submit").hide();
            $("#More-about-delivery").hide();
            $("div.make-choice").slideDown(1000);
        }
        total = price + crust_price + topping_value;
        console.log(total);
        var sum =0;
        sum = sum + total;
        $("#nameofpizza").html($(".name option:selected").val());
        $("#sizeofpizza").html( $("#size option:selected").val());
        $("#crustofpizza").html($("#crust option:selected").val());
        $("#toppingofpizza").html(stopping.join(", "));
        $("#totalmoney").html(total);
        
        $("button.addPizza").click(function(){
            let pname = $(".name option:selected").val();
            let psize = $("#size option:selected").val();
            let pcrust = $("#crust option:selected").val();
            let ptopping = [];
            $.each($("input[name='toppings']:checked"), function(){            
                ptopping.push($(this).val());
           });
       });
    



    });

});
