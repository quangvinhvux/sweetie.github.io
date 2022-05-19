importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

//Using singleton breaks instantiating messaging()
// App firebase = FirebaseWeb.instance.app;


firebase.initializeApp({
   apiKey: "AIzaSyA9vjR8-_RAtChLMrlv_297m3JlQ27Ky64",
   authDomain: "sweetie-8f4eb.firebaseapp.com",
   projectId: "sweetie-8f4eb",
   storageBucket: "sweetie-8f4eb.appspot.com",
   messagingSenderId: "1093648770878",
   appId: "1:1093648770878:web:a68c27f79462db1f062e6f",
   measurementId: "G-X3H0HPSS64"
});

const messaging = firebase.messaging();
//messaging.setBackgroundMessageHandler(function (payload) {
//    const promiseChain = clients
//        .matchAll({
//            type: "window",
//            includeUncontrolled: true
//        })
//        .then(windowClients => {
//            for (let i = 0; i < windowClients.length; i++) {
//                const windowClient = windowClients[i];
//                windowClient.postMessage(payload);
//            }
//        })
//        .then(() => {
//            return registration.showNotification("New Message");
//        });
//    return promiseChain;
//});
//self.addEventListener('notificationclick', function (event) {
//    console.log('notification received: ', event)
//});