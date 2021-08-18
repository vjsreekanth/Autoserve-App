class ServiceRequestSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :start_date, :vehicle_type, :make, :model, :trim, :year, :vin, :status
  belongs_to :user, key: :owner
end
