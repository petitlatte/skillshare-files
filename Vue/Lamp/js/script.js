var app = new Vue({
	el: '#app',
		
		data: {
			on:true,
			color:"yellow",
			brightness: 1
		},
		computed: {
			style: function(){
				var styleObject = {
					backgroundColor: this.color,
					opacity: this.brightness,
				}

			return styleObject;	
			},
			dimPercentage: function(){
				return Math.round(this.brightness*100);
			}

		},

		methods: {
			toggle: function(){
				this.on = !this.on; //inverts properties. true<->false
			}
		}
});
