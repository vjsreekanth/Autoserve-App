class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :start_time, :customer_id, :status, :mechanic_id, :customer_name, :mechanic_name, :customer, :mechanic, :service_vehicle, :service_request, :service_offer
 
  def customer_name
    object.customer&.full_name
  end

  def mechanic_name
    object.mechanic&.full_name
  end

  def customer
    UserSerializer.new(object.customer)
   
  end

  def mechanic
   UserSerializer.new(object.mechanic)
  end

  def service_vehicle
    VehicleSerializer.new(object.service_offer.service_request.vehicle)
  end
  def service_request
    ServiceRequestSerializer.new(object.service_offer.service_request)
  end
  def service_offer
    ServiceOfferSerializer.new(object.service_offer)
  end
  
  

end
