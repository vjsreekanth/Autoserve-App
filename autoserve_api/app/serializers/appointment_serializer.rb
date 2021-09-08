class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :start_time, :customer_id, :status, :mechanic_id, :customer_name, :mechanic_name
 
def customer_name
  object.customer&.full_name
end

def mechanic_name
  object.mechanic&.full_name
end



end
