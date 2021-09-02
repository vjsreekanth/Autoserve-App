class ServiceOfferSerializer < ActiveModel::Serializer
  attributes :id, :comment, :start_date, :delivery_date, :estimate_price, :status, :mechanic, :mechanic_id, :service_request_id, :customer_id

  # belongs_to :user, key: :mechanic
  # belongs_to :service_request, key: :service_request

  # def mechanic
  #   object.user&.full_name
  # end
  # def customer_id
  #   object.service_request.customer&.id
  # end
end
