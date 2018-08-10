class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    p @user.tweets
    render json: {
      message: "Got one user",
      user: @user,
      tweets: @user.tweets
    }
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
