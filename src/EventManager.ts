/**
 * Eventer EventManager class
 * 
 * @author Uros Spasojevic
 */
export class EventManager {
    /**
     * Object containing all active events and their corresponding listeners
     * 
     * @type {Object}
     * @private
     */
    private events: any = {};

    /**
     * Fires the specified event with optional passed data
     * 
     * @param {string} event Event name 
     * @param {any} data Optional data for specified event
     * @public
     */
    public fireEvent(event: string, data?: any): void {
        let events = this.getEventListeners(event);
        if(events) {
            let item = events.length;

            while(item) {
                item--;
                events[item](data);
            }
        }
    }

    /**
     * Returns listeners for specified event
     * 
     * @param {string} event Event name
     * @returns {Function[]}
     * @private
     */
    private getEventListeners(event: string): Function[] {
        return this.events[event];
    }

    /**
     * Subscribes to specified event with passed callback
     * 
     * @param {string} event Event name 
     * @param {Function} callback Handler callback 
     */
    public on(event: string, callback: Function): void {
        let events = this.events[event];

        if(!events) {
            events = [];
        }

        events.push(callback);

        this.events[event] = events;
    }

    /**
     * Unsubscribes from specified event with passed callback
     * 
     * @param {string} event 
     * @param {Function} callback 
     */
    public un(event: string, callback: Function): void {
        let events = this.getEventListeners(event);

        if(events) {
            let item = events.length;

            while(item) {
                item--;
                if(events[item] === callback) {
                    events.splice(item, 1);
                }
            }
        }
    }
}