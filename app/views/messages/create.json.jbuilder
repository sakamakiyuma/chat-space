json.talk  @message.talk
json.id    @message.id
json.image @message.image.url
json.name  @message.user.name
json.date  @message.created_at.strftime("%Y/%m/%d %H:%M")   #日付がただしく表示されないけど先に進めます。7/10 strftime("%Y/%m/%d %H:%M")追記