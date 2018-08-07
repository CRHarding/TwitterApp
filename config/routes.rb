Rails.application.routes.draw do
  devise_for :users

  resources :tweets, path: "/api/tweets"
  resources :users, path: "/api/users"
end
