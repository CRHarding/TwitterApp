class UsersControllerController < ApplicationController
  has_many :tweets
  def index
    @users = User.all
  end

  def show
    @user = User.find(current_user.id)
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to users_path
    else
      redirect_to new_users_path
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to user_path(@user.id)
    else
      redirect_to edit_user_path(@user.id)
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.delete
    @user.user_tweets.each do |instance|
      instance.delete
    end
    redirect_to users_path
  end

  private

  def user_params
    params.require(:user).permit(:email)
  end

end
