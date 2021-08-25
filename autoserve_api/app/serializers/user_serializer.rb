class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :created_at, :updated_at, :email, :phone, :is_mechanic, :is_admin

end
