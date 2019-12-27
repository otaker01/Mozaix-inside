import moment from 'moment';
import Handlebars from 'handlebars';

class EventCalendar {

    baseTemplate = Handlebars.compile(`
        <div class="events-calendar__header">
            <div class="events-calendar__prev"><</div>
            <div class="events-calendar__next">></div>
        </div>
        <div class="events-calendar__main">

        </div>
    `);

    monthTemplate = Handlebars.compile(`
        <div class="events-calendar__month">
            <div class="events-calendar__month_name">
                {{monthName}}
            </div>
            <div class="events-calendar__month_days">
                {{#each dayNames}}
                    <div class="events-calendar__month_day">{{this}}</div>
                {{/each}}
            </div>
            <div class="events-calendar__days">
                {{#each days}}
                    <div data-day="{{day}}" class="events-calendar__day {{#if events}}event{{/if}} {{#onCurrentMonth}}{{else}}inactive{{/onCurrentMonth}}">
                        {{date}}
                    </div>
                {{/each}}
            </div>
        </div>
    `);

    eventsTemplate = Handlebars.compile(`
        <div class="events-calendar__events">
            <div class="events-calendar__events_overlay"/>
            <div class="events-calendar__content">
                {{#each events}}
                    <div class="events-calendar__event">
                        {{{this}}}
                    </div>
                {{/each}}
            </div>
        </div>
    `);

    monthOffset = 0;
    mainEl = null;
    options = {};

    constructor(elemId, options) {
        this.options = {
            months: 1,
            ...options
        };
        this.options.events = this.getEventsData(elemId);
        this.setup(elemId);
        this.render();
    }

    getEventsData(elemId) {
        let events = {};
        $(elemId).find('[data-event]').each((idx, el) => {
            el = $(el);
            if( !events[ el.data('event') ] ) events[ el.data('event') ] = [];
            events[el.data('event')].push(el.html());
        });
        return events;
    }

    setup(elemId) {
        $(elemId).html(this.baseTemplate());
        $(elemId).find('.events-calendar__prev').on('click', () => {
            this.monthOffset -= 1;
            this.render();
        });
        $(elemId).find('.events-calendar__next').on('click', () => {
            this.monthOffset += 1;
            this.render();
        });

        this.mainEl = $('.events-calendar__main');
    }

    render() {
        this.mainEl.empty();

        for(var i=0; i<this.options.months; i++) {
            this.mainEl.append(this.monthTemplate(this.getMonthData(this.monthOffset+i)));
        }

        this.setupMonths();
    }

    setupMonths() {
        this.mainEl.find('.events-calendar__day').on('click', (e) => {
            let el = $(e.target);
            this.showEvents(el, el.data('day'));
        });
    }

    showEvents(el, date) {
        if( this.eventsHtml ) this.eventsHtml.remove();
        if( !this.options.events[date] ) return;

        this.eventsHtml = $( this.eventsTemplate({events: this.options.events[date]}) );
        el.append(this.eventsHtml);
        this.checkPosition(el.find('.events-calendar__content'));
    }

    checkPosition(el) {
        let top = -el.offset().top;
        let left = el.offset().left + el.outerWidth() - $(window).outerWidth();
        el.css({
            marginTop: top > 0 ? top+10 : 0
        });
        if( left > 0 ) {
            el.addClass('invertx');
        }
    }

    getMonthData(monthOffset) {
        let days = [];
        let currentMonth = moment().add(monthOffset, 'month');
        let firstDay = currentMonth.clone().startOf('month').startOf('week');
        let lastDay = currentMonth.clone().endOf('month').endOf('week').add(1, 'day');
        
        
        while(!firstDay.isSame(lastDay, 'day') ) {
            let events = this.options.events[ firstDay.format('DD/MM/YYYY') ];

            days.push({
                day: firstDay.format('DD/MM/YYYY'),
                date: firstDay.date(),
                onCurrentMonth: firstDay.isSame(currentMonth, 'month'),
                events: events
            });
            firstDay = firstDay.clone().add(1,'day');
        }

        return {
            days: days, 
            monthName: currentMonth.format('MMMM'),
            dayNames: moment.weekdaysMin().map(i => i[0])
        };
    }
}

new EventCalendar('#events', {
    months: 9
});

// console.log(lastDay);