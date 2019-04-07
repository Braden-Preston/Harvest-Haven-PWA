export default class VideoForage {

    constructor(localForage) {
        this.$ = localForage.createInstance({
            name: 'hh-video', storeName: 'data',
            description: 'this is a store'
        });
    }

    init = async () => {
        console.log(this.$)
        const that = this
        const key = 'Cat'
        this.$.setItem('key', key)
        .then(function (value) {
            that.$.getItem('key');
            console.log(`Set Video [${key}] as '${value}'`)
            // we got our value
        }).catch(function (err) {
            console.log(err)
            // we got an error
        });
    }

    get = async () => {
        fetch('/test').then((response) => {
            console.log(response)
            console.log(response.body)
            console.log(`Fetch --> Response: ${response.body}`)
          })
    } 

    clear = async () => {
        this.$.clear().then(function() {
            // Run this code once the database has been entirely deleted.
            console.log('Database is now empty.');
        }).catch(function(err) {
            // This code runs if there were any errors
            console.log(err);
        });
    }

    drop = async () => {
        this.$.dropInstance().then(function() {
            console.log('Dropped the store of the current instance');
          });
    }

}