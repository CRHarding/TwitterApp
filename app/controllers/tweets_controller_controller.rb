class TweetsControllerController < ApplicationController
  belongs_to :user
  
  def index
    @tweets = Tweet.all
  end

  def show
    @tweet = Tweet.find(params[:id])
  end

  def new
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)
    if @tweet.save
      redirect_to tweets_path
    else
      redirect_to new_tweet_path
    end
  end

  def edit
    @tweet = Tweet.find(params[:id])
  end

  def update
    @tweet = Tweet.find(params[:id])
    if @tweet.update(tweet_params)
      redirect_to tweet_path(@tweet.id)
    else
      redirect_to edit_tweet_path(@tweet.id)
    end
  end

  def destroy
    @tweet = Tweet.find(params[:id])
    @tweet.delete
    redirect_to tweets_path
  end

  private

  def tweet_params
    params.require(:tweet).permit(:)
end
