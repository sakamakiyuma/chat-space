class Group < ApplicationRecord
  has_many :group_users
  has_many :messages
  has_many :users, through: :group_users

  validates :name, presence: true

  def show_last_message
    if (last_message = messages.last).present?
      last_message.talk? ? last_message.talk : '画像が投稿されています'
    else
      'まだメッセージはありません。'
    end
  end
end