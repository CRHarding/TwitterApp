class UsersController < ApplicationController
  def index
    @users = User.all
    render json: {
      message: "Got all users",
      users: @users,
    }
  end

  def show
    @user = User.find(params[:id])
    p @user.tweets
    render json: {
      message: "Got one user",
      user: @user,
      tweets: @user.tweets
    }
  end

  def create
    @user = User.new(user_params)
    p @user
    if @user.save!
      render json: {
        message: "Created user",
        user: @user
      }
    else
      render json: {
        message: "Failed to create user",
        user: nil
      }
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: {
        message: "Updated user",
        user: @user
      }
    else
      render json: {
        message: "Failed to update user",
        user: nil
      }
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.delete
    render json: {
      message: "Deleted user",
    }
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
