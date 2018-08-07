class AddUserToTweets < ActiveRecord::Migration[5.2]
  def change
    add_reference :tweets, :user, index: true
  end
end
