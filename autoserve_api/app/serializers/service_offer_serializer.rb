class ServiceOfferSerializer < ActiveModel::Serializer
  attributes :id, :comment, :start_date, :delivery_date, :estimate_price, :status, :mechanic, :mechanic_id, :service_request_id, :customer_id, :start_time
  def start_time
    object.appointment&.start_time
  end
 

  # belongs_to :user, key: :mechanic
  # belongs_to :service_request, key: :service_request

  # def mechanic
  #   object.user&.full_name
  # end
  # def app_date
  #   object.appointment.start_time
  # end
end
