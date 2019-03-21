export class EventManager {
    private events: any = {};

    public on(event: string, callback: Function): void {
        let events = this.events[event];
        if(!events) {
            events = [];
        }

        events.push(callback);

        this.events[event] = events;
    }

    public fireEvent(event: string, data?: any): void {
        let events = this .getEventListeners(event);
        if(events) {
            let item = events.length;

            while(item) {
                item--;
                events[item](data);
            }
        }
    }

    private getEventListeners(event: string): Function[] {
        return this.events[event];
    }

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