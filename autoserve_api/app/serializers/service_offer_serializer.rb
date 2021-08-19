class ServiceOfferSerializer < ActiveModel::Serializer
  attributes :id, :comment, :start_date, :delivery_date, :estimate_price, :status, :mechanic, :mechanic_id

  belongs_to :user, key: :mechanic
  belongs_to :service_request, key: :service_request

  def mechanic
    object.user&.full_name
  end
  def mechanic_id
    object.user&.id
  end
end
