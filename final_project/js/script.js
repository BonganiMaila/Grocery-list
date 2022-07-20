$(function () {
  //declare the variables

  var $list, $newItemButton, $newItemForm, $newItemForm;
  var item = "";
  $list = $("ul");

  $newItemForm = $("#newItemForm"); //id form
  $newItemButton = $("#newItemButton"); //id button

  $("li")
    .hide()
    .each(function (index) {
      //hide items
      $(this)
        .delay(450 + index)
        .fadeIn(1600); //fade the items in
    });

  //Item Counter
  function updateCount() {
    var items = $("li[class!=complete]").length; //number of items on the list
    $("#counter").text(items); //counter id.
  }
  updateCount(); // call the function

  //SETUP FORM FOR THR NEW ITEMS

  $newItemButton.show(); //show the button
  $newItemForm.hide(); // hide the form
  $("#showForm").on("click", function () {
    // on click event to show form
    $newItemButton.hide(); // hide the button
    $newItemForm.show(); // show the form
  });

  // ADDING A NEW LIST ITEM
  $newItemForm.on("submit", function (e) {
    e.preventDefault(); // prevent the form from submitting
    var text = $('input:text').val(); //grab the value of the input text
    $list.append('<li>' + text + '</li>'); //add/append the list with new value/item
    $('input:text').val(''); //Empty the input field
    updateCount(); // call the function

    //CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
    $list.on('click','li',function(){
        var $this = $(this);
        var complete = $this.hasClass('complete');

        if(complete === true){
            $this.animate({
                opacity:0.0,paddingLeft:'+-180'
            },500,'swing',function(){
                $this.remove();
            });
        } else{
            item = $this.text();
            $this.remove();
            $list.append('<li class=\"complete\">' + item + '</li>').hide().fadeIn(300);
            updateCount(); // call the function
        }
    })
  });
});
