Rails.application.routes.draw do
  root to: 'countries#index'
  resources :countries
  get '/tinder', to: 'pages#tinder', as: :tinder
end
