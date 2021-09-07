class Api::V1::AppointmentController < Api::ApplicationController
    before_action :find_appointment, only: [:show, :destroy, :update]
    before_action :authenticate_user!, except: [:show]

  
    def index
      if current_user.is_mechanic
      appointments = Appointment.where(mechanic_id: current_user.id).order(created_at: :desc)
      else
        appointments = Appointment.where(customer_id: current_user.id).order(created_at: :desc)
      end

    render(json: appointments, each_serializer: AppointmentSerializer)
  end

      def create
        @service_offer = ServiceOffer.find params[:service_offer_id]
        
        appointment = Appointment.new appointment_params 
        appointment.service_offer = @service_offer
        appointment.mechanic = @service_offer.mechanic
        appointment.customer = current_user
        if appointment.save
            render json: { id: appointment.id }
        else
          render(
            json: { status: 422  },
            status: 422,
          )
        end
    end

    def update
        if can? :update, @appointment
          @appointment.update appointment_params
            render json: { id: @appointment.id }
        else
          render(
            json: { status: 422 },
            status: 422,
          )
        end
      end
      

    def destroy
        if can? :destroy, @appointment
            @appointment.destroy
            render(json: { status: 200 }, status: 200)
          
        else 
            render(
                json: { status: 422 },
                status: 422,
              )
        end
    end

    private

    def find_appointment
        @appointment ||= Appointment.find params[:id]
    end

    def appointment_params
        params.require(:appointment).permit(:status, :start_time)
    end

end

# get("all_appointments", to: "appointments#all_appointments")
# def all_appointments
# appointments=Appointment.all
# end