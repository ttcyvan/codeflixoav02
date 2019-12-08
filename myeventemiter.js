class MyEventEmitter {

    constructor() {
        this.events = {}; // on cree on obj event qui va recevoir les evenement
        console.log('le event marche');
    }

    on(eventName, callback) {

        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)

        return () => { // dans ce cas le this fait reference a element parent
            this.events[eventName] = undefined
        }
    }

    emit(eventName, ...data) {
        // this.events[eventName]();  reccupere la attribut et appele la function
        const Arrcallback = this.events[eventName] // reccupere l'event
        if (Arrcallback !== undefined) {

            Arrcallback.forEach(callback => {
                    if (callback.lenght === data.lenght) {
                        callback(...data)
                    }

                })
                //this.events[eventName]()
                //callback(...data);  on appel evenement si il exite
                //callback(...data) = callback(data[0],data[1],data[2])
                // ...data = transforme da variable data en tableau
        }

        Arrcallback.push(...data);

    }

}
module.exports = {
    MyEventEmitter
}