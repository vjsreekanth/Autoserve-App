class Api::V1::UsersController < Api::ApplicationController
  before_action :authenticate_user!, only: [:current, :customerDashboard, :mechanicDashboard]
     def create
        user = User.new user_params
 
        if user.save
          session[:user_id] = user.id
          render json: { id: user.id }
        else
          render(
            json: { status: 422 },
            status: 422, # Unprocessable Entity
          )
        end
        
      end
    
      def current
        render json: current_user
      end

     

      def indexByCustomer
        service_offers = ServiceOffer.where(customer_id: current_user.id).order(created_at: :desc)
        render(json: service_offers, each_serializer: ServiceOfferSerializer)
      end
    
      def indexByMechanic
        service_offers = ServiceOffer.where(mechanic_id: current_user.id).order(created_at: :desc)
        render(json: service_offers, each_serializer: ServiceOfferSerializer)
      end
   

      def customerDashboard
        @customer = User.find_by(id: current_user.id)
        vehicles = Vehicle.where(customer_id: current_user.id).order(created_at: :desc)
        service_requests = ServiceRequest.where(customer_id: current_user.id).order(created_at: :desc)
        service_offers = ServiceOffer.where(customer_id: current_user.id).order(created_at: :desc)
        appointments = Appointment.where(customer_id: current_user.id).order(created_at: :desc)
       
        customer = UserSerializer.new(@customer)
        render(json: {
          customer: customer,
          vehicles: vehicles,
          service_requests: service_requests,
          service_offers: service_offers,
          appointments: appointments
        
        })

      end

      def mechanicDashboard
       
        @mechanic = User.find_by(id: current_user.id)
        service_requests = ServiceRequest.order(created_at: :desc)
        service_offers = ServiceOffer.where(mechanic_id: current_user.id).order(created_at: :desc)
        appointments = Appointment.where(mechanic_id: current_user.id).order(created_at: :desc)
         mechanic = UserSerializer.new(@mechanic)
        render(json: {
          mechanic: mechanic,
          service_requests: service_requests,
          service_offers: service_offers,
          appointments: appointments
        
        })

      end

      private

      def user_params
        params.require(:user).permit(
          :first_name, :last_name, :email, :phone, :password, :password_confirmation, :is_mechanic
        )
      end
end
