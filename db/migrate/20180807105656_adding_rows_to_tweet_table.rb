class AddingRowsToTweetTable < ActiveRecord::Migration[5.2]
  def change
    change_table :tweets do |t|
      t.string :poster, null: false
      t.string :tweet_text, null: false
      t.integer :likes, null: false, default: 0
    end
  end
end
