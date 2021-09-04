class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :start_time, :customer_id, :status, :mechanic_id
  belongs_to :customer
  belongs_to :mechanic

  # def customer
  #   object.customer
  # end


end
