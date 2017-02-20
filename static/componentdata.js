var obj = {};
obj.data = [];
obj.cartgood = null;
obj.addData = function(data){
	for(var i = 0;i < this.data.length;i++){
		if(this.data[i]["product_id"] == data['product_id']){
			this.data[i].conct++;
			return ;
		}
	}
	var cartdata = {};
	cartdata.product_id = data.product_id;
	cartdata.name = data.name;
	cartdata.cover_price = data.cover_price;
	cartdata.figure = data.figure;
	cartdata.brief = data.brief;
	cartdata.conct = data.conct;
	this.data.push(cartdata)	
}
obj.remove = function(data){
	for(var i = 0;i < this.data.length;i++){
		if(this.data[i]["product_id"] == data['product_id']){
			this.data[i].conct--;
			if(this.data[i].conct <=0){
				this.data.splice(i,1)
			}
			return ;
		}
	}
}
obj.getdata = function(){
	return this.data
}
obj.setcartgood = function(data){
	data.conct = 1;
	obj.cartgood = data;
}
obj.getcartgood = function(data){
	return obj.cartgood;
}
obj.removecartgood = function(data){
	obj.cartgood = null;
}
module.exports = obj;