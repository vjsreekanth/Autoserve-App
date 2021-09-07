Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do #👈🏻 we can set default response format of the block
    namespace :v1 do
      
      resources :service_requests, only: [:index] do
        resources :service_offers, shallow: :true, only: [:create, :index]
      end
   
      
      resource :session, only: [:create, :destroy]
      get("/current_user", to: "sessions#get_current_user")

      resources :users, only: [:create] do
        # resources :service_requests, only: [:index]
        # resources :service_offers, only: [:indexByCustomer, :indexByMechanic] 

      

        resources :vehicles, only: [:create, :destroy, :update, :show, :index] do
          

        end
        get :current, on: :collection

      end

      # get("/customers", to: "users#customerDashboard")
      # get("/mechanics", to: "users#mechanicDashboard")
      # get("/indexByCustomer", to: "users#indexByCustomer")
      # get("/indexByMechanic", to: "users#indexByMechanic")

      resources :vehicles, only: [:index] do
        resources :service_requests, only: [:index, :create] do
        end
      end

      resources :service_offers, only: [:index] do
        resources :appointment, shallow: :true, only: [:create, :index]
      end
      resources :appointment, only: [:index, :update]


    end
      
      
  end
end
