class Api::V1::ServiceOffersController < Api::ApplicationController
    before_action :find_service_offer, only: [:destroy, :update, :show]
    before_action :authenticate_user!, only: [:create, :update, :destroy, :index]

    def index
        if params[:user_id]
          @user = User.find params[:user_id]
          service_offers= @user.service_offers
        else
          service_offers = ServiceOffer.order(created_at: :desc)
        end
        render(json: service_offers, each_serializer: ServiceOfferSerializer)
      end
    
      def show
        render json: @service_offer
      end
    
      def create
        @service_request= ServiceRequest.find params[:service_request_id]
        service_offer = ServiceOffer.new service_offer_params
        service_offer.user = current_user
        service_offer.service_request = @service_request
        if service_offer.save
          render json: { id: service_offer.id }
        else
          render(
            json: { errors: service_offer.errors },
            status: 422,
          )
        end
      end
    
      def update
        if @service_offfer.update service_offer_params
          render json: { id: @service_offer.id }
        else
          render(
            json: { status: 422 },
            status: 422,
          )
        end
      end
    
      def destroy
        @service_offer.destroy
        render(json: { status: 200 }, status: 200)
      end
    
      private
    
      def find_service_offer
        @service_offer ||= ServiceOffer.find params[:id]
      end
    
      def service_offer_params
        params.require(:service_offer).permit(:comment, :estimate_price, :start_date, :delivery_date, :status)
      end
    
      def authorize!
        render(json: { status: 401 }, status: 401) unless can? :crud, @service_offers
      end
end
