<template>
	<div id="cartgood" v-on:click.self='remove()'>
		<div class="commodity">
			<div class="commodity_data">
				<img :src="cartgood.figure"/>
				<div>
					<p class="cart_name">{{cartgood.name}}</p>
					<p class="cart_style">{{cartgood.brief}}</p>
					<div class="cart_price">
						<u>￥{{cartgood.cover_price}}</u>
						<p>
							<img src="../../assets/cart-decrease.png" v-on:click='conctjian()' />
							<span>{{cartgood.conct}}</span>
							<img src="../../assets/cart-increase.png" v-on:click='conctja()' />
						</p>
					</div>
				</div>
			</div>
			<ul id="menu">
				<span>
					<img src="../../assets/user_service2.png"/>
					联系客服
				</span>
				<span>
					<img src="../../assets/mall.png"/>
					收藏
				</span>
				<span>
					<img src="../../assets/need_pay2.png"/>
					购物车
				</span>
				<a v-on:click='adddata(cartgood)'>加入购物车</a>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				num :0
			}
		},
		computed:{
			cartgood:function(){
				return this.$store.state.cartgood
			}
		},
		methods:{
			adddata:function(){
				var bol = true;
				for(var i = 0;i < this.$store.state.data.length;i++ ){
					if(this.$store.state.cartgood["product_id"] == this.$store.state.data[i]["product_id"]){
						this.$store.state.data[i]['conct']+=this.$store.state.cartgood["conct"];
						bol=false;
					}
				}
				if(bol){
					this.$store.state.data.push(this.$store.state.cartgood);
				}
				
				this.$store.state.cartgood = null;
			},
			conctja:function(){
				this.num = ++this.$store.state.cartgood.conct;
			},
			conctjian:function(){
				this.$store.state.cartgood.conct--;
				if(this.$store.state.cartgood.conct <= 0 ){
					this.$store.state.cartgood.conct = 1
				}
				this.num = this.$store.state.cartgood.conct;
			},
			remove:function(){
				this.$store.state.cartgood = null;
			}
		}
	}
</script>

<style lang="scss">
	#cartgood{
		position: fixed;
		width: 100%;
		height: 100vh;
		top:0;
		z-index: 300;
		background: rgba(0,0,0,0.3);
		.commodity{
			position: fixed;
			bottom: 50px;
			background: #fff;
			.commodity_data{
                display: flex;
                width: 10rem;
                padding: 0.3rem;
                box-sizing: border-box;
                img{
                    width: 2.5rem;
                    height: 2.5rem;
                    margin: 0.3rem 0.3rem;
                }
                p{
                   width: 6.2rem;overflow: hidden;  
                }
            }
            .cart_name{
                font-weight: bold;
                font-size: 0.4rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                line-height: 0.7rem;
            }
            .cart_style{
                font-size: 0.35rem;
                color:#666;
                height: 1.2rem;
            }
            .cart_price{
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 0.4rem;
                u{
                    text-decoration: none;
                    color:red;
                    
                    line-height: 0.6rem;
                }
                p{
                    width: 2rem;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    img{
                        height: 0.5rem;
                        width: 0.5rem;
                    }
                    span{
                        display: block;
                        width: 1rem;
                    }
                }
            }
            #menu{
            	border-top:4px solid #ccc;
            	display: flex;
            	justify-content: flex-start;
            	text-align: center;
            	span{
            		display: block;
            		width: 2rem;
            		font-size: 0.4rem;
            		line-height: 0.7rem;
            		img{
            			width: 1rem;
            			display: block;
            			margin: 2px auto;
            		}
            	}
            	a{
            		display: block;
            		width: 4rem;
            		line-height: 1.8rem;
            		font-size: 0.5rem;
            		color: #fff;
            		background: red;
            	}
            }
		}
	}
</style>