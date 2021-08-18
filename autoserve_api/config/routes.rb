Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do #👈🏻 we can set default response format of the block
    namespace :v1 do
      resources :vehicles, only: [:create, :destroy, :update, :show, :index]
   
      
      resource :session, only: [:create, :destroy]
      get("/current_user", to: "sessions#get_current_user")

      resources :users, only: [:create] do
        resources :vehicles, only: [:index]
        get :current, on: :collection

      end


    end
      
      
  end
end
