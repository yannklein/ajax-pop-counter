Rails.application.routes.draw do
  root to: 'countries#index'
  resources :countries
end
