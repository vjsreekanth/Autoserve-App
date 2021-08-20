class Api::V1::ServiceRequestsController < Api::ApplicationController
    before_action :find_service_request, only: [:destroy, :update, :show]
    before_action :authenticate_user!, only: [:create, :update, :destroy, :index]
    
    def index
        if params[:user_id]
          @user = User.find params[:user_id]
          service_requests = @user.service_requests
        else
          service_requests = ServiceRequest.order(created_at: :desc)
        end
        render(json: service_requests, each_serializer: ServiceRequestSerializer)
      end
    
      def show
        render json: @service_request
      end
    
      def create
        service_request = ServiceRequest.new service_request_params
        service_request.custome = current_user
        if service_request.save
          render json: { id: service_request.id }
        else
          render(
            json: { errors: service_request.errors },
            status: 422,
          )
        end
      end
    
      def update
        if @service_request.update service_request_params
          render json: { id: @service_request.id }
        else
          render(
            json: { status: 422 },
            status: 422,
          )
        end
      end
    
      def destroy
        @service_request.destroy
        render(json: { status: 200 }, status: 200)
      end
    
      private
    
      def find_service_request
        @service_request ||= ServiceRequest.find params[:id]
      end
    
      def service_request_params
        params.require(:service_request).permit(:title, :description, :appointment_date, :status)
      end
    
      def authorize!
        render(json: { status: 401 }, status: 401) unless can? :crud, @service_request
      end

end
