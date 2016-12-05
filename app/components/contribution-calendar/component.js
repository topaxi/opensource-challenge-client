import moment from 'moment'
import Ember from 'ember'
import groupBy from '../../utils/group-by-macro'

const {
  Component,
  computed
} = Ember

export default Component.extend({
  sortedItems: computed.sort('items.[]', (a, b) =>
    Date.parse(a.get('date')) - Date.parse(b.get('date'))
  ),

  groupedItems: groupBy('sortedItems', 'date'),

  calendarDays: computed('challenge', 'groupedItems.[]', function() {
    let challenge = this.get('challenge')
    let items = this.get('groupedItems')

    let start = moment(challenge.get('startsOn'))
    let end = moment(challenge.get('endsOn'))
    let days = {}

    for (let date = moment(start); date.diff(end) <= 0; date.add(1, 'day')) {
      let dateStr = date.format('YYYY-MM-DD')

      days[dateStr] = items[dateStr] || []
    }

    return days
  })
})
