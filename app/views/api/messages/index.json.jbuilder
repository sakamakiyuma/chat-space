json.array! @new_messages do |message|
    json.talk message.talk
    json.image message.image.url
    json.created_at message.created_at.strftime("%Y/%m/%d %H:%M")
    json.name message.user.name
    json.id message.id
end