$(document).on('turbolinks:load', function() { 
  $(function() {
  
    var search_list = $("#user_search_result");
    var membar_list = $("#member_search_result");
    
    function appendUser(user) {
      var html = `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${user.name}</p>
                    <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                  </div>`
      search_list.append(html);
    }
    
    function appendErrUserToHTML(user) {
      var html = `<li>
                    <div ='listview__element--right-icon'>${ user }</div>
                  </li>`
      search_list.append(html);
    }

    function appendMembers(name, user_id) {
      var html = `<div class='chat-group-user clearfix js-chat-member' id='chat_group_user_22'>
                  <input name='group[user_ids][]' type='hidden' value="${user_id}">
                  <p class='chat-group-user__name'>${name}</p>
                  <a class='user_search_remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                  </div>`
      membar_list.append(html);
    }
  
    $(function() {
      $("#user-search-field").on("keyup", function() {
        var input = $("#user-search-field").val();
        if(input.length == 0){
          $("#user_search_result").empty();
        }else{
        $.ajax({
          type: 'GET',
          url: '/users',
          data: { keyword: input },
          dataType: 'json'
        })
           
        .done(function(users) {
          $("#user_search_result").empty();
           if(users.length !== 0) {
            users.forEach(function(user){
              appendUser(user);
            });
          }else {
            appendErrUserToHTML("一致するユーザーはいません");
          }
        })
        .fail(function() {
          alert("ユーザー検索に失敗しました");
        })}
      });
    });
      $(document).on("click", '.chat-group-user__btn--add', function() {
        var name = $(this).attr("data-user-name");
        var user_id = $(this).attr("data-user-id");
        $(this).parent().remove();
        appendMembers(name, user_id);
      });

      $(document).on("click", '.user_search_remove', function() {
        console.log("test");
        $(this).parent().remove();
      });
  });  
});