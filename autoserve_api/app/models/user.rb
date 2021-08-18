class User < ApplicationRecord
    has_secure_password
    before_save :normalize_phone
    has_many :vehicles


    # Validations
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
    validates :first_name, :last_name, presence: true
    validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX

    validates :phone, phone: true, allow_blank: true

        def formatted_phone
            parsed_phone = Phonelib.parse(phone)
            return phone if parsed_phone.invalid?

            formatted =
            if parsed_phone.country_code == "1"
                parsed_phone.full_national
            else
                parsed_phone.full_international
            end
            formatted.gsub!(";", " x")
            formatted
        end

        def normalize_phone
            self.phone = Phonelib.parse(phone).full_e164.presence
        end

    def full_name
        "#{first_name} #{last_name}".strip
    end

end
