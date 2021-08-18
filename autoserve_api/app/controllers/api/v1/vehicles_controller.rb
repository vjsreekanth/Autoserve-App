class Api::V1::VehiclesController < Api::ApplicationController
    before_action :find_vehicle, only: [:show, :destroy, :update]
    before_action :authenticate_user!, except: [:index, :show]
    before_action :authorize!, only: [:update, :destroy]
  
  def index
    if params[:user_id]
      @user = User.find params[:user_id]
      vehicles = @user.vehicles
    else
      vehicles = vehicle.order(created_at: :desc)
    end
    render(json: vehicles, each_serializer: VehicleSerializer)
  end

  def show
    render json: @vehicle
  end

  def create
    vehicle = Vehicle.new vehicle_params
    vehicle.user = current_user
    if vehicle.save
      render json: { id: vehicle.id }
    else
      render(
        json: { errors: vehicle.errors },
        status: 422,
      )
    end
  end

  def update
    if @vehicle.update vehicle_params
      render json: { id: @vehicle.id }
    else
      render(
        json: { status: 422 },
        status: 422,
      )
    end
  end

  def destroy
    @vehicle.destroy
    render(json: { status: 200 }, status: 200)
  end

  private

  def find_vehicle
    @vehicle ||= Vehicle.find params[:id]
  end

  def vehicle_params
    params.require(:vehicle).permit(:vehicle_type, :make, :model, :trim, :year, :vin)
  end

  def authorize!
    render(json: { status: 401 }, status: 401) unless can? :crud, @vehicle
  end

    
end
