class Api::V1::UsersController < Api::ApplicationController
  before_action :authenticate_user!, only: [:current]
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

     
      private

      def user_params
        params.require(:user).permit(
          :first_name, :last_name, :email, :phone, :password, :password_confirmation, :is_mechanic
        )
      end
end
