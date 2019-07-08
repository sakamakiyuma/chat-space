## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|talk|text|
|image|string||
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user


## usersテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false, unique: true, index: true|
|email|string|null: false, unique: true|
### Association
- has_many :members
- has_many :messages
- has_many :groups, through: :members


## groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false|
### Association
- has_many :members
- has_many :messages
- has_many :users, through: :members


## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
