class ServiceOffer < ApplicationRecord
    belongs_to :user
    belongs_to :service_request

    # validations
    validates :estimate_price, presence: true
    validates :start_date, :delivery_date, presence: true
    validate :delivery_date_after_start_date
    # validates_inclusion_of(:status, in: ["approved", "pending", "denied", "cancelled"])
    private

        def delivery_date_after_start_date
            return if delivery_date.blank? || start_date.blank?

            if delivery_date < start_date
                errors.add(:delivery_date, "must be after the start date")
            end
        end

        # def start_time_is_valid_datetime
        # errors.add(:start_time, 'must be a valid datetime') if ((DateTime.parse(start_date) rescue ArgumentError) == ArgumentError)
        # end

        # def end_time_is_valid_datetime
        # errors.add(:end_time, 'must be a valid datetime') if ((DateTime.parse(end_date) rescue ArgumentError) == ArgumentError)
        # end

end
