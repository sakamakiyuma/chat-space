$(function(){
  function buildHTML(message){
    var talk = message.talk ? `${message.talk}` : ""
    var image = message.image ? `<img class="lower-message__image" src=${message.image}>` : ""

    var html = `<div class="message" data-id="${message.id}">
    <div class="upper-message">
      <p class="upper-message__user-name">
        ${message.name}
      </p>
      <p class="upper-message__date">
        ${message.date}
      </p>
    </div>
    <div class="lower-message">
      <p class="lower-message__talk">
       <div>
        ${talk}
       </div>
      </p> 
    </div>  
     ${image}
    </div>`
    return html;
  }
  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('#new_message')[0].reset();
      $('.messages').animate({scrollTop: $('.message').last().offset().top + $('.messages').scrollTop()}, 1000, 'swing'); 
    })
   .fail(function(){
     alert('error');
   })
  .always(function(){
    $('.form__submit').prop('disabled', false);

 })
})
});