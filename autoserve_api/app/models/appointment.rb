class Appointment < ApplicationRecord
    belongs_to :mechanic, :class_name => "User"
    belongs_to :customer, :class_name => "User"
    belongs_to :service_offer
    validates :start_time, presence: true
    # validates :service_offer_id, uniqueness: { scope: :user_id}
    validates_inclusion_of(:status, in: ["approved", "pending", "denied", "cancelled"])
end
