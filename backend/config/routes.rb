Rails.application.routes.draw do
  root to: 'api/status#index'

  namespace :api do
    get '/', to: 'status#index'
  end
end
