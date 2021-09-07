class ServiceOfferSerializer < ActiveModel::Serializer
  attributes :id, :comment, :start_date, :delivery_date, :estimate_price, :status, :mechanic, :mechanic_id, :service_request_id, :customer_id, :start_time, :service_title, :service_vehicle
  def start_time
    object.appointment&.start_time
  end
 

  # belongs_to :user, key: :mechanic
  # belongs_to :service_request, key: :service_request

  def service_title
    object.service_request&.title
  end
  def service_vehicle
    object.service_request&.vehicle.title
  end

end
