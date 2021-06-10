<template>
	 
	   <div class="back_one">
		   <div id="logo_one">
			   <a href="/"></a>
		   </div>
		 
		    <div class="header-tools">
				
				<a class="login_a_href" href="#/login">登录</a>&nbsp;&nbsp;
			<!-- 	<a class="login_a_two" href="">hello </a> -->
			 
				<el-row class="block-col-2">
					 <el-col :span="12">
					    <!-- <span class="demonstration">hover 激活</span> -->
					     <el-dropdown>
					       <span class="el-dropdown-link">
					         更多选择<i class="el-icon-arrow-down el-icon--right"></i>
					       </span>
					       <el-dropdown-menu slot="dropdown">
					         <el-dropdown-item icon="el-icon-plus"><a href="#/home">我的后台</a></el-dropdown-item>
					         <el-dropdown-item icon="el-icon-circle-plus"><a href="#/register">注册</a></el-dropdown-item>
					         <el-dropdown-item icon="el-icon-circle-plus-outline"><a href="#/borrow">借阅</a></el-dropdown-item>
					         <el-dropdown-item icon="el-icon-check"><a href="/">联系管理员</a></el-dropdown-item>
					         <el-dropdown-item icon="el-icon-circle-check"><a href="http://localhost:8888/#/login">管理员登录</a></el-dropdown-item>
					       </el-dropdown-menu>
					     </el-dropdown>
					   </el-col>
				</el-row>
				
				
			</div>
			
		   <el-input  class="inputToSearch" v-model="search"  placeholder="查询"></el-input>
		   <el-button class="btnToSearch"  @click="gotoHigh()"  type="primary">搜索</el-button>
            
			<a class="high_level_search" href="#/high_search">高级搜索</a>
			<!-- <a class="high_level_search" href="#/high_search">留言</a> -->
		  <!-- <div class="header-title"><a href="http://www.baidu.com">高校档案</a></div> -->
	   </div>
	   
	    
	     
</template>

<script>
	
	 export default {
	     data() {
	       return {
	         search:'',
			 
	       };
	     },
	     methods: {
		  gotoHigh(){
			   this.$router.push("/high_search");
		  },
			 
	       common_login(){
			   //alert("hello")
		   },
		   
	     }
	   }
</script>

<style>
	 .inputToSearch{
		 position:absolute;
		 top: 8.93%;
		 width: 310.1px;
		 margin-left: 63.8%;
	 }
    .inputToSearch .el-input__inner{
	  background-color: rgba(255, 255, 255, 0.4);
	  border-radius: 2px;
	  /* border: 1px  solid ; */
	  border: 1px  solid #82848A;
	  color: black;
	  font-size: 15px;
	  height: 29.6px;
   }
   
   .btnToSearch{
	   position:absolute;
	   top: 8.9%;
	   border-radius: 1px;
	   width: 65px;
	   height:30px;
	   margin-left: 88%;
	   background-color:#1e5799;
	   color: white;
   }
   
   .header-tools{
	   height:30px ;
	   width: 150px;
	   /* background-color:#BFCBD9; */
	   position: absolute;
	   top:4%;
	   left: 75%;
   }
   
   .login_a_href{
	   font-family: '楷体';
	   font-size: 16px;
	   color:#409EFF;
   }
 
   
   .login_a_href:hover{
	 /*  background-color:yellow; */
	   text-decoration:underline;
	   font-size: 18px;
   }
   
   /* 下拉菜单的操作 */
    .el-dropdown-link {
       cursor: pointer;
       color: #409EFF;
	   font-family: '楷体';
	   font-size:16px;
     }
     .el-icon-arrow-down {
       font-size: 12px;
     }
     .demonstration {
       display: block;
       color: #8492a6;
       font-size: 14px;
       margin-bottom: 20px;
     }
   
   .block-col-2{
		position: absolute;
		top: 1%;
		margin-left: 26%;
		width: 179px;
	}
   
    .el-dropdown-link:hover{
			 /*  background-color:yellow; */
			  text-decoration:underline;
			  font-size: 18px;
	}
   
	.header-title a{
		position: absolute;
		top: 9%;
		margin-left: 15%;
		font-size:24px;
		font-family: '楷体';
		color:#a8ad86;
	}
   
   #logo_one a{
	       margin-top: 1%;
		   margin-left: 3%;
	       display: block;
	       background: url(../assets/img/MY-logo.png) no-repeat;
	       background-size: 100%;
	       width: 33%;
	       text-indent: -9000px;
	       height: 0;
	       padding-top: 13.1124%;
   }
   
   
   .high_level_search{
	   position: absolute;
	   top: 4%;
	   left: 69%;
	   color:#409EFF;
	   font-family: '楷体';
	   font-size: 16px;
   }
   
   .high_level_search:hover{
	   text-decoration:underline;
	   font-size: 18px;
   }
</style>
