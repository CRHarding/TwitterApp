class AddEmailToTweets < ActiveRecord::Migration[5.2]
  def change
    change_table :tweets do |t|
      t.string :email
    end
  end
end
