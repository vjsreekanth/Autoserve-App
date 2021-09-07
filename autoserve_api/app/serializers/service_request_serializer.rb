class ServiceRequestSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :appointment_date, :status, :vehicle_id, :customer_id, :vehicle, :customer
  belongs_to :customer
  

  def vehicle
    object.vehicle.title
  end
 


end
