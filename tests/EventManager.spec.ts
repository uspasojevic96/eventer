import { EventManager } from '../src/EventManager';
import {} from 'jasmine';
describe(' - Testing EventManager', function(){
    let object: any;

    beforeEach(function(){
        object = new EventManager();
    });

    it('should be created', function(){
        expect(object instanceof EventManager).toBe(true);
    });

    describe(' - Testing functions', function(){
        describe(' - Testing fireEvent', function(){
            describe(' - Testing when events are undefined', function(){
                beforeEach(function() {
                    spyOn(object, 'getEventListeners');
                });

                it(' - Function should not throw', function(){
                    expect(function(){
                        object.fireEvent('');
                    }).not.toThrow();
                });
            });

            describe(' - Testing when events are defined', function(){
                beforeEach(function(){
                    spyOn(object, 'getEventListeners').and.callFake(function(){
                        return [() => {}];
                    });
                });

                it(' - Function should not throw', function(){
                    expect(function(){
                        object.fireEvent('');
                    }).not.toThrow();
                });
            });
        });

        describe(' - Testing getEventListeners', function(){
            it(' - Function should not throw', function(){
                expect(function(){
                    object.getEventListeners('');
                }).not.toThrow();
            });
        });

        describe(' - Testing on', function(){
            describe(' - Testing when events are defined', function() {
                beforeEach(function(){
                    spyOn(object, 'getEventListeners').and.callFake(function(){
                        return [];
                    });
                });

                it(' - Function should not throw', function(){
                    expect(function(){
                        object.on('a', () => {});
                    }).not.toThrow();
                });
            });

            describe(' - Testing when events are undefined', function(){
                beforeEach(function(){
                    spyOn(object, 'getEventListeners');
                });

                it(' - Function should not throw', function(){
                    expect(function(){
                        object.on('a', () => {});
                    }).not.toThrow();
                });
            });
        });

        describe(' - Testing un', function(){
            describe(' - Testing when events are undefined', function() {
                beforeEach(function(){
                    spyOn(object, 'getEventListeners');
                });

                it(' - Function should not throw', function(){
                    expect(function(){
                        object.un('a', () => {});
                    }).not.toThrow();
                });
            });

            describe(' - Testing when events are defined', function(){
                let a = function(){};

                beforeEach(function(){
                    spyOn(object, 'getEventListeners').and.callFake(function(){
                        return [a];
                    });
                });

                describe(' - Testing when callbacks don\'t match', function(){
                    it(' - Function should not throw', function(){
                        expect(function(){
                            object.un('a', () => {});
                        }).not.toThrow();
                    });
                });

                describe(' - Testing when callbacks match', function(){
                    it(' - Function should not throw', function(){
                        expect(function(){
                            object.un('a', a);
                        }).not.toThrow();
                    });
                });
            })
        });
    });
});