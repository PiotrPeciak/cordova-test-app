var service;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function(ev) {
        service = (cordova && cordova.plugins) ? cordova.plugins.testService : undefined;
        console.log("Device is ready" + ((service) ? (" and testService exist: "+ service) : ""));

        if(service) {
            document.getElementById("alarm").onclick = function(ev) {
                console.log('clicked on ALARM ', ev);
                service.alarm();
            }

            document.getElementById("job").onclick = function(ev) {
                console.log('clicked on JOB ', ev);
                service.job();
            }
        }
    }
};

app.initialize();