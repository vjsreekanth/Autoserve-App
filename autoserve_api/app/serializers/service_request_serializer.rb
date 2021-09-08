class ServiceRequestSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :appointment_date, :status, :vehicle_id, :customer_id, :vehicle, :vehicle_name, :customer_name
  belongs_to :customer
  

  def vehicle_name
    object.vehicle.title
  end

  def customer_name
    object.customer&.full_name
  end
  
 


end
