<template>
	 
	  <div id="login_head_to_back">
	      <a href="/"></a>
	   </div>
	   
	  <div class="logint-bottom-operation">
	  			  <div class="surface_link">    
	  			       <h3>外部链接</h3> 
	  				   <p>  <a style="color:#409EFF;font-size: 4px;" href="https://www.saac.gov.cn/daj/index.shtml">中华人民共和国国家档案局</a> </p>
	  			  </div>
	  			  
	  </div>
	   
	    
	     
</template>

<script>
	
	 export default {
	     data() {
	       return {
	         
	       };
	     },
	     methods: {
	       common_login(){
			   alert("hello")
		   },
		   
	     }
	   }
</script>

<style>
	
	#login_head_to_back{
		 height: 40px;
	}
	
	
	#login_head_to_back a{
	
			       margin-top:1%;
				   margin-left: 3%;
			       display: block;
			       background: url(../assets/img/MY-logo.png) no-repeat;
			       background-size: 100%;
			       width: 26%;
			       text-indent: -9000px;
			       height: 0;
			       padding-top: 13.1124%;
		
	}
	
	
	.logint-bottom-operation{
		width: 100%;
		height: 200px;
		/* background-color: ghostwhite; */
		position: absolute;
		top: 680px;
	}
	
	.surface_link{
		margin-left: 10%;
	}
	
	.surface_link p{
		line-height: 25px;
	}
	
</style>
