

$(document).ready(function(){

    function pizzaPriceSum(){
        let sizeIndex = $( "#size" )[0].selectedIndex
        let sizePrice  =  $( "#size option" )[sizeIndex].getAttribute('data-price')

        let pizzaIndex = $( "#pizza" )[0].selectedIndex
        let pizzaPrice = $( "#pizza option" )[pizzaIndex].getAttribute('data-price')

        let index = $( "#sauce" )[0].selectedIndex
        let price  =  $( "#sauce option" )[index].getAttribute('data-price')
      
        $( "#price").text(function(text){
            text = parseInt(pizzaPrice) + parseInt(price) + parseInt(sizePrice)
            return text
        })
    }

    $( "#pizza" ).selectmenu({
        change: function( ) {
            $( "#size" ).removeAttr( "disabled" )
            $( "#size" ).selectmenu( "refresh" )
            pizzaPriceSum()
        }
      });

    $( "#size" ).selectmenu({
        change: function( ) {
            $( "#sauce" ).removeAttr( "disabled" )
            $( "#sauce" ).selectmenu( "refresh" )
            pizzaPriceSum()
        }
      });

    $( "#sauce" ).selectmenu({
        change: function( ) {
            $( "input[type=submit]" ).removeAttr( "disabled" )
            $( "input[type=submit]" ).button( "refresh" )
            pizzaPriceSum()
        }
      });

    $( "input[type=submit]" ).button()
    
    $(".form").submit(function(e) {
        e.preventDefault();
        let pizza =  $( "#pizza" ).val()
        let size =  $( "#size" ).val()
        let sauce = $( "#sauce" ).val()
        let sum = $( "#price").text()

        $("#modal-pizza").text(pizza)
        $("#modal-size").text(size)
        $("#modal-sauce").text(sauce)
        $("#modal-sum").text(sum)
      
        $('.popup-fade').fadeIn()
    })

    /*Modal close*/
   
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut()
        location.reload(true);
		return false;
	});		
 
  });