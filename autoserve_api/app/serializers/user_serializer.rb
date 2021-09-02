class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :created_at, :updated_at, :email, :phone, :is_mechanic, :is_admin
  # has_many :vehicles
  # has_many :service_requests
  # has_many :service_offers
  # has_many :appointments

  
end
