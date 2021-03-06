Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]

    resources :questions, only: [:index, :create, :show, :update, :destroy] do 
      resources :answers, only: [:index]
      resources :votes, only: [:index]
    end
    
    resources :answers, only: [:create]
    resources :votes, only: [:create, :destroy]
  end
end
