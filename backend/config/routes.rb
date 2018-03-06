Rails.application.routes.draw do
  root to: 'api/status#index'

  namespace :api do
    mount_devise_token_auth_for 'User', at: 'auth'

    get '/', to: 'status#index'
  end
end
