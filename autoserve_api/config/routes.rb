Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do #👈🏻 we can set default response format of the block
    namespace :v1 do
      resource :session, only: [:create, :destroy]
      get("/current_user", to: "sessions#get_current_user")

      resources :users, only: [:create] do
        get :current, on: :collection
      end


    end
      
      
  end
end
