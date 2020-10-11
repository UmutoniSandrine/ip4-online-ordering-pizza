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
            let sname = $(".name option:selected").val();
            let ssize = $("#size option:selected").val();
            let scrust = $("#crust option:selected").val();
            let stopping = [];
            $.each($("input[name='soppings']:checked"), function(){            
                stopping.push($(this).val());
           });
           console.log(ptopping.join(", "));
      switch(psize){
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
       switch(pcrust){
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
        total = price + crust_price + topping_value;
        console.log(total);
        sum = sum+ total;
        console.log(sum);
        var newOrder = new findPizza(pname, psize, pcrust,ptopping,total);

        $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
        console.log(newOrder);

       });
       $("button#checkout").click(function(){ 
        $("button#checkout").hide();
        $("button.addPizza").hide();
        $("button.deliver").slideDown(1000);
        $("#price").slideDown(1000);
        console.log("Your total bills is sh. "+sum);
        $("#pizzatotal").append("Your bill is sh. "+sum);
      });
      $("button.deliver").click(function(){
        $(".pizzatable").hide();
        $(".make-choice h2").hide();
        $(".d").slideDown(1000);
        $("#price").hide();
        $("button.deliver").hide();
        $("#pizzatotal").hide();
        var deliceryamount= sum+150;
        console.log("You will pay RWF. "+deliceryamount+" on delivery");
        $("#bill").append("Your bill plus delivery fee is: "+deliceryamount);
      });
      $("button#final-order").click(function(event){
        event.preventDefault();
  
        $("#pizzatotal").hide();
        $(".d").hide();
        $("button#final-order").hide();
        let deliceryamount= checkoutTotal+150;
        console.log("Final Bill is: "+deliceryamount);
        let person = $("input#name").val();
        let phone = $("input#phone").val();
        let location = $("input#location").val();
  
        if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
    
          $("#message").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliceryamount);
          $("#bill").hide();
          $("#message").slideDown(1200);
        }
        else {
          alert("Please fill in the details for delivery!");
          $(".d").show();
          $("button#final-order").show();
        }
      });
      event.preventDefault();
    
    });

});
