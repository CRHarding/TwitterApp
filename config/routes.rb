Rails.application.routes.draw do
  scope :api, defaults: {format: :json} do
    resources :tweets, path: "/tweets"
    devise_for :users, controllers: {sessions: 'sessions'}
    devise_scope :user do
      get 'users/current', to: 'sessions#show'
    end
  end
end
