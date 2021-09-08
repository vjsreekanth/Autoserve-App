class User < ApplicationRecord
    has_secure_password
    has_many :vehicles, :foreign_key => "customer_id"
    has_many :service_requests, :foreign_key => "customer_id"
    has_many :service_offers, :foreign_key => "mechanic_id" 
    has_many :service_offers, :foreign_key => "customer_id" 
    has_many :appointments, :foreign_key => "customer_id"
    has_many :appointments, :foreign_key => "mechanic_id"

    # has_many :appointments_by, :class_name => "Appointments", :foreign_key => "customer_id"
    # has_many :appointments_for, :class_name => "Appointments", :foreign_key => "mechanic_id"


    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
    validates :first_name, :last_name, presence: true
    validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX
    validates :phone, :numericality => true, :length => { :minimum => 10, :maximum => 15 }
    # 
       
       

        def full_name
            "#{first_name} #{last_name}".strip
        end

end
