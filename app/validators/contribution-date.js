import validateDateRange from 'opensource-challenge-client/validators/date-range'

import moment from 'moment'

export default function validateContributionDate() {
  return (key, newValue, oldValue, changes, model) => {
    return validateDateRange({
      min: moment(model.get('challenge.startsOn')),
      max: moment()
    })(key, newValue, oldValue, changes, model)
  };
}