if ('function' === typeof importScripts) {

    importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

    if (workbox) {

        console.log(`Yay! Workbox is loaded 🎉`);

        // custom adjustments
        console.log('my adjustments')

        workbox.routing.registerRoute(
            '/test',
            async ({ url, event }) => {
                return new Response(`Hello from SW!`);
            }
        )

        workbox.precaching.precacheAndRoute([]);

    } else {
        console.log(`Boo! Workbox didn't load 😬`);
    }

}
