class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all
    render json: {
      message: "Got all tweets",
      tweets: @tweets
    }
  end

  def show
    @tweet = Tweet.find(params[:id])
    render json: {
      message: "Got one tweet",
      tweet: @tweet
    }
  end

  def create
    @user = User.find(params[:user_id])
    p params[:tweet]
    @tweet = @user.tweets.build(tweet_params)

    if @user.save
      render json: {
        message: "Saved new tweet",
        tweet: @tweet
      }
    else
      render json: {
        message: "Failed to save tweet",
        tweet: nil
      }
    end
  end

  def update
    @tweet = Tweet.find(params[:id])
    if @tweet.update(tweet_params)
      render json: {
        message: "Updated tweet",
        tweet: @tweet
      }
    else
      render json: {
        message: "Failed to update tweet",
        tweet: nil
      }
    end
  end

  def destroy
    @tweet = Tweet.find(params[:id])
    @tweet.delete
    render json: {
      message: "Deleted tweet",
    }
  end

  private

  def tweet_params
    params.require(:tweet).permit( :tweet_text, :likes, :user_id)
  end
end
