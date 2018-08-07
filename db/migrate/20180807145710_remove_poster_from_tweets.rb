class RemovePosterFromTweets < ActiveRecord::Migration[5.2]
  def change
    remove_column :tweets, :poster, :String
  end
end
