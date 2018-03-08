require 'sidekiq/web'

Rails.application.routes.draw do
  root to: 'api/status#index'

  namespace :api do
    mount_devise_token_auth_for 'User', at: 'auth'

    namespace :jobs do
      mount Sidekiq::Web => '/ui'
    end

    get '/', to: 'status#index'
  end
end
