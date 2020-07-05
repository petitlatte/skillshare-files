var app = new Vue({
	el: '#app',
		data: {
			on:false,
			color:"purple",
		},

		methods: {
			toggle: function(){
				this.on = !this.on; //inverts properties. true<->false
			}
		}
});
