<template>
	<div id="over-flow-auto">
		<Headerbar></Headerbar>
		<div class="main_two"> 
         
		 <el-carousel :interval="4000" type="card" height="220px">
             <el-carousel-item v-for="item in picsData" :key="item.id">
				<!-- {path:'high_search',params:{arch_Id:item.id}} -->
			    <router-link to=""  @click.native="get_arch_detail(item.id)">
			     <img  style="width: 100%;" :src="item.remoteFilePath" />
				 <span style="color: white;width: 100%;height: 26px;background-color:rgba(0, 0,0, 0.5);position: absolute; bottom: 0; left:0;">
				    <font style="position: absolute;top: 4px;left: 2%;">{{item.title}}
					</font> 
				  </span>
			    </router-link>
				      
             </el-carousel-item>
           </el-carousel>
		           
		</div>
		<div class="div_two">
			 <el-row :gutter="20">
			   <el-col :span="6">
				  <div class="grid-content bg-purple">
					    <div class="one_row" @click="research()">
							<div class="one_row_title">
						      <p style="position: absolute;left:8%;top:5%;font-size:23px;">探索记录</p>
							  
							  <div class="one_row_line">
							  </div>
							  
							</div>
							<div class="one_row_line">
							</div>
							
						</div>
			     </div>
			  </el-col>
			  
			   <el-col :span="6"><div class="grid-content bg-purple">
			         <div class="one_row_second" @click="research()">
			         	<div class="one_row_title">
			             <p style="position: absolute;left:34%;top:5%;font-size:23px;">联系我们</p>
			         	  
			         	  <div class="one_row_line">
			         	  </div>
			         	  
			         	</div>
			         	<div class="one_row_line">
			         	</div>
			         	
			         </div>
					 
			   </div></el-col>
			   
			   <el-col :span="6"><div class="grid-content bg-purple">
			         <div class="one_row_third" @click="research()">
			         	<div class="one_row_title">
			              <!-- <p style="position: absolute;left:8%;top:5%;font-size:23px;">借阅档案</p> -->
			         	  <p style="position: absolute;left:58.6%;top:5%;font-size:23px;">档案历史</p>
			         	   
			         	  <div class="one_row_line">
			         	  </div>
			         	  
			         	</div>
			         	<div class="one_row_line">
			         	</div>
			         	
			         </div>
			   </div></el-col>
			   <el-col :span="6"><div class="grid-content bg-purple">
			               <div class="one_row-four" @click="research()">
			               	<div class="one_row_title">
			                    <p style="position: absolute;left:85%;top:5%;font-size:23px;">交流中心</p>
			                     
			               	  <div class="one_row_line">
			               	  </div>
			               	  
			               	</div>
			               	<div class="one_row_line">
			               	</div>
			               	
			               </div>
			   </div></el-col>
			 </el-row>
			 
		</div>
		
		<div class="div_third">
			
		</div>
		
		<div class="div_four">
			<div class="surface_link">
			     <h3>外部链接</h3> 
				 <p>  <a style="color:#409EFF;font-size: 4px;" href="https://www.saac.gov.cn/daj/index.shtml">中华人民共和国国家档案局</a> </p>
			</div>
			
		</div>
</div>
	
	
</template>

<script>
	
	
	import Headerbar from './headerbar.vue' 
	
	export default{
	   data(){ 
	       return {
	            
				picsData:{},  
				src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
	                  
	         };
	     },
	   methods: {
	         //获取走马灯信息，且只获取图片信息，且要每次获取的都不一样，从数据库中随机获取
	         getHorsePic()
			 {  
				     
				    this.$axios.get(this.dbURL+'/common-users/randompic')
					.then(res=>{
				        console.log(res)
						
				        this.picsData = res.data.data
						
				        })
			 },
			 //获取arch detail
		     get_arch_detail(archid)
			 {
				 // alert(archid)
				 //点击直接新开一个页面，即实现了页面多开的操作
				 let routeData = this.$router.resolve({ path: '/arch_detail?archid='+archid });
				 window.open(routeData.href, '_blank');
				 
			 },
			 
			 ///
			 research()
			 {
				 alert("helo")
			 }
			 
	    },
	   created(){
	        this.getHorsePic();
			
	    },
	   components:{
	       Headerbar
	     }
	}
	
	
	
</script>

<style>
	
	  #over-flow-auto{
		    /* background-image: url(../assets/img/login-bg.jpg); */
		      background-position: center;
		      height: 100%;
		      width: 100%;
		      background-size: cover;
		      position: fixed;
		  	overflow: auto;  /* 让边框超出后可下滑*/
	  }
	  
	  .main_two{
		  width: 100%;
		  height: 130px;
		  position: absolute;
		  top: 22%;
		  background-color:white;
	  }
	  
	  
	  .el-carousel__item h3 {
	      color: #475669;
	      font-size: 14px;
	      opacity: 0.75;
	      line-height: 200px;
	      margin: 0;
	    }
	    
	    .el-carousel__item:nth-child(2n) {
	      background-color: #99a9bf;
	    }
	    
	    .el-carousel__item:nth-child(2n+1) {
	      background-color: #d3dce6;
	    }
		
	  .div_two{
		  width: 100%;
		  height: 350px;
		  position: absolute;
		  top: 70%;
		  background-color:whitesmoke;
	  }
	  
	  .div_third{
		  width: 100%;
		  height: 240px;
		  position: absolute;
		  top:710px;
		  background-color:whitesmoke;
	  }
	  .div_four{
		  width: 100%;
		  height: 300px;
		  position: absolute;
		  top:1020px;
		  background-color:white;
	  }
	  
	  .el-row {
	      margin-bottom: 20px;
	      &:last-child {
	        margin-bottom: 0;
	      }
	    }
	    .el-col {
	      border-radius: 4px;
	    }
	    .bg-purple-dark {
	      background: #99a9bf;
	    }
	    .bg-purple {
	      background: #d3dce6;
		  height: 350px;
	    }
	    .bg-purple-light {
	      background: #e5e9f2;
	    }
	    .grid-content {
	      border-radius: 4px;
	      min-height: 36px;
	    }
	    .row-bg {
	      padding: 10px 0;
	      background-color: #f9fafc;
	    }
		
		
		
		.surface_link{
			margin-left: 10%;
		}
		
		.surface_link p{
			line-height: 25px;
		}
		
		.one_row{
	         width: 100%;
			 height:100%;
			 background-image: url(../assets/img/login-bg.jpg);
			 
		}
		
		.one_row_title{
			width: 100%;
			height: 100%;
			
			border-radius: 5px;
			/* background: rgba(255, 255, 255, 0.5); */
			/* overflow: hidden; */
		}
		
		
		
		
		.one_row_title:hover
		{
		 background: rgba(255, 255, 255, 0.5);	
		}
		
		.one_row_line{
			  position: absolute;
			  width:23.4%;
			  height: 1px;
			  margin-top: 4.6%;
			 /* border-top: solid #ACC0D8 1px; */
			/*  margin: -190px 0 0 -175px; */
			  border-radius: 5px;
			  background: rgba(218, 218, 218, 0.9);
		}
		
		.one_row_second{
			width: 100%;
			height:100%;
			background-image: url(../assets/img/high-level-1.jpeg);
		}
		
		.one_row_third{
			width: 100%;
			height:100%;
			background-image: url(../assets/img/high-2.jpeg);
		}
		
		
		
		.one_row-four{
		     width: 100%;
			 height:100%;
			 background-image: url(../assets/img/high-t.jpeg);
		}
		
</style>
