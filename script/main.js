

$(document).ready(function(){

    $( "#pizza" ).selectmenu({
        change: function( ) {
            $( "#size" ).removeAttr( "disabled" )
            $( "#size" ).selectmenu( "refresh" );
        }
      });

    $( "#size" ).selectmenu({
        change: function( ) {
            $( "#sauce" ).removeAttr( "disabled" )
            $( "#sauce" ).selectmenu( "refresh" );
        }
      });

    $( "#sauce" ).selectmenu({
        change: function( ) {
            $( "input[type=submit]" ).removeAttr( "disabled" )
            $( "input[type=submit]" ).button( "refresh" );
        }
      });

    $( "input[type=submit]" ).button();
    
    $(".form").on("submit", (event) => {
        event.preventDefault();
    })
   
  
  });