class ServiceOfferSerializer < ActiveModel::Serializer
  attributes :id, :comment, :start_date, :delivery_date, :estimate_price, :status, :mechanic_id, :service_request_id, :customer_id, :start_time, :service_title, :service_vehicle, :mechanic, :customer
  
  def start_time
    object.appointment&.start_time
  end
 

  def service_title
    object.service_request&.title
  end
  def service_vehicle
    object.service_request&.vehicle.title
  end
 

  def customer
    UserSerializer.new(object.customer)
   
  end

  def mechanic
   UserSerializer.new(object.mechanic)
  end
  

end
