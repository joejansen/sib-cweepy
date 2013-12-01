// Start the application when the dom ready event has fired
$(document).ready(function () {

  /**

  1. Add an event listener for the button

  2. render a form inside the .header from that event.
     wrap the form with in an .add-cweep-form div to get
     the styles.

     The form should have an <input class='message'/>
     and a <a class='button'>Post'</a>

  3. Add a 'cweep' to the list when the form is submitted

  4. Remove the form

  5. Refactor

  **/
 var html = '<form class="add-cweep-form"><input type="text" class="add-cweep-form message" value="texteroo"><input type="submit" class="add-cweep-form button" value="Post"></form>';
   
 var messageSubmit = '<li><div class="avatar" style="background: url(img/shojberg.jpg); background-size: 50px 50px;"></div><div class="message">alert("YYYYEEEAAHHHH");</div></li>';
   
   
  $('.add-cweep').click(function(){
	  
	  $("header").append(html);
	  $('.add-cweep-form .button').click(function(){
		  
		  var text = $('.message').val();
		  /**
		  alert(text);
		  **/
		  $('.cweep-list').append(messageSubmit);
	  
	  });
  });
  


});
